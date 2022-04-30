import type { NextPage } from 'next'
import { Button } from '../components/Button';
import {Header} from "../components/Header";
import { Container, Hero, Video } from '../styles/Home';

const Home: NextPage = () => {
  return (
    <Container>
      <Header/>
      <Hero>
        <img src="/assets/herophoto.svg" alt="mulher mechendo no notebook" />
        <div className="textHero">
          <h2>Create Stunning Email Champaigns</h2>
          <p>Create and launch email campaigns that captivate your customers in just a few clicks.</p>
          <div className="actions">
            <Button type='button-solid' textButton='try now'/>
            <Button type='button-border' textButton='get a demo'/>
          </div>
        </div>
      </Hero>
      <Video>
        <img src="/assets/VIDEO(image).png" alt="Imagem de uma rua com pessoas sentadas em mesas na calsada." />
        <div className="textVideo">
          <h2>Reach More Costumers</h2>
          <a>
            <Button type='button' textButton='Learn how'/>
          </a>
        </div>
      </Video>
      <div className="background">
        <img src="/assets/background.png" alt="" />
      </div>
    </Container>
  )
}

export default Home;
