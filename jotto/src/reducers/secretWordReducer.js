export default (state=null, action) => {
  return state;
  // returning state instead of null because this will be called every time an action is dispatched.
  // we don't want to null out the secretWord state every time we run an action.
}