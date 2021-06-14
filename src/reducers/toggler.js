const togglerReducer = (state = 67, action) => {
  switch (action.type) {
    case "ONTOGGLE":
      return state=8;

    default:
      return state;
  }
};
export default togglerReducer;
