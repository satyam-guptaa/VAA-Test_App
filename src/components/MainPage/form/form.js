import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css'
import '../form/form.css'

export default function Form({location, departureDate, handleLocationChange, dateValue, handleDateChange, handleSubmit, spin}) {
    return (
        <form className="location-form">
              <div className='input-field'>
                <h5 data-testid="inputHeader">Destination</h5>
                <input className="form-control" list="locations" data-testid="location" value={location} id="dataList" placeholder="Please select a location..." onChange={handleLocationChange}/>
                <datalist id="locations">
                  <option value="New-York"></option>
                  <option value="Toronto"></option>
                  <option value="Orlando"></option>
                  <option value="Barbados"></option>
                </datalist>
              </div>
              <div className='input-field'>
                <h5>Departure Date</h5>
                <DatePicker data-testid="datepicker" placeholderText='Departure Date' value={dateValue} minDate={new Date(new Date().getTime() + 24 * 60 * 60 * 1000)} onChange={(value) => handleDateChange(value)} dateFormat='dd-MM-yyy'/>
              </div>
              <button className='btn btn-danger search-btn input-field' data-testid="formBtn" disabled={location === '' ? true : false} onClick={handleSubmit}>Search</button>
              {
              spin &&
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              }
        </form>
    )
}