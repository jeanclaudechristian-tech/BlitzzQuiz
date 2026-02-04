<template>
  <div class="desktop-inscription-page-2">
    <div class="background-video">
      <video autoplay loop playsinline muted>
         <source src="/videos/LandingPage.mp4" type="video/mp4" />

      </video>
    </div>
    <div class="espace-inscription">
      <div class="form-content">
        <BlackBlitzzQuiz class="logo" />
        <div class="titre">
          <p>Création</p>
          <p> </p>
          <p>du</p>
          <p> </p>
          <p>compte</p>
        </div>
        <InputCourriel v-model="formData.email" placeholder="Courriel (personnel ou scolaire)" />
        <InputNomUtilisateur v-model="formData.username" />
        <InputMotDePasse v-model="formData.password" placeholder="Mot de passe" />
        <InputConfirmerMotDePasse v-model="formData.confirmPassword" />
        <BoutonRetour class="bouton-retour-position" @click="$router.back()" />
        <BoutonConfirmer class="bouton-confirmer-position" @click="goToValidation" />
      </div>
    </div>
  </div>
</template>

<script>
import BlackBlitzzQuiz from '../components/BlackBlitzzQuiz.vue'
import InputCourriel from '../components/InputCourriel.vue'
import InputNomUtilisateur from '../components/InputNomUtilisateur.vue'
import InputMotDePasse from '../components/InputMotDePasse.vue'
import InputConfirmerMotDePasse from '../components/InputConfirmerMotDePasse.vue'
import BoutonRetour from '../components/BoutonRetour.vue'
import BoutonConfirmer from '../components/BoutonConfirmer.vue'

export default {
  name: 'DesktopInscriptionPage2',
  components: {
    BlackBlitzzQuiz,
    InputCourriel,
    InputNomUtilisateur,
    InputMotDePasse,
    InputConfirmerMotDePasse,
    BoutonRetour,
    BoutonConfirmer
  },
  data() {
    return {
      formData: {
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    goToValidation() {
      this.$router.push('/validation')
    }
  }
}
</script>

<style scoped>
@import './DesktopInscriptionPage2.css';
</style>
