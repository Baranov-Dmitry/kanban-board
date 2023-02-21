import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { editDiscription } from '../reducer/boardsSlice';

const TaskDetails = () => {

  const dispatch = useDispatch()
  const [state, setState] = useState({
    showErorr: false,
    showConfirmation: false
  })

  const { id } = useParams<'id'>();
  const task = useSelector((state: BoardsState) => {
    let findTask;

    for (const board of state.boardsStore.boards) {
      for (const task of board.tasks) {
        if (task.id === id) {
          findTask = task
        }
      }
    }

    return findTask
  })

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!(textareaRef.current?.value !== task?.desctiption)) {
      setState({
        showErorr: true,
        showConfirmation: false
      });
      return
    }

    dispatch(editDiscription({ id: task?.id, desctiption: textareaRef.current?.value }))
    setState({
      showErorr: false,
      showConfirmation: true
    });
  }

  return (
    <WhiteContainer>
      {task
        ? <Form onSubmit={handleSubmit}>
          <Title>
            {task?.text}
          </Title>
          <Textarea
            ref={textareaRef}
            name="desctiption"
            defaultValue={task?.desctiption}>
          </Textarea>
          {state.showErorr && <Error>Please change discription of the task</Error>}
          {state.showConfirmation && <Confirmation>Discription has been updated</Confirmation>}
          <Submit type='submit'>Submit</Submit>
        </Form>
        : <Error>Task did not found please visit <Link to="/">Main</Link></Error>
      }
    </WhiteContainer>
  )
}

const Confirmation = styled.div`
  color: #08e208;
  padding: 10px 0;
`

const Error = styled.div`
  color: red;
  padding: 10px 0;
`

const Submit = styled.button`
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
  margin-top: 10px;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer
  }
`

const WhiteContainer = styled.div`
  color: #000;
  background-color: #fff;
  border-radius: 10px;
  min-height: calc(100vh - 175px);
`

const Title = styled.div`
  padding: 10px 0;
  font-size: 24px;
  line-height: 28px;
`

const Form = styled.form`
  margin: 25px 28px;
`

const Textarea = styled.textarea`
  padding: 15px 0;
  width: 100%;
  box-sizing: border-box;
  border: none;
  min-height: 300px;
  font-size: 18px;
`

export default TaskDetails