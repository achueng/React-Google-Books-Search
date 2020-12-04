import React from "react";
import { Container, Jumbotron, ListGroup, Button, Row, Col } from "react-bootstrap";

function SearchResults() {
    return (
        <Container fluid className="px-4">
            <Jumbotron>
                <h3 className="px-4 mb-2">Book Search Results</h3>
                <h6 className="px-4 mb-2 text-muted">Click on the entry to save the book.</h6>
                <ListGroup className="mx-4">
                    <ListGroup.Item action variant="light">
                        Test Book Entry
                    </ListGroup.Item>
                </ListGroup>
            </Jumbotron>
        </Container>
    )
}

export default SearchResults;