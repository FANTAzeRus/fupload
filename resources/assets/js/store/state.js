export default {
    info: {
        timeout: 3000,
        show: false,
        text: null
    },

    imagesList: [],

    nav: [
        { path: "/", title: "Home", auth: "both" },
        { path: "/upload_file", title: "File upload", auth: true },
        { path: "/browse_files", title: "Browse files", auth: true },
        { path: "/carousel", title: "Carousel", auth: true }
    ],

    authNav: [
        { path: "/register", title: "Register", auth: false },
        { path: "/login", title: "Login", auth: false }
    ],

    profileNav: [
        { path: "/profile", title: "Profile", auth: true },
        { path: "/logout", title: "Logout", auth: true }
    ],

    Auth: {
        login: false,
        user_id: null,
        api_token: null,
        name: null,
        photo: null
    }
};
