import './App.css';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router}/>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
