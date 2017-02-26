<template>
  <div class="clock">
    {{ formattedTime }}
  </div>
</template>

<script>
  import 'intl';
  import 'intl/locale-data/jsonp/en';

  export default {
    data() {
      return {
        date: new Date(),
        mockStore: {
          state: {
            locale: 'en-US',
            dateTimeFormatOptions: {
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
              millisecond: 'numeric',
            },
          },
        },
      };
    },
    computed: {
      formattedTime() {
        return new Intl.DateTimeFormat(
          this.mockStore.state.locale,
          this.mockStore.state.dateTimeFormatOptions,
        ).format(this.date);
      },
    },
    methods: {
      getClockTime() {
        this.date = new Date();
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
