import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import LoginPage from './components/login';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';

import OrderStatus from './components/OrderStatus'; // New Component
import OrderPunch from './components/OrderPunch'; // New Component
import AddBroker from './components/AddBroker';
import ViewBroker from './components/ViewBroker';
import Marketwatch from './components/Marketwatch';
import Angel from './components/Angelbroker';
import Funds from './components/Funds';
import Holdings from './components/Holdings';
import NetPosition from './components/NetPosition';
import Dhan from './components/Dhan';
import Motilal from './components/Motilal';
import Groww from './components/Grow';
import Fyers from './components/Fyers';
import Fyersredirect from './components/Fyresredirect';

function App() {
  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
      
          <Route element={<Layout />}>
            <Route path="/home" element={<Marketwatch />} />
            
            {/* Add more protected routes here */}

            <Route path="/Instrument" element={<Dashboard />} />
            
              <Route path="/OrderStatus" element={<OrderStatus />} />
              <Route path="/OrderPunch" element={<OrderPunch />} />
              <Route path="/Funds" element={<Funds />} />
              <Route path="/NetPosition" element={<NetPosition />} />
              <Route path="/Holdings" element={<Holdings />} />
            
            {/* <Route path="/Settings" element={<AddBroker />} /> */}
            <Route path="/ViewBroker" element={<ViewBroker defaultBrokerName="Shoonya" />} />
            <Route path="/ViewAngel" element={<Angel />} />
            <Route path="/Viewdhan" element={<Dhan />} />
            <Route path="/Viewmotilal" element={<Motilal />} />
            <Route path="/Viewgroww" element={<Groww />} />
            <Route path="/Viewfyers" element={<Fyers />} />
            <Route path="/fyerstoken" element={<Fyersredirect />} />



          </Route>
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;