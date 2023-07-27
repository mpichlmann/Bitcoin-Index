import React, { useEffect, useState } from 'react'

const BitcoinIndex = ({ currency="AUD" }) => {
  let [price, setPrice] = useState(0)

  useEffect(() => {
    fetch(`http://api.coindesk.com/v1/bpi/currentprice/${currency}.json`)
  .then(res => res.json())
  .then(data => setPrice(data.bpi[currency].rate_float))}, [currency])


  useEffect(() => console.log('effect triggered on mount or any change'))

  useEffect(() => console.log('effect triggered on mount or price change'), [price])

  return <>
    <h1>Bitcoin Index</h1>
    
    {price > 0 ? <p>Current Price ({currency}): {price}</p> : <p>Loading...</p>}
  </>
}

export default BitcoinIndex