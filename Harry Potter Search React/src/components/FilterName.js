const FilterName = (props) => {
    const handleInput = (ev) => {
        props.handleFilter({
            key: 'name',
            value: ev.currentTarget.value,
        })
    }
    return (

        <section>
            <div className="name_search">
                <label htmlFor="">Buscar por personaje:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={props.filterName}
                    onChange={handleInput}
                />
            </div>
        </section>
    );
};
export default FilterName;