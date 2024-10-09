import { useState, useEffect } from "react";
import { ethers, BrowserProvider } from "ethers";

const contractAddress = "YOUR_CONTRACT_ADDRESS";
// const abi = [...] // ABI JSON from deployed contract

const Voting: React.FC = () => {
  const [proposals, setProposals] = useState([]);
  const [provider, setProvider] = useState<BrowserProvider | null>(null);

  useEffect(() => {
    const fetchProposals = async () => {
      if (provider) {
        const signer = provider.getSigner();
        const votingContract = new ethers.Contract(
          contractAddress,
          abi,
          signer
        );
        const fetchedProposals = await votingContract.getProposals();
        setProposals(fetchedProposals);
      }
    };
    fetchProposals();
  }, [provider]);

  return (
    <div>
      <h1>Voting Proposals</h1>
      <ul>
        {proposals.map((proposal, index) => (
          <li key={index}>{proposal.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default Voting;
