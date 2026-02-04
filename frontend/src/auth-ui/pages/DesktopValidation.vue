<template>
  <div class="desktop-validation">
    <div class="background-video">
      <video autoplay loop playsinline muted>
<source src="/videos/LandingPage.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="espace-validation">
      <div class="content">
        <BlackBlitzzQuiz class="logo" />
        <div class="titre">
          <p>Valider l'oppération</p>
          <p>à partir de</p>
          <p>votre courriel</p>
        </div>
        <div class="envelope-icon">
          <svg viewBox="0 0 143 143" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M119.167 35.75H23.8333C19.875 35.75 16.6875 39.0208 16.6875 42.9792L16.6667 100.021C16.6667 103.979 19.875 107.25 23.8333 107.25H119.167C123.125 107.25 126.333 103.979 126.333 100.021V42.9792C126.333 39.0208 123.125 35.75 119.167 35.75ZM119.167 50.2083L71.5 75.0625L23.8333 50.2083V42.9792L71.5 67.8333L119.167 42.9792V50.2083Z" fill="#24201D"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlackBlitzzQuiz from '../components/BlackBlitzzQuiz.vue'

export default {
  name: 'DesktopValidation',
  components: {
    BlackBlitzzQuiz
  }
}
</script>

<style scoped>
@import './DesktopValidation.css';
</style>
