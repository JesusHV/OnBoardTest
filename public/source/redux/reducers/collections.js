export default function fetchCollections(state = {restaurants: []}, action) {
  switch (action.type) {
    case 'fetch':
      return Object.assign({

      }, 
      state, 
      { 
        restaurants: action.result.body
      });

    default:
      return state;
  }
}