import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';



function Email() {
  return (
    <>
    <h1> Converse com nossa equipe de suporte!</h1>
    <br/>
    <p>Preencha os campos abaixo</p>
     <br/>



     <FloatingLabel controlId="floatingPassword" label="Nome e sobrenome">
        <Form.Control type="text" placeholder="text" />
      </FloatingLabel>
    <br/>



      <FloatingLabel
        controlId="floatingInput"
        label="Gmail"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <br/>



      <Button variant="dark">Enviar</Button>{' '}
      <br/>
    </>
  );
}

export default Email;