import React from 'react';
import {shallow} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm/>', ()=>{
	it('renders the GuessForm component w/o crashing', ()=>{
		shallow(<GuessForm />);
	});

})