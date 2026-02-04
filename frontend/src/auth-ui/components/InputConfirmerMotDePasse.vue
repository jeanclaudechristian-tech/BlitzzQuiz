<template>
  <div class="input-confirmer-mot-de-passe">
    <div class="icon-left">
      <img src="../../assets/checkIcon.svg" alt="Check icon" />
    </div>
    <input 
      :type="showPassword ? 'text' : 'password'"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      class="input-field"
    />
    <div class="icon-right" @click="togglePassword">
      <img :src="showPassword ? eyeIcon : eyeOffIcon" alt="Toggle password visibility" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputConfirmerMotDePasse',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Confirmer mot de passe'
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      showPassword: false,
      eyeIcon: new URL('../../assets/eyeIcon.svg', import.meta.url).href,
      eyeOffIcon: new URL('../../assets/eyeOffIcon.svg', import.meta.url).href
    }
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword
    }
  }
}
</script>

<style scoped>
@import './InputConfirmerMotDePasse.css';
</style>
