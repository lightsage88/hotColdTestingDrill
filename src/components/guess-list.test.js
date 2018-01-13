import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList/>', ()=>{
	it('renders the GuessList component w/o crashing', ()=>{
		shallow(<GuessList />);
	});

})