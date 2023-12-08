import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <section>
        <div>
          <h1 className="fs-4">Hello im Irgi and welcome to my portFolio</h1>
          <Link className="btn btn-primary" to="/about">
            Learn more
          </Link>
        </div>
      </section>
    );
  }
}
