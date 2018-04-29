import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDom from 'react-dom';

//Setup testing environment to run like a browser
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);

//build renderComponent
function renderComponent(ComponentClass){
  const componentInstance = TestUtils.renderIntoDocument(<ComponentClass/>);

  return $(ReactDom.findDOMNode(componentInstance));
}

//Build helper for simulating events


//Setup chai-jquery