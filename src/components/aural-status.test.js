import React from 'react';
import {shallow} from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus/>', ()=>{
	it('renders the AuralStatus component w/o crashing', ()=>{
		shallow(<AuralStatus />);
	});

}) 