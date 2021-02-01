describe('Todos', () => {
  let page

  beforeAll(async () => {
    jest.setTimeout(50000)
    page = await browser.newPage()
    await page.goto('http://127.0.0.1:3000/todos')
  })

  afterAll(async () => {
    await page.close()
  })

  /**
   * todoを作って、チェックして、doneになっているを確認する
   */
  it('create new todos and make it done', async () => {
    const inputId = "[data-testId='todo-input']";
    const todoText = 'todo-text';
    const todoItemClass = "[data-testId='todo-item']";
    const checkboxId = "[data-testId='todo-checkbox']";
    const doneItemClass = '.done';

    // const elementHandle = await page.$('[data-form="personal"]');
    await page.type(inputId, todoText)
    await (await page.$(inputId)).press('Enter')
    await page.waitForSelector(todoItemClass)

    const spanElement = await page.$(todoItemClass)

    const spanText = await page.evaluate((elm) => elm.textContent, spanElement)
    expect(spanText).toBe(todoText)

    await page.click(checkboxId);
    const doneItemText = await page.$eval(doneItemClass, item => {
      return item.textContent;
    });
    expect(doneItemText).toBe(todoText)

  })
})
