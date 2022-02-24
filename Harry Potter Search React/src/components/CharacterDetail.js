import { Link } from "react-router-dom";
import Header from "./Header";

function CharacterDetail(props) {
    if (props.character === undefined) {
        return (
            <p>No se ha encontrado ningún personaje</p>
        )
    }
    const getGender = () => {
        return props.character.gender === 'female' ? 'Mujer' : 'Hombre';
    };
    const getStatus = () => {
        return props.character.status === true ? 'Viv@' : 'Fallecid@';
    };

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
        <section className="detail">
            <Header />
            <div className="detail__link">
                <Link to='/'>
                    Volver
                </Link>
            </div>

            <div className="detail__container">
                <img className="detail__img" src={props.character.image === '' ? 'https://static.boredpanda.com/blog/wp-content/uploads/2016/10/newborn-baby-harry-potter-photo-shoot-kayla-glover-4.jpg' : `${props.character.image}`}
                    alt={props.character.name} />
                <div className="detail__text">
                    <h4 className="detail__title">{props.character.name}</h4>
                    <p className="detail__description"><i className="fas fa-heartbeat"></i>Estatus:{getStatus()}</p>
                    <p className="detail__description">Especie: {getSpecies()}</p>
                    <p className="detail__description">Genero: {getGender()}</p>
                    <p className="detail__description">Casa: {props.character.house}</p>
                </div>
            </div>
        </section>
    );
};
export default CharacterDetail;