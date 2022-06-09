import React from 'react'

const Header = ({ title, links }) => {
  //  const { headerMain, headerTextStyle, navStyle, listStyle, anchorStyle } = require('../../styles/headerStyle')

    return (
        <div>
            <h1>{title}</h1>
           <nav>
            {/* <nav style={{ backgroundColor: '#232f3e', margin: '-0.75rem', padding: '0.5rem 0' }}> */}
                <ul>
                    {
                        links && links.map((link, i) => <li> <a href={link.link}>{link.title}</a> </li>)
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Header