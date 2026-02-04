<template>
  <div class="bouton-suivant" @click="handleClick">
    <div class="button-text">
      <p>Suivant</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoutonSuivant',
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
@import './BoutonSuivant.css';
</style>
