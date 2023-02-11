import { createStore } from "vuex";
import axios from "axios";

async function getData(url) {
  const response = await fetch(url)
    .then((responde) => {
      return responde.json();
    })
    .catch((er) => {
      console.log("er ;", er);
    });

  return response;
}

export default createStore({
  state: {
    availableRoutes: [],
    selectedRoutes: {},
  },
  getters: {
    getAvailableRoutes: (state) => state.availableRoutes,
    getSeletedRoute: (state, getters) => {
      console.log("state --> ", state.selectedRoutes);
      console.log("getters --> ", getters);
      return state.selectedRoutes;
    },
  },
  actions: {
    async fetchAvailableRoutes({ commit }) {
      try {
        const data = await getData("data/routes.json");
        const routes = data.routes;
        commit("SET_AVALIBLE_ROUTES", routes);
        const frist = routes[0];
        commit("SET_SELECTED_ROUTES", frist);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchselectedAvailableRoutes(context, payload) {
      const data = await getData("data/route_data.json");
      console.log("data --> ", data);
      // const dataRoutes = JSON.parse(`${data.data}`);
      //console.log("dataRoutes", data);
      // const findIdRoute = dataRoutes.routes_data.find(
      //   (item) => item.id === id
      // );

      // context.commit("SET_SELECTED_ROUTES", data);
    },
  },
  mutations: {
    SET_AVALIBLE_ROUTES(state, availableRoutes) {
      state.availableRoutes = availableRoutes;
    },
    SET_SELECTED_ROUTES(state, selectedRoutes) {
      state.selectedRoutes = selectedRoutes;
    },
  },
});
