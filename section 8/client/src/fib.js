import React, {Component} from "react";
import axios from 'axios';

class fib extends Component {
    state = {
        seenIndexes: [],
        values: {},
        index: ''
    }

    componentDidMount() {
        this.fetchValues()
        this.fetchIndexes()
    }

    async fetchValues() {
        const values = await axios.get('/api/values/current')
        this.setState({values: values.data})
    }

    async fetctIndexes() {
        const seenIndexes = await axios.get('/api/values/current')
        this.setState({
            seenIndexes: seenIndexes.data
        })
    }
    handleSubmit = async (event)=>{
        event.preventDefault();
        await axios.post('/api/values', {
            index: this.state.index
        })
        this.setState({ index: ''})
    }

    renderSeenIndexes() {
        return this.state.seenIndexes.map(({number}) => number).join(', ')
    }

    renderValues() {
        const entries =[];
        for (let key in this.state.values){
            entries.push(
                <div key={key}>
                    for index {key} i calculated {this.state.values[key]}
                </div>
            )
        }
        return entries
    }

    render() {
        return (
            <dv>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter your index:</label>
                    <input
                    value={this.state.index}
                    onChange={event => this.setState({index: event.target.value})}
                    />
                    <button>Submit</button>
                </form>
                <h3>Indexes i have seen:</h3>
                {this.renderSeenIndexes()}
                <h3>Calculated values:</h3>
                {this.renderValues()}

            </dv>
        )
    }
}