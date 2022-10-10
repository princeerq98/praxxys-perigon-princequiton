import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

const firebaseConfig = {
  apiKey: "AIzaSyBcDjzLbOSQqJ_o9GRtlzSo-2j4BOWK3wg",
  authDomain: "perigon-app-cc113.firebaseapp.com",
  projectId: "perigon-app-cc113",
  storageBucket: "perigon-app-cc113.appspot.com",
  messagingSenderId: "1054603918458",
  appId: "1:1054603918458:web:044ea3c296bc6cfc50cfc3"
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

const app = createApp(App)
  .use(IonicVue)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});