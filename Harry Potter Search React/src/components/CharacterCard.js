
import { Link } from "react-router-dom";
function CharacterCard(props) {
    const getSpecies = () => {
        if (props.character.species === 'human') {
            return 'Humano'
        } else if (props.character.species === 'half-giant') {
            return 'Semi-gigante'
        } else if (props.character.species === 'werewolf') {
            return 'Hombre-lobo'
        } else if (props.character.species === 'ghost') {
            return 'Fantasma'
        } else {
            return 'Ser mágico'
        };

    };
    return (
        <section>
            <Link to={`/character/${props.character.id}`}>
                <img className="cards__img" src={props.character.image === '' ? 'https://i.pinimg.com/564x/b6/1d/3e/b61d3efbd5b67f0e3ebdeaab305dd972.jpg' : `${props.character.image}`}
                    alt={props.character.name}
                />
                <h4 className="cards__title">{props.character.name}</h4>
                <p className="cards__description">{getSpecies()}</p>
            </Link>
        </section>
    );
};
export default CharacterCard;