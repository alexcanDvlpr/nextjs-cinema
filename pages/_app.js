import Navbar from '../components/Navbar';
import '../styles/globals.css'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
