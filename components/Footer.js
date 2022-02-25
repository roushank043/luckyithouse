import Link from "next/link";



const Footer = () => {




    return (



        <footer className="page-footer blue ">
            <div className="container">
                <div className="row ">
                    <div className="col l4 s10">
                        <h5 className="white-text">Lucky IT House</h5>
                        <p className="grey-text text-lighten-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et cursus risus, at mollis augue. Etiam eget magna mauris. Phasellus luctus nec orci a porttitor. </p>
                    </div>
                    <div className="col l2 offset-l2 s10">
                        <h5 className="white-text">Quick Links</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="/"> - Home</a></li>
                            <li><a className="grey-text text-lighten-3" href="/services">  - Services</a></li>
                            <li><a className="grey-text text-lighten-3" href="/contactus"> - Contact US</a></li>
                        </ul>
                    </div>
                    <div className="col l2 offset-l2 s10">
                        <h5 className="#e65100 ">ADDRESS:</h5>
                        <ul>

                            <li> <a className="grey-text text-lighten-2"> D/NO:</a></li>
                            <li> <a className="grey-text text-lighten-2"> -112/23</a></li>


                            <li><a className="grey-text text-lighten-3" href="#!">PH.NO:</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!"> +91xxxxxxxx</a></li>
                            {/* <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2014 Copyright Text
            <a className="grey-text text-lighten-5  right  " href="#!"><i class="smalls material-icons">facebook</i></a>
                    <a className="grey-text text-lighten-5  right" href="#!"><i class="smalls material-icons">facebook</i></a>
                    <a className="grey-text text-lighten-5  right" href="#!"><i class="smalls material-icons">facebook</i></a>



                </div>
            </div>
        </footer>

    )

}
export default Footer;