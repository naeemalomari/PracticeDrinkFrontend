import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

class ApiCrudData extends Component {
    render() {
        return (
            this.props.apiCrudData.map((obj, idx) => {
                return (
                    <div key={idx}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={obj.strDrinkThumb} alt="" />
                            <Card.Body>
                                <Card.Title>{obj.strDrink}</Card.Title>
                                <Card.Text>{obj.idDrink} </Card.Text>
                                <Button variant="success" onClick={e => this.props.deleteItem(obj._id)}>delete me from favorite</Button>
                                <Button variant="success" onClick={e => this.props.updateItem(obj._id)}>update me from favorite</Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })
        )
    }
}

export default ApiCrudData
