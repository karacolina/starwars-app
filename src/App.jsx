import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStarwars, getSearchStarwars } from "./store/slices/starwars/thunks";

import {
  StyledButton,
  StyledButtonOutline,
  StyledButtonPrimary,
  StyledTextLink,
} from "./components/Button/StyleButton";
import { StyledCard, StyleContainerCard } from "./Styled.card";
import { StylePagination } from "./components/Pagination/Pagination";
//import { Search } from "./components/Search/Search";
import { Title } from "./components/Title/StyleTitle";
import { StyleHeader } from "./components/Header/StyleHeader";
import { Loader } from "./components/Loader/Loader";
import { useGetPeopleQuery } from "./api/starwarsApi";

const App = () => {
  const dispatch = useDispatch();
  //traer lo que necesito mostrar, paginador, datos de la api
  //const { page = 1, isLoading } = useSelector((state) => state.starwars);

  const { starwars, isLoading, error } = useGetPeopleQuery();
  //const { data: searchData } = useGetSearchPeopleQuery(searchPeople);

  useEffect(() => {
    dispatch(getStarwars());
  }, []);

  /*   useEffect(() => {
    if (searchPeople) {
      dispatch(getSearchStarwars(searchPeople));
    }
  }, []); */

  return (
    <>
      <StyleHeader>
        <img src="src/assets/star-wars-dark.svg" alt="starwars" />
        <Title>Starwars App</Title>
        {/* <Search /> */}
      </StyleHeader>

      <div>
        {error ? (
          "Error data!!!"
        ) : isLoading ? (
          <Loader />
        ) : (
          <StyleContainerCard>
            {starwars?.map((characters) => (
              <StyledCard key={characters.uid}>
                <h3>Name: {characters.name}</h3>
                <p>Gender: {characters.gender}</p>
              </StyledCard>
            ))}
          </StyleContainerCard>
        )}
      </div>

      {/*  //Todo: crear referencia create.ref */}
      {/*       <StylePagination>
        <StyledButton
          type="button"
          disabled={isLoading || page === 1}
          onClick={() => dispatch(getStarwars(page - 1))}
        >
          Anterior
        </StyledButton>
        <StyledTextLink>Anterior</StyledTextLink>

        <StyledButtonOutline
          type="button"
          onClick={() => dispatch(getStarwars(page))}
        >
          Ir al inicio
        </StyledButtonOutline>
        <StyledButtonPrimary
          type="button"
          disabled={isLoading}
          onClick={() => dispatch(getStarwars(page + 1))}
        >
          Siguiente
        </StyledButtonPrimary> 
      </StylePagination>*/}
    </>
  );
};

export default App;
