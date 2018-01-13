import React from 'react';
import {shallow} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav/>', ()=>{
	it('renders the TopNav component w/o crashing', ()=>{
		shallow(<TopNav />);
	});

})