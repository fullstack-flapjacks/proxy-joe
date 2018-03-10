import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../client/src/components/Button';
import MenuButtons from '../client/src/components/MenuButtons';
import MenuCategory from '../client/src/components/MenuCategory';
import MenuItem from '../client/src/components/MenuItem';
import MenuSection from '../client/src/components/MenuSection';
import App from '../client/src/components/App';


describe('App component tests', () => {
  const wrapper = shallow(<App />);
  test('renders h2 menu title', () => {
    expect(wrapper.find('h2').text()).toEqual('Menu');
  });
  test('renders menu button components', () => {
    expect(wrapper.find(MenuButtons).length).toEqual(1);
  });
  test('MenuButton should have an object prop', () => {
    expect(typeof wrapper.find(MenuButtons).props().menuNames).toEqual('object');
  });
  test('MenuButton should have a function prop', () => {
    expect(typeof wrapper.find(MenuButtons).props().menuClick).toEqual('function');
  });
  test('renders menu section components', () => {
    expect(wrapper.find(MenuSection).length).toEqual(1);
  });
  test('MenuSection should have an object prop', () => {
    expect(typeof wrapper.find(MenuSection).props().menuCategories).toEqual('object');
  });
  test('renders the footer message correctly', () => {
    expect(wrapper.find('div.footer').text()).toEqual('Last updated: ');
  });
});

describe('MenuButtons component tests', () => {
  const wrapper = shallow(<MenuButtons menuNames={['hi']} menuClick={() => { 'hi'; }} />);
  test('should render a button for every element in props', () => {
    expect(wrapper.find(Button).length).toEqual(1);
  });
  test('Button should receive a name prop', () => {
    expect(wrapper.find(Button).props().menuName).toEqual('hi');
  });
  test('Button should receive a function prop', () => {
    expect(typeof wrapper.find(Button).props().menuClick).toEqual('function');
  });
});

describe('Button component tests', () => {
  const wrapper = shallow(<Button menuName="Lunch" menuClick={(x) => { x; }} />);
  test('button should receive a name prop', () => {
    expect(wrapper.find('button.menu-button').text()).toEqual('Lunch Menu');
  });
  test('button should have a click listener', () => {
    expect(wrapper.find('button.menu-button').simulate('click', 'hi'));
  });
});

describe('MenuSection component tests', () => {
  const wrapper = shallow(<MenuSection menuCategories={['Mains']} />);
  test('should render a MenuCategory for every element in props', () => {
    expect(wrapper.find(MenuCategory).length).toEqual(1);
  });
  test('MenuCategory should receive a name prop', () => {
    expect(wrapper.find(MenuCategory).props().menuCategory).toEqual('Mains');
  });
});

describe('MenuCategory component tests', () => {
  const wrapper = shallow(<MenuCategory menuCategory={[{ menuCategoryName: 'Starters' }]} />);
  test('should contain a h3 that has the category name', () => {
    expect(wrapper.find('h3').text()).toEqual('Starters');
  });
  test('should render a MenuItem for every element in props', () => {
    expect(wrapper.find(MenuItem).length).toEqual(1);
  });
});

describe('MenuItem component tests', () => {
  const wrapper = shallow(<MenuItem menuItem={{ menuItemName: 'poop', menuItemPrice: 2.95, menuItemDescription: 'it stinks' }} />);
  test('should render the menu item title from props', () => {
    expect(wrapper.find('div.menu-item-title').text()).toEqual('poop$2.95');
  });
  test('should render the menu item price prop', () => {
    expect(wrapper.find('div.menu-item-price').text()).toEqual('$2.95');
  });
  test('should render the menu item description prop', () => {
    expect(wrapper.find('p').text()).toEqual('it stinks');
  });
});
