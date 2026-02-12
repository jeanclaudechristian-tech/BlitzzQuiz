import { defineStore } from 'pinia'

export const useRegistrationStore = defineStore('registration', {
  state: () => ({
    niveauEtude: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  }),

  actions: {
    setNiveauEtude(niveau) {
      this.niveauEtude = niveau
    },

    setCredentials(email, username, password, confirmPassword) {
      this.email = email
      this.username = username
      this.password = password
      this.confirmPassword = confirmPassword
    },

    reset() {
      this.niveauEtude = ''
      this.email = ''
      this.username = ''
      this.password = ''
      this.confirmPassword = ''
    }
  }
})
