<template>
  <div class="clock">
    {{ time }}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        time: new Date(),
      };
    },
    methods: {
      getClockTime() {
        this.time = new Date();
      },
      tick() {
        this.getClockTime();
        requestAnimationFrame(this.tick);
      },
    },
    mounted() {
      requestAnimationFrame(this.tick);
    },
  };
</script>
