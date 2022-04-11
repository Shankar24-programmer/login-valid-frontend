import React from 'react'
import {CardTitle, Card, CardText, Button} from 'reactstrap'
import Login2 from '../components/Login2'
export default function Main() {
    return (
        <div>
            <Login2  />
            <Card style={{"marginTop":"60px"}}
                body
                className="text-center"
            >
                <CardTitle tag="h5">
                    Welcome
                </CardTitle>
                <CardText>
                    This is Home page
                </CardText>
                <Button>
                    Go Somewhere
                </Button>
            </Card>
        </div>
    )
}
