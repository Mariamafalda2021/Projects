import CharacterCard from "./CharacterCard";

function CharacterList(props) {
    //vamos a convertir un array de objetos en un array de <li> con .map. Creamos una constante para guardar los elementos
    const characterElements = props.characters.map((character) => {
        return (
            <li className="cards__singleCard" key={character.id}>
                <CharacterCard character={character} />
            </li>
        )
    })

    return (
        <section>

            <ul className="cards">

                {characterElements}

            </ul>

        </section>
    );
};
export default CharacterList;