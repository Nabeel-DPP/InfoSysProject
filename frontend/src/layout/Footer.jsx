import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
       <footer className="footer mt-5 pt-5">
            <div className="copyright bg-white">
              <p>
                 <span id="copy-year"></span>   All Rights Reserved &copy; <Link className="text-blue" href="http://www.iamabdus.com/" target="_blank" >InfoSys Private Limited</Link>.
              </p>
            </div>

          </footer>
    </div>
  )
}

export default Footer
