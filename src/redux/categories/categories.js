const VIEW_CATEGORIES = 'bookstore/categories/CHECK_STATUS';
const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case VIEW_CATEGORIES:
      return 'Page under construction';
    default:
      return state;
  }
}

export const checkStatus = () => ({
  type: VIEW_CATEGORIES,
});
