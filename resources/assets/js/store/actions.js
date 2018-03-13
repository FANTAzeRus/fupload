export default {
  loadImages({ commit }) {
    axios.post("/api/list").then(response => {
      commit("setImagesList", response.data);
    });
  },
};
