<template>
  <div>
      <v-container>
          <v-layout>
              <v-flex sm4 offset-sm4>
                  <v-card>
                      <v-card-title>
                          <h2>Create An Account</h2>
                      </v-card-title>

                      <v-card-text>
                          <v-layout row>
                              <v-text-field
                                label="Name"
                                v-model="form.name"
                                :error-messages="checkError('name')"
                              ></v-text-field>
                          </v-layout>

                          <v-layout row>
                              <v-text-field
                                label="Email"
                                v-model="form.email"
                                :error-messages="checkError('email')"
                              ></v-text-field>
                          </v-layout>

                          <v-layout row>
                              <v-text-field
                                label="Password"
                                v-model="form.password"
                                :error-messages="checkError('password')"
                                type="password"
                              ></v-text-field>
                          </v-layout>

                          <v-layout row>
                              <v-text-field
                                label="Confirm Password"
                                v-model="form.password_confirmation"
                                type="password"
                              ></v-text-field>
                          </v-layout>

                          <v-layout row>
                              <v-flex xs12 class="text-xs-center">
                                  <v-btn @click="onRegister">
                                      Register
                                  </v-btn>
                              </v-flex>
                          </v-layout>
                      </v-card-text>
                  </v-card>
              </v-flex>
          </v-layout>
      </v-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null
            },

            errors: {}
        };
    },

    methods: {
        onRegister() {
            this.errors = {};

            axios
                .post("/api/register", this.form)
                .then(response => {
                    if (response.data.success) {
                        this.$router.push("/");
                    }
                })
                .catch(error => {
                    this.errors = error.response.data.errors;
                });
        },

        checkError(field) {
            return this.errors.hasOwnProperty(field) ? this.errors[field] : [];
        }
    }
};
</script>
