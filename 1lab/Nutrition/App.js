import { NativeBaseProvider } from "native-base";
import Navigation from "@screens";
import store from './src/store'
import { Provider } from 'react-redux';
import RealmProvider from "@context/realm.context";

const App = () => {
  return (
    <RealmProvider>
      <Provider store={store}>
        <NativeBaseProvider>
          <Navigation />
        </NativeBaseProvider>
      </Provider>
    </RealmProvider>
  );
}

export default App;
