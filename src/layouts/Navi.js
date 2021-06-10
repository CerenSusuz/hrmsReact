import React, { useState } from 'react';
import { useHistory } from 'react-router';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { Container, Menu, Icon } from 'semantic-ui-react'

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history = useHistory()

    function handleSignOut() {
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted fixed-top="true" >
                <Container>
                    <Menu.Item active>
                        Home
                </Menu.Item>
                    <Menu.Item link='/'>Find a job &nbsp;<Icon name='search' /></Menu.Item>
                    <Menu.Item link='/'>Publish Announcement</Menu.Item>
                    <Menu.Item link='/admin'>Admin</Menu.Item>

                    <Menu.Menu position='right'>
                        {isAuthenticated
                            ? <SignedIn signOut={handleSignOut} />
                            : <SignedOut signIn={handleSignIn} />}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}