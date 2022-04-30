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
  margin-top: 279px;
  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .textVideo{
    position: absolute;
    h2{
      font-family: 'Playfair', sans-serif;
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