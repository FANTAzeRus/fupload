<template>
  <div>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm6 md4
            v-for="file in files"
            :key="file.id"
          >
            <v-card class="mr-3 mb-3">
              <v-card-media :src="getPath(file)" height="250px" contain @click="onClickImage(file)" style="cursor: pointer">
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{ file.name }}</h3>
                  <div>
                    Size: <strong>{{ calcSize(file.size) }}Kb</strong><br>
                    Mime Type: <strong>{{ file.mime }}</strong><br>
                    Uploaded: <strong>{{ humanDate(file) }}</strong>
                  </div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat @click="onDelete(file)">
                  <v-icon>delete</v-icon>
                  Delete
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

      <v-layout row justify-center>
        <v-dialog
          v-model="viewer.show"
          :max-width="viewer.width"
          :max-height="viewer.height"
        >
          <v-card>
            <v-card-media
              :src="viewer.path"
              :height="viewer.height"
            ></v-card-media>
          </v-card>
        </v-dialog>
      </v-layout>
  </div>
  
</template>

<script>
import Auth from "../helpers/Auth";

export default {
    created() {
        Auth.check();
    },

    computed: {
        files() {
            return this.$store.state.imagesList;
        }
    },

    data() {
        return {
            viewer: {
                show: false,
                path: null,
                width: null,
                height: null
            }
        };
    },

    methods: {
        getPath(file) {
            return "/images/" + file.name;
        },

        onDelete(file) {
            axios.post("/api/delete/" + file.id).then(response => {
                this.showInfo("File was successfuly deleted!");

                let id = this.files.findIndex(item => {
                    return item.id === file.id;
                });

                if (id > -1) {
                    this.files.splice(id, 1);
                }
            });
        },

        calcSize(size) {
            return Math.round(size / 1024);
        },

        humanDate(file) {
            let dat = new moment(file.created_at);

            return dat.fromNow();
        },

        onClickImage(file) {
            this.viewer.path = "/images/" + file.name;
            this.viewer.width = file.width;
            this.viewer.height = file.height;
            this.viewer.show = true;
        },

        showInfo(message) {
            this.$store.commit("showInfo", message);
        }
    }
};
</script>
