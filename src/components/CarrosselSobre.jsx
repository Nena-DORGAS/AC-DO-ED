import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarrosselSobre() {


  
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />




        <Carousel.Caption>
          <h3>Eletronicos Shop</h3>
          <p>A melhor Loja de Eletronicos feita para você!</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
  );
}

export default CarrosselSobre;