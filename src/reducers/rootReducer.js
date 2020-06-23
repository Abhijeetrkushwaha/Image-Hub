const initState = {
    result: null,
}

const rootReducer = (state = initState, action) => {
    if (action.type === "ADD_RESULT") {
        // console.log(action.result);
        const newResult = action.result;
        return {
            ...state,
            result: newResult
        }
    }
    if (action.type === "ADD_SEARCH_RESULT") {
    //   console.log(action.result);
      const newResult = action.result;
      return {
        ...state,
        result: newResult,
      };
    }
     return state;
}

export default rootReducer;