import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Affix } from 'antd'
const SubMenu = Menu.SubMenu

class NavBar extends Component {
    state = {
        current: 'home'
    }

    handleClick = e => {
        this.setState({
            current: e.key
        })
    }

    render() {
        return (
            <header>
                <Affix>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode='horizontal'
                    >
                        <Menu.Item disabled>
                            <span className='app-name'>Recycling 101</span>
                        </Menu.Item>
                        <Menu.Item key='home'>
                            <Link to='/'>Home</Link>
                        </Menu.Item>
                        <SubMenu title={<span className="submenu-title-wrapper">Recycling at Home</span>}>
                            <Menu.Item key='curbsideprgm'>
                                <Link to='/curbsideprgm'>Government Curbside Program</Link>
                            </Menu.Item>
                            <Menu.Item key='takebackprgm'>
                                <Link to='/takebackprgm'>Retailer Take Back Program</Link>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key='depots' disabled>
                            <Link to='/depots'>Recycling at Depots</Link>
                        </Menu.Item>
                        <Menu.Item key='searc'>
                            <Link to='/search'>Where Else to Recycle?</Link>
                        </Menu.Item>
                        <SubMenu title={<span className="submenu-title-wrapper">Other Resources</span>}>
                            <Menu.Item key='junkremoval' disabled>
                                <Link to='/junkremoval'>Junk Removal Services</Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Affix>
            </header>
        )
    }
}

export default NavBar