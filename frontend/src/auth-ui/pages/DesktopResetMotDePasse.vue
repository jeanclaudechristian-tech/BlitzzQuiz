<template>
  <div class="desktop-reset-mot-de-passe">
    <div class="background-video">
      <video autoplay loop playsinline muted>
 <source src="/videos/LandingPage.mp4" type="video/mp4" />

      </video>
    </div>
    <div class="espace-reset-password">
      <div class="form-content">
        <BlackBlitzzQuiz class="logo" />
        <div class="titre">
          <p>Changer</p>
          <p> </p>
          <p>votre</p>
          <p> </p>
          <p>mot de passe</p>
        </div>
        <InputMotDePasse v-model="newPassword" placeholder="Nouveau mot de passe" />
        <InputConfirmerMotDePasse v-model="confirmPassword" />
        <BoutonConfirmer @click="goToSucces" />
      </div>
    </div>
  </div>
</template>

<script>
import BlackBlitzzQuiz from '../components/BlackBlitzzQuiz.vue'
import InputMotDePasse from '../components/InputMotDePasse.vue'
import InputConfirmerMotDePasse from '../components/InputConfirmerMotDePasse.vue'
import BoutonConfirmer from '../components/BoutonConfirmer.vue'

export default {
  name: 'DesktopResetMotDePasse',
  components: {
    BlackBlitzzQuiz,
    InputMotDePasse,
    InputConfirmerMotDePasse,
    BoutonConfirmer
  },
  data() {
    return {
      newPassword: '',
      confirmPassword: ''
    }
  },
  methods: {
    goToSucces() {
      this.$router.push('/succes')
    }
  }
}
</script>

<style scoped>
@import './DesktopResetMotDePasse.css';
</style>
