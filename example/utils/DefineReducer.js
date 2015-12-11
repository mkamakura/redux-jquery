export default function DefineReducer(initialState, definition) {
  return function (state = initialState, action = { type: '' }) {
    const reducer = definition[action.type];
    if (reducer) {
      return reducer(state, action);
    }
    return state;
  };
}
