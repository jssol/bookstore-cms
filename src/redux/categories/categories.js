// Action types
const CHECKING_STATUS = 'bookstore/categories/CHECKING_STATUS';

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case CHECKING_STATUS:
      return 'Under construction';
    default: return state;
  }
};

// Action Creators
const checkStatus = () => ({ type: CHECKING_STATUS });

export { checkStatus };
export default reducer;
