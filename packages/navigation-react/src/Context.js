import React, { createContext } from "react";

const { Consumer, Provider } = createContext();

const withContext = Wrapped => props => (
  <Consumer>{history => <Wrapped {...props} history={history} />}</Consumer>
);

export { Consumer, Provider, withContext };
