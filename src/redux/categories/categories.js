const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';
const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Page under construction';
    default:
      return state;
  }
}

export const checkStatus = () => ({
  type: CHECK_STATUS,
});
