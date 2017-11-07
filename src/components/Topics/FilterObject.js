import React, { Component } from 'react';


class FilterObject extends Component {
    constructor() {
        super()

        this.state = {
            cars: [
                { make: 'Tesla', model: 'X', year: 2017 },
                { make: 'Suzuki', model: 'Samurai' },
                { make: 'Ford', model: 'Escape', year: 2016, owner: 'Me'}],
            userInput: '',
            filteredCars: []
        }
    }

    whenChanged(val) {
        this.setState({
            userInput: val
        })
    }

    whenClicked(prop) {
        var cars = this.state.cars
        var filteredCars = []

        for (var i = 0; i < cars.length; i++) {
            if (cars[i].hasOwnProperty(prop)) {
                filteredCars.push(cars[i])
            }
        }

        this.setState({
            filteredCars: filteredCars
        })
    }

    render() {
        return (
            <div className='puzzleBox filterObjectPB'>

                <h4> Filter Object </h4>

                <span className='puzzleText'> Original: {JSON.stringify(this.state.cars, null, 10)}</span>

                <input className='inputLine'
                    onChange={(e) => this.whenChanged(e.target.value)}></input>

                <button className='confirmationButton'
                    onClick={() => this.whenClicked(this.state.userInput)}> Filter </button>

                <span className='resultsBox filterObjectRB'> Filtered: {JSON.stringify(this.state.filteredCars, null, 10)}</span>

            </div>
        )
    }
}

export default FilterObject;