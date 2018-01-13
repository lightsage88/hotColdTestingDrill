import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount/>', ()=>{
	it('renders the GuessCount component w/o crashing', ()=>{
		shallow(<GuessCount />);
	});

})