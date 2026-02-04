<template>
  <div class="bouton-creer-un-compte" @click="goToInscription">
    <div class="button-background"></div>
    <div class="button-background-overlay"></div>
    <div class="button-text">
      <p>Créer un compte</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoutonCreerUnCompte',
  methods: {
    goToInscription() {
      this.$router.push('/inscription')
    }
  }
}
</script>

<style scoped>
@import './BoutonCreerUnCompte.css';
</style>
