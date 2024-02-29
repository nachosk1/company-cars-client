import { Logo } from "@/components"
import { footerLinks, footerOtherLinks } from "@/constants"
import Link from "next/link"

const TextReserved = () => {
  return <p className="text-base text-gray-700">
    CenterCar {new Date().getFullYear()} <br /> Todos los derechos reservados &copy;
  </p>
}

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5  border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Logo />
          <TextReserved />
        </div>

        <div className="footer__links">
          {
            footerLinks.map((link) => (
              <div key={link.title} className="footer__link">
                <h3 className="font-bold">{link.title}</h3>
                {
                  link.links.map((item) => (
                    <Link
                      key={item.title}
                      href={item.url}
                      className="text-gray-500"
                    >{item.title}</Link>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <TextReserved />
        <div className="footer__copyrights-link">
          {
            footerOtherLinks.map((link) => (
              <Link
                href={link.url}
                className="text-gray-500"
                key={link.title}
              >{link.title}</Link>
            ))
          }
        </div>
      </div>

    </footer>
  )
}

export default Footer
