import { createApp } from 'vue';
import router from './router.js';
import store from './store/index';
import App from './App.vue';
import BaseCard from './component/UI/BaseCard.vue';
import BaseBadge from './component/UI/BaseBadge.vue';
import BaseButton from './component/UI/BaseButton';
const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-badge', BaseBadge);
app.component('base-button', BaseButton);
app.mount('#app');
