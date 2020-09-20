import React, {
  createContext, PropsWithChildren, useReducer,
} from 'react';

const initialState = {
  lessonType: '',
  numRooms: 1,
  numFocusAreas: 1,
  numActivities: 1,
  roomSize: 'small',
  puzzleDifficulty: 'easy',
  lessonOption: 1,

  loading: false,
  error: null,
};

export const BuilderContext = createContext<{
  state: any;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => {}
});

interface Action {
    type: string
    payload: any
}

const reducer = (state: any, action: Action): any => {
  
  switch (action.type) {
    case 'SET_LESSON_TYPE':
      state = {
        ...state,
        lessonType: action.payload,
      };
      break;
    case 'SET_NUM_ROOMS':
      state = {
        ...state,
        numRooms: action.payload,
      };
      break;
    case 'SET_NUM_FOCUS_AREAS':
      state = {
        ...state,
        numFocusAreas: action.payload,
      };
      break;
    case 'SET_NUM_ACTIVITIES':
      state = {
        ...state,
        numActivities: action.payload,
      };
      break;
    case 'SET_ROOM_SIZE':
      state = {
        ...state,
        roomSize: action.payload,
      };
      break;
    case 'SET_PUZZLE_DIFFICULTY':
      state = {
        ...state,
        puzzleDifficulty: action.payload,
      };
      break;
    case 'SET_LESSON_OPTION':
      state = {
        ...state,
        lessonOption: action.payload,
      };
      break;
    default:
      console.error('Could not process action type', action.type)
      break;
  }
  // console.log('STATE:', state);
  return state;
};


const Provider = (props: PropsWithChildren<any>) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BuilderContext.Provider value={{state, dispatch}}>
        ...{props.children}
    </BuilderContext.Provider>
  );
};

export default Provider;
