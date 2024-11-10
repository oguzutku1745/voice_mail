import { useState } from "react";
import reactLogo from "./assets/react.svg";
import aleoLogo from "./assets/aleo.svg";
import "./App.css";
import { WalletMultiButton } from "@demox-labs/aleo-wallet-adapter-reactui";
import {
  Transaction,
  WalletAdapterNetwork,
  WalletNotConnectedError,
} from "@demox-labs/aleo-wallet-adapter-base";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  // const { publicKey, requestTransaction, requestRecordPlaintexts, decrypt } = useWallet();

  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
