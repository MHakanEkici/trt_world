import React, {createContext, useEffect, useReducer} from 'react';
import reducer from './reducer';
import store from './store';

export const AuthContext = createContext();

export default function AuthProvider({children}) {
  const [authState, authispatch] = useReducer(reducer, store);

  return (
    <AuthContext.Provider value={{authState, authispatch}}>
      {children}
    </AuthContext.Provider>
  );
}
