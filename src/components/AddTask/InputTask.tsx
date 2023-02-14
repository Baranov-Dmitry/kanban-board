import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { hoverPointer } from '../../contants'

const InputTask = ({ handleAdd }: { handleAdd: (text: string) => void }) => {

  const [error, setError] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputRef.current === null || inputRef.current.value.length < 3) {
      setError(true)
      return
    }

    handleAdd(inputRef.current.value)
    setError(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputText ref={inputRef} placeholder='Enter new taks' />
      {error
        ? <Error>Enter at least 3 character</Error>
        : null}
      <ButtonSubmit type='submit'>Submit</ButtonSubmit>
    </form>
  )
}

export const ButtonSubmit = styled.button`
  font-family: "Roboto";
  font-size: 18px;
  color: #5e6c84;
  position: relative;
  border: none;
  border-radius: 5px;
  padding: 4px 7px;
  width: 87px;
  background-color: #0079bf;
  color: #fff;

  ${hoverPointer}

  &:hover {
    background-color: #00a2ff;
  }
`

export const Error = styled.div`
  color: #e10b0b;
  font-size: 18px;
  margin-bottom: 10px;
`

const InputText = styled.input.attrs({
  type: 'text'
})`
  background-color: #ffffff;
  margin-top: 9px;
  margin-bottom: 15px;
  padding-top: 7px;
  padding-bottom: 9px;
  padding-left: 9px;
  padding-right: 6px;
  font-size: 18px;
  line-height: 21px;
  border-radius: 5px;
  word-spacing: 0.3px;
  border: none;
  width: 100%;
  box-sizing: border-box;
`

export default InputTask