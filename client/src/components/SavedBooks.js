import React from "react";
import { Container, Jumbotron, ListGroup } from "react-bootstrap";

function SavedBooks() {
    return (
        <Container fluid className="px-4">
            <Jumbotron>
                <h3 className="px-4 mb-2">Saved Books</h3>
                <h6 className="px-4 mb-2 text-muted">Click on the entry to remove the book from Saved Books.</h6>
                <ListGroup className="mx-4">
                    <ListGroup.Item action variant="light">
                        Test Book Entry
                    </ListGroup.Item>
                </ListGroup>
            </Jumbotron>
        </Container>
    )
}

export default SavedBooks;