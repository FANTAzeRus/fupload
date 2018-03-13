export default {
  showInfo(state, message) {
    state.info.text = message;
    state.info.show = true;
  },

  setImagesList(state, payload) {
    state.imagesList = payload;
  },
};
