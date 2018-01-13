import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';
//you need to pass in props for the test
//if it would get them from someplace else
//you can't just go shallow(<GuessForm />)
//and expect everything to be tits and gravy
//you have to pass in, even if its artificial
//variables. In this case guess-list.js
//has a variable called guesses which is equal to
//a prop being mapped over to make a new array of objects
//containing html markups encapsulating each array entry of the original array
//for our purposes, we need to write our initial smoke test as: (<GuessForm guesses={[]}/>)
describe('<GuessList/>', ()=>{
	
	it('renders the GuessList component w/o crashing', ()=>{
		shallow(<GuessList guesses={[]}/>);
		
	});

})