import React, { Component } from 'react'
import axios from 'axios';
import ApiCrudData from './ApiCrudData'
import CrudUpdateForm from './CrudUpdateForm'
export class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiCrudData: [],
            showCrudDataComponent: false,
            showUpdateForm: false,
            strDrink: "",
            strDrinkThumbnail: "",
            idDrink: "",
        }
    }
    componentDidMount = async () => {
        const requestResult = await axios
            .get(`http://localhost:3050/drink/favorite`)
        this.setState({
            apiCrudData: requestResult.data,
            showCrudDataComponent: true
        })
    }
    deleteItem = async (_id) => {
        await axios
            .delete(`https://localhost:3050/drink/favorite/${_id}`)
        const newCrudData = this.state.apiCrudData.filter(obj => obj._id !== _id)
        this.setState({
            apiCrudData: newCrudData,
        })
    }
    updateDrinkState = async (e) => {
        this.setState({
            strDrink: e.target.input.value,
        })
    }
    showUpdateForm = (strDrink, _id) => {

        this.setState({
            showUpdateForm: true,
            strDrink: strDrink,
        })

    }
    updateItem = async (e, x) => {
        e.preventDefault();
        const y = { strDrink: e.target.input.value }
        const updateRequest = await axios.put(`http://localhost:3050/drink/favorite/${x}`, y)
        console.log(updateRequest.data);
    }
    render() {
        return (
            <>
                {
                    this.showUpdateForm &&
                    <CrudUpdateForm
                        updateItem={this.state.updateItem}
                        updateDrinkState={this.updateDrinkState}
                        strDrink={this.state.strDrink}

                    />
                }
                {this.state.showCrudDataComponent &&
                    <ApiCrudData
                        apiCrudData={this.state.apiCrudData}
                        deleteItem={this.deleteItem}
                        showUpdateForm={this.showUpdateForm}
                    />
                }
            </>
        )
    }
}

export default Favorite
