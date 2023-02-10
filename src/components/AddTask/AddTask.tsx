import React, { useState } from 'react'
import styled from 'styled-components'
import { hoverPointer, TaskBoard } from '../../contants';

const AddTask = (childred: any) => {

  if (childred.children !== undefined) {
    console.log(childred.children)
  }

  const [showAddTask, setShowAddTask] = useState(false)

  const handleSubmit = () => {
    console.log("handleSubmit")
    setShowAddTask(prev => !prev)
  }

  return (
    <>
      {showAddTask
        ? <form onSubmit={handleSubmit}>
          {childred.children === undefined
            ? <InputText placeholder='Enter new taks' />
            : <>
              <label htmlFor="city-select">Ваш город</label>
              <select name="city" id="city-select">
                <option value="">-- Выберите город --</option>
                {(childred.children[0] as TaskBoard).tasks.map(task => (
                  <option value={task.id}>{task.text}</option>
                ))}
                {/* <option value="petersburg">Санкт-Петербург</option>
                <option value="samara">Самара</option>
                <option value="perm">Пермь</option>
              <option value="novosibirsk">Новосибирск</option> */}
              </select>
            </>
          }
          <ButtonSubmit type='submit'>Submit</ButtonSubmit>
        </form>
        : <BoardsTaskButton onClick={() => setShowAddTask(prev => !prev)}>Add card</BoardsTaskButton>
      }
    </>
  )
}

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

const BoardsTaskButton = styled.div`
  font-family: "Roboto";
  font-size: 18px;
  color: #5e6c84;
  position: relative;
  width: 75px;
  border-radius: 5px;
  padding: 4px 7px 3px 25px;

  &:before {
    content: "+";
    font-size: 28px;
    color: #5e6c84;
    position: absolute;
    top: -3px;
    left: 6px;
  }

  ${hoverPointer}

  &:hover {
    background-color: #fff;
  }
`

const ButtonSubmit = styled.button`
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

export default AddTask