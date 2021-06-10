import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Image avatar src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Crystal_Clear_kdm_user_female.svg" />
            <Menu.Item>
                <Dropdown pointing="top right" text="Ceren Susuz">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Infos" icon="info" />
                        <Dropdown.Item onClick={props.signOut} text="Log out" icon="sign-out" />
                        <Dropdown.Item text="Contact Us" icon="mail" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>

        </div >
    )
}
