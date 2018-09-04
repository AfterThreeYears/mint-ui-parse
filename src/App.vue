<template>
  <div>
    {{currentDate}}
    <van-popup v-model="show">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        @confirm="confirm"
        @cancel="cancel"
      />
    </van-popup>
    <button @click="openPicker">openPicker</button>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        currentDate: new Date(),
        oldTime: new Date(),
        show: false,
      };
    },
    methods: {
      confirm() {
        this.show = false;
      },
      cancel() {
        this.currentDate = this.oldTime;
        this.show = false;
      },
      openPicker() {
        this.oldTime = this.currentDate;
        this.show = true;
      },
    }
  }
</script>

