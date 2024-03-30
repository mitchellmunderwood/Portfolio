import { React, createContext, useContext, useReducer } from 'react';
import { SET_CONTENT, SET_PAGE, SET_PROJECT } from './actions';

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CONTENT:
      console.log('Reducer - set content to:, action.content');
      return {
        ...state,
        posts: action.content.posts,
        projects: action.content.projects,
      };

    case SET_PAGE:
      console.log('Reducer - set page to: ', action.page);
      return {
        ...state,
        page: action.page,
      };

    case SET_PROJECT:
      console.log('Reducer - set project to: ', action.project);
      return {
        ...state,
        project: action.project,
      };

    default:
      console.log('Reducer - Default, Return State:', action);
      return state;
  }
};

const StoreProvider = ({ ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    page: 'Home',
    projects: [],
    project: {},
    description: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
