import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  .background{
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: -1;
    object-fit: cover;
  }
  .backgroundTablet{
    display: none;
  }
  .backgroundMobile{
    display: none;
  }
  @media (max-width: 1000px){
    .background{
      display: none;
    }
    .backgroundTablet{
      display: flex;
    }
    .backgroundMobile{
      display: flex;
      top: 380px;
    }
  }
  @media (max-width: 700px){
    .backgroundTablet{
      display: none;
    }
   
  }
`;

export const Hero = styled.div`
  display: flex;
  align-items: center;
  height: 383px;
  width: 77%;
  margin: 0 auto;
  margin-top: 103px;
  position: relative;
  >img{ 
    height: 100%;
    width: 60%;
    right: 0;
    margin: 0;
    object-fit: cover;
    position: absolute;
  }
  .textHero{
    position: absolute;
    height: 317px;
    width: 60%;
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
      margin-top: 35px;
      button{
        width: 35%;
        margin-right: 20px;
      }
    }
  }
  @media (max-width: 1000px){
    margin-top: 50px;
    height: 280px;
    width: 93%;
    .textHero{
      height: 100%;
      h2{
        font-size: 38px;
      }
      p{
        font-size: 12px;
      }
      .actions{
        height: 42px;
        button{
          font-size: 13px;
          width: 80%;
        }
      }
    }
  }
  @media (max-width: 700px){
    justify-content: center;
    width: 94%;
    img{
      width: 100%;
      height: 90%;
    }
    .textHero{
      height: 100%;
      width: 100%;
      margin-top: -50px;
      h2{
        font-size: 36px;
        margin-bottom: 52%;
      }
      p{
        font-size: 14px;
        width: 100%;
        background: #FFF;
        padding-top: 10px;
      }
      .actions{
        height: 42px;
        width: 100%;
        gap: 20px;
        margin-top: 20px;
        button{
          font-size: 13px;
          width: 100%;
          margin: 0;
        }
      }
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
  margin-top: 200px;
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
  @media (max-width: 1000px){
    margin-top: 167px;
    height: 347px;
    width: 90%;
    max-width: 616px;
    .textVideo{
      h2{
        font-size: 38px;
      }
      a{
        height: 42px;
        margin-top: 41px;
        button{
          font-size: 13px;
        }
      }
    }
  }
  @media (max-width: 700px){
    height: 171px;
    .textVideo{
      h2{
        font-size: 22px;
        line-height: 29px;
      }
      a{
        height: 21px;
        width: 65px;
        margin-top: 10px;
        button{
          font-size: 6px;
          padding: 0;
        }
      }
    }
  }
`;

export const Cases = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 533px;
  width: 90%;
  margin: 0 auto;
  margin-top: 88px;
  position: relative;
  .card{
    width: 90%;
    max-width: 320px;
    height: 449px;
    background: #fff;
    margin: 0 auto;

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
   align-self: flex-start;
  }
  .second{
    height: 445px;
    align-self: flex-end;
  }
  .last{
    height: 324px;
    width: 365px;
    margin: 0 auto;
    background: transparent;
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
  @media (max-width: 1210px) {
    height: 348px;
    width: 100%;
    padding: 0 20px;
    margin-top: 79px;
    .card{
      width: 30%;
      height: 294px;
      .textCard{
        p{
          font-size: 12px;
        }
        a{
          font-size: 12px;
        }
      }
    }
    .last{
      height: 206px;
      width: 232px;
      h2{
        font-size: 28px;
      }
      p{
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    height: 100%;
    width: 90%;
    .card{
      width: 70%;
      margin: 0;
      margin-bottom: 14px;
      .textCard{
        margin-left: 20px;
        p{
          font-size: 12px;
        }
        a{
          font-size: 12px;

        }
      }
    }
    .first{
      align-self: flex-start;
    }
    .last{
      h2{
        font-size: 22px;
        line-height: 31px;
      }
      p{
        font-size: 12px;
        margin-top: 17px;
      }
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
  margin-top: 133px;
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
  @media (max-width: 1000px) {
    margin-top: 87px;
    width: 90%;
    .members{
      gap: 19px;
      .member{
        .textMember{
          margin-left: 17px;
          margin-bottom: 18px;
          h2{
            font-size: 22px;
          }
          p{
            font-size: 12px;
          }
        }
      }
    }
    h3{
      font-size: 28px;
      margin-top: 25px;
    }
    .newMember{
      .submit{
        gap: 17px;
        height: 42px;
        input{
          height: 42px;
          font-size: 13px;
        }
        button{
          font-size: 13px;
          padding: 0;
        }
      }
      span{
        font-size: 13px;
        margin-left: 15px;
      }
    }
  }
  @media (max-width: 700px){
    height: 100%;
    .members{
      flex-direction: column;
      height: 100%;
      gap: 20px;
      .member{
        height: 157px;
        width: 90%;
        margin: 0 auto;
        img{
          object-fit: initial
        }
      }
    }
    h3{
      font-size: 26px;
      width: 90%;
    }
    .newMember{
      position: relative;
      width: 90%;
      align-items: center;
      .submit{
        flex-direction: column;
        height: 100%;
        input{
          width: 90%;
          margin: 0 auto;
          height: 42px;
          font-size: 13px;
        }
        button{
          width: 50%;
          height: 42px;
          margin: 0 auto;
          margin-top: 20px;
        }
      }
      span{
        position: absolute;
        top: 2rem;
        margin-left: -10px;
      }
    }
  }
`;

export const Partnership = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  margin-top: 75px;
  margin-bottom: 146px;
  background: white;
  h3{
    font-family: 'Playfair Display';
    font-weight: 900;
    font-size: 44px;
    width: 40%;
    margin: 0 auto;
    margin-bottom: 60px;
    text-align: center;
  }
  .logos{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    img{
      height: 33px;
    }
  }
  @media (max-width: 1000px){
    margin-top: 50px;
    h3{
      font-size: 28px;
    }
    .logos{
      img{
        width: 104px;
        height: 22px;
      }
    }
  }
  @media (max-width: 700px){
    h3{
      width: 90%;
    }
    .logos{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "a b"
                           "c d"
                           "e e"
      ;
      gap: 20px;
      img{
        width: 90%;
        height: 32px;
        height: initial;
        margin: 0 auto;
      }
      .first{
        grid-area: c;
        width: 104px;
      }
      .second{
        grid-area: a;
        height: 32px;
        width: 55px;
      }
      .third{
        grid-area: e;
        height: 32px;
        width: 94px;
      }
      .quarter{
        grid-area: d;
        width: 92px;
      }
      .fifth{
        grid-area: b;
        width: 91px;
      }
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
  @media (max-width: 1000px) {
    height: 240px;
    h3{
      font-size: 42px;
    }
    button{
      height: 42px;
      font-size: 13px;
      margin-top: 20px;
    }
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
  background: #FFF;
  .header{
    display: flex;
    width: 70%;
    margin: 0 auto;
    border-bottom: 2px solid #DBDBDB;
    img{
      height: 60px;
      width: 100%;
    }
    .wrapper{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      width: 100%;
      .sitemap{
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        width: 100%;
        span{
          margin-bottom: 5px;
          font-family: 'Raleway', sans-serif;
          font-weight: 700;
          font-size: 19px;
        }
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
  @media (max-width: 1000px){
    height: 330px;
    .header{
      width: 90%;
      .sitemap{
        span{
          font-size: 12px;
        }
      }
      img{
        height: 40px;
      }
    }
    .footer{
      margin-top: 25px;
      span{
        font-size: 9px;
      }
    }
  }
  @media (max-width: 700px){
    .header{
      flex-direction: column;
      img{
        width: 40%;
      }
      .wrapper{
        width: 80%;
        margin: 0 auto;
        justify-content: center;
        .sitemap{
          margin: 0;
          width: 100%;
          span{
            font-size: 11px;
          }
        }
      }
    }
    .footer{
      flex-direction: column;
      justify-content: space-around;
      height: 200px;
    }
  }
`;