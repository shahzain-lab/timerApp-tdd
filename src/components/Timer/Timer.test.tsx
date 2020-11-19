import React from 'react';
import {shallow} from 'enzyme';
import {Timer} from './Timer';

describe("Timer Component" ,()=> {
    let container:any;
    beforeEach(()=>{
        container = shallow(<Timer />)
    })
    test('having a div',()=> {
        expect(container.find('div').length).toBeGreaterThanOrEqual(1);
    })
    test('having three button',()=>{
        expect(container.find('Controller').length).toEqual(3)
    })
    test('invokes startTimer when the start button is clicked',()=>{
        const contain = jest.spyOn(container.instance(),'startTimer');
        container.instance().forceUpdate();
        expect(contain).toHaveBeenCalledTimes(0);
        container.find('.start-timer').first().simulate('click');
        expect(contain).toHaveBeenCalledTimes(0);
    })
    test('invokes resetTimer when the reset button is clicked',()=>{
        const contain = jest.spyOn(container.instance(),'resetTimer');
        container.instance().forceUpdate();
        expect(contain).toHaveBeenCalledTimes(0);
        container.find('.reset-timer').first().simulate('click');
        expect(contain).toHaveBeenCalledTimes(0);
    })
    test('should change isOn state true when the start button is clicked',()=>{
        container.instance().forceUpdate();
        container.find('.start-timer').first().simulate('click');
        expect(container.instance().state.isOn).toEqual(false);
    })
    test('should change isOn state false when the stop button is clicked',
     () =>{
        container.instance().forceUpdate();
        container.find('.stop-timer').first().simulate('click');
        expect(container.instance().state.isOn).toEqual(false);
     });
     test('should change isOn state false when the reset button is clicked',
      () => {
          container.instance().forceUpdate();
          container.find('.stop-timer').first().simulate('click');
          expect(container.instance().state.isOn).toEqual(false);
          expect(container.instance().state.minutes).toEqual(25);
          expect(container.instance().state.seconds).toEqual(0);
      })
})