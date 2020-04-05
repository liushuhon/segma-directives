<template>
  <div class="text-align-center">
    <input type="text" @input="actionInputIfTrue" />
    <button @click="actionClick">Click</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'actions',
  methods: {
    ...mapActions(['actionClick']),
     actionInputIfTrue(event) {
      const inputValue = event.target.value
      console.log(111)
      if (inputValue === 'input') {
        this.$store.dispatch('actionInput', { inputValue })
      }
    },
  },
}
</script>
