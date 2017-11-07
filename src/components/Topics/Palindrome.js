import React, { Component } from 'react';


class Palindrome extends Component {

    constructor() {
        super()

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

handleChange(val) {
    this.setState({
        userInput: val
    })
}

checkPalindrome(userInput) {
    var forwards = userInput
    var backwards = userInput.split('').reverse().join('')

    if (forwards === backwards) {
        this.setState({
            palindrome: 'True'
        })
    } else {
        this.setState({
            palindrome: 'False'
        })
    }

}




    render() {
        return (
            <div className='puzzleBox filterStringPB'>

                <h4> Palindrome </h4>

                <input className='inputLine'
                    onChange={(e) => this.handleChange(e.target.value)}></input>

                <button className='confirmationButton'
                onClick={() => this.checkPalindrome(this.state.userInput)}> Check for Palindrome </button>

                <span className='resultsBox'> Palindrome: {this.state.palindrome} </span>

            </div>
        )
    }
}

export default Palindrome;