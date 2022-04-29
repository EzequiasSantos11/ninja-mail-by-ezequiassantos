import styled from "styled-components";


export const HeaderContainer = styled.header`
  display: flex;
  height: 102px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 69px;
  .logo{
    display: flex;
    height: 69px;
    img{
      height: 100%;
    }
  }
  nav{
    display: flex;
    align-items: center;
    height: 41px;
    width: 50%;
    ul{
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: space-around;
      li{
        a{
          color: inherit;
          padding-bottom: 5px;
          border-bottom: 5px solid #4BA87D;
        }
      }
    }
  }
`;