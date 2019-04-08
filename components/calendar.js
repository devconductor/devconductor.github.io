import { timeUtils } from './../utils/time'

class Calendar extends React.Component {

    state = {
        dateDown: { days: 0, hours: 0, minutes: 0, seconds: 0, intervalId: 0 }
    }

    componentDidMount() {
        const intervalId = setInterval(() => {
            this.setState({
                ...this.state,
                dateDown: timeUtils.getDifference(this.props.dateStartEvent),
                intervalId: intervalId
            })
        }, 1000)
    }

    componentWillMount() {
        clearInterval(this.state.intervalId)
    }

    render() {

        const { days, hours, minutes, seconds} = this.state.dateDown

        if (timeUtils.todayIsLessThanDateCompare(this.props.dateStartEvent)) {

            return (
                <div className="time-down">
                    <div className="time">
                        <p>{days}</p>
                        <label>DIAS</label>
                    </div>
                    <span>:</span>
                    <div className="time">
                        <p>{hours}</p>
                        <label>HORAS</label>
                    </div>
                    <span>:</span>
                    <div className="time">
                        <p>{minutes}</p>
                        <label>MINUTOS</label>
                    </div>
                    <span>:</span>
                    <div className="time">
                        <p>{seconds}</p>
                        <label>SEGUNDOS</label>
                    </div>
                </div>
            )
        }

        if (timeUtils.todayIsLessThanDateCompare(this.props.dateFinishEvent)) {
            clearInterval(this.state.intervalId) 
            return <div><h2>Evento em andamento!</h2></div>
        }

        clearInterval(this.state.intervalId) 
        return <div><h2>Evento encerrado!</h2></div>
    }
}

Calendar.defaultProps = {
    dateEvent: "04/22/2019"
}

export default Calendar