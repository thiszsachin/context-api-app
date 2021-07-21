import React, { useContext } from "react";
import { Movies } from "./Context";

const Show = () => {
  const [list] = useContext(Movies);
  return (
    <>
      <h1>These are Movies Lists:-</h1>
      <ul>
        {list.map((item) => (
          <>
            <ol>
              <li>{item.name}</li>
              <li>{item.year}</li>
            </ol>
          </>
        ))}
      </ul>
    </>
  );
};

export default Show;
