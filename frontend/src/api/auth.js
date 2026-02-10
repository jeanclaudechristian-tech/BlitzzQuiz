import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '',
  headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
})

export async function login(username, password) {
  const { data } = await api.post('/api/login', { username, password })
  return data
}

export async function register(email, username, password, password_confirmation, role) {
  const { data } = await api.post('/api/register', {
    email,
    username,
    password,
    password_confirmation,
    role,
  })
  return data
}
