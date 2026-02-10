<template>
  <div class="inscription-choix-role">
    <div class="panel-left">
      <div class="lightning-wrap">
        <svg class="lightning-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
    <div class="panel-right">
      <div class="form-content">
        <BlackBlitzzQuiz class="logo" />
        <h2 class="question">Êtes-vous un Étudiant ou un Enseignant ?</h2>
        <div class="buttons-row">
          <button
            type="button"
            class="role-btn enseignant"
            @click="choose('enseignant')"
          >
            <svg class="role-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
              <path d="M4 12h4l2 4 2-4h4"/>
            </svg>
            <span>Enseignant</span>
          </button>
          <button
            type="button"
            class="role-btn etudiant"
            @click="choose('etudiant')"
          >
            <svg class="role-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span>Étudiant</span>
          </button>
        </div>
        <BoutonRetour text="Retour" @click="$router.push('/connexion')" />
      </div>
    </div>
  </div>
</template>

<script>
import BlackBlitzzQuiz from '../components/BlackBlitzzQuiz.vue'
import BoutonRetour from '../components/BoutonRetour.vue'

export default {
  name: 'DesktopInscriptionChoixRole',
  components: { BlackBlitzzQuiz, BoutonRetour },
  methods: {
    choose(r) {
      if (r === 'etudiant') this.$router.push('/inscription/niveau')
      else this.$router.push({ path: '/inscription/details', query: { role: 'TEACHER' } })
    }
  }
}
</script>

<style scoped>
@import './DesktopInscriptionChoixRole.css';
</style>
