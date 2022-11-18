import styles from '../styles/Home.module.css'
import Form from 'react-bootstrap/Form';
import ConverterForm from '../components/ConverterForm';
import Header from '../components/Header';

const Home = () => {
  return (
    <>
    <Header />
    <ConverterForm />
    </>
  )
}

export default Home;