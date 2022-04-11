import React, { useState} from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login1 from '../components/Login1'
import axios from 'axios';


export default function Login() {
    const [data, setData] = useState({username: "", password: ""});

    const handleChange = ({ currentTarget: input }) => {
        setData({...data, [input.name]: input.value});
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/login', data)
        .then(response => alert(response.data.msg))
        .catch(error => {
            alert(error.response.data)
        });
    }
    return (
        <div>
            <Login1 />
            <Container justify="center" style={{ "marginLeft": "33%" }}>
                <CardTitle tag="h1" className="my-5">Login</CardTitle>
                <Form onSubmit={handleSubmit}>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleEmail">Username</Label>
                                <Input type="name" name="username" onChange={handleChange} value={data.username} id="exampleEmail" placeholder="enter your username" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" onChange={handleChange} value={data.password} id="examplePassword" placeholder="enter your password" />
                            </FormGroup>
                            <Button className="col-md-4 col-md-offset-3 my-3" style={{ "marginLeft": "30%" }} color="primary">
                                Login
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>

        </div>
    )
}
