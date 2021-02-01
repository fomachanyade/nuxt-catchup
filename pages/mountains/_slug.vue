<template>
  <article>
    <h1>{{ mountain.title }}</h1>
    <section>
      <img :src="mountain.image" :alt="mountain.title" />
      <p>{{ mountain.description }}</p>
    </section>
    <button @click="goBack">Back</button>
  </article>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $axios, params }) {
    const mountain = await $axios.$get(`/mountains/${params.slug}`)
    return { mountain }
  },
  methods: {
    goBack() {
      return this.$router.go(-1)
    },
  },
})
</script>
<style scoped>
article {
  max-width: 600px;
  margin: 0 auto;
}
img {
  height: 200px;
}
p {
  text-align: left;
}
</style>
