import React from 'react'
import { Button, Menu, Dropdown, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function SignedOut(props) {
    return (
        <div>
            <Menu.Item>
                <Button.Group>
                    <Button onClick={props.signIn}>Giriş Yap</Button>
                    <Button.Or />
                    <Button positive>
                        <Link to='jobSeekerRegister' style={{color:'white'}}>
                        Kayıt Ol
                        </Link></Button>
                </Button.Group>
                <Dropdown pointing="top right" text="İş Veren" style={{ marginLeft: '0.5em'}}>
                    <Dropdown.Menu >
                        <Dropdown.Item text="Sign in" icon="sign-in" onClick={props.signIn} />
                        <Dropdown.Item >
                            <Link to='/employerRegister' style={{color:'black'}}>
                                <Icon name='signup'/>
                                Kayıt Ol
                            </Link>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown pointing="top right" text="Hrms Personeli" style={{ marginLeft: '0.5em' }}>
                    <Dropdown.Menu>
                        <Dropdown.Item text="Sign in" icon="sign-in" onClick={props.signIn} />
                        <Dropdown.Item >
                            <Link to='/hrmsRegister' style={{color:'black'}}>
                                <Icon name='signup'/>
                                Kayıt Ol
                            </Link>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
