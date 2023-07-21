import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
