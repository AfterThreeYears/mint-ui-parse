<template>
  <div
    :class="classNames"
    v-finger:pinch="pinch"
    v-finger:touch-start="pinchStart"
    v-finger:press-move="pressMove.bind(this, 12)"
    :style="style"
  >
    <slot />
  </div>
</template>

<script>
import Vue from 'vue'
import AlloyFinger from ' ';

require('alloyfinger/vue/alloy_finger.vue.js');

Vue.use(window.AlloyFingerVue, { AlloyFinger });

  export default {
    name: 'ui-drag',
    props: {
      classNames: {
        type: Object,
        default: () => ({}),
      },
    },
    data () {
      return {
        scaleX: 1,
        lastScaleX: 1,
        x: 0,
        y: 0,
      }
    },
    methods: {
      pressMove: function(num, evt) {
        evt.preventDefault();
        console.log('evt.deltaX', evt.deltaX);
        console.log('evt.deltaY', evt.deltaY);
        this.x += evt.deltaX;
        this.y += evt.deltaY;
        console.log(`this.x is ${this.x}, this.y us ${this.y}`);
      },
      pinchStart: function () {
        console.error('pinchStart', this.scaleX);
        this.lastScaleX = this.scaleX;
      },
      pinch: function(evt) {
        evt.preventDefault();
        console.log('this.lastScaleX', this.lastScaleX, 'evt.zoom', evt.zoom);
        this.scaleX = this.lastScaleX * evt.zoom;
        // this.lastScaleX = this.scaleX;
        console.log('this.scaleX', this.scaleX);
      },
    },
    computed: {
      style() {
        return {
          transform: `translate3d(${this.x}px, ${this.y}px, 0) scale(${this.scaleX})`
        };
      },
    }
  }
</script>

