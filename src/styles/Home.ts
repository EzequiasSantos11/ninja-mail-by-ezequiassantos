import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  .background{
    display: flex;
    width: 100%;
    position: absolute;
    z-index: -1;
    top: 6rem;
    overflow: hidden;

    img{
      height: 100%;
      width: 103%;
      margin-left: -28px;
      object-fit: cover;
    }
  }
`;

export const Hero = styled.div`
  display: flex;
  align-items: center;
  height: 383px;
  width: 80%;
  margin: 0 auto;
  margin-top: 102px;
  position: relative;
  >img{ 
    height: 100%;
    width: 65%;
    object-fit: cover;
    right: 0;
    margin: 0;
    position: absolute;
  }
  .textHero{
    position: absolute;
    height: 317px;
    width: 50%;
    left: 0;
    h2{
      font-size: 59px;
    }
    p{
      font-size: 19px;
      width: 70%;
      margin-top: 23px;
    }
    .actions{
      display: flex;
      height: 65px;
      justify-content: space-around;
      margin-top: 35px;
      gap: 45px;
    }
  }
`;

export const Video = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 531px;
  margin: 0 auto;
  position: relative;
  margin-top: 239px;
  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .textVideo{
    position: absolute;
    h2{
      font-family: 'Playfair Display', sans-serif;
      font-size: 60px;
      font-weight: 900;
      line-height: 80px;
      color: #FFF;
    }
    >a{
      display: flex;
      width: 200px;
      height: 65px;
      margin: 0 auto;
      margin-top: 61px;
    }
  }
`;

export const Cases = styled.div`
  display: flex;
  align-items: center;
  height: 533px;
  width: 80%;
  margin: 0 auto;
  margin-top: 74px;
  position: relative;
  .card{
    width: 320px;
    height: 449px;
    background: #fff;
    img{
      width: 100%;
      height: 50%;
      object-fit: cover;
    }
    .textCard{
      display: flex;
      flex-direction: column;
      height: 40%;
      width: 70%;
      margin-left: 30px;
      justify-content: space-around;
      p{
        font-family: 'Raleway';
        font-size: 16px;
        font-weight: 500;
      }
      a{
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
        font-weight: 800;
        color: #4BA87D;
      }
    }
  }
  .first{
    position: absolute;
    left: 0;
    top: 0;
  }
  .second{
    height: 445px;
    align-self: flex-end;
    margin-left: 34%;
  }
  .last{
    height: 324px;
    width: 365px;
    margin: 0 auto;
    background: transparent;
    margin-left: 46px;
    h2{
      font-size: 44px;
      font-weight: 900;
      font-family: 'Playfair Display';
    }
    p{
      display: inline-flex;
      font-size: 19px;
      margin-top: 29px;
      line-height: 26px;
      width: 90%;
    }
  }
`;

export const MemberArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 530px;
  width: 80%;
  margin: 0 auto;
  margin-top: 120px;
  .members{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 239px;
    gap: 32px;
    .member{
      display: flex;
      height: 100%;
      width: 100%;
      margin: 0;
      position: relative;
      img{
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
      .textMember{
        z-index: 999;
        align-self: flex-end;
        color: #FFF;
        margin-left: 27px;
        margin-bottom: 28px;
        font-family: 'Raleway', sans-serif;
        h2{
          font-size: 34px;
          font-weight: 900;
        }
        p{
          font-size: 19px;
          font-weight: 700;
        }
      }
    }
  }
  h3{
    display: inline-flex;
    margin-top: 40px;
    width: 80%;
    font-family: 'Playfair Display', sans-serif;
    font-weight: 900;
    font-size: 44px;
    text-align: center;
  }
  .newMember{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 30px;
    width: 60%;
    .submit{
      display: flex;
      justify-content: space-between;
      width: 100%;
      gap: 27px;
      input{
        display: flex;
        width: 70%;
        height: 65px;
        border: 1px solid #9F9F9F;
        border-radius: 5px;
        align-items: center;
        font-family: 'Raleway';
        font-size: 21px;
        font-weight: 500;
        color: #000;
        padding-left: 25px;
        outline: none;
        ::-webkit-input-placeholder  { color:#000; }
        input:-moz-placeholder { color:#000; }
      }
      button{
        width: 40%;
      }
    }
    span{
      color: #4BA87D;
      font-family: 'Raleway', sans-serif;
      font-weight: 500;
      font-size: 21px;
      margin-top: 20px;
      margin-left: 25px;
    }
  }
`;

export const Partnership = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  margin-top: 75px;
  margin-bottom: 146px;
  h3{
    font-family: 'Playfair Display';
    font-weight: 900;
    font-size: 44px;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 60px;
    text-align: center;
  }
  .logos{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    img{
      width: 160px;
      height: 33px;
    }
  }
`;

export const GetStarted = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 366px;
  width: 100%;
  background: #4BA87D;
  h3{
    font-size: 60px;
    font-weight: 900;
    text-align: center;
    font-family: 'Playfair Display', sans-serif;
    color: #FFF;
  }
  button{
    width: 200px;
    height: 65px;
    margin-top: 50px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 433px;
  width: 100%;
  position: relative;
  .header{
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    width: 80%;
    height: 70%;
    margin: 0 auto;
    border-bottom: 2px solid #DBDBDB;
    img{
      height: 60px;
      width: 40%;
    }
    .sitemap{
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      span{
        margin-bottom: 10px;
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 19px;
      }
    }
  }
  .footer{
    margin-top: 39px;
    display: flex;
    justify-content: space-around;
    width: 80%;
    span{
      font-family: 'Raleway', sans-serif;
      font-weight: 700;
      font-size: 15px;
    }
  }
`;