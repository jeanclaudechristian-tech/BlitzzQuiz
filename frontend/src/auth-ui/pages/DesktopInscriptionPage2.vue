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
        <p v-if="error" class="error-msg">{{ error }}</p>
        <BoutonRetour class="bouton-retour-position" @click="$router.back()" />
        <BoutonConfirmer class="bouton-confirmer-position" @click="handleRegister" />
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
      },
      error: ''
    }
  },
  computed: {
    role() {
      return this.$route.query.role === 'TEACHER' ? 'TEACHER' : 'STUDENT'
    }
  },
  methods: {
    async handleRegister() {
      this.error = ''
      const { email, username, password, confirmPassword } = this.formData
      if (!email || !username || !password || !confirmPassword) {
        this.error = 'Veuillez remplir tous les champs.'
        return
      }
      if (password !== confirmPassword) {
        this.error = 'Les mots de passe ne correspondent pas.'
        return
      }
      try {
        const { register } = await import('../../api/auth.js')
        await register(email, username, password, confirmPassword, this.role)
        this.$router.push('/validation')
      } catch (err) {
        this.error = err.response?.data?.message ?? err.response?.data?.errors?.email?.[0] ?? err.response?.data?.errors?.username?.[0] ?? 'Erreur lors de l\'inscription.'
      }
    }
  }
}
</script>

<style scoped>
@import './DesktopInscriptionPage2.css';
</style>
