import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game/>', ()=>{
	it('renders the Game component w/o crashing', ()=>{
		shallow(<Game />);
	});

	it('begins with a state of feedback being "Make your guess!"', () => {
		const wrapper = shallow(<Game />);
		expect(wrapper.state('feedback')).toEqual('Make your guess!');
	});

})