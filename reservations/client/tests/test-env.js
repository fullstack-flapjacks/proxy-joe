import $ from 'jquery';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Attach enzyme specific functions to global scope in node
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.$ = global.jQuery = $;

