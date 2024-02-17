// import Facebook from '../images/facebook-f.svg';
// import Instagram from '../images/instagram.svg';
// import YouTube from '../images/youtube.svg';
// import Twitter from '../images/twitter.svg';
function Footer() {
  return (
    <footer>
      <div className="container mx-auto">
        <h3 className="font-bold text-xl my-4">Khufu GO</h3>

        <div className="footer-container container px-4 lg:px-10 flex flex-wrap justify-between">
          {/* Social Media Section */}
          <div className="footer-section mb-4 lg:mb-0 lg:w-1/5 flex items-center">
            <ul>
              {/* <li><a className='text-lg text-slate-800'>Social Media</a></li>
                            <li><a className='text-lg flex items-center' href="#"><img src={Instagram} alt="Instagram" width={15} className="mr-2" />Instagram</a></li>
                            <li><a className='text-lg flex items-center' href="#"><img src={Twitter} alt="Twitter" width={20} className="mr-2" />Twitter</a></li>
                            <li><a className='text-lg flex items-center' href="#"><img src={Facebook} alt="Facebook" width={14} className="mr-2" />Facebook</a></li>
                            <li><a className='text-lg flex items-center' href="#"><img src={YouTube} alt="YouTube" width={20} className="mr-2" />YouTube</a></li> */}
            </ul>
          </div>

          {/* Team Section */}
          <div className="footer-section mb-4 lg:mb-0 lg:w-1/5">
            <ul>
              <li>
                <a className="text-lg text-slate-800">Team</a>
              </li>
              <li>
                <a className="text-lg" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-lg" href="#">
                  Our Offerings
                </a>
              </li>
              <li>
                <a className="text-lg" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="text-lg" href="#">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          {/* Access Section */}
          <div className="footer-section mb-4 lg:mb-0 lg:w-1/5">
            <ul>
              <li>
                <a className="text-lg text-slate-800">Access</a>
              </li>
              <li>
                <a className="text-lg" href="#">
                  Login
                </a>
              </li>
              <li>
                <a className="text-lg" href="#">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>

          {/* Language Section */}
          <div className="footer-section mb-4 lg:mb-0 lg:w-1/5">
            <ul>
              <li>
                <a className="text-lg text-slate-800">Language</a>
              </li>
              <li>
                <a className="text-lg" href="#">
                  Arabic
                </a>
              </li>
              <li>
                <a className="text-lg" href="#">
                  English
                </a>
              </li>
            </ul>
          </div>

          {/* Travel Section */}
          <div className="footer-section lg:w-1/5">
            <ul>
              <li>
                <a className="text-lg text-slate-800">Travel</a>
              </li>
              <li>
                <a className="text-lg" href="#">
                  Bus
                </a>
              </li>
              <li>
                <a className="text-lg" href="#">
                  Metro
                </a>
              </li>
              <li>
                <a className="text-lg" href="#">
                  Location
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col lg:flex-row justify-between">
          <button className="text-left mb-4 lg:mb-0 bg-black text-white font-bold w-19 py-2 px-4 rounded ml-4">
            Help?
          </button>
          <p className="text-center lg:w-1/3 ">@1980 Copy Rights</p>
          <p className="text-right lg:w-1/3">Terms | Privacy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
