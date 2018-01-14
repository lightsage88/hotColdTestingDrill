import React from 'react';
import {shallow, mount} from 'enzyme';

import StatusSection from './status-section';

describe('<StatusSection/>', ()=>{
	it('renders the StatusSection component w/o crashing', ()=>{
		shallow(<StatusSection guesses={[]} auralStatus=''/>);
	});

	it('has a property called guesses which is an array, and auralStatus, empString', ()=>{
		const wrapper = mount(<StatusSection guesses={[]} auralStatus=''/>);
		expect(wrapper.props().auralStatus).toEqual('');
		expect(wrapper.props().guesses === '[object Array]');
	});

})