import Hotel from "./hotel/hotel";
import './results.css'
import FiltersSection from "./filters/filters";

export default function Results({holidays, handlePriceFilter, handleRatingFilter, handleFacilityFilter, handleRemoveFilter}) {

    return (
        <div className="result-body">           
            <div className="filter-section">
                <FiltersSection handlePriceFilter={handlePriceFilter} handleRatingFilter={handleRatingFilter} handleFacilityFilter={handleFacilityFilter} handleRemoveFilter={handleRemoveFilter} />
            </div>
            {holidays.length === 0 && 
                <div className="card-flex">
                  <h4 style={{"text-align": "center", "width": "100%", "margin": "auto"}}>No Hotel Found !!</h4>
                </div>
            }
            {holidays.length > 0 && 
                <div className="card-flex">
                    {holidays.map(holiday => <Hotel key={holiday.hotel.id} holiday={holiday}/>)}
                </div>
            }
        </div>
    ); 
}