import React from 'react'
import './Layout.css'

function Layout(props) {
    return (
        <div className='Layout'>

            <main>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;


