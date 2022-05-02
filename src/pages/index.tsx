import type { NextPage } from 'next'
import { Button } from '../components/Button';
import { Header } from "../components/Header";
import { Container, Hero, Video, Cases, MemberArea, Partnership, GetStarted, Footer } from '../styles/Home';

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <Hero>
        <img src="/assets/herophoto.svg" alt="mulher mechendo no notebook" />
        <div className="textHero">
          <h2>Create Stunning Email Champaigns</h2>
          <p>Create and launch email campaigns that captivate your customers in just a few clicks.</p>
          <div className="actions">
            <Button type='button-solid' textButton='try now' />
            <Button type='button-border' textButton='get a demo' />
          </div>
        </div>
      </Hero>
      <Video>
        <img src="/assets/VIDEO(image).png" alt="Imagem de uma rua com pessoas sentadas em mesas na calsada." />
        <div className="textVideo">
          <h2>Reach More Costumers</h2>
          <a>
            <Button type='button' textButton='Learn how' />
          </a>
        </div>
      </Video>
      <Cases>
        <div className="card first">
          <img src="/assets/fotocase1.png" alt="" />
          <div className="textCard">
            <p>Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end.</p>
            <a href="#">Learn More &gt;</a>
          </div>
        </div>
        <div className="card second">
          <img src="/assets/fotocase2.png" alt="" />
          <div className="textCard">
            <p>Start building and sharing with your team today. NinjaMail is renowned for its industry leading team collaboration tools.</p>
            <a href="#">Learn More &gt;</a>
          </div>
        </div>
        <div className="card last">
          <h2>The source the proven, engaging email campaings</h2>
          <p>Whether you’re a startup, small
            business, e-commerce store, or
            want to promote your app, NinjaMail
            has the feature set tailored for
            your business.
          </p>
          <a href="#"></a>
        </div>
      </Cases>
      <MemberArea>
        <div className="members">
          <div className="member">
            <img src="/assets/member(1).png" alt="" />
            <div className="textMember">
              <h2>Frankie</h2>
              <p>Member since 2016</p>
            </div>
          </div>
          <div className="member">
            <img src="/assets/member(2).png" alt="" />
            <div className="textMember">
              <h2>Camile</h2>
              <p>Member since 2012</p>
            </div>
          </div>
          <div className="member">
            <img src="/assets/member(3).png" alt="" />
            <div className="textMember">
              <h2>Elayne</h2>
              <p>Member since 2018</p>
            </div>
          </div>
        </div>
        <h3>Learn how others are reaching their audience easier than ever before.</h3>
        <div className="newMember">
          <div className="submit">
            <input type="email" placeholder='Enter your email' />
            <Button type='button-solid' textButton='join our list' />
          </div>
          <span>Thanks! Email received.</span>
        </div>
      </MemberArea>
      <Partnership>
        <h3>All the best brands
          already use us.</h3>
        <div className="logos">
          <img src="/assets/Logo1.png" alt="" />
          <img src="/assets/Logo2.png" alt="" />
          <img src="/assets/Logo3.png" alt="" />
          <img src="/assets/Logo4.png" alt="" />
          <img src="/assets/Logo5.png" alt="" />
        </div>
      </Partnership>
      <GetStarted>
        <h3>Get started today!</h3>
        <Button textButton='pick a plan' type='button'/>
      </GetStarted>
      <Footer>
        <div className='header'>
          <img src="/assets/logo.svg" alt="" />
          <div className="sitemap">
            <span>Feactures</span>
            <span>Pricing</span>
            <span>Services</span>
            <span>Partners</span>
          </div>
          <div className="sitemap">
            <span>About us</span>
            <span>Tutorials</span>
            <span>Resources</span>
            <span>Help Center</span>
            <span>Templates</span>
            <span>Cases Studies</span>
          </div>
          <div className="sitemap">
            <span>Medium</span>
            <span>Twitter</span>
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Linkedin</span>
          </div>
          <div className="sitemap">
            <span>Contact Us</span>
            <span>Slack</span>
            <span>Jobs</span>
          </div>
        </div>
        <div className="footer">
          <span>NinjaMail is a sample project for Quest AI. &copy; 2019 Quest AI, All rights reserved.</span>
          <span>Terms &amp; Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </Footer>
      <div className="background">
        <img src="/assets/background.png" alt="" />
      </div>
    </Container >
  )
}

export default Home;
