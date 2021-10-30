import styles from '../styles/Home.module.css'
import Head from 'next/head'
// COMPONENTS
import Navbar from '../components/Home/Navbar'
import Carousel from '../components/Home/Carousel'
import Table from '../components/Home/Table'
import Description from '../components/Home/Description'
import Footer from '../components/Home/Footer'

export default function Home() {
   return(
		<div>
      <Head>
        <title>Judi Onlen</title>
      </Head>
			<div className={styles.container}>
				<Navbar/>
				<Carousel/>
				<Table/>
				<Description/>
				<Footer/>
			</div>
		</div>
   )
}