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

        <div class="question-role">
          <p>Êtes-vous un Étudiant</p>
          <p>ou un Enseignant ?</p>
        </div>

        <div class="role-buttons">
          <button
            type="button"
            class="role-card enseignant"
            @click="selectRole('TEACHER')"
          >
            <span class="role-label">Enseignant</span>
          </button>
          <button
            type="button"
            class="role-card etudiant"
            @click="selectRole('STUDENT')"
          >
            <span class="role-label">Étudiant</span>
          </button>
        </div>

        <transition name="fade-up">
          <div v-if="role === 'STUDENT'" class="niveau-block">
            <div class="titre">
              <span>Quel est votre</span><br />
              <span>niveau d'étude ?</span>
            </div>
            <DropdownNiveauEtude v-model="niveauEtude" />
            <BoutonSuivant @click="goToInscriptionDetails" />
          </div>
        </transition>

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
      niveauEtude: '',
      role: ''
    }
  },
  methods: {
    selectRole(role) {
      this.role = role
      if (role === 'TEACHER') {
        this.$router.push({ path: '/inscription/details', query: { role: 'TEACHER' } })
      }
    },
    goToInscriptionDetails() {
      // Étudiant : on passe le rôle dans la query pour la page de création de compte
      this.$router.push({ path: '/inscription/details', query: { role: 'STUDENT' } })
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
