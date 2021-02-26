<template>
  <client-only>
    <div>
      <h1>Vimeo API</h1>
      <div>
        <h2>get content from vimeo</h2>
        <p>url: https://vimeo.com/517001529/3c65724142</p>
        <template v-if="videoHtml">
          <div v-html="videoHtml"></div>
        </template>
        <button v-on:click="showPlayer">showPlayer</button>
        <div id="myVideo" style="width: 800px; height: 800px"></div>
      </div>
      <div>
        <h2>upload</h2>
        <button v-on:click="uploadVideo">upload video</button>
        <pre>{{ uploadResult }}</pre>
      </div>
      <NuxtLink to="/"> Home page </NuxtLink>
    </div>
  </client-only>
</template>
<script src="https://player.vimeo.com/api/player.js"></script>
<script>
import Player from '@vimeo/player'
let Vimeos = require('vimeo').Vimeo

let client = new Vimeos(
  '961b222cac5d10f12d83e003b342df78bd35ef60',
  'KeF0FjKgui7eO9rIxgKnb7EnUOavO9FGrV9dP1uFUxHL12N/ywI0Itqm1AawklZ6mEGRp+vhc8ieW0cdY3nsTczglhgApVl5ErwNIi96j77Ig4t09d9Cw3OlKYf04L7L',
  'a827242a9e5e656e8df4a1e3d67f9530'
)
export default {
  data: function () {
    return { videoHtml: '', uploadResult: '', videoId: '' }
  },
  asyncData() {
    client = new Vimeos(
      '961b222cac5d10f12d83e003b342df78bd35ef60',
      'KeF0FjKgui7eO9rIxgKnb7EnUOavO9FGrV9dP1uFUxHL12N/ywI0Itqm1AawklZ6mEGRp+vhc8ieW0cdY3nsTczglhgApVl5ErwNIi96j77Ig4t09d9Cw3OlKYf04L7L',
      'a827242a9e5e656e8df4a1e3d67f9530'
    )

    client.request(
      {
        method: 'GET',
        path: '/me/videos',
      },
      function (error, body, status_code, headers) {
        if (error) {
          console.log(error)
        }

        console.log(body.data.length)
        console.log(body.data.filter((b) => b.uri === 'videos/517001529'))
      }
    )

    return {
      rendering: process.server ? 'server' : 'client',
    }
  },
  async fetch() {
    const contentUrl = 'https://vimeo.com/517001529/3c65724142'
    const requestUrl = `https://vimeo.com/api/oembed.json?url=${contentUrl}&background=true`
    const response = await this.$axios.$get(requestUrl)

    this.videoHtml = response.html
    this.videoId = response.video_id
  },
  methods: {
    uploadVideo: function (path) {
      const self = this
      const uploadOption = {
        name: 'test',
        privacy: {
          embed: 'whitelist',
          view: 'unlisted',
        },
      }
      path = require('../assets/video/test.mp4')
      client.upload(
        path,
        uploadOption,
        function (uri) {
          console.log('File upload completed. Your Vimeo URI is:', uri)
          self.uploadResult = uri
        },
        function (bytesUploaded, bytesTotal) {
          var percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2)
          console.log(bytesUploaded, bytesTotal, percentage + '%')
          self.uploadResult = `${percentage}% done...`
        },
        function (error) {
          console.log('Failed because: ' + error)
          self.uploadResult = error
        }
      )
    },
    showPlayer: function () {
      const options = {
        id: this.videoId,
        width: 800,
        autoplay: true,
        background: true,
      }
      const videoPlayer = new Player('myVideo', options)
      videoPlayer.on('play', function () {
        console.log('Played the video')
      })
    },
  },
}
</script>
