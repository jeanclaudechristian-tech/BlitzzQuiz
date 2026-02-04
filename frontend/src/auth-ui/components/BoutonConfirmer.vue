<template>
  <div class="bouton-confirmer" @click="handleClick">
    <div class="button-text">
      <p>Confirmer</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoutonConfirmer',
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
@import './BoutonConfirmer.css';
</style>
