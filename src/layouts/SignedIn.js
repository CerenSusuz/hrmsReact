import React from 'react'
import { Dropdown, Image, Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Crystal_Clear_kdm_user_female.svg" />
                <Dropdown pointing="top right" text="İş Arayan">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Profilim" icon="info" />
                        <Dropdown.Item text="Favorilerim" icon="heart" />
                        <Dropdown.Item text="Mesajlarım" icon="mail outline" />
                        <Dropdown.Item onClick={props.signOut} text="Log out" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
                <Image avatar src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Crystal_Clear_kdm_user_female.svg" />
                <Dropdown pointing="top right" text="Hrms Yönetim">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Profilim" icon="info" />
                        <Dropdown.Item >
                            <Link style={{color:'red'}} to={`/admin/2a4a8a6a5a`}>
                            <Icon name='user secret' />
                            Yönetim
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item text="Contact Us" icon="mail" />
                        <Dropdown.Item onClick={props.signOut} text="Log out" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
                <Image style={{marginLeft:'.3em'}} avatar src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Crystal_Clear_kdm_user_female.svg" />
                <Dropdown pointing="top right" text="İş Veren">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Profilim" icon="info" />
                        <Dropdown.Item ><Icon name='users' />İş Duyurularım</Dropdown.Item>
                        <Dropdown.Item text="Mesajlarım" icon="mail outline" />
                        <Dropdown.Item >
                            <Link style={{color:'red'}} to={`/jobAdd`}>
                            <Icon name='write' />
                            İlan Ver
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={props.signOut} text="Log out" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>

        </div >
    )
}
