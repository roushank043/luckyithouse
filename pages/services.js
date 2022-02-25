import Link from "next/link";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from "../components/Footer";
import Head from "next/head";

const services = () => {
    return (
        <div >
            <Head>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            </Head>
            <main>
                <div>
                    <h3 className="osrvc">OUR SERVICES</h3>
                </div>
                {/* <div className="banner-img">
                    <img className="ma" width="100%" height={200} src="https://images.unsplash.com/photo-1579547621115-c3a18faa2980?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhbm5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"></img>

                </div> */}
                <div className={styles.container}>

                    <div className="grids">
                        <div className="card-one">
                            <div className="card">
                                <div className="card__side card__side--front" id="front-1">
                                    <div className="text-box">

                                        <h1 className="text-box-middle">Service name</h1>
                                        <h3 className="text-box-lower">DESCRIPTION.....</h3>
                                    </div>
                                </div>
                                <div className="card__side card__side--back" id="back-1">
                                    <div className="text-box">
                                        <h3 className="text-box-top">Cards Flipped</h3>
                                        <h1 className="text-box-middle">Great!</h1>
                                        <h3 className="text-box-lower">DESCRIPTION.....</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-two">
                            <div className="card">
                                <div className="card__side card__side--front" id="front-2">
                                    <div className="text-box">

                                        <h1 className="text-box-middle">Service name</h1>
                                        <h3 className="text-box-lower">DESCRIPTION.....</h3>
                                    </div>
                                </div>
                                <div className="card__side card__side--back" id="back-2">
                                    <div className="text-box">
                                        <h3 className="text-box-top">Cards Flipped</h3>
                                        <h1 className="text-box-middle">Great!</h1>
                                        <h3 className="text-box-lower">DESCRIPTION.....</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-three">
                            <div className="card">
                                <div className="card__side card__side--front" id="front-3">
                                    <div className="text-box">

                                        <h1 className="text-box-middle">Service name</h1>
                                        <h3 className="text-box-lower">DESCRIPTION.....</h3>
                                    </div>
                                </div>
                                <div className="card__side card__side--back" id="back-3">
                                    <div className="text-box">
                                        <h3 className="text-box-top">Cards Flipped</h3>
                                        <h1 className="text-box-middle">Great!</h1>
                                        <h3 className="text-box-lower">DESCRIPTION.....</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-four">
                            <div className="card">
                                <div className="card__side card__side--front" id="front-4">
                                    <div className="text-box">

                                        <h1 className="text-box-middle">Service name</h1>
                                        <h3 className="text-box-lower">DESCRIPTION.....</h3>
                                    </div>
                                </div>
                                <div className="card__side card__side--back" id="back-4">
                                    <div className="text-box">
                                        <h3 className="text-box-top">Cards Flipped</h3>
                                        <h1 className="text-box-middle">Great!</h1>
                                        <h3 className="text-box-lower">DESCRIPTION.....</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-five">
                            <div className="card">
                                <div className="card__side card__side--front" id="front-5">
                                    <div className="text-box">

                                        <h1 className="text-box-middle">Service name</h1>
                                        <h3 className="text-box-lower">DESCRIPTION.....</h3>
                                    </div>
                                </div>
                                <div className="card__side card__side--back" id="back-5">
                                    <div className="text-box">
                                        <h3 className="text-box-top">Cards Flipped</h3>
                                        <h1 className="text-box-middle">Great!</h1>
                                        <h3 className="text-box-lower">DESCRIPTION.....</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-six">
                            <div className="card">
                                <div className="card__side card__side--front" id="front-6">
                                    <div className="text-box">

                                        <h1 className="text-box-middle">Service name</h1>
                                        <h3 className="text-box-lower">DESCRIPTION.....</h3>
                                    </div>
                                </div>
                                <div className="card__side card__side--back" id="back-6">
                                    <div className="text-box">
                                        <h3 className="text-box-top">Cards Flipped</h3>
                                        <h1 className="text-box-middle">Great!</h1>
                                        <h3 className="text-box-lower">DESCRIPTION.....</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-seven">
                            <div className="card">
                                <div className="card__side card__side--front" id="front-7">
                                    <div className="text-box">

                                        <h1 className="text-box-middle">Service name</h1>
                                        <h3 className="text-box-lower">DESCRIPTION.....</h3>
                                    </div>
                                </div>
                                <div className="card__side card__side--back" id="back-7">
                                    <div className="text-box">
                                        <h3 className="text-box-top">Cards Flipped</h3>
                                        <h1 className="text-box-middle">Great!</h1>
                                        <h3 className="text-box-lower">DESCRIPTION.....</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>

    )
}
export default services;