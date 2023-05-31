import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carrossel() {
return (
<Carousel>
<Carousel.Item>



        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/15748027/pexels-photo-15748027/free-photo-of-carro-veiculo-automovel-miniatura.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />




        <Carousel.Caption>
          <h3>Carrinho de controle remoto</h3>
          <p>Carrinho para seu filho brincar (indicado para maiores de 12 anos)!</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>



        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/8782574/pexels-photo-8782574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>XBOX ONE</h3>
          <p>Diversão garantida para seu filho!</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>




        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1113804/pexels-photo-1113804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Mac Book Pro</h3>
          <p>O melhor computador para seus trabalhos e programas!</p>
      </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    );
}

export default Carrossel;