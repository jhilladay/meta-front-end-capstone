import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout/Layout.jsx'
import Home from './pages/Home.jsx';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;