<template>
  <div class="input-courriel">
    <div class="icon-container">
      <img src="../../assets/envelopeIcon.svg" alt="Email icon" />
    </div>
    <input 
      type="email"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      class="input-field"
    />
  </div>
</template>

<script>
export default {
  name: 'InputCourriel',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Courriel (personnel ou scolaire)'
    }
  },
  emits: ['update:modelValue']
}
</script>

<style scoped>
@import './InputCourriel.css';
</style>
