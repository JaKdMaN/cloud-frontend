<template>
  <div class="button-group-with-space">
    <slot/>
  </div>
</template>
<style scoped lang="scss">
  .button-group-with-space {
    display: flex;
    column-gap: 20px;
  }
</style>
