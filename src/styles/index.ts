import styled, {createGlobalStyle} from "styled-components";

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: Arial, sans-serif
}
`

export const Container = styled.div`
max-width: 736px;
margin: 0 auto;
`

export default EstiloGlobal
