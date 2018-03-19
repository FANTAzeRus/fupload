<template>
  <div>
      <v-btn @click="onButtonClick">
        <v-icon>attach_file</v-icon>
        Select File
      </v-btn>

      <v-text-field
        v-model="formData.displayFileName"
        readonly
      ></v-text-field>

      <input type="file" class="input-field-file" ref="fupload" @change="onFileChange">

      <div v-if="readyToUpload">
        <img :src="formData.uploadFileData" class="preview-image">
      </div>

      <v-btn v-if="readyToUpload" @click="uploadImage">
        <v-icon left>cloud_upload</v-icon>
        Upload File
      </v-btn>
  </div>
</template>

<script>
import Auth from "../helpers/Auth";
export default {
    created() {
        Auth.check();
    },

    computed: {
        readyToUpload() {
            return (
                this.formData.displayFileName && this.formData.uploadFileData
            );
        }
    },

    data() {
        return {
            formData: {
                displayFileName: null,
                uploadFileData: null,
                file: null
            }
        };
    },

    methods: {
        onFileChange(event) {
            if (event.target.files && event.target.files.length) {
                let file = event.target.files[0];
                this.formData.file = file;
                this.formData.displayFileName =
                    event.target.files[0].name +
                    " (" +
                    this.calcSize(file.size) +
                    "Kb)";

                let reader = new FileReader();
                reader.onload = e => {
                    this.formData.uploadFileData = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },

        onButtonClick() {
            this.$refs.fupload.click();
        },

        calcSize(size) {
            return Math.round(size / 1024);
        },

        uploadImage() {
            let data = new FormData();
            data.append("fupload", this.formData.file);

            axios.post("/api/upload_file", data).then(response => {
                this.showInfo("File was successfuly uploaded!");
                this.formData = {
                    displayFileName: null,
                    uploadFileData: null,
                    file: null
                };
            });
        },

        showInfo(message) {
            this.$store.commit("showInfo", message);
        }
    }
};
</script>

<style>
.input-field-file {
    display: none;
}

.preview-image {
    width: 250px;
    padding: 15px;
    border: 1px solid #999;
    border-radius: 5px;
}
</style>
