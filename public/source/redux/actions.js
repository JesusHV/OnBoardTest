const initialState = null;

export default function config(state = initialState, action) {
  if(action.type === 'other'){
  	return state;
  }
  return state;
}