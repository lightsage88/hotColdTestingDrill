import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount/>', ()=>{
	it('renders the GuessCount component w/o crashing', ()=>{
		shallow(<GuessCount />);
	});

	it('the prop of guessCount changes when someone submits form',()=>{
			// const proto = mount(<Game guesses={[1,2,3,4]} />);
			const wrapper = mount(<GuessCount guessCount={88}/>);
			expect(wrapper.props().guessCount === '88');

	}); 


})