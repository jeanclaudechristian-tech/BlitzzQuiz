import api from './Axios'

export const authService = {
  async login(email, password) {
    const response = await api.post('/login', { email, password })
    return response.data
  },

  async register(email, nickname, password, password_confirmation) {
    const response = await api.post('/register', {
      email,
      nickname,
      password,
      password_confirmation
    })
    return response.data
  },

  async logout() {
    const response = await api.post('/logout')
    return response.data
  },

  async getCurrentUser() {
    const response = await api.get('/user')
    return response.data
  }
}
