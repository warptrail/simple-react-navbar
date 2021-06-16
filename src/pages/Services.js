import React from 'react';
import { Link } from 'react-router-dom';

import { MenuItems } from '../components/MenuItems';

function Services() {
  return (
    <div className="services-container">
      <h2>Services</h2>
      <ul>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.path}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Services;
