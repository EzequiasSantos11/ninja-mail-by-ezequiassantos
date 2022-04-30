import styled from "styled-components";


export const HeaderContainer = styled.header`
  display: flex;
  height: 102px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 69px;
  top: 0;
  .logo{
    display: flex;
    align-items: flex-end;
    height: 100%;
    img{
      height: 69px;
    }
  }
  nav{
    display: flex;
    align-items: center;
    height: 41px;
    ul{
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: space-around;
      align-items: center;
      li{
        margin: 0 10px;
        a{
          color: inherit;
          text-transform: uppercase;
          font-weight: 800;
          font-size: 17px;
          font-family: "Raleway", sans-serif;
          padding: 0 8px;
          padding-bottom: 5px;
          border-bottom: 5px solid #4BA87D;
        }
      }
      .buttonSing{
        height: 41px;
        margin-left: 10px;
      }
    }
  }
`;