import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'
import { InputBox } from './Components'
import bg from "./assets/bg.png";
import { Currency } from 'lucide-react';


function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyinfo = useCurrencyInfo(from)
  const options = Object.keys(currencyinfo).map((item) => item.toLowerCase());
  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
    
  }

  const convert = () => {
    setConvertedAmount(amount * currencyinfo[to])
  }


  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${bg}')`,
      }}
    >
      
      <div className="w-full">

        <h1 className='text-green-800 font-medium text-3xl text-center my-5  '> $ Convert Currency App $ </h1>


        <div className="w-full max-w-md mx-auto border border-green-600 rounded-lg p-5 backdrop-blur-sm bg-pink-100">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()

            }}
          >
            <div className="w-full mb-1 font-bold">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-green-600 text-white px-2 py-0.5"
                onClick={swap}

              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4 font-bold">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable

              />
            </div>
            <button type="submit" className="w-full bg-green-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {
                to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );

}

export default App
