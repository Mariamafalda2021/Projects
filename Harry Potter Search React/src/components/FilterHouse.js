const FilterHouse = (props) => {
    const handleHouse = (ev) => {
        props.handleFilter({
            key: 'house',
            value: ev.target.value,
        });
    };
    return (
        <div className="house_search">
            <label htmlFor="">Buscar por casa: </label>
            <select
                className=""
                name="house"
                id="house"
                onChange={handleHouse}
                value={props.filterHouse}>
                <option value="gryffindor">Gryffindor</option>
                <option value="slytherin">Slytherin</option>
                <option value="hufflepuff">Hufflepuff</option>
                <option value="ravenclaw">Ravenclaw</option>
            </select>


        </div>
    );
};
export default FilterHouse;