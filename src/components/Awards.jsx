import { Component } from 'react';
import { Card } from 'react-bootstrap';

const awards = [
  {
    title: 'Outstanding Frontend Developer Award',
    organization: 'Web Development Association',
    year: 2022,
    description: 'Recognized for exceptional contributions to frontend development.',
  },
  {
    title: 'Best User Interface Design',
    organization: 'Tech Innovators Summit',
    year: 2021,
    description: 'Awarded for designing an outstanding user interface in a web application.',
  },
];

export default class Awards extends Component {
  render() {
    return (
      <section>
        <h2>Awards</h2>
        {awards.map((award, index) => (
          <Card key={index} style={{ marginBottom: '1rem' }}>
            <Card.Body>
              <Card.Title>{award.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {award.organization}, {award.year}
              </Card.Subtitle>
              <Card.Text>{award.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </section>
    );
  }
}
