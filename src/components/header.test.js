import React from 'react';
import {shallow} from 'enzyme';

import Header from './header';

describe('<Header/>', ()=>{
	it('renders the Header component w/o crashing', ()=>{
		shallow(<Header />);
	});

})