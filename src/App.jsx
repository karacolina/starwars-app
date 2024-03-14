import { useState } from "react";
//import { useDispatch } from "react-redux";
import { useGetPeopleQuery } from "./api/starwarsApi";
//import { getStarwars, getSearchStarwars } from "./store/slices/starwars/thunks";

import {
  StyledButton,
  StyledButtonOutline,
  StyledButtonPrimary,
  StyledTextLink,
} from "./components/Button/StyleButton";
import { StyledCard, StyleContainerCard } from "./Styled.card";
import { StylePagination } from "./components/Pagination/Pagination";
import { Search } from "./components/Search/Search";
import { Title } from "./components/Title/StyleTitle";
import { StyleHeader } from "./components/Header/StyleHeader";
import { Loader } from "./components/Loader/Loader";

const App = () => {
  const [page, setPage] = useState(1);

  const { data: people, isLoading } = useGetPeopleQuery({ page: 1 });

  const prevButton = () => {
    if (page === 1) return;

    setPage(page - 1);
    console.log("prev");
  };

  const nextButton = () => {
    setPage(page + 1);

    console.log("next");
  };

  return (
    <>
      <StyleHeader>
        <img src="src/assets/star-wars-dark.svg" alt="starwars" />
        <Title>Starwars App</Title>
        <Search />
      </StyleHeader>

      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <StyleContainerCard>
            {people?.results?.map((characters) => (
              <StyledCard key={characters.uid}>
                <h3>Name: {characters.name}</h3>
              </StyledCard>
            ))}
          </StyleContainerCard>
        )}
      </div>

      {/*  //Todo: crear referencia create.ref */}
      <StylePagination>
        <StyledButton
          type="button"
          disabled={isLoading}
          onClick={() => prevButton}
        >
          Anterior
        </StyledButton>
        <StyledTextLink>Anterior</StyledTextLink>

        <StyledButtonOutline type="button" onClick={() => setPage(1)}>
          Ir al inicio
        </StyledButtonOutline>
        <StyledButtonPrimary
          type="button"
          disabled={isLoading}
          onClick={() => nextButton}
        >
          Siguiente
        </StyledButtonPrimary>
      </StylePagination>
    </>
  );
};

export default App;
