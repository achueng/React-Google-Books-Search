import React from "react";
import { Container, Jumbotron, Form, Button, Row, Col } from "react-bootstrap";

function BookSearch(props) {
    return (
        <Container fluid className="px-4">
            <Jumbotron>
                <h3 className="px-4">Book Search</h3>
                <Form className="px-4">
                    <Form.Group controlId="formSearchBook">
                        <Form.Label>Book</Form.Label>
                        <Row>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Enter a book title" 
                                name="title"
                                onChange={props.handleChange}
                                />
                            </Col>
                            <Col sm={1}>
                                <Button 
                                variant="primary"
                                type="submit"
                                onSubmit={props.handleSubmit}
                                >
                                    Search
                            </Button>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Jumbotron>
        </Container>
    )
}

export default BookSearch;