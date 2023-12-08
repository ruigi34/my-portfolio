import { Component } from 'react';
import { Card } from 'react-bootstrap';

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Tech Innovations Co.',
    location: 'City, Country',
    startDate: 'January 2021',
    endDate: 'Present',
    description: 'Developing and maintaining responsive and user-friendly web applications.',
  },
  {
    title: 'Junior Web Developer',
    company: 'Web Solutions Ltd.',
    location: 'City, Country',
    startDate: 'June 2019',
    endDate: 'December 2020',
    description: 'Assisted in the development and deployment of web projects.',
  },
];

export default class Experience extends Component {
  render() {
    return (
      <section>
        <h2>Work Experience</h2>
        {experiences.map((experience, index) => (
          <Card key={index} style={{ marginBottom: '1rem' }}>
            <Card.Body>
              <Card.Title>{experience.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {experience.company} - {experience.location}
              </Card.Subtitle>
              <Card.Text>
                {experience.startDate} - {experience.endDate}
              </Card.Text>
              <Card.Text>{experience.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </section>
    );
  }
}
