import styled from "styled-components";


export const Container = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  font-weight: 800;
  text-transform: uppercase;
  font-family: 'Raleway', sans-serif;
  font-size: 17px;
  letter-spacing: 1.274999976158142px;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0 20px;
  cursor: pointer;
  &.button{
    color: #4BA87D;
    background: #FFF;
    font-weight: 900;
    font-size: 21px;
  }
  &.button-solid{
    color: white;
    background: #4BA87D;
  }
  &.button-border{
    color: #4BA87D;
    border: 3px solid #4BA87D;
    background: #FFF;
  }
`;