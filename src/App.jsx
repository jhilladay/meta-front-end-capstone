import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout/Layout.jsx'
import Home from './pages/Home/Home.jsx';
import NotFound from './pages/Not Found/NotFound.jsx';
import Reservations from './pages/Reservations/Reservations.jsx';
import ConfirmedReservation from './pages/Reservations/confirmedBookings.jsx';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route
            path="/confirmedReservation"
            element={<ConfirmedReservation />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;