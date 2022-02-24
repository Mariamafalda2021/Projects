const FilterSpecies = (props) => {
    const handleInput = (ev) => {
        props.handleFilter({
            key: 'species',
            value: ev.currentTarget.value,
        })
    }
    return (

        <section>
            <div className="name_search">
                <label htmlFor="">Buscar por especie:</label>
                <input
                    type="text"
                    name="species"
                    id="species"
                    value={props.filterSpecies}
                    onChange={handleInput}
                />
            </div>
        </section>
    );
};
export default FilterSpecies;