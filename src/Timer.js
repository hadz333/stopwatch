import React, { Component } from 'react'

class Timer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			second: 0,
			decimal: 0,
			minute: 0,
			hour: 0
		}
	}

	render() {
		const {second} = this.state
		const {decimal} = this.state
		const {minute} = this.state
		return (
			<div>
				<h1>{minute}:{second}.{decimal}</h1>
			</div>
		)
	}

	componentDidMount() {

		this.myInterval = setInterval(() => {
			this.setState({
				second: this.state.second + 1,
			})
			if (this.state.second == 60) {
				this.setState({
					second: 0
				})
			}
			
		}, 1000)

		this.decimalInterval = setInterval(() => {
			this.setState({
				decimal: this.state.decimal + 1
			})
			if (this.state.decimal == 10) {
				this.setState({
					decimal: 0
				})
			}
		}, 100)

		this.minuteInterval = setInterval(() => {
			this.setState({
				minute: this.state.minute + 1
			})
			if (this.state.minute == 60) {
				this.setState({
					minute: 0,
					hour: this.state.hour + 1
				})
			}
		}, 60000)
	}

	componentWillUnmount() {
		clearInterval(this.myInterval);
		clearInterval(this.decimalInterval);
		clearInterval(this.minuteInterval);
	}
}

export default Timer