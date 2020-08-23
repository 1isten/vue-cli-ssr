<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import titleMixin from '@/mixins/title-mixin.js';

export default {
  name: 'About',
  mixins: [titleMixin],
  title() {
    return 'About';
  },
};
</script>
