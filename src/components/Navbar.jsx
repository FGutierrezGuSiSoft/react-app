import React from 'react';

function Navbar(props) {
  return (
    <header>
      <nav>
        <ul>
          { props.links.map((link, key) => (
            <li key={key}><a href={link.href}>{link.title}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
