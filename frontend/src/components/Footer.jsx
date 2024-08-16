import React, { Children } from 'react'
import { Link } from 'react-router-dom'
import FOOTER_LINKS from '../assets/footer_links'

function Footer() {
  return (
    <footer>
      <div>
        <div>
          <Link to='/' className="mb-10 bold-20">Shoppee</Link>
          <div>
            {
              FOOTER_LINKS.map((col) => (
                <FooterColumn title={col.title} key={col.title}>
                 <ul>{col.links.map((link) => (
                  <Link to='/' key={link}>{link}</Link> 
                 ))}</ul>
                </FooterColumn>
              ))
            }
          </div>
        </div>
      </div>
    </footer>
  )
}

const FooterColumn = ({title, children}) =>{
  return(
    <div ><h4>{title}</h4>{children}</div>
  );
}

export default Footer