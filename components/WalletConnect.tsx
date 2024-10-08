import { useState } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

const WalletConnect: React.FC = () => {
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);

  const connectWallet = async () => {
    const web3Modal = new Web3Modal();
    const instance = await web3Modal.connect();
    const ethersProvider = new ethers.BrowserProvider(instance);
    setProvider(ethersProvider);
  };

  return (
    <div>
      {provider ? (
        <p>Wallet Connected</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default WalletConnect;
