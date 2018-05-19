<template>
  <h1>
    {{ error.statusCode }}
  </h1>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: function() {
        return {}
      }
    }
  }
}
</script>
