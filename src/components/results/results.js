import Hotel from "./hotel/hotel";
import './results.css'
import FiltersSection from "./filters/filters";

export default function Results({holidays, handlePriceFilter, handleRatingFilter, handleFacilityFilter, handleRemoveFilter}) {

    return (
        <div className="result-body">           
            <div className="filter-section">
                <FiltersSection handlePriceFilter={handlePriceFilter} handleRatingFilter={handleRatingFilter} handleFacilityFilter={handleFacilityFilter} handleRemoveFilter={handleRemoveFilter} />
            </div>
            <div className="card-flex">
                {holidays.map(holiday => <Hotel key={holiday.hotel.id} holiday={holiday}/>)}
            </div>
        </div>
    ); 
}