<template>
  <div class="clock">
    {{ now }}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        now: Date.now(),
      };
    },
    methods: {
      getClockTime() {
        this.now = Date.now();
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
