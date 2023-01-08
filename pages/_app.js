import Navbar from './Components/Navbar'
import '../styles/globals.css'
// import Counter from './counter'

export default function App({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
  </>
}
