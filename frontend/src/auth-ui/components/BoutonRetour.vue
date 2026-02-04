<template>
  <div class="bouton-retour" @click="handleClick">
    <div class="button-text">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoutonRetour',
  props: {
    text: {
      type: String,
      default: 'Retour'
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
@import './BoutonRetour.css';
</style>
