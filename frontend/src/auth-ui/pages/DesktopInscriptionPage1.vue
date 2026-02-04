<template>
  <div class="desktop-inscription-page-1">
    <div class="background-video">
      <video autoplay loop playsinline muted>
        <source src="/videos/LandingPage.mp4" type="video/mp4" />

      </video>
    </div>
    <div class="espace-inscription">
      <div class="form-content">
        <BlackBlitzzQuiz class="logo" />
        <div class="titre">
          <span>Quel est votre</span><br>
          <span>niveau d'étude ?</span>
        </div>
        <DropdownNiveauEtude v-model="niveauEtude" />
        <BoutonSuivant @click="goToInscriptionDetails" />
        <BoutonRetour text="Page de connexion" @click="goToConnexion" />
      </div>
    </div>
  </div>
</template>

<script>
import BlackBlitzzQuiz from '../components/BlackBlitzzQuiz.vue'
import DropdownNiveauEtude from '../components/DropdownNiveauEtude.vue'
import BoutonSuivant from '../components/BoutonSuivant.vue'
import BoutonRetour from '../components/BoutonRetour.vue'

export default {
  name: 'DesktopInscriptionPage1',
  components: {
    BlackBlitzzQuiz,
    DropdownNiveauEtude,
    BoutonSuivant,
    BoutonRetour
  },
  data() {
    return {
      niveauEtude: ''
    }
  },
  methods: {
    goToInscriptionDetails() {
      this.$router.push('/inscription/details')
    },
    goToConnexion() {
      this.$router.push('/connexion')
    }
  }
}
</script>

<style scoped>
@import './DesktopInscriptionPage1.css';
</style>
