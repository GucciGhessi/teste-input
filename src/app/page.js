"use client"
import { Component } from "react"
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Card, CardBody } from 'reactstrap';
import { Icon } from '@mdi/react';
import { mdiAccount } from '@mdi/js';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export class Login extends Component {  
  
  constructor() {
        super();
        this.state = {
            showPassword: false,
        };
    }
    toggleShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    render() {
        return (
            <Container className="d-flex justify-content-center align-items-center min-vh-100">
                <Row>
                    <Col md="6">
                        <Card style={{width: '600px' }}>
                            <CardBody>
                                <div className="text-center mb-4">
                                    <Icon
                                        path={mdiAccount}
                                        title="User Profile"
                                        size={5}
                                        horizontal
                                        vertical
                                        rotate={180}
                                        color="black"
                                    />
                                </div>
                                <Form>
                                    <FormGroup>
                                        <Label for="login">LOGIN</Label>
                                        <Input
                                            type="text"
                                            id="login"
                                            placeholder="Digite seu login"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="senha">SENHA</Label>
                                        <div className="d-flex">
                                            <Input
                                                type={this.state.showPassword ? "text" : "password"}
                                                placeholder="Digite sua senha"
                                            />
                                            <Button
                                                type="button"
                                                color="secondary"
                                                onClick={this.toggleShowPassword}
                                                style={{ marginLeft: '10px' }}
                                            >
                                                {this.state.showPassword ? <FaEyeSlash /> : <FaEye />}
                                            </Button>
                                        </div>
                                    </FormGroup>
                                    <div className="text-center mb-3">
                                        <a href="#">ESQUECI A SENHA</a>
                                    </div>
                                    <Button type="submit" color="primary" block>ENTRAR</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Login;
