export const addResult = (result) => {
    return  {
        type: 'ADD_RESULT',
        result: result,
      }
    
}
export const addNewResult = (result) => {
         return {
           type: "ADD_SEARCH_RESULT",
           result: result,
         };
       };