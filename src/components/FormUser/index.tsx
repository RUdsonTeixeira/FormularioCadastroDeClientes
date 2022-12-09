import { useEffect, useState } from "react";
import { Col, Form, Row, Button} from "react-bootstrap";
import { Cep } from "../../api/cep";
import { FormUserStyle } from './styled';
import { BeatLoader } from "react-spinners";

export function FormUser() {

    const [cep, setCep] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [endereco, setEndereco] = useState('')
    const [localidade, setLocalidade] = useState('')
    const [uf, setUf] = useState('')

    const listAdress = async () => {
        const address = await setCep(cep)
        setEndereco(address.logradouro)
        setLocalidade(address.localidade)
        setUf(address.uf)
        setIsLoading(false)
    }

    useEffect(() => {
        listAdress()
    }, [])
    let text = ''
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {

        if (event.key === "Enter") {
            setIsLoading(true)
            listAdress()
        } else {
            text = event.target.value;
            setCep(text)
        }
    }


    return (
        <FormUserStyle>
            <Form>
                <Row>
                    <h3>Formulario de Clientes</h3>
                </Row>
                <Form.Group className="mb-4" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Digite seu nome" />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-4" controlId="formBasicRG">
                            <Form.Control type="text" placeholder="RG" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-4" controlId="formBasicCPF">
                            <Form.Control type="text" placeholder="CPF" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-4" controlId="formBasicDTNascimento">
                            <Form.Control type="date" placeholder="Data de nascimento" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    {isLoading ? <BeatLoader color="#eff0f0" /> : ''}
                    <Col>
                        <Form.Group className="mb-4" controlId="formBasicCEP">
                            <Form.Control type="text" placeholder="CEP" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col xs={8}>
                        <Form.Group className="mb-4" controlId="formBasicEndereco">
                            <Form.Control type="text" placeholder="Endereço" value={endereco} onChange={() => { }} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-4" controlId="formBasicCidade">
                            <Form.Control type="text" placeholder="Cidade" value={localidade} onChange={() => { }} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-4" controlId="formBasicEstado">
                            <Form.Control type="text" placeholder="Estado" value={uf} onChange={() => { }} />
                        </Form.Group>
                    </Col>
                </Row>
                <Button>{'Salvar'}</Button>
            </Form>
        </FormUserStyle>
    )
}