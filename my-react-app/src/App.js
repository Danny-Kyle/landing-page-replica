import React, { useState } from 'react';
import { Body } from './components/Body';
import { Navbar } from './components/Navbar';

const App = () => {
    const [darkTheme, setdarkTheme] = useState(false)

  return (
    <div className={darkTheme ? 'dark' : ''}>
       <div className='bg-white dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
           <Navbar />
           <Body />
       </div>
    </div>
  )
}

export default App