const state = {
  subMenus: [],
  collapsed: false,
  theme: "light",
};

const customGetters = {
  GET_SUBMENU: function(state) {
    return state.subMenus;
  },
  GET_SIDEMANU_COLLAPSE: function(state) {
    return state.collapsed;
  },
  GET_THEME: function(state) {
    return state.theme;
  },
};

const customActions = {
  ACTION_LOAD_SIDEBAR_MENU: function(context) {
    let submenus = [
      {
        headlines: "MAIN MENU",
        icon: "pie-chart",
        title: "Option 1",
        link: "/",
        name: "dashboard",
        key: "1",
      },
      {
        icon: "desktop",
        title: "Option 2",
        link: "/",
        name: "dashboard",
        key: "2",
      },
      {
        icon: "inbox",
        title: "Option 3",
        link: "/",
        name: "dashboard",
        key: "3",
      },

      {
        icon: "mail",
        title: "Navigation One",
        key: "sub1",
        child: [
          { title: "Option 5", link: "/", name: "dashboard", key: "5" },
          { title: "Option 6", link: "/", name: "dashboard", key: "6" },
          { title: "Option 7", link: "/", name: "dashboard", key: "7" },
          { title: "Option 8", link: "/", name: "dashboard", key: "8" },
        ],
      },

      {
        icon: "appstore",
        title: "Navigation Two",
        key: "sub2",
        child: [
          { title: "Option 9", link: "/", name: "dashboard", key: "9" },
          { title: "Option 10", link: "/", name: "dashboard", key: "10" },
          { title: "Option 11", link: "/", name: "dashboard", key: "11" },
          { title: "Option 12", link: "/", name: "dashboard", key: "12" },
        ],
      },
    ];

    context.commit("MUTATION_SET_SIDEBAR_MENU", submenus);
  },
  ACTION_TOGGLE_COLLAPSE_MENU: function(context) {
    context.commit("MUTATION_TOGGLE_COLLAPSE_MENU");
  },
  ACTION_CHANGE_THEME: function(context, payload) {
    context.commit("MUTATION_CHANGE_THEME", payload);
  },
};

const customMutations = {
  MUTATION_SET_SIDEBAR_MENU: function(state, payload) {
    state.subMenus = payload;
  },
  MUTATION_TOGGLE_COLLAPSE_MENU: function(state) {
    state.collapsed = !state.collapsed;
  },
  MUTATION_CHANGE_THEME: function(state, payload) {
    state.theme = payload ? "dark" : "light";
  },
};

export default {
  state,
  getters: customGetters,
  mutations: customMutations,
  actions: customActions,
};
