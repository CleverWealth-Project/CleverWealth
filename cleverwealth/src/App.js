import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CompanyPage from './components/CompanyPage';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PricingPage from './components/PricingPage';
import ProductPage from './components/ProductPage';
import SolutionsPage from './components/SolutionsPage';
import UseCasesPage from './components/UseCasesPage';
import SignUpForm from './components/SignUpForm';

function App() {
  return (

    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/usecases" element={<UseCasesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/company" element={<CompanyPage />} />

      </Routes>
    </Router>

  );
}

export default App;
