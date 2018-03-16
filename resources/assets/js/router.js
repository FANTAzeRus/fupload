import Home from "./components/Home";
import UploadFile from "./components/UploadFile";
import BrowseFiles from "./components/BrowseFiles";
import Carousel from "./components/Carousel";
import Register from "./components/Register";
import Login from "./components/Login";

import VueRouter from "vue-router";

const routes = [
    { path: "/", component: Home },
    { path: "/upload_file", component: UploadFile },
    { path: "/browse_files", component: BrowseFiles },
    { path: "/carousel", component: Carousel },
    { path: "/register", component: Register },
    { path: "/login", component: Login }
];

export default new VueRouter({
    routes,

    mode: "history"
});
