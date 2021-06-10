import React from 'react'
import { Button, Menu, Dropdown } from 'semantic-ui-react'

export default function SignedOut(props) {
    return (
        <div>
            <Menu.Item>
                <Button basic color='blue' onClick={props.signIn}>Sign in</Button>
                <Button basic color='green' style={{marginLeft:'0.5em'}} >Sign up</Button>
                <Dropdown pointing="top right" text="Employer" style={{marginLeft:'0.5em'}}>
                    <Dropdown.Menu>
                        <Dropdown.Item text="Sign in" icon="sign-in" onClick={props.signIn}/>
                        <Dropdown.Item text="Sign up" icon="signup" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
