<template>
  <div class="bouton-mdp-oublie" @click="goToResetCourriel">
    <div class="button-content">
      <div class="button-text">
        <p>Mot de passe oublié ?</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoutonMdpOublie',
  methods: {
    goToResetCourriel() {
      this.$router.push('/reset-courriel')
    }
  }
}
</script>

<style scoped>
@import './BoutonMdpOublie.css';
</style>
