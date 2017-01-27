import React from 'react';

/* Hello Component */
export default class Hello extends React.Component {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
    [
      <Hello key={1} name={'John'}/>,
      <Hello key={2} name={'Ringo'}/>,
      <Hello key={3} name={'Paul'}/>,
      <Hello key={4} name={'George'}/>
    ]
};

/* Fin! */
