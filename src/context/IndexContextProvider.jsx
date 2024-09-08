import { useParams } from "react-router-dom";
import { createContext } from "react";
export const IndexContext = createContext();
import { useState } from "react";

function IndexContextProvider({ children }) {
  const { guest } = useParams();

  const [response, setResponse] = useState({ state: false, answer: "" });
  const responseY = () => {
    setResponse((prev) => {
      return { ...prev, state: true, answer: "Oui, je viens à ta fête!" };
    });
  };
  const responseN = () => {
    setResponse((prev) => {
      return { ...prev, state: false, answer: "Non, je ne peux pas venir." };
    });
  };
  return (
    <IndexContext.Provider
      value={{
        guest: guest,
        state: [response, setResponse],
        responseY: responseY,
        responseN: responseN,
      }}
    >
      {children}
    </IndexContext.Provider>
  );
}
export default IndexContextProvider;
