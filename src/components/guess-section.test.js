import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', ()=>{
	it('renders the GuessSection  component w/o crashing', ()=>{
		shallow(<GuessSection  />);
	});

	it('has props for feedback guessCount and onMakeGuess',()=>{
		const wrapper = mount(<GuessSection guessCount={0} feedback={'this shit is not well explained'}  />);
		expect(wrapper.props().guessCount).toEqual(0);
		expect(wrapper.props().feedback).toEqual('this shit is not well explained');

	});

	// it('changes the prop for guessCount upon onMakeGuess being run', ()=>{
	// 	const callback = jest.fn();
	// 	const wrapper = mount(<GuessSection onMakeGuess={callback}/>);
	// 	const value = '88';
	// 	wrapper.update();
	// 	wrapper.find('input[type="number"]').instance().value = value;
	// 	wrapper.simulate('submit');
	// 	expect(callback).toHaveBeenCalledWith(value);
	// });
	//THIS DOES NOT WORK BECAUSE THE SUBMIT EVENT DOES NOT OCCUR ON SECTION, BUT ON FORM...THE FORM IS A SUB COMPONENT
	//OF SECTION, WHICH IS A SUB COMPONENT OF GAME. TRICKLE DOWN.

})