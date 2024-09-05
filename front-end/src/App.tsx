import { ToastContainer } from 'react-toastify';
import { Layout } from './comoponents/layout';
import { MainPage } from './comoponents/mainPage';

function App() {
  return (
    <Layout>
      <ToastContainer />

      <MainPage />
    </Layout>
  );
}

export default App;
