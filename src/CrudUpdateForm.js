import React, { Component } from 'react'

export class CrudUpdateForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.updateItem}/>
                <input type="text" defaultValue={this.props.strDrink} onChange={this.props.updateDrinkState} name="input"/>
                <input type="submit" value="updateData" />
            </div>
        )
    }
}

export default CrudUpdateForm;