const CallToApi = (handleHouse) => {
    return fetch(`http://hp-api.herokuapp.com/api/characters/house/${handleHouse}`)
        .then((response) => response.json())//la API nos devuelve un objeto pero queremos solo los datos de RESULTS, por eso al hacer el map,elegimos results primero
        .then((data) => {
            const cleanData = data.map((character, index) => {
                return {//nos vamos a la API y seguimos el camino para coger lo que nos interesa
                    id: `${character.name} ${character.dateOfBirth}${character.actor} ${index}`,
                    name: character.name,
                    house: character.house,
                    species: character.species,
                    status: character.alive,
                    image: character.image,
                    gender: character.gender,
                };
            });
            return cleanData;
        });

};
export default CallToApi;