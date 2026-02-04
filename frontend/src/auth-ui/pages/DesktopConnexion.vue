<template>
  <div class="desktop-connexion">
    <div class="background-video">
      <video autoplay loop playsinline muted>
      <source src="/videos/LandingPage.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="espace-connexion">
      <div class="form-content">
        <BlackBlitzzQuiz class="logo" />
        <div class="titre">
          <p>Se connecter</p>
          <p> </p>
          <p>à mon</p>
          <p> </p>
          <p>compte</p>
        </div>
        <InputNomUtilisateur v-model="formData.username" />
        <InputMotDePasse v-model="formData.password" placeholder="Mot de passe" />
        <BoutonMdpOublie />
        <BoutonConnexion @click="handleConnexion" />
        <Diviseur />
        <BoutonCreerUnCompte />
        <BoutonGoogle />
      </div>
    </div>
  </div>
</template>

<script>
import BlackBlitzzQuiz from '../components/BlackBlitzzQuiz.vue'
import InputNomUtilisateur from '../components/InputNomUtilisateur.vue'
import InputMotDePasse from '../components/InputMotDePasse.vue'
import BoutonMdpOublie from '../components/BoutonMdpOublie.vue'
import BoutonConnexion from '../components/BoutonConnexion.vue'
import Diviseur from '../components/Diviseur.vue'
import BoutonCreerUnCompte from '../components/BoutonCreerUnCompte.vue'
import BoutonGoogle from '../components/BoutonGoogle.vue'

export default {
  name: 'DesktopConnexion',
  components: {
    BlackBlitzzQuiz,
    InputNomUtilisateur,
    InputMotDePasse,
    BoutonMdpOublie,
    BoutonConnexion,
    Diviseur,
    BoutonCreerUnCompte,
    BoutonGoogle
  },
  data() {
    return {
      formData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handleConnexion() {
      console.log('Connexion:', this.formData)
      // Add your login logic here
    }
  }
}
</script>

<style scoped>
@import './DesktopConnexion.css';
</style>
