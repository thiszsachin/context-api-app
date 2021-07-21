import React, { createContext, useState } from "react";

export const Movies = createContext();

const Context = ({ children }) => {
  const [list, setList] = useState([
    { name: "Iron Man", year: 2018 },
    { name: "Race", year: 2020 }
  ]);
  return <Movies.Provider value={[list, setList]}>{children}</Movies.Provider>;
};

export default Context;
