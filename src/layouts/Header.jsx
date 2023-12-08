import { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              My Portfolio
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" routerlinkactive="active">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about" routerlinkactive="active">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/experience" routerlinkactive="active">
                    Experience
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/skills" routerlinkactive="active">
                    Skills
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/interest" routerlinkactive="active">
                    Interest
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/awards" routerlinkactive="active">
                    Awards
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
