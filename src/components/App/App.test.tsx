import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import {Timer} from '../Timer/Timer';

describe('App',()=> {

  let wrapper: any;
  beforeEach(()=>{
    wrapper = shallow(<App />)
  })

  it('should have div',()=> {
    expect(wrapper.find('div').length).toEqual(1)
  })
  test('Timer Component',()=> {
  expect(wrapper.containsMatchingElement(<Timer />))
  .toEqual(true)
})
});

