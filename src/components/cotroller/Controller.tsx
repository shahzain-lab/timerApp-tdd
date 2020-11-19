import React from 'react';
import PropTypes from 'prop-types';


interface Props{
    buttonAction:any
    buttonValue:any
}
export const Controller: React.FC<Props> = ({buttonAction,buttonValue}) => (
   
    <div onClick={() => buttonAction()}>
        <p>{buttonValue}</p>
    </div>
)

Controller.propTypes = {
    buttonAction: PropTypes.func.isRequired,
    buttonValue: PropTypes.string.isRequired,
  };
