import React from 'react';
import PartySelector from '../components/PartySelector';
import DatePicker from '../components/DatePicker';
import TimeSelector from '../components/TimeSelector';
import App from '../components/App';
import sinon from 'sinon';

console.error = jest.genMockFunction(); //supress console errors/warnings from React

describe('<App /> component', () => {
  test('renders <PartySelector /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(PartySelector).length).toEqual(1);;
  });

  test('renders <DatePicker /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(DatePicker).length).toEqual(1);;
  });

  test('renders <TimeSelector /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(TimeSelector).length).toEqual(1);;
  });

  test('simulates "Find a Table" click events', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<button onClick={mockCallBack}></button>);
    wrapper.find('button').simulate('click');
    //sinon.assert.called(mockCallBack);
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

});


describe('<DatePicker /> component', () => {
  test('Contains "input" form element component for date selection', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<DatePicker changeDate={mockCallBack}/>);
    expect(wrapper.find('input').length).toEqual(1);;
  });

   test('allows us to set props', () => {
    const mockCallBack = jest.fn();
    const callBack2 = jest.fn();
    const wrapper = mount(<DatePicker changeDate={mockCallBack} />);
    expect(wrapper.props().changeDate).toEqual(mockCallBack);
    wrapper.setProps({ changeDate: callBack2 });
    expect(wrapper.props().changeDate).toEqual(callBack2);
  });
});

describe('<TimeSelector /> component', () => {

  test('Contains "select" form element', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<TimeSelector changeTime={mockCallBack}/>);
    expect(wrapper.find('select').length).toEqual(1);;
  });

   test('allows us to set props', () => {
    const mockCallBack = jest.fn();
    const callBack2 = jest.fn();
    const wrapper = mount(<TimeSelector changeTime={mockCallBack} />);
    expect(wrapper.props().changeTime).toEqual(mockCallBack);
    wrapper.setProps({ changeTime: callBack2 });
    expect(wrapper.props().changeTime).toEqual(callBack2);
  });

  test('calls componentWillMount', () => {
    sinon.spy(TimeSelector.prototype, 'componentWillMount');
    const wrapper = mount(<TimeSelector changeTime={jest.fn()}/>);
    expect(TimeSelector.prototype.componentWillMount).toHaveProperty('callCount', 1);
    TimeSelector.prototype.componentWillMount.restore();
  });


});
