import React from 'react'

class AnimatedNumber extends React.Component {

    state = {
        numberInitial: 0,
        numberFinal: 0,
        intervalId: 0,
        started: false
    }

    componentDidMount() {
        const intervalId = setInterval(() => {
            if (this.state.started) {
                this.increment()
            } else {
                this.setState({ ...this.state, numberFinal: this.props.number, intervalId: intervalId, started: true })
            }
        }, 100)
    }

    increment = () => {
        if (this.state.started && this.props.startAnimation) {
            const { numberInitial, numberFinal } = this.state
            const percent = parseInt(numberFinal * 0.05)
            const numberPlus = percent > 0 ? percent : 1

            const newNumber = numberInitial + numberPlus

            if (newNumber >= numberFinal) {
                clearInterval(this.state.intervalId)
                this.setState({ ...this.state, started: false, numberInitial: numberFinal })
            } else {
                this.setState({ ...this.state, numberInitial: newNumber })
            }
        }
    }

    render() {
        return this.state.numberInitial
    }
}

export default AnimatedNumber