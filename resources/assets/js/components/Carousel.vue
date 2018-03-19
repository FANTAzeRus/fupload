<template>
  <div>
    <v-carousel v-if="isLoaded">
      <v-carousel-item
        v-for="item in items"
        :key="item.id"
      >
        <v-layout row>
          <v-flex sm4 offset-sm4>
            <v-card>
              <v-card-media
                height="500"
                :src="getPath(item)"
                contain
              ></v-card-media>
            </v-card>
          </v-flex>
        </v-layout>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import Auth from "../helpers/Auth";

export default {
    created() {
        Auth.check();
    },

    computed: {
        items() {
            return this.$store.state.imagesList;
        },

        isLoaded() {
            return this.items.length;
        }
    },

    methods: {
        getPath(file) {
            return "/images/" + file.name;
        }
    }
};
</script>
