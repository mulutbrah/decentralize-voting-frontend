import { useState } from "react";
import Web3Modal from "web3modal";
import { BrowserProvider } from "ethers";

const WalletConnect: React.FC = () => {
  const [provider, setProvider] = useState<BrowserProvider | null>(null);

  const connectWallet = async () => {
    const web3Modal = new Web3Modal();
    const instance = await web3Modal.connect();
    const ethersProvider = new BrowserProvider(instance); // Use BrowserProvider in ethers v6
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
