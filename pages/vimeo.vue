<template>
  <div>
    <h1>Vimeo API</h1>
    <div>
      <h2>get content from vimeo</h2>
      <p>url: https://vimeo.com/65720665</p>
      <template v-if="videoHtml">
        <div v-html="videoHtml"></div>
      </template>
    </div>
    <NuxtLink to="/"> Home page </NuxtLink>
  </div>
</template>
<script>
export default {
  data: function () {
    return { videoHtml: '' }
  },
  asyncData() {
    let Vimeo = require('vimeo').Vimeo
    let client = new Vimeo(
      '961b222cac5d10f12d83e003b342df78bd35ef60',
      'KeF0FjKgui7eO9rIxgKnb7EnUOavO9FGrV9dP1uFUxHL12N/ywI0Itqm1AawklZ6mEGRp+vhc8ieW0cdY3nsTczglhgApVl5ErwNIi96j77Ig4t09d9Cw3OlKYf04L7L',
      '648a6ef5e49d167d2bf730be50ec1943'
    )

    client.request(
      {
        method: 'GET',
        path: '/tutorial',
      },
      function (error, body, status_code, headers) {
        if (error) {
          console.log(error)
        }

        console.log(body)
      }
    )

    return {
      rendering: process.server ? 'server' : 'client',
    }
  },
  async fetch() {
    const contentUrl = 'https://vimeo.com/65720665'
    const requestUrl = `https://vimeo.com/api/oembed.json?url=${contentUrl}`
    const response = await this.$axios.$get(requestUrl)
    console.log(response)
    this.videoHtml = response.html
  },
  methods: {
    uploadVideo: function (path) {},
  },
}
</script>
