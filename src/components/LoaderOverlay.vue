<template>
  <div class="loader-overlay" :class="{ active }">
    <div class="spinner"></div>
  </div>
</template>
<script>
export default {
  name: 'LoaderOverlay',
  props: { active: Boolean }
}
</script>
