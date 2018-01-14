import React from 'react';
import {shallow, mount} from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus/>', ()=>{
	it('renders the AuralStatus component w/o crashing', ()=>{
		shallow(<AuralStatus />);
	});

	it('should have a prop of auralStatus that is an empty string',()=>{
		const wrapper = mount(<AuralStatus auralStatus={''}/>);
		expect(wrapper.props().auralStatus).toEqual('');
	});

	it('should have a child with a className of "visuallyhidden"',()=>{
		const wrapper = shallow(<AuralStatus/>);
		expect(wrapper.hasClass('visuallyhidden')).toEqual(true);
	});

}) 