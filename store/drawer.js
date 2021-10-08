export const state = () => {
  return {
    isOpened: false,
  };
};

export const mutations = {
  openDrawer(state) {
    state.isOpened = true;
  },
  closeDrawer(state) {
    state.isOpened = false;
  },
};
