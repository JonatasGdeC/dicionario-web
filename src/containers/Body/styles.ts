import styled from "styled-components";

export const ApresentaPalavra = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button{
    border: none;
    background-color: none;
    transition: all ease 0.3s;
    cursor: pointer;

    &:hover{
      scale: 1.1
    }
  }
`

export const PalavraPesquisada = styled.h1`
  font-size: 64px;
  font-weight: bold
`

export const TipoPalavra = styled.h3`
  font-size: 24px;
  font-weight: bold;
  font-style: italic;
  margin: 40px 0;
`

export const ListaDefinicoes = styled.ul`
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`

export const Definicao = styled.li`
  list-style: disc;
  font-size: 18px;
  font-weight: 400;
`
