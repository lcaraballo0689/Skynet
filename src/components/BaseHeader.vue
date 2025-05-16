<template>
  <div class="header">
    <span @click="$emit('back')"><slot name="back">←</slot></span>
    <div class="title">{{ title }}</div>
    <span @click="$emit('toggle')"><slot name="toggle">⌄</slot></span>
  </div>
</template>
<script>
export default {
  name: 'BaseHeader',
  props: { title: String }
}
</script>
