const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
      case "GET_USER":
        return {
          ...state,
          user: action.payload,//한명의 값을 업데이트한다 
          loading: false,
        };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default githubReducer;
