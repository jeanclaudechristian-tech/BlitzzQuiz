<template>
  <div class="bouton-deconnexion" @click="goToConnexion">
    <div class="button-background"></div>
    <div class="button-text">
      <p>Déconnexion</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoutonDeconnexion',
  methods: {
    goToConnexion() {
      this.$router.push('/connexion')
    }
  }
}
</script>

<style scoped>
@import './BoutonDeconnexion.css';
</style>
