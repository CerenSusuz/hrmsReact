import React, { useState } from 'react';
import { useHistory } from 'react-router';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { Container, Menu, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
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
            <Menu fixed='top' inverted style={{ opacity: '.7' }} >
                <Container>
                    <Menu.Item header >
                        <Link to={`/`}>
                            <Image size='mini' src='https://cdn.pixabay.com/photo/2019/01/19/19/22/recruitment-3942378__340.jpg' />
                            HRMS
                        </Link>
                    </Menu.Item>
                    <Menu.Item  >
                        <Link to={`/`}>
                            Anasayfa
                        </Link>&nbsp;<Icon name='home' />
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/findjob'>
                            İş bul <Icon name='search' />
                        </Link>

                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/employerRegister'>
                            İlan Ver
                            <Icon name='write' />
                        </Link>

                    </Menu.Item>
                    <Menu.Item position='right'>
                        {isAuthenticated
                            ? <SignedIn signOut={handleSignOut} />
                            : <SignedOut signIn={handleSignIn} />}
                    </Menu.Item>
                </Container>
            </Menu>
        </div >
    )
}