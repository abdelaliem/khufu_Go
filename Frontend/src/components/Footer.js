import React from "react";
import Facebook from "../images/facebook-f.svg";
import Instagram from "../images/instagram.svg";
import YouTube from "../images/youtube.svg";
import Twitter from "../images/twitter.svg";

function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-5">
        <h3 className="font-bold text-xl mb-4">Khufu GO</h3>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Social Media Section */}
          <div className="mb-4 lg:mb-0 ms-8">
            <ul>
              <li>
                <a className="text-lg text-slate-800 font-bold">Social Media</a>
              </li>
              <li>
                <a className="text-md flex items-center" href="#">
                  <img
                    src={Instagram}
                    alt="Instagram"
                    width={15}
                    className="mr-2"
                  />
                  Instagram
                </a>
              </li>
              <li>
                <a className="text-md flex items-center" href="#">
                  <img
                    src={Twitter}
                    alt="Twitter"
                    width={20}
                    className="mr-2"
                  />
                  Twitter
                </a>
              </li>
              <li>
                <a className="text-md flex items-center" href="#">
                  <img
                    src={Facebook}
                    alt="Facebook"
                    width={14}
                    className="mr-2"
                  />
                  Facebook
                </a>
              </li>
              <li>
                <a className="text-md flex items-center" href="#">
                  <img
                    src={YouTube}
                    alt="YouTube"
                    width={20}
                    className="mr-2"
                  />
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Team Section */}
          <div className="mb-4 lg:mb-0 ms-8">
            <ul>
              <li>
                <a className="text-lg text-slate-800 font-bold">Team</a>
              </li>
              <li>
                <a className="text-md" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-md" href="#">
                  Our Offerings
                </a>
              </li>
              <li>
                <a className="text-md" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="text-md" href="#">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          {/* Access Section */}
          <div className="mb-4 lg:mb-0 ms-8">
            <ul>
              <li>
                <a className="text-lg text-slate-800 font-bold">Access</a>
              </li>
              <li>
                <a className="text-md" href="#">
                  Login
                </a>
              </li>
              <li>
                <a className="text-md" href="#">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>

          {/* Language Section */}
          <div className="mb-4 lg:mb-0 ms-8">
            <ul>
              <li>
                <a className="text-lg text-slate-800 font-bold">Language</a>
              </li>
              <li>
                <a className="text-md" href="#">
                  Arabic
                </a>
              </li>
              <li>
                <a className="text-md" href="#">
                  English
                </a>
              </li>
            </ul>
          </div>

          {/* Travel Section */}
          <div className=" ms-8">
            <ul>
              <li>
                <a className="text-lg text-slate-800 font-bold">Travel</a>
              </li>
              <li>
                <a className="text-md" href="#">
                  Bus
                </a>
              </li>
              <li>
                <a className="text-md" href="#">
                  Metro
                </a>
              </li>
              <li>
                <a className="text-md" href="#">
                  Location
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between">
          <button className="text-left mb-4 bg-black text-white font-bold py-2 px-4 rounded md:ml-4">
            Help?
          </button>
          <p className="text-center md:mb-0 mb-4">&copy; 1980 Copy Rights</p>
          <p className="text-right">Terms | Privacy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
