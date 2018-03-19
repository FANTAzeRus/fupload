require("./bootstrap");

import App from "./components/App";
import VueRouter from "vue-router";
import router from "./router";
window.router = router;

const app = new Vue({
    el: "#app",

    created() {
        this.$store.dispatch("loadImages");
    },

    store,

    router,

    render: h => h(App)
});
