import React from 'react';
import {shallow} from 'enzyme';
import {Controller} from './Controller';

describe('Controller component', () => {
    let container:any;
    beforeEach(()=> {
        container = shallow(<Controller 
          buttonAction = {jest.fn()}
          buttonValue= {""}
        />)
    })
    test('have a div',()=> {
        expect(container.find('div').length).toBeGreaterThanOrEqual(1)
        
    })
})
