import React, { Component } from 'react'
import axios from 'axios'
import ApiData from './ApiData'

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiData: [],
            showDataComponent: false
        }
    }
    componentDidMount = async () => {
        const url = `http://localhost:3050/drink`
        const request = await axios.get(url)
        this.setState({
            apiData: request.data,
            showDataComponent: true
        })
    }
    FavoriteItem= async(obj)=>{
        console.log(obj);
        await axios.post(`http://localhost:3050/drink/favorite`,obj)
    }
    render() {
        return (
            <>
                {
                    this.state.showDataComponent &&
                    <ApiData
                    apiData={this.state.apiData}
                    FavoriteItem={this.FavoriteItem}
                    />
                }
                
            </>
        )
    }
}

export default Main
