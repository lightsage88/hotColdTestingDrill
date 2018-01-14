import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm/>', ()=>{
	it('renders the GuessForm component w/o crashing', ()=>{
		shallow(<GuessForm />);
	});

	it('worked run', ()=>{
		const callback = jest.fn();
		const wrapper = mount(<GuessForm onMakeGuess={callback} />);
		//onMakeGuess was passed to form from section and to section from game
		const value = '88';
		wrapper.update();
		wrapper.find('input[type="number"]').instance().value = value;
		wrapper.simulate('submit');
		expect(callback).toHaveBeenCalledWith(value);
	});

});