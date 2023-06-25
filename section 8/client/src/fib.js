import React,{Component} from "react";
import axios from 'axios';

class fib extends Component{
    state = {
        seenIndexes:[],
        values:{},
        index:''
    }
    componentDidMount() {
        this.fetchValues()
        this.fetchIndexes()
    }
    async fetchValues(){
        const values = await axios.get('/api/values/current')
        this.setState({values: values.data})
    }
}