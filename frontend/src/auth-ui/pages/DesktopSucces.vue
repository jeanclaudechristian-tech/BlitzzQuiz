<template>
  <div class="desktop-succes">
    <div class="background-video">
      <video autoplay loop playsinline muted>
     <source src="/videos/LandingPage.mp4" type="video/mp4" />

      </video>
    </div>
    <div class="page-succes">
      <BlackBlitzzQuiz class="logo" />
      <BoutonDeconnexion class="bouton-deconnexion-position" />
      <p class="succes-text">SUCCÈS</p>
    </div>
  </div>
</template>

<script>
import BlackBlitzzQuiz from '../components/BlackBlitzzQuiz.vue'
import BoutonDeconnexion from '../components/BoutonDeconnexion.vue'

export default {
  name: 'DesktopSucces',
  components: {
    BlackBlitzzQuiz,
    BoutonDeconnexion
  }
}
</script>

<style scoped>
@import './DesktopSucces.css';
</style>
