import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'
import bg from "./assets/bg.png";

function App() {

  // First we want lenth for this we need Use state
  const [length, setLength] = useState(8)

  //Second is checkbox for numbers - use true and false value (UseState)
  const [number, setNumber] = useState(false)

  // For Character 
  const [character, setCharacters] = useState(false)

  //For Password  - not giving default value cause we r going to generate it.
  const [password, setPassword] = useState("")

  //Use ref hook - creating variable
  const passwordRef = useRef(null)

  //Dependencies - Number and character
  //Password Generator - useCallback hook
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456780"
    if (character) str += "!@#$%^&*(){}"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, number, character, setPassword])

  // Copy Password 
  //useRef - hook (for reference)
  //for using useref - have to create a variable first
  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 4);
    window.navigator.clipboard.writeText(password)
  }, [password])

  // useeffect hook for password generation
  useEffect(() => {
    passwordGenerator()

  }, [length, number, character, passwordGenerator])


  // HTML and Tailwind Css 
  return (
    <>
      <div className='min-h-screen flex justify-center items-center bg-cover bg-center '
        style={{
          backgroundImage: `url(${bg})`,
        }}>
        <div className='w-full max-w-md mx-auto rounded-4xl px-9 py-15 text-blue-200 text-center  bg-black '>

          <h1 className='text-blue-200 text-3xl mb-10 '> 🔒 Password Generator 🔒</h1>


          <div>
            <input type='text'
              value={password}
              className='w-full text-center border-1 border-amber-50 rounded-xl py-2 underline' placeholder='password' readOnly
              ref={passwordRef}
            />
          </div>

          <div className="pt-5">

            <div>

              <input
                type="range"
                min={6}
                max={30}
                value={length}
                className="cursor-pointer mr-3"
                onChange={(e) => { setLength(e.target.value) }}

              />
              <label>length : {length}</label>

            </div>

            <div>
              <input
                type="checkbox"
                defaultChecked={number}
                id='numberInput'
                className="cursor-pointer mr-2 my-5 "
                onChange={() => { setNumber((prev) => !prev); }}

              />
              <label>Add Numbers</label>
            </div>

            <div className=''>
              <input
                type="checkbox"
                defaultChecked={character}
                id='characterInput'
                className="cursor-pointer mr-2"
                onChange={() => { setCharacters((prev) => !prev); }}

              />
              <label>Add Special Character</label>
            </div>

          </div>

          <button onClick={copyPassword} className='cursor-pointer py-2 bg-radial from-blue-100 to-blue-500 text-blue-950 my-5 w-70 rounded-2xl font-bold hover:from-blue-200
          hover:to-blue-600
          hover:scale-105
          hover:shadow-lg
          hover:text-white' > Copy Password </button>


        </div>
      </div>

    </>
  )
}

export default App
