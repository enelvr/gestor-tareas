<template>
</template>

<script>/*
export default {
  data() {
    return {
      show: true,
    }
  },
  watch: {
    '$page.props.flash': {
      handler() {
        this.show = true;
        this. executeAlert();
      },
      deep: true,
    },
  },

  created() {
    this.executeAlert();
  },

  methods: {
    executeAlert() {
      if(this.$page.props.flash.success && this.show) {
        this.$swal.fire({
           title: this.$page.props.flash.success,
           icon: 'success',
           timer: 6000,
          timerProgressBar: true,
        });
      }

      if(this.$page.props.flash.info && this.show) {
        this.$swal.fire({
           title: this.$page.props.flash.info,
           icon: 'info',
           timer: 6000,
          timerProgressBar: true,
        });
      }

      if(this.$page.props.flash.error && this.show) {
        let list = '';
        let error = '';
        for(error in this.$page.props.errors) {
          list += `<li>${ this.$page.props.errors[error] }</li>`
        }
        this.$swal.fire({
          title: this.$page.props.flash.error,
          html:`<p class="text-sm"><ul class='list-disc pl-6'>${list}</ul></p>`,
          icon: 'error',
          timer: 6000,
          timerProgressBar: true,
        });
      }
    }
  }
}*/
</script>