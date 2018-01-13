import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game/>', ()=>{
	it('renders the Game component w/o crashing', ()=>{
		shallow(<Game />);
	});

})