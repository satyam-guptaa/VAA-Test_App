import React, {useEffect, useState} from 'react'
import axios from "axios"
import moment from 'moment'
import Form from './form/form'
import Results from '../results/results'
import imgOne from '../img/1.jpg'
import imgTwo from '../img/2.jpg'
import imgThree from '../img/3.jpg'
import imgFour from '../img/4.jpg'
import MyCarousel from './carousel/carousel'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MainPage() {
    const [location,setLocation] = useState('')
    const [departureDate, setDepartureDate] = useState('')
    const [dateValue, setDateValue] =  useState()
    const [holidays, setHolidays] = useState([])
    const [filteredHoliday, setFilteredHoliday] = useState([])
    const [selectedPrice, setSelectedPrice] = useState([0,999999])
    const [selectedRating, setSelectedRating] = useState(null)
    const [selectedFacilities, setSelectedFacilities] = useState([])
    const [spin, setSpin] = useState(false)
    const [inputCheckbox, setInputCheckbox] = useState()

    const data = {
      location: location.toLowerCase(),
      departureDate,
      bookingType: "hotel",
      duration: "7",
      partyCompositions: [{
          adults: 2
      }]
    }
    const images = [imgOne, imgTwo, imgThree, imgFour]
    // To change the format of date getting from react date picker
    useEffect(()=>{
        const depDate = moment(dateValue).format('DD-MM-YYYY')
        setDepartureDate(depDate)
    }, [dateValue])

    // Running the filter function upon change in selected filters
    useEffect(()=>{applyFilter()}, [selectedPrice, selectedRating, selectedFacilities])

    // Removing the filters if user changes the location
    useEffect(()=>{
      setSelectedFacilities([])
      setSelectedPrice([0,999999])
      setSelectedRating(null)
      if(inputCheckbox) inputCheckbox.current.forEach(item => item.current.checked = false)},[holidays])

    const handleLocationChange = (e) => {
      setLocation(e.target.value)
    }
    const handleDateChange = (dat) => {
      setDateValue(dat)
    }

    const handleSubmit = async(e) => {
      e.preventDefault()
      try {
        setSpin(true)
        const response = await axios.post("https://www.virginholidays.co.uk/cjs-search-api/search", data, {headers: {'Content-Type': 'application/json'}})
        setHolidays(response.data.holidays)
        setFilteredHoliday(response.data.holidays)
        setSpin(false)
      } catch (error) {
        toast.error("Something went wrong, Please try again later", {autoClose: 5000, position: 'top-right'});
        setSpin(false)
        console.log(error)
      }
    }

    const handlePriceFilter = (rangeArray) => {
      setSelectedPrice(rangeArray)
    }

    const handleRatingFilter = (rating) => {
      setSelectedRating(rating)   
    }
    
    const handleFacilityFilter = (e, inputRefs) => {
      setInputCheckbox(inputRefs)
      let facility = e.target.value
      let isNeeded = e.target.checked
      if(isNeeded) setSelectedFacilities(prevState => [...prevState, facility])
      if(!isNeeded)  setSelectedFacilities(prevState => prevState.filter(item => item!=facility))
    }

    const handleRemoveFilter = (inputRefs) => {
      setSelectedFacilities([])
      setSelectedPrice([0,999999])
      setSelectedRating(null)
      setFilteredHoliday(holidays)
      if(inputRefs) inputRefs.current.forEach(item => item.current.checked = false)
    }


    const applyFilter = () => {
      let filteredResult = holidays
      if(selectedPrice) {
        filteredResult = filteredResult.filter(holiday => holiday.pricePerPerson >= selectedPrice[0] && holiday.pricePerPerson <= selectedPrice[1]) 
      }
      if(selectedRating) {
        filteredResult = filteredResult.filter(holiday => parseInt(holiday.hotel.content.vRating) >= selectedRating)
      }
      if(selectedFacilities) {
        filteredResult = filteredResult.filter(holiday => selectedFacilities.every((requiredFacilities => holiday.hotel.content.hotelFacilities.includes(requiredFacilities))))
      }
      setFilteredHoliday(filteredResult)
    }

    return ( 
      <>
        <ToastContainer/>
        <Form location={location} handleLocationChange={handleLocationChange} dateValue={dateValue} handleDateChange={handleDateChange} handleSubmit={handleSubmit} spin={spin}/>
        <hr />
        {holidays.length > 0 && 
          <Results holidays={filteredHoliday} handlePriceFilter={handlePriceFilter} handleRatingFilter={handleRatingFilter} handleFacilityFilter={handleFacilityFilter} handleRemoveFilter={handleRemoveFilter}/>
        }
        {holidays.length === 0 &&
          <>
            <h1 style={{"textAlign": "center"}}>Welcome to Vigin Atlantic Holidays</h1>
            <MyCarousel images={images}/>
          </>
        }
      </>
    )
}