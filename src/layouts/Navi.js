import React, { useState } from 'react';
import { useHistory } from 'react-router';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { Container, Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

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
            <Menu inverted >
                <Container>
                    <Menu.Item>                    
                        <Link to='/'><Icon name='power' /></Link>
                    </Menu.Item>
                    <Menu.Item as='a'> Home &nbsp;<Icon name='home' /></Menu.Item>
                    <Menu.Item as='a'> Find a job &nbsp;<Icon name='search' /></Menu.Item>
                    <Menu.Item as='a'> Publish Announcement &nbsp;<Icon name='write' /> </Menu.Item>
                    <Menu.Item as='a'> Admin &nbsp;<Icon name='user secret' /> </Menu.Item>
                    <Menu.Item position='right'>
                        {isAuthenticated
                            ? <SignedIn signOut={handleSignOut} />
                            : <SignedOut signIn={handleSignIn} />}
                    </Menu.Item>
                </Container>
            </Menu>
        </div>
    )
}