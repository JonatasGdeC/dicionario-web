import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 58px;
  margin-bottom: 45px;
`

export const HeaderSuperior = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const SelectTemas = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`

export const InputSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 0 24px;
  justify-content: space-between;
  border: 1px solid transparent;
  border-radius: 16px;
  background-color: #f4f4f4;

  &:hover{
    border-color: #A445ED
  }

  input{
    width: 100%;
    font-size: 20px;
    padding: 20px 0;
    font-weight: bold;
    background-color: #f4f4f4;
    border: none;

    &:focus{
      outline: none;
    }
  }

  button{
    border: none;
    background-color: none;
    cursor: pointer;
    transition: all ease 0.3s;

    &:hover{
      scale: 1.1
    }
  }
`
