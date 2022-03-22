import React, { createContext, useReducer } from "react";
const initialContext = {
    contentError: undefined,
    setContentError: () => {},
    isAuthorized: false,
    setIsAuthorized: () => {},
    apiLoading: false,
    setApiLoading: () => {},
};

const appReducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_CONTENT_ERROR":
            return {
                ...state,
                contentError: payload,
            };
        case "SET_IS_AUTHORIZED":
            return {
                ...state,
                isAuthorized: payload,
            };
        case "SET_API_LOADING":
            return {
                ...state,
                apiLoading: payload,
            };
        default:
            return state;
    }
};

const AppContext = createContext(initialContext);
export const useAppContext = () => React.useContext(AppContext);
export const AppContextProvider = ({ children }) => {
    const [store, dispatch] = useReducer(appReducer, initialContext);

    const contextValue = {
        contentError: store.contentError,
        setContentError: (str) => {
            dispatch({ type: "SET_CONTENT_ERROR", payload: str });
        },
        isAuthorized: store.isAuthorized,
        setIsAuthorized: (authorized) => {
            dispatch({ type: "SET_IS_AUTHORIZED", payload: authorized });
        },
        apiLoading: store.apiLoading,
        setApiLoading: (loading) => {
            dispatch({ type: "SET_API_LOADING", payload: loading });
        },
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};
