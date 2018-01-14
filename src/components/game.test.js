import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game/>', ()=>{
	it('renders the Game component w/o crashing', ()=>{
		shallow(<Game />);
	});

	it('begins with a state of feedback being "Make your guess!"', () => {
		const wrapper = shallow(<Game />);
		expect(wrapper.state('feedback')).toEqual('Make your guess!');
	});

	it('has an array for the guesses state', ()=>{
		const wrapper = shallow(<Game />);
		expect(wrapper.props().guesses === '[object Array]');
	});

	it('changes the feedback depending on the guess, exact', ()=>{
		const wrapper = mount(<Game />);
		const possibleMessage = 'You got it!';
	
		wrapper.instance().setState({correctAnswer : 20});
		wrapper.instance().makeGuess(20);
		wrapper.update();
		expect(wrapper.state('guesses')).toEqual([20]);
		expect(wrapper.state('correctAnswer')).toEqual(20);
		expect(wrapper.state('feedback')).toEqual(possibleMessage);

	});

})