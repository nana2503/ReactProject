const initState = {
  users: [
    { id: 1, name: "Na" },
    { id: 2, name: "Nhu" },
    { id: 3, name: "Nhu 1" },
    { id: 4, name: "Nhu 2" },
  ],
  post: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);
      return { ...state, users };
    case "CREATE_USER":
      let id = Math.floor(Math.random() * 10000);
      let user = { id: id, name: `Random User - ${id}` };
      return { ...state, users: [...state.users, user] };
    default:
      return state;
  }
};
export default rootReducer;
