export default {
    init() {
        store.commit("Login");
    },

    login(data) {
        localStorage.setItem("user_id", data.user_id);
        localStorage.setItem("api_token", data.api_token);
        localStorage.setItem("name", data.name);
    },

    logout() {
        localStorage.removeItem("user_id");
        localStorage.removeItem("api_token");
        localStorage.removeItem("name");
    }
};
