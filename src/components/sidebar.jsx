import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar">
        <div className="header">
          <h2>
            React
          </h2>
          <ul>
            <li>
              <p>Example</p>
              <a href="/#">Source</a>
            </li>
            <li>
              <p>React + Backbone.js
              </p>
              <a href="/#">Demo, </a>
              <a href="/#">Source</a>
            </li>
            <li>
              <p>Scala.js + React
              </p>
              <a href="/#">Demo, </a>
              <a href="/#">Source</a>
            </li>
            <li>
              <p>
                TypeScript + React
              </p>
              <a href="/#">Demo, </a>
              <a href="/#">Source</a>

            </li>
          </ul>
        </div>
        <div className="quote">
          <div className="quote__wrapper">
            <p>
              React is a JavaScript library for creating user interfaces. Its core principles are declarative code,
              efficiency, and flexibility. Simply specify what your component looks like and React will keep it
              up-to-date when the underlying data changes
            </p>
          </div>
          <a href="/#">React</a>
        </div>
        <div className="resources">
          <div className="menu first__menu">
            <h2>
              Official Resources
            </h2>
            <ul>
              <li>
                <a href="/#">Tutorial</a>
              </li>
              <li>
                <a href="/#">Philosophy</a>
              </li>
              <li>
                <a href="/#">Support</a>
              </li>
              <li>
                <a href="/#">Flux architecture example</a>
              </li>
            </ul>
          </div>
          <div className="menu second__menu">
            <h2>
              Community
            </h2>
            <ul>
              <li>
                <a href="/#">ReactJS on Stack Overflow</a>
              </li>
              <li>
                <a href="/#">Google Groups Mailing List</a>
              </li>
              <li>
                <a href="/#">IRC</a>
              </li>
            </ul>
          </div>
  
        </div>
        <div className="footer">
          <p>
            If you have other helpful links to share, or find any of the links above no longer work, please <a href="/#">let us know.</a>
          </p>
        </div>
      </div>
    )
}
export default Sidebar;