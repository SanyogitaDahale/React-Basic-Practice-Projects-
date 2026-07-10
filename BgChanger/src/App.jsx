import { useState } from 'react'
import './App.css'

function App() {


  // State is following
  const [color, setColor] = useState('Black')

  return (
    <>
      <div className='w-full h-screen' style={{ backgroundColor: color }}> {/* inline css using Style double curly braces */}
        <h1 className='text-white text-center text-4xl font-extrabold py-5'>Hello ! Welcome to Background Changer !</h1>
        <div className='fixed flex flex-row justify-center top-20 inset-x-0'>

          <div className=' flex flex-row justify-center bg-white gap-3 shado-lg px-2 py-1 rounded-2xl'>
            <button
              onClick={() => setColor(" #121358")}
              className='outline-none font-bold border-0 shadow-2xl my-4 mx-5 bg-[#121358] px-5 rounded-2xl text-white py-1 hover:underline'>
              Blue
            </button>
            <button
              onClick={() => setColor(" #412D15")}
              className='outline-none font-bold border-0 shadow-2xl my-4 mx-5 bg-[#412D15] px-5 rounded-2xl text-white py-1 hover:underline'>
              Brown
            </button>
            <button
              onClick={() => setColor("#E6501B")}
              className='outline-none font-bold border-0 shadow-2xl my-4 mx-5 bg-[#E6501B] px-5 rounded-2xl text-white py-1 hover:underline '>
              Orange
            </button>
            <button
              onClick={() => setColor("#4F1787")}
              className='outline-none font-bold border-0 shadow-2xl my-4 mx-5 bg-[#4F1787] px-5 rounded-2xl text-white py-1 hover:underline'>
              Purple
            </button>
          </div>

        </div>

      </div>

    </>
  )
}

export default App
