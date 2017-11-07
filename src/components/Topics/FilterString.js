import React, { Component } from 'react';


class FilterString extends Component {
    constructor() {
        super()

        this.state = {
            sayings: [
                'Sticks', 'Stones', 'Zebra', 'Zoo', 'Xylophone', 'Wood', 'Mail', 'Tv', 'Bear', 'Alphabet', 'Quail', 'Geronimo', 'Reeses', 'Three-musketeers'
            ],
            userInput: '',
            filteredSayings: []
        }



    }

    handleChange(val) {
        this.setState({
            userInput: val
        })
    }


    filteredSayings(userInput) {
        var sayings = this.state.sayings
        var filteredSayings = []

        for (var i = 0; i < sayings.length; i++) {
            if (sayings[i].includes(userInput)) {
                filteredSayings.push(sayings[i])
            }
        }

        this.setState({
            filteredSayings: filteredSayings
        })
    }


    render() {
        return (
            <div className='puzzleBox filterStringPB'>

                <h4> Filter String </h4>

                <span className='puzzleText'> Words: {JSON.stringify(this.state.sayings, null, 10)}</span>

                <input className='inputLine'
                    onChange={(e) => this.handleChange(e.target.value)}></input>

                <button className='confirmationButton'
                    onClick={() => this.filteredSayings(this.state.userInput)}> Filter </button>

                <span className='resultsBox filterStringRB'> Filtered: {JSON.stringify(this.state.filteredSayings, null, 10)}</span>

            </div>
        )
    }
}

export default FilterString;