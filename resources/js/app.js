/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 require("./bootstrap");

 window.Vue = require("vue").default;

// Vuex
import store from './store'

// Vue Router
import router from './router/index'

 /**
  * The following block of code may be used to automatically register your
  * Vue components. It will recursively scan this directory for the Vue
  * components and automatically register them with their "basename".
  *
  * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
  */

 // const files = require.context('./', true, /\.vue$/i)
 // files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

    // Guest Index
    Vue.component("guest-top-bar", require("./layouts/guest_top_bar.vue").default)
    Vue.component("guest-index", require("./pages/guest_index.vue").default)
    Vue.component("login", require("./auth/login.vue").default )

    // Auth User Home
    Vue.component("home", require("./pages/home.vue").default )


 /**
  * Next, we will create a fresh Vue application instance and attach it to
  * the page. Then, you may begin adding components to this application
  * or customize the JavaScript scaffolding to fit your unique needs.
  */

import Vuetify from 'vuetify';
import Vue from 'vue';
Vue.use(Vuetify);

import Admin from './layouts/admin.vue';

const app = new Vue({
    router,
    store,
    el: "#app",
    vuetify: new Vuetify(),
    components: { Admin },
});
