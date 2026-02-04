<template>
  <div class="desktop-courriel">
    <div class="background-video">
      <video autoplay loop playsinline muted>
       <source src="/videos/LandingPage.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="espace-reset-courriel">
      <div class="form-content">
        <BlackBlitzzQuiz class="logo" />
        <div class="titre">
          <p>Quel est</p>
          <p> </p>
          <p>votre</p>
          <p> </p>
          <p>courriel ?</p>
        </div>
        <InputCourriel v-model="email" placeholder="Courriel" />
        <BoutonSuivant @click="goToResetPassword" />
      </div>
    </div>
  </div>
</template>

<script>
import BlackBlitzzQuiz from '../components/BlackBlitzzQuiz.vue'
import InputCourriel from '../components/InputCourriel.vue'
import BoutonSuivant from '../components/BoutonSuivant.vue'

export default {
  name: 'DesktopCourriel',
  components: {
    BlackBlitzzQuiz,
    InputCourriel,
    BoutonSuivant
  },
  data() {
    return {
      email: ''
    }
  },
  methods: {
    goToResetPassword() {
      this.$router.push('/reset-mot-de-passe')
    }
  }
}
</script>

<style scoped>
@import './DesktopCourriel.css';
</style>
