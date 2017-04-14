
/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import ToggleIconButtonWidget from 'paraviewweb/src/React/Widgets/ToggleIconButtonWidget';
import TestComponent from './TestComponent'

const container = document.querySelector('#app');
// Load CSS
require('normalize.css');
require('font-awesome/css/font-awesome.css');
document.body.style.padding = '10px';

/* global document */

function onChange(value, name) {
    console.log(name, ' => ', value);
}

const elements = (
<div>
  <h1>Test</h1>
  <ToggleIconButtonWidget name="wifi" icon="fa-wifi" value onChange={ onChange } />
  <ToggleIconButtonWidget name="btooth" icon="fa-bluetooth" value={ false } onChange={ onChange } />
  <ToggleIconButtonWidget name="a" icon="fa-at" onChange={ onChange } />
  <ToggleIconButtonWidget name="b" icon="fa-ban" toggle onChange={ onChange } />
  <ToggleIconButtonWidget name="check" icon="fa-check-square-o" iconDisabled="fa-square-o" onChange={ onChange } />
  <TestComponent></TestComponent>
</div>
)

ReactDOM.render(elements, container);

container.style.margin = 0;

