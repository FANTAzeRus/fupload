<template>
    <v-app>
        <v-tabs v-model="active" color="cyan" dark slider-color="yellow">
            <v-tab v-for="tab in tabs" :key="tab.path" ripple :to="tab.path">
                {{ tab.title }}
            </v-tab>
        </v-tabs>

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

export default {
  computed: {
    ...mapState(["info"]),
  },

  data() {
    return {
      active: null,
      tabs: [
        { path: "/", title: "Home" },
        { path: "/upload_file", title: "File upload" },
        { path: "/browse_files", title: "Browse files" },
        { path: "/carousel", title: "Carousel" },
      ],
    };
  },
};
</script>
