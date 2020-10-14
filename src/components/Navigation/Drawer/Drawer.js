import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './Drawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

const links = [
    {to:'/', label: 'Список тестов', exact: true},
    {to:'/auth', label: 'Авторизация', exact: false},
    {to:'/quiz-creator', label: 'Создать тест', exact: false}
]

class Drawer extends Component {

    clickHandler = () => {
        this.props.onClose()
    }

    renderLinks() {
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
        return (
            <React.Fragment>
                <nav className={cls}>
                    <ul>
                        {this.renderLinks()}
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