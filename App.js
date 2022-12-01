
import HomeScreen from './src/screen/HomeScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux/Store';

export default function App() {
  return (
    <Provider store={store}>
    <HomeScreen/>
    </Provider>
  );
}
