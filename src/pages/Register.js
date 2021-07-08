import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Image } from 'semantic-ui-react'

export default function Register() {

    return (
        <div>
            <Image size='medium' centered src='https://cdn.pixabay.com/photo/2019/01/17/19/11/login-3938432_960_720.jpg'/>
            <Button.Group >
                <Button color='green'>
                    <Link to='/jobSeekerRegister' style={{color:'white'}}>
                        İş Arayan
                    </Link>
                </Button>
                <Button color='blue'>
                    <Link to='/employerRegister' style={{color:'white'}}>
                        İş Veren
                    </Link>
                </Button>
                <Button color='yellow'>
                    <Link to='/hrmsRegister' style={{color:'white'}}>
                        Personel
                    </Link>
                </Button>
            </Button.Group>
        </div>
    )
}
