<template>
  <div class="hello">
    <h1>文章</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HiWorld',
  components: {},
  props: {
    
  },
  data() {
    return {
      content:'##123',
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  color: #42b983;
}
</style>
