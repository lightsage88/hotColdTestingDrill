import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from './header';
import props from './header';

describe('<Header/>', ()=>{
	it('renders the Header component w/o crashing', ()=>{
		shallow(<Header />);
	});

	it('begins with props named "onGenerateAuralUpdate" and "onRestartGame"',()=>{
		const callback = jest.fn();
		const wrapper = mount(<Header onGenerateAuralUpdate={callback} onRestartGame={callback}/>);
		expect(wrapper.props().onGenerateAuralUpdate).toEqual(callback);
		expect(wrapper.props().onRestartGame).toEqual(callback);
	});

})