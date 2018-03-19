export default {
    init() {
        store.commit("Login");
        if (store.state.Auth.api_token) {
            axios.defaults.headers.common["Authorization"] =
                "Bearer " + store.state.Auth.api_token;
        }
    },

    login(data) {
        localStorage.setItem("user_id", data.user_id);
        localStorage.setItem("api_token", data.api_token);
        localStorage.setItem("name", data.name);
        localStorage.setItem("photo", data.photo);

        this.init();
    },

    logout() {
        localStorage.removeItem("user_id");
        localStorage.removeItem("api_token");
        localStorage.removeItem("name");
        localStorage.removeItem("photo");

        this.init();
    },

    check() {
        if (!store.state.Auth.login) {
            router.push("/login");
        }
    }
};
