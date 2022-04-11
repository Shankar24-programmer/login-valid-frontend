import React from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login1 from '../components/Login1'
export default function Signup() {
  return (
    <div>
        <Login1 />
        <Container justify="center" style={{ "marginLeft": "33%" }}>
                <CardTitle tag="h1" className="my-5">Signup</CardTitle>
                <Form>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleEmail">Username</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="enter your username" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Email address</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="enter your email address" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Password</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="enter your password" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Confirm password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="enter your password" />
                            </FormGroup>
                            <Button className="col-md-4 col-md-offset-3 my-3" color="primary" style={{ "marginLeft": "30%" }}>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
    </div>
  )
}
