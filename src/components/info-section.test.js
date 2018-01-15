import React from 'react';
import {shallow, mount} from 'enzyme';

import InfoSection from './info-section';

describe('<InfoSection/>', ()=>{
	it('renders the InfoSection component w/o crashing', ()=>{
		shallow(<InfoSection />);
	});

	it('has a section with an id of "what"', ()=>{
		const wrapper = mount(<InfoSection/>);
		expect(wrapper.find('#what').exists()).toEqual(true);
	});

})