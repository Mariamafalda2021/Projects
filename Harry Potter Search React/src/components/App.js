import '../styles/App.scss';
import { useState, useEffect } from 'react';
import CallToApi from '../services/CallToApi';
import CharacterList from './CharacterList'
import Header from './Header';
import Filter from './Filters';
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';
import NoResults from './NoResult';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("gryffindor");
  const [filterSpecies, setFilterSpecies] = useState("");
  //Llamamos a la api, y los datos devueltos se guardan en la variable de estado characters.
  useEffect(() => {
    CallToApi(filterHouse).then((characterData) => {
      setCharacters(characterData);
    })
  }, [filterHouse])


  //Creamos la función manejadora de los filtros
  const handleFilter = (data) => {
    if (data.key === 'name') {
      setFilterName(data.value);
    } else if (data.key === 'house') {
      setFilterHouse(data.value);
    } else if (data.key === 'species') {
      setFilterSpecies(data.value);
    }
  }

  //Guardamos los personajes filtrados en una variable
  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      return character.species.toLowerCase().includes(filterSpecies.toLowerCase());
    });

  //console.log(filteredCharacters)

  const renderCharacterDetail = (props) => {
    const routeId = (props.match.params.id);
    const foundCharacter = characters.find((character) => character.id === routeId);
    return <CharacterDetail character={foundCharacter} />
  };


  return (
    <Switch>
      <Route path="/" exact>
        <div>
          <Header />
          <Filter
            handleFilter={handleFilter}
            filterName={filterName}
            filterHouse={filterHouse}
            filterSpecies={filterSpecies}
          />
          <CharacterList
            characters={filteredCharacters} />
          <NoResults
            filteredCharacter={filteredCharacters}
            filterName={filterName}
          />
        </div>
      </Route>
      <Route path="/character/:id" render={renderCharacterDetail} />
    </Switch >
  );
};

export default App;
