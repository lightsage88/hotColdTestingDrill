import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from './header';
import props from './header';

describe('<Header/>', ()=>{
	it('renders the Header component w/o crashing', ()=>{
		shallow(<Header />);
	});

	// it('begins with props named "onGenerateAuralUpdate" and "onRestartGame"',()=>{
	// 	const wrapper = mount(<Header {...props}/>);
	// 	const onGenerateAuralUpdate = {props.onGenerateAuralUpdate};
	// 	expect(wrapper.props().onGenerateAuralUpdate).toEqual(onGenerateAuralUpdate);
	// });

})