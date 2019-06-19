import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import { shallow } from 'enzyme';
import ClockTower from '../components/ClockTower';

const wrapper = shallow(<ClockTower />);
wrapper.setState({ runSpeed: 0 });
//const startTimeInput = wrapper.find('.digitalClock input').at(0);
//const endTimeInput = wrapper.find('.digitalClock input').at(1);
const startClockButton = wrapper.find('button').at(0);
const stopClockButton = wrapper.find('button').at(1);


test('Buttons should be enabled or disabled properly', () => {
    expect(startClockButton.props().disabled).toEqual('');
    expect(stopClockButton.props().disabled).toEqual('disabled');
})

test('Bell Count should equal 5', () => {
    wrapper.setState({ startTime: {
        hour: 2,
        minute: 0
    }});
    wrapper.setState({ endTime: {
        hour: 3,
        minute: 0
    }});
    startClockButton.simulate('click');
    expect(wrapper.state().bellCount).toEqual(5);
})

test('Bell Count should equal 5 again', () => {
    wrapper.setState({ startTime: {
        hour: 14,
        minute: 0
    }});
    wrapper.setState({ endTime: {
        hour: 15,
        minute: 0
    }});
    startClockButton.simulate('click');
    expect(wrapper.state().bellCount).toEqual(5);
})

test('Bell Count should equal 3', () => {
    wrapper.setState({ startTime: {
        hour: 14,
        minute: 23
    }});
    wrapper.setState({ endTime: {
        hour: 15,
        minute: 42
    }});
    startClockButton.simulate('click');
    expect(wrapper.state().bellCount).toEqual(3);
})

test('Bell Count should equal 24', () => {
    wrapper.setState({ startTime: {
        hour: 23,
        minute: 0
    }});
    wrapper.setState({ endTime: {
        hour: 1,
        minute: 0
    }});
    startClockButton.simulate('click');
    expect(wrapper.state().bellCount).toEqual(24);
})
