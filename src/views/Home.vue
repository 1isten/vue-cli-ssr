<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import titleMixin from '@/mixins/title-mixin.js';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  mixins: [titleMixin],
  title() {
    return 'Home';
  },
  components: {
    HelloWorld,
  },
};
</script>
