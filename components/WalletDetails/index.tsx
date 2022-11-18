import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from '@ethersproject/providers';
import { formatEther } from "@ethersproject/units";
import Alert from 'react-bootstrap/Alert';

type modalProps = {
  showDetail: boolean;
  handleClose: () => void;
}

const WalletDetails: React.FC<modalProps> = ({ showDetail, handleClose }) => {
  const {active, account, library: provider } = useWeb3React<Web3Provider>();
  const [ethBalance, setEthBalance] = useState<number | undefined>(undefined);

  useEffect(() => {
    if(active && account) {
      provider?.getBalance(account).then((result)=>{
        setEthBalance(Number(formatEther(result)))
      })
    }
  })

  const data = [{ key: 'Account', value: account }, 
                { key: 'Chain Id', value: 97 }, 
                { key: 'Balance', value: ethBalance}]
                
  return (
    <Modal show={showDetail} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Wallet Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {active && <Table>
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {data.map(d => 
              <tr key={d.key}>
                <td>{d.key}</td>
                <td>{d.value}</td>
              </tr>
              )}
            </tbody>
        </Table>}
        {!active && <Alert variant='danger'>
          We are unable to connect.
          Make sure you have choosen correct Network in MetaMask. 
          Please use Binance Smart Chain - Testnet</Alert>}
      </Modal.Body>
   </Modal>
  )
}

export default WalletDetails;