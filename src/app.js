import React from 'react';
import Hello from './hello.js';

export default class App extends React.Component {
  render() {
    const users = [
      { _id: 1, name: 'John' },
      { _id: 2, name: 'Ringo' },
      { _id: 3, name: 'George' },
      { _id: 4, name: 'Paul' }
    ];

    return (
      <div>
        {
          users.map(function(user) {
            return <Hello key={user._id} name={user.name} />;
          })
        }
      </div>
    );
  }
}

/* Fin! */
