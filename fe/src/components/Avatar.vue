<template>
  <a
    :href="person.link"
    target="_blank"
  >
    <img
      :src="personalAvatar"
      class="round"
      :width="width"
    >
  </a>
</template>

<script>

export default {
  name: "Avatar",
  props: {
    person: {
      type: Object,
      default: () => {
        return {
          link: '',
          image: ''
        }
      }
    }, 
    size: Number
  },
  data() {
    return {
    }
  },
  computed: {
    personalAvatar() {
      return `img/people/${this.person.image}`
    },
    width(){
      return this.size || 50;
    }
  }
}
</script>

<style lang="css" scoped>
  .round{
    border-radius:100%;
  }
</style>
