import styled from "styled-components";


export const HeaderContainer = styled.header`
  display: flex;
  height: 102px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-right:  40px; 
  top: 0;
  .logo{
    display: flex;
    align-items: flex-end;
    height: 100%;
    width: 100%;
    img{
      height: 69px;
    }
  }
  nav{
    display: flex;
    align-items: center;
    height: 41px;
    width: 100%;
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
  @media (max-width: 1000px) {
    height: 66px;
    .logo{
      img{
        height: 42px;

      }
    }
    nav{
      display: flex;
      align-items: center;
      height: 25px;
      width: 100%;
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
          font-size: 11px;
          font-family: "Raleway", sans-serif;
          padding: 0 6px;
          padding-bottom: 3px;
          border-bottom: 3px solid #4BA87D;
        }
      }
      .buttonSing{
        height: 25px;
        width: 110px;
        margin-left: 5px;
        button{
          padding: 0;
          width: 100%;
          font-size: 11px;
        }
      }
    }
    }
  }
  @media (max-width: 700px) {
    position: relative;
    .logo{
      height: 42px;
      width: 100%;
      img{
        height: 100%;
        width: 100%;
      }
    }
    nav{
      ul{
        li{
          display: none;
        }
        .buttonSing{
          height: 25px;
          width: 40%;
          margin: 0;
          position: absolute;
          right: 10px;
          top: 22%;
        }
      }
    }
  }
`;