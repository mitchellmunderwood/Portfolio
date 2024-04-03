import { React, createContext, useContext, useReducer } from 'react';
import { SET_CONTENT, SET_PAGE, SET_SKILLSET, TOGGLE_SKILL, TOGGLE_NAV_DRAWER } from './actions';

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CONTENT:
      console.log('Reducer - set content to:', action.content);
      return {
        ...state,
        projects: action.content.projects,
      };

    case SET_PAGE:
      console.log('Reducer - set page to: ', action.page);
      return {
        ...state,
        page: action.page,
      };

    case SET_SKILLSET:
      console.log('Reducer - set skillset to: ', action.skillSet);
      return {
        ...state,
        skillSet: action.skillSet,
        filteredSkills: [],
      };

    case TOGGLE_SKILL:
      console.log('Reducer - toggle for skill: ', action.skill);
      if (state.filteredSkills.includes(action.skill)) {
        const newFilteredSkills = [...state.filteredSkills].filter((skill) => skill !== action.skill);
        return {
          ...state,
          filteredSkills: newFilteredSkills,
        };
      } else {
        const newFilteredSkills = [...state.filteredSkills];
        newFilteredSkills.push(action.skill);
        return {
          ...state,
          filteredSkills: newFilteredSkills,
        };
      }

    case TOGGLE_NAV_DRAWER:
      console.log('Reducer - toggle nav drawer');
      return {
        ...state,
        navDrawer: !state.navDrawer,
      };

    default:
      console.log('Reducer - Default, Return State:', action);
      return state;
  }
};

const StoreProvider = ({ ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    page: 'Home',
    pages: [
      { title: 'Home', id: 'home', link: '' },
      { title: 'Portfolio', id: 'portfolio', link: 'portfolio' },
      { title: 'Resume', id: 'resume', link: 'resume' },
    ],
    projects: [],
    skillSet: [],
    filteredSkills: [],
    navDrawer: false,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
