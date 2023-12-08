import React from "react";
import LR12 from './components/LR12';
import { RealmContext } from "./components/LR12/utils/db/realm";
const { RealmProvider } = RealmContext;

export default function App() {
  return (
    <RealmProvider>
      <LR12 />
    </RealmProvider>
  )
}