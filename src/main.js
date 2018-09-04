import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui';
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.use(Vant);

import 'mint-ui/lib/style.css';

Vue.use(Mint);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
