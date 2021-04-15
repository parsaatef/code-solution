import * as React from 'react';
import { initialState, AppState } from './reducer';
import { AppActions } from './actions';

export type Store = {
    state: AppState;
    dispatch?: React.Dispatch<AppActions>;
};

const AppContext: React.Context<Store> = React.createContext({ state: initialState });

export const Provider = AppContext.Provider;

export const useAppState = () => {

    return React.useContext(AppContext);

};

