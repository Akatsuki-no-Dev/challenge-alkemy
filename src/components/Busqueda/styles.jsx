import styled from "styled-components";
import { theme } from "./../../common/styles/variables";

export const StyledContainer= styled.div`
  position:absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: cover;
  
`
export const StyledSearch= styled.div`
display: flex;
flex-direction: row;
position: relative;
height: auto;
`
export const StyledInput = styled.input`
margin: 10px;
  border: 2px solid ${theme.primaryDark};
  border-radius: 5px;
  color: ${theme.fontColor};
`;
export const StyledButton = styled.button`
  margin: 10px;
  background: transparent;
  border: 2px solid ${theme.primary};
  border-radius: 5px;
  color: ${theme.primary};
  &:hover {
    background: ${theme.primaryLight};
  }
`;
export const StyledDiv = styled.div`
position: relative;
background-color: ${theme.primaryDark};
display: grid;
grid-template-columns: auto auto auto;
 flex: 1; 
height: auto;
width: 100%;
object-fit: contain;
`;
export const StyledCard = styled.div`
display: flex;
position: relative;
height: auto;
width: auto;
flex-direction: column;
justify-content: center;
align-items: center;

h2{
    position: relative;
color: white;

}
.card-body{
    position: relative;
    height: auto;
    width: auto;
    /* flex: 1; */
    object-fit: contain;
}
img{
    position: relative;
    display: inline-block;
    height: auto;
    width: auto;
    
}
`
