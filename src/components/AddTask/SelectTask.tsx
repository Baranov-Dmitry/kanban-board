import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import { hoverPointer } from '../../contants';
import { ButtonSubmit } from './InputTask';
import { Error } from './InputTask'

const SelectTask = ({ label, values, handleSelect }: { label: string, values: { id: string, text: string }[], handleSelect: (id: string) => void }) => {
  const [currentValue, setCurrentValue] = useState('')
  const [open, setOpen] = useState(false)
  const [error, setError] = useState(false)

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

    // close, after all tasks are finished
    handleClose();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (currentValue === '') {
      setError(true)
      return
    }

    handleSelect(currentValue)
    setError(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <SelectContainer>
        <SelectLabelButton onClick={handleOpen}>
          {currentValue !== "" ? values.find(value => value.id === currentValue)?.text : label}
        </SelectLabelButton>
        <DropdownStyle isVisible={open}>
          {values.map((value) => (
            <DropdownItem
              onClick={() => handleChange(value.id)}
              active={value.id === currentValue}
              key={value.id}>
              {value.text}
            </DropdownItem>
          ))}
        </DropdownStyle>
      </SelectContainer>
      {error && <Error>Please select an task</Error>}
      <ButtonSubmit type='submit'>Submit</ButtonSubmit>
    </form>
  );

}

const SelectContainer = styled.div`
  position: relative;
  margin: 0;
`

const SelectLabelButton = styled.button.attrs({
  type: 'button'
})`
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

  overflow: hidden; /* Обрезаем всё за пределами блока */
  text-overflow: ellipsis; /* Добавляем многоточие */

  ${hoverPointer}

`;

const DropdownStyle = styled.div`
  position: absolute;
  top: calc(100% - 10px);
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  z-index: 1;

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

  overflow: hidden; /* Обрезаем всё за пределами блока */
  text-overflow: ellipsis; /* Добавляем многоточие */

  ${({ active }: { active: boolean }) =>
    active && css`
    background-color: #DEDEDE;
  `}

  &:hover {
    background-color: #DEDEDE;
    outline: none;
  }

  &:nth-child(1) {
    border-radius: 5px 5px 0 0;
  }

  &:last-child {
    border-radius: 0 0 5px 5px;
  }
`;

export default SelectTask