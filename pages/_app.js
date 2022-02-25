import '../styles/globals.css'
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />

    </Layout>
  )
   
}

export default MyApp
