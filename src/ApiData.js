import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
class ApiData extends Component {
    render() {
        return (
            this.props.apiData.map((obj, idx) => {
                return (
                    <div key={idx}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={obj.strDrinkThumb} alt="" />
                            <Card.Body>
                                <Card.Title>{obj.strDrink}</Card.Title>
                                <Card.Text>{obj.idDrink} </Card.Text>
                                <Button variant="warning" onClick={e=> this.props.FavoriteItem(obj)}>add me to favorite</Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })
        )
    }
}

export default ApiData
