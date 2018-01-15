import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback/>', ()=>{
	it('renders the Feedback component w/o crashing', ()=>{
		shallow(<Feedback />);
	});

	it('has a prop set reflecting what is passed in, etc', ()=>{
		const wrapper = shallow(<Feedback feedback={'Trailer Park Boys is funny'} guessCount={800}/>);
		expect(wrapper.props().feedback ==='Trailer Park Boys is funny');
		expect(wrapper.props().guessCount===800);
	});

})