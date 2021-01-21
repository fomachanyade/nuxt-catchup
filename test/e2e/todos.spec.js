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

  test('create new todos', async () => {
     await page.waitFor('.todoitem');
     const inputElement = await page.$('.todoitem')
    // await page.type('#todo-input', 'test')
    // const inputText = await page.evaluate(
    //   (elm) => elm.textContent,
    //   inputElement
    // )
    // console.log(inputText)
    // await expect(inputText).toContain('test')
    const spanText = await page.evaluate(
        (elm) => elm.textContent,
        inputElement
      )
      expect(spanText).toBe('test')
    // await (await page.$( 'input[title="todo"]' )).press( "Enter" );
    // const ele = page.$('span');
    // const text = await page.evaluate(elm => elm.textContent, ele);
    // await expect(text).toContain('test');
  })
})
