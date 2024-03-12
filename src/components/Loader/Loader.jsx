//import "./loader.scss";

import { StyledLoader } from "./StyleLoader";

export const Loader = () => {
  return (
    <StyledLoader className="loader">
      <span className="loader__circle"></span>
      <span className="loader__circle"></span>
      <span className="loader__circle"></span>
    </StyledLoader>
  );
};
