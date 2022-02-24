const NoResults = (props) => {
    const renderMessage = () => {
        if (props.filteredCharacter.length === 0) {
            return `No hemos encontrado ningún personaje que coincida con ${props.filterName}.`;
        }
    };
    return <p className="textNotFound">{renderMessage()}</p>;
};

export default NoResults;