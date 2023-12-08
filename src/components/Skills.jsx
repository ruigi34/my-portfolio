import { Component } from 'react';
import { Badge } from 'react-bootstrap';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'Git', 'Responsive Design'];

export default class Skills extends Component {
  render() {
    return (
      <section>
        <h2>Skills</h2>
        <div>
          {skills.map((skill, index) => (
            <Badge key={index} pill variant="primary" className="p-3" style={{ margin: '0.5rem' }}>
              {skill}
            </Badge>
          ))}
        </div>
      </section>
    );
  }
}
