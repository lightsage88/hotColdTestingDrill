import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav/>', ()=>{
	it('renders the TopNav component w/o crashing', ()=>{
		shallow(<TopNav />);
	});

	it('when onClick is fired it is from a click on newgame or hear state of game', ()=>{
		const callback = jest.fn();
		const wrapper = mount(<TopNav onGenerateAuralUpdate={callback} onRestartGame={callback}/>);
		const godDamnedMotherFuckingThingToMakeThisWork = wrapper.find('.new');
		const otherMotherFucker = wrapper.find('.status-link');
		godDamnedMotherFuckingThingToMakeThisWork.simulate('click');
		otherMotherFucker.simulate('click');
		expect(callback).toHaveBeenCalled();
		expect(callback).toHaveBeenCalled();

	});

})