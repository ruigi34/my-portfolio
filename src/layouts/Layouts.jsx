import { Component } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

export default class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container pt-4">
          <Outlet />
        </div>
      </>
    );
  }
}
