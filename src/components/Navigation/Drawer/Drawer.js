import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Drawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

class Drawer extends Component {

    clickHandler = () => {
        this.props.onClose()
    }

    renderLinks(links) {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={'active'}
                        onClick={this.clickHandler}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }
    render() {
        let cls = !(this.props.isOpen) ? 'Drawer close' : 'Drawer'

        const links = [
            { to: '/', label: 'Список тестов', exact: true }
                    
        ]

        if(this.props.isAuthenticated){
            links.push({ to: '/quiz-creator', label: 'Создать тест', exact: false })
            links.push({ to: '/logout', label: 'Выйти', exact: false })
        }else{
            links.push({ to: '/auth', label: 'Авторизация', exact: false })
        }
        return (
            <React.Fragment>
                <nav className={cls}>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                </nav>
                {this.props.isOpen
                    ? <Backdrop
                        onClick={this.props.onClose}
                    />
                    : null}
            </React.Fragment>

        )
    }
}

export default Drawer