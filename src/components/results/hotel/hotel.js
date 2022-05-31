import './hotel.css'

export default function Hotel({holiday}) {
   
    return (
        <div className="card" style={{width: "18rem", height: '400px'}}>
             <img src={holiday.hotel.content.images[0].RESULTS_CAROUSEL.url} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title hotel-title">{holiday.hotel.name}</h5> 
                <span className="badge rounded-pill bg-info">{holiday.hotel.content.vRating}<i className="fa fa-star" aria-hidden="true" style={{'margin': '2px'}}></i></span>
                <p className="card-text price-pp"><i className="fa fa-eur" aria-hidden="true"></i> {holiday.pricePerPerson} <sub>PP</sub></p>    
                <button className="btn btn-secondary">View Details</button>
            </div>
        </div>
    )
}