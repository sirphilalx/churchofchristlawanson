import { Footer, FooterLink, FooterLinkGroup } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsGithub,
  BsDribbble,
  BsTwitterX,
} from "react-icons/bs";

const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1 items-center">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-lg"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-lg text-white mr-2">
                9ja Pidgin
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <FooterLinkGroup col>
                <Footer.Link
                  href="/blogs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blogs
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About
                </Footer.Link>
                <Footer.Link
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact
                </Footer.Link>
              </FooterLinkGroup>
            </div>

            <div>
              <Footer.Title title="Follow Us" />
              <FooterLinkGroup col>
                <Footer.Link
                  href="/https://github.com/sirphilalx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
                <Footer.Link href="mailto:remotephil.upwork@gmail.com">
                  Email
                </Footer.Link>
              </FooterLinkGroup>
            </div>

            <div>
              <Footer.Title title="Legal" />
              <FooterLinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:justify-between sm:items-center">
          <Footer.Copyright
            href="#"
            by="EasyPass Software Solutions"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitterX} />
            <Footer.Icon
              href="https://www.github.com/sirphilalx"
              icon={BsGithub}
            />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
