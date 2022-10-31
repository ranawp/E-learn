import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Navbar from './Components/Navbar'
import Home from './Home'

export default function index() {
  return (
    <div>
      <Head>
        <title>Home page</title>
      </Head>
      <Home></Home>
    </div>
  )
}
