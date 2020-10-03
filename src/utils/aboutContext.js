import React from "react";
import aboutPage from "../utils/API";

const aboutContext = React.createContext();

function useAboutContext() {
  return aboutContext(aboutPage)
}

export default useAboutContext;