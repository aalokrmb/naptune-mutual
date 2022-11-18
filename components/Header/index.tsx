import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav  from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useWeb3React } from "@web3-react/core";
import { injected } from "../WalletDetails/connector";
import WalletDetails from '../WalletDetails';
import { Web3Provider } from '@ethersproject/providers'

const Header: React.FC = () => {
  const { active, activate, deactivate } = useWeb3React<Web3Provider>();
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const connect = async () => {
    try {
      await activate(injected);
      handleShow();
    } catch (ex) {
      console.log(ex)
    }
  }

  const disconnect = async () => {
    try {
      deactivate();
      handleClose();
    } catch (ex) {
      console.log(ex)
    }
  }

  const handleClose = () => setShowDetail(false);
  const handleShow = () => setShowDetail(true);

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">NAPTUNE MUTUAL</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              { !active && 
              <>
              <Nav.Item className="mt-2 mx-4">Smart Chain - Testnet</Nav.Item>
              <Button onClick={connect}>Connect Wallet</Button></>
              }
              { active && 
              <>
                <Nav.Link onClick={handleShow}>See Wallet Details</Nav.Link>
                <Button variant="danger" onClick={disconnect}>Disconnect</Button> 
              </>}
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    {showDetail && <WalletDetails showDetail={showDetail} handleClose={handleClose} />}
    </>
  );
}

export default Header;