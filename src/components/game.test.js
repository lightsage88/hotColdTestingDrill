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

	it('changes the feedback depending on the guess, difference more than or equal to 50',()=>{
		const wrapper = mount(<Game />);
		const possibleMessage = 'You\'re Ice Cold...';

		wrapper.instance().setState({correctAnswer : 60});
		wrapper.instance().makeGuess(10);
		expect(wrapper.state('guesses')).toEqual([10]);
		expect(wrapper.state('correctAnswer')).toEqual(60);
		expect(wrapper.state('feedback')).toEqual(possibleMessage);
	});

	it('can make multiple guesses', ()=>{
		const wrapper = mount(<Game />);
		wrapper.instance().setState({correctAnswer:100});

		wrapper.instance().makeGuess(10);
		expect(wrapper.state('guesses')).toEqual([10]);
		expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');
		wrapper.instance().makeGuess(70);
		expect(wrapper.state('guesses')).toEqual([10,70]);
		expect(wrapper.state('feedback')).toEqual('You\'re Cold...');
		wrapper.instance().makeGuess(90);
		expect(wrapper.state('guesses')).toEqual([10,70,90]);
		expect(wrapper.state('feedback')).toEqual('You\'re Warm.');
		wrapper.instance().makeGuess(99);
		expect(wrapper.state('guesses')).toEqual([10,70,90,99]);
		expect(wrapper.state('feedback')).toEqual('You\'re Hot!');
		
	});
})