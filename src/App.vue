<template>
  <div id="app">
    <button @click="handleClick">click</button>
    <mt-popup
      v-model="popupVisible"
      pop-transition="popup-fade"
      position="bottom">
      <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    </mt-popup>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      popupVisible: false,
      slots: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    };
  },
  methods: {
    handleClick() {
      this.popupVisible = true;
    },
    onValuesChange(picker, checked) {
      if (!this.popupVisible) return;
      console.log(picker, checked);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
