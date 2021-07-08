import React from 'react'
import { Button, Menu} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function SignedOut(props) {
    return (
        <div>
            <Menu.Item>
                <Button.Group>
                    <Button onClick={props.signIn}>Giriş Yap</Button>
                    <Button.Or />
                    <Button positive>
                        <Link to='/register' style={{color:'white'}}>
                        Kayıt Ol
                        </Link></Button>
                </Button.Group>
            </Menu.Item>
        </div>
    )
}
