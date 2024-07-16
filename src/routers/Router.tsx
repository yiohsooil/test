import React, { ReactNode } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
// import Main from '../pages/main/Main';
// import About from '../pages/about/About';
// import History from '../pages/about/History';
// import Organization from '../pages/about/Organization';
// import Product from '../pages/product/Product';
// import InfusionSets from '../pages/product/InfusionSets';
import Anydana from '../pages/product/Anydana';
import DanaRs from '../pages/product/DanaRs';
import DanaR from '../pages/product/DanaR';
import DanaIIs from '../pages/product/DanaIIs';
import Privacy from '../pages/privacy/Privacy';
import NotFound from '../pages/NotFound';

const isValidPath = (path?: string) => {
  // 알파벳, 숫자, 하이픈, 언더스코어만 허용
  const regex = /^[a-zA-Z0-9_\-]+$/;
  return regex.test(path as string);
};

const PathValidator = ({ element }: { element: ReactNode }) => {
  const { path } = useParams();
  if (isValidPath(path)) {
    return <>{element}</>;
  } else {
    return <Navigate to="/not-found" />;
  }
};

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DanaRs />} />
        {/* <Route index element={<Product />} /> */}
        {/* <Route path="/dana-rs" element={<DanaRs />} /> */}
        <Route path="/dana-r" element={<DanaR />} />
        <Route path="/dana-iis" element={<DanaIIs />} />
        <Route path="/anydana" element={<Anydana />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
        {/* <Route index element={<Main />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/about/history" element={<History />} /> */}
        {/* <Route path="/about/organization" element={<Organization />} /> */}
        {/* <Route path="/product" element={<Product />} /> */}
        {/* <Route path="/product/anydana-application" element={<Anydana />} /> */}
        {/* <Route path="/product/infusion-sets" element={<InfusionSets />} /> */}
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="/:path" element={<PathValidator element={<NotFound />} />} />
    </Routes>
  );
}
