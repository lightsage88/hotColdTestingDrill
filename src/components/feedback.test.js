import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback/>', ()=>{
	it('renders the Feedback component w/o crashing', ()=>{
		shallow(<Feedback />);
	});

})