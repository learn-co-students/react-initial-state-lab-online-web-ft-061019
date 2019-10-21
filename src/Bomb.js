// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super()

        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        const countDown = this.state.secondsLeft !== 0 && this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'

        return(
            <h3>{countDown}</h3>
        )
    }

}

export default Bomb