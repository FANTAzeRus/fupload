import Home from "./components/Home";
import UploadFile from "./components/UploadFile";
import BrowseFiles from "./components/BrowseFiles";
import Carousel from "./components/Carousel";
import VueRouter from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/upload_file", component: UploadFile },
  { path: "/browse_files", component: BrowseFiles },
  { path: "/carousel", component: Carousel },
];

export default new VueRouter({
  routes,

  mode: "history",
});
