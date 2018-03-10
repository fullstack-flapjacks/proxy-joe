import Title from '../client/src/components/Title.jsx';
import Ratings from '../client/src/components/Ratings.jsx';
import TopTags from '../client/src/components/TopTags.jsx';
import Description from '../client/src/components/Description.jsx';
import Maps from '../client/src/components/Map.jsx';
import RightAbout from '../client/src/components/RightAbout.jsx';
import LeftAbout from '../client/src/components/LeftAbout.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import render from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

let mockData = () => {};

//renders a title
test('render a title', () => {
  const wrapper = shallow(
    <Title restaurant={mockData}/>
  );
  expect(wrapper).toMatchSnapshot();
});

//renders the ratings component
test('render the ratings', () => {
  const wrapper = shallow(
    <Ratings restaurant={mockData}/>
  );
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.type()).toEqual('div');
});

//renders the Description component
test('render the description', () => {
  const wrapper = shallow(
    <Description restaurant={mockData}/>
  );
  expect(wrapper).toMatchSnapshot();
});

//render the Map component
test('render the map', () => {
  const wrapper = shallow(
    <Maps restaurant={mockData}/>
  );
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.type()).toEqual('span');
});

//render the left column of the information table
test('render the left column of the information table', () => {
  const wrapper = shallow(
    <LeftAbout restaurant={mockData}/>
  );
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.type()).toEqual('span');
});

//render the right column of the information table
test('render the right column of the information table', () => {
  let mock = mockData('description');
  const wrapper = shallow(
    <RightAbout restaurant={mockData} />
  );
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.type()).toEqual('span');
});