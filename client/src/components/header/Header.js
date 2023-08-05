import React, {useState} from 'react';
import './header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faBed,
    faPlane,
    faCab,
    faTaxi,
    faCalendarDays,
    faPerson
} from '@fortawesome/free-solid-svg-icons';
import {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from 'date-fns';

const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false)

    const [date, setDate] = useState([{
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        },]);
    const [options, setOptions] = useState({adult: 1, children: 0, room: 1})
    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1
            }
        })
    }

    return (
        <div className="header">
            <div className="headercontainer">
                <div className="headerlist">
                    <div className="headerlistitem">
                        <FontAwesomeIcon icon={faBed}/>
                        <span>Stays</span>
                    </div>
                    <div className="headerlistitem">
                        <FontAwesomeIcon icon={faPlane}/>
                        <span>Flights</span>
                    </div>
                    <div className="headerlistitem">
                        <FontAwesomeIcon icon={faCab}/>
                        <span>Car</span>
                    </div>
                    <div className="headerlistitem">
                        <FontAwesomeIcon icon={faTaxi}/>
                        <span>Airport taxi</span>
                    </div>
                    <div className="headerlistitem">
                        <FontAwesomeIcon icon={faBed}/>
                        <span>More rooms</span>
                    </div>
                </div>
            {type==='list'?'':<><h1 className="headertitle">A lifetime of discounts? It's Genius</h1>
            <p className="headerdescription">
                Get rewarded for your travels, unlock instant savings of 10% or more with a free Hotelbooking account
            </p>
                <button className="headerbutton">Sign in / Register</button>
                <div className="headersearch">
                    <div className="headersearchitem">
                        <FontAwesomeIcon icon={faBed}
                            className="headericon"/>
                        <input type="text" placeholder="Where are you going" className="headersearchinput"/>
                    </div>
                    <div className="headersearchitem">
                        <FontAwesomeIcon icon={faCalendarDays}
                            className="headericon"/>
                        <span onClick={
                                () => setOpenDate(!openDate)
                            }
                            className="headersearchtext">
                            {
                            `${
                                format(date[0].startDate, 'MM/dd/yyyy')
                            } to ${
                                format(date[0].endDate, 'MM/dd/yyyy')
                            }`
                        } </span>
                        {
                        openDate && (
                            <DateRange editableDateInputs={true}
                                onChange={
                                    (item) => setDate([item.selection])
                                }
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="date"/>
                        )
                    } </div>
                    <div className="headersearchitem">
                        <FontAwesomeIcon icon={faPerson}
                            className="headericon"/>
                        <span onClick={
                                () => {
                                    setOpenOptions(!openOptions)
                                }
                            }
                            className="headersearchtext">
                            {
                            `${
                                options.adult
                            } adult . ${
                                options.children
                            } children . ${
                                options.room
                            } room`
                        }</span>
                        {
                        openOptions && <div className="options">
                            <div className="optionitem">
                                <span className='optionText'>Adult</span>
                                <div className="optioncounter">
                                    <button disabled={
                                            options.adult <= 0
                                        }
                                        className="optioncounterbutton"
                                        onClick={
                                            () => handleOption("adult", "d")
                                    }>
                                        -
                                    </button>
                                    <span className="optioncounternumber">
                                        {
                                        `${
                                            options.adult
                                        }`
                                    }</span>
                                    <button className="optioncounterbutton"
                                        onClick={
                                            () => handleOption("adult", "i")
                                    }>
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="optionitem">
                                <span className='optionText'>children</span>
                                <div className="optioncounter">
                                    <button disabled={
                                            options.children <= 0
                                        }
                                        className="optioncounterbutton"
                                        onClick={
                                            () => handleOption("children", "d")
                                    }>
                                        -
                                    </button>
                                    <span className="optioncounternumber">
                                        {
                                        `${
                                            options.children
                                        }`
                                    }</span>
                                    <button className="optioncounterbutton"
                                        onClick={
                                            () => handleOption("children", "i")
                                    }>
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="optionitem">
                                <span className='optionText'>room</span>
                                <div className="optioncounter">
                                    <button disabled={
                                            options.room <= 0
                                        }
                                        className="optioncounterbutton"
                                        onClick={
                                            () => handleOption("room", "d")
                                    }>
                                        -
                                    </button>
                                    <span className="optioncounternumber">
                                        {
                                        `${
                                            options.room
                                        }`
                                    }</span>
                                    <button className="optioncounterbutton"
                                        onClick={
                                            () => handleOption("room", "i")
                                    }>
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    } </div>

                    <div className="headersearchitem">
                        <button className="headerbutton">Search</button>
                    </div>
                </div></>}
            </div>
        </div>
    );
};

export default Header;
