import React, { Component } from 'react';
import './Home.css';
import { iconName } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faQrcode, faLink, faStream, faCalendarWeek, faQuestionCircle, faSlidersH, faEnvelope } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {
    render() {
        return (
            <div>
              
              <div className="sidebar">
                <header>BI-FAM</header>
                <ul>
                  <li><a href="#"><FontAwesomeIcon icon={faQrcode} />Dashboard</a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faLink} />Shortcuts</a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faStream} />Overview</a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faCalendarWeek} />Events</a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faQuestionCircle} />About</a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faSlidersH} />Services</a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faEnvelope} />Contact</a></li>
                </ul>
              </div>
              <section></section>
            </div>
          );
    }
}

export default Home;