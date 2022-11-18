import { useState } from 'react';
import styles from './ConverterForm.module.css'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { nepToBusdConversion, busdToNepConversion, convertToDecimal } from '../utils';

type InputProps = {
  nep?: number | string,
  busd?: number | string 
}

const ConverterForm: React.FC = () => {
  
  const [inputs, setInputs] = useState<InputProps>({nep: '0.00', busd: '0.00'});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = convertToDecimal(event);
    if (event.target.name === "nep")
      setInputs({ nep: value, busd: nepToBusdConversion(parseFloat(value || '0.00')).toFixed(2)});
    else
      setInputs({ nep: busdToNepConversion(parseFloat(value || '0.00')).toFixed(2), busd: value});
  }

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <h3 className='mb-3 text-center'>Crypto Converter</h3> 
          <Form>
            <Form.Group className="mb-3" controlId="nep">
              <Form.Label>NEP</Form.Label>
              <Form.Control type="text" min="0" step="0.01" value={inputs?.nep} placeholder="0.00" onChange={handleChange} name="nep"/>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="busd">
              <Form.Label>BUSD</Form.Label>
              <Form.Control type="tetx" value={inputs?.busd} placeholder="0.00" name="busd" onChange={handleChange} />
            </Form.Group>
          </Form>
      </Card>
    </div>
  )
}

export default ConverterForm;