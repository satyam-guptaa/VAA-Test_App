import { createRef, useRef } from 'react'
import './filters.css'

export default function FiltersSection({handlePriceFilter, handleRatingFilter, handleFacilityFilter, handleRemoveFilter}) {
    const facilities =  [
        "Restaurant",
        "Bar",
        "Spa",
        "Room Service",
        "Valet parking",
        "Safety Deposit Box",
        "Fitness Centre/Gym",
        "Laundry Service",
        "Internet Access",
        "Swimming Pool"
    ]
    const inputRefs = useRef([])
    // to hold an array of generated refs, and assign them when mapping.
    // later attach the react ref stored in lineRefs at index i
    inputRefs.current = facilities.map((_,i) => inputRefs.current[i] ?? createRef())

    const ratingFunction = (rating) => {
        return (
            <button className='rating-btn' onClick={()=>handleRatingFilter(rating)}>
                <i className={`fa-solid fa-${rating}`}></i><i className="fa-solid fa-star star"></i><b>+</b>
            </button> 
        )
    }
    const priceFunction = ([min,max]) => {
        return (
            <span className="price-span" onClick={()=> handlePriceFilter([min,max])}>From {min} to {max}</span>
        )
    }
    return (
    <>
        <div className="price-filter">
            <h5 data-testid="priceFilter">Price</h5>
            {priceFunction([0,500])}
            {priceFunction([500,1500])}
            {priceFunction([1500,3000])}
            {priceFunction([3000,5000])}
        </div>
        <hr />
        <div className="rating-filter">
            <h5 data-testid="ratingFilter">Rating</h5>
            {ratingFunction(1)}
            {ratingFunction(2)}
            {ratingFunction(3)}
            {ratingFunction(4)}
        </div>
        <hr />
        <div className="facility-filter">
            <h5 data-testid="facilityFilter">Facilities</h5>
                {facilities.map((facility,i) => {
                return (
                <div key={facility}>
                    <input type="checkbox" value={facility} ref={inputRefs.current[i]} id={facility} onClick={(e) => handleFacilityFilter(e,inputRefs)}/>
                    <label className="form-check-label facility-label" htmlFor={facility}>{facility}</label>
                </div>
                )})}
        </div>
        <hr />
        <div className='remove-filter'>
            <button type="button" data-testid="removeFilterBtn" className="btn btn-danger" onClick={() => handleRemoveFilter(inputRefs)}>Remove Filter</button>
        </div>
    </>
    )
}