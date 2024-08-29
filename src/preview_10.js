import { createApp } from 'vue';
import Login from "@/components/login.vue";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faBars);
const app = createApp(Login);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#c');


