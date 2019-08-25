// assets/javascripts/index.js

import React from 'react';
import ReactDOM from 'react-dom';

const HelloReact = props => (
  <div>Hello, React!</div>
);

function renderHello(id) {
  const el = document.getElementById(selector);
  ReactDOM.render(<HelloReact />, el);
}

export default {
  renderHello
}
renderHello('hello');
