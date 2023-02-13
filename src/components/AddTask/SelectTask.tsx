import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import { hoverPointer } from '../../contants';

const Select = ({ label, values, onChange }: { label: string, values: { id: string, text: string }[], onChange: (e: any) => void }) => {
  const [currentValue, setCurrentValue] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleValueChange = (value: any) => {
    setCurrentValue(value);
  };
  const handleChange = (value: any) => {
    handleValueChange(value);
    // call method, if it exists
    if (onChange) onChange(value);
    // close, after all tasks are finished
    handleClose();
  };

  return (
    <SelectContainer>
      <SelectLabelButton onClick={handleOpen}>
        {currentValue !== "" ? currentValue : label}
      </SelectLabelButton>
      <DropdownStyle isVisible={open}>
        {values.map((value) => (
          <DropdownItem
            onClick={() => handleChange(value.text)}
            active={value.id === currentValue}
            key={value.id}>
            {value.text}
          </DropdownItem>
        ))}
      </DropdownStyle>
    </SelectContainer>
  );

}

// function SomeTest() {
//   let countries = ["USA", "Britain", "Germany", "India", "UAE"];
//   return (
//     <div className="App">
//       <Select label="Choose country" values={countries} onChange={(e: any) => console.log(e)} />
//     </div>
//   );
// }

const SelectContainer = styled.div`
  position: relative;
  margin: 0;
`

const SelectLabelButton = styled.button`
  width: 100%;
  background-color: #ffffff;
  margin-top: 9px;
  margin-bottom: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 9px;
  padding-right: 6px;
  font-size: 18px;
  border-radius: 5px;
  word-spacing: 0.3px;
  border: none;
  transition: 0.3s ease;
  text-align: left;

  ${hoverPointer}

`;

const DropdownStyle = styled.div`
  position: absolute;
  top: calc(100% - 10px);
  background-color: #fff;
  border-radius: 5px;
  width: 100%;

  ${({ isVisible }: { isVisible: boolean }) =>
    isVisible !== true && css`
      max-height: 40px;
      visibility: hidden;
  `}
`;

const DropdownItem = styled.div`
  width: 100%;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 9px;
  padding-right: 6px;
  box-sizing: border-box;

  ${({ active }: { active: boolean }) =>
    active && css`
    background-color: #DEDEDE;
  `}
  &:nth-child(1):hover {
    border-radius: 5px 5px 0 0;
  }

  &:last-child:hover {
    border-radius: 0 0 5px 5px;
  }

  &:hover {
    background-color: #DEDEDE;
    outline: none;
  }
`;

export default Select