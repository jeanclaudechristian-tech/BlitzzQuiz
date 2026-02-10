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
        <p v-if="error" class="error-msg">{{ error }}</p>
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
      },
      error: '',
      loading: false
    }
  },
  methods: {
    async handleConnexion() {
      this.error = ''
      if (!this.formData.username || !this.formData.password) {
        this.error = 'Veuillez remplir tous les champs.'
        return
      }
      this.loading = true
      try {
        const { login } = await import('../../api/auth.js')
        await login(this.formData.username, this.formData.password)
        this.$router.push('/succes')
      } catch (err) {
        this.error = err.response?.data?.message ?? err.response?.data?.errors?.username?.[0] ?? 'Identifiants incorrects.'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
@import './DesktopConnexion.css';
</style>
