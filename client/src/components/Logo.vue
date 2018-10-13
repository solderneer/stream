<template>
    <span class="logo" v-bind:class="{ xs: isXs, sm: isSm, md: isMd, lg: isLg }">stream.</span>
</template>

<script>
export default {
  name: 'Logo',
  props: {
      size: String,
  },
  computed: {
      isXs: function () { return (this.size === 'xs') ? true : false; },
      isSm: function () { return (this.size === 'sm') ? true : false; },
      isMd: function () { return (this.size === 'md') ? true : false; },
      isLg: function () { return (this.size === 'lg') ? true : false; },
  }

};
</script>

<style scoped>
.logo {
  font-family: "Pacifico", cursive;
  color: white;
}

.xs {
    font-size: 20px;
}

.sm {
    font-size: 50px;
}

.md {
    font-size: 70px;
}

.lg {
    font-size: 100px;
}
</style>
