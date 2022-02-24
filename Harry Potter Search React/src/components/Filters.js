import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";
import FilterSpecies from "./filterSpecies";

const Filter = (props) => {

    const handleForm = (ev) => {
        ev.preventDefault();
    }
    return (
        <section>
            <form className="search" onSubmit={handleForm}>
                <FilterName
                    filterName={props.filterName}
                    handleFilter={props.handleFilter}
                />
                <FilterHouse
                    handleFilter={props.handleFilter}
                    filterHouse={props.filterHouse} />
                <FilterSpecies
                    handleFilter={props.handleFilter}
                    filterSpecies={props.filterSpecies} />

            </form>
        </section>
    )
};
export default Filter;