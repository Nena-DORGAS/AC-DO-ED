import NavProjeto from '../components/NavProjeto'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import CarrosselSobre from '../components/CarrosselSobre';





function Sobre() {
  return (
    <>
      <div>
      <NavProjeto/>
      <CarrosselSobre/>
      <br/>
      <h1>Sobre Nós</h1>
      <p>
      Bem-vindo à nossa loja de eletrônicos, onde a tecnologia ganha vida! Estamos entusiasmados em recebê-lo(a) a um mundo repleto de dispositivos incríveis e inovações eletrônicas de última geração. Aqui, você encontrará uma ampla seleção de produtos que vão desde smartphones e tablets até laptops
       poderosos, televisores impressionantes e muito mais.
      Em nossa loja, nos dedicamos a oferecer a você a melhor experiência de compra possível. Nossos funcionários estão prontos para ajudá-lo(a) a encontrar o dispositivo perfeito para suas necessidades, esclarecer dúvidas técnicas e compartilhar conhecimentos sobre as últimas tendências tecnológicas.
      </p>
      <br/>
          <Footer/>
      </div>
    </>
  )
}

export default Sobre