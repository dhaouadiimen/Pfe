import { createContext } from "react";
const account = {_id:"62752a322047424709a53c05",surname:"imen dhaouadi"};
export const AuthContext = createContext(account);
export const AuthContextProvider = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        account:account ,
        isFetching:false,
        error: false,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};