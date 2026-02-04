<template>
  <div class="input-nom-utilisateur">
    <div class="icon-container">
      <img src="../../assets/userIcon.svg" alt="User icon" />
    </div>
    <input 
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      class="input-field"
    />
  </div>
</template>

<script>
export default {
  name: 'InputNomUtilisateur',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: "Nom d'utilisateur"
    }
  },
  emits: ['update:modelValue']
}
</script>

<style scoped>
@import './InputNomUtilisateur.css';
</style>
