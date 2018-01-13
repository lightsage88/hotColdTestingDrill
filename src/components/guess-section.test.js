import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', ()=>{
	it('renders the GuessSection  component w/o crashing', ()=>{
		shallow(<GuessSection  />);
	});

})