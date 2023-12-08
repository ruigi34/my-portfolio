import { Component } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const interests = [
  'Open Source Contributions',
  'UI/UX Design',
  'Reading Web Development Blogs',
  'Attending Tech Meetups',
];

export default class Interest extends Component {
  render() {
    return (
      <section>
        <h2>Interests</h2>
        <Card style={{ marginBottom: '1rem' }}>
          <ListGroup variant="flush">
            {interests.map((interest, index) => (
              <ListGroupItem key={index}>{interest}</ListGroupItem>
            ))}
          </ListGroup>
        </Card>
      </section>
    );
  }
}
