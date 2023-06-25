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

    renderSeenIndexes() {
        return this.state.seenIndexes.map(({number}) => number).join(', ')
    }

    renderValues() {
        
    }

    render() {
        return (
            <dv>
                <form>
                    <label>Enter your index:</label>
                    <input/>
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