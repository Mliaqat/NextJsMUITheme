import { createContext, ReactNode, useEffect, useReducer } from "react";
// utils
import { isValidToken, setSession } from "../utils/jwt";

// ----------------------------------------------------------------------

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handlers = {
  INITIALIZE: (state: any, action: any) => {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  LOGIN: (state: any, action: any) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  LOGOUT: (state: any) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
  REGISTER: (state: any, action: any) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
};

const reducer = (state: any, action: any) =>
  handlers[action.type as keyof typeof handlers]
    ? handlers[action.type as keyof typeof handlers](state, action)
    : state;

const AuthContext = createContext({
  ...initialState,
  method: "jwt",
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
});

// ----------------------------------------------------------------------

function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem("accessToken");

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);

          // const response = await axios.get("/api/account/my-account");
          // const { user } = response.data;
          const { user } = {
            user: { data: "somedata", message: "somemessage" },
          };

          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: "INITIALIZE",
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const login = async (response: any) => {
    // Send the response from login api
    const { accessToken, user } = response.data;

    setSession(accessToken);
    dispatch({
      type: "LOGIN",
      payload: {
        user,
      },
    });
  };

  const logout = async () => {
    setSession(null);
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "jwt",
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
