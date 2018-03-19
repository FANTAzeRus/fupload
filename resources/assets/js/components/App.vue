<template>
    <v-app>
        <v-toolbar dark color="primary">
            <v-toolbar-title>FUpload</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
                flat
                v-for="item in nav"
                :to="item.path"
                :key="item.path"
                v-if="item.auth === 'both' || item.auth === auth.login"
            >{{ item.title }}</v-btn>

            <v-spacer></v-spacer>

            <v-btn
                flat
                v-for="item in authNav"
                :to="item.path"
                :key="item.path"
                v-if="item.auth === auth.login"
            >{{ item.title }}</v-btn>

            <v-avatar size="55" v-if="auth.login">
                <img :src="profileImage">
            </v-avatar>

            <v-menu offset-y v-if="auth.login">
                <v-btn flat slot="activator">
                    {{ auth.name }}
                </v-btn>

                <v-list>
                    <v-list-tile
                        v-for="item in profileNav"
                        :key="item.path"
                        @click="onClick(item)"
                    >{{ item.title }}</v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar>

        <v-content>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-content>

        <v-snackbar top
            :timeout="info.timeout"
            v-model="info.show"
            color="info"
        >
            {{ info.text }}
            <v-btn dark flat @click.native="info.show = false">Close</v-btn>
        </v-snackbar>

    </v-app>
</template>

<script>
import { mapState } from "vuex";
import Auth from "../helpers/Auth";

export default {
    created() {
        Auth.init();
    },

    computed: {
        ...mapState(["info", "nav", "authNav", "profileNav"]),
        auth() {
            return this.$store.state.Auth;
        },

        profileImage() {
            return this.$store.state.Auth.photo;
        }
    },

    data() {
        return {
            active: null
        };
    },

    methods: {
        onClick(item) {
            if (item.path !== "/logout") {
                this.$router.push(item.path);

                return true;
            }

            axios.post("/api/logout").then(response => {
                if (response.data.success) {
                    Auth.logout();
                    this.$router.push("/");
                }
            });
        }
    }
};
</script>
