import '../styles/globals.css'
import { CartProvider } from "react-use-cart";
import  Layout  from "../components/Layout"
import { createContext, useState } from 'react';

export const CurrencyContext = createContext('SEK')

function MyApp({ Component, pageProps }) {
  const [currency, setCurrency] = useState('SEK')

  return(
    <CurrencyContext.Provider value={currency}>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </CurrencyContext.Provider>
)
}

export default MyApp
