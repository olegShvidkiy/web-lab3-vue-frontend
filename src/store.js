import { createStore } from "vuex";
import itemModelList from "@/model/itemModelList";
const store = createStore({
  state() {
    return {
      ItemModelList: new itemModelList(),
    };
  },
  mutations: {
    ADD_ITEM(state, title) {
      state.ItemModelList.addItem(title);
    },
    DELETE_ITEM(state) {
      state.ItemModelList.deleteItem();
    },
    VOTE(state, id) {
      state.ItemModelList.vote(id);
    },
    DOWNLOAD(state) {
      state.ItemModelList.downloadItemsFromServer();
    },
  },
  actions: {
    ADD_ITEM({ commit }, title) {
      commit("ADD_ITEM", title);
    },
    DELETE_ITEM({ commit }) {
      commit("DELETE_ITEM");
    },
    VOTE({ commit }, id) {
      commit("VOTE", id);
    },
    DOWNLOAD({ commit }) {
      commit("DOWNLOAD");
    },
  },
  getters: {},
});

export default store;
