import { useEffect, useState } from "react";
import { StyledSearch } from "./StyleSearch";
import { useDispatch } from "react-redux";
//import { searchStarwars } from "../../store/slices/starwars/thunks";

export const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  //Todo: refactorizar a custom hook
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log("value is:", e.target.value);
  };

  useEffect(() => {
    dispatch(searchStarwars(search));
  }, [search, dispatch]);

  return (
    <StyledSearch>
      <div>
        <input
          type="text"
          placeholder="Search ....."
          onChange={handleChange}
          value={search}
        />
        <svg
          fillRule="#000000"
          width="20px"
          height="20px"
          viewBox="0 0 1920 1920"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
            fillRule="evenodd"
          ></path>
        </svg>
      </div>
    </StyledSearch>
  );
};
