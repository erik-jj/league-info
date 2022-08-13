import React, { createContext, useState } from "react";

const MyProvider = (props) => {
  const [state, setState] = useState({});

  return (
    <>
      <AppContext.Provider value={[state, setState]}>
        {props.children}
      </AppContext.Provider>
    </>
  );
};

export default MyProvider;
export const AppContext = createContext();
