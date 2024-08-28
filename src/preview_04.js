import { createApp } from 'vue';
import preorder from "@/views/preorder.vue";
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

const app = createApp(preorder);
app.mount('#c');
app.use(VCalendar, {})

