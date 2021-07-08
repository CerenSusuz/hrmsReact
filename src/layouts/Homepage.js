import React, { useState, useEffect } from 'react'
import CityService from "../services/cityService";
import DepartmentService from "../services/departmentService";
import { Link } from 'react-router-dom';

import {
    Button,
    Icon,
    Grid,
    Header,
    Menu,
    Segment,
    Dropdown,
} from 'semantic-ui-react'
import EmployerService from '../services/employerService';
import JobList from '../pages/JobList';

export default function Homepage() {
    const [cities, setCities] = useState([])
    const [departments, setDepartments] = useState([])
    const [employers, setemployers] = useState([])

    useEffect(() => {
        let cityService = new CityService()
        cityService.getCities().then(result => setCities(result.data.data))
    }, [])

    useEffect(() => {
        let departmentService = new DepartmentService()
        departmentService.getDepartments().then(result => setDepartments(result.data.data))
    }, [])

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployers().then(result => setemployers(result.data.data))
    }, [])

    return (
        <div >
            <Grid className="admin"
                style={{
                    background: 'rgb(228, 224, 247)'
                }}  >
                <Grid.Row>
                    <Grid.Column width={4}
                        style={{
                            color: 'black',
                            fontSize: '2em 4em',
                            fontWeight: 'normal',
                        }}
                    >
                        <Menu pointing vertical >
                            <Menu.Item  >
                                <Link to={`/activeAnnouncements`}>
                                    Aktif İlanlar
                                </Link>
                            </Menu.Item>
                            <Menu.Item >
                                <Dropdown pointing="top right" text="Tüm Firmalar">
                                    <Dropdown.Menu >
                                        {employers.map((employer) => (
                                            <Dropdown.Item key={employer.id}>
                                                {employer.companyName}
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                            <Menu.Item>
                                <Dropdown pointing="top right" text="Şehir Seç">
                                    <Dropdown.Menu >
                                        {cities.map((city) => (
                                            <Dropdown.Item key={city.id}>
                                                <Link to />
                                                {city.name}
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                            <Menu.Item >
                                <Dropdown pointing="top right" text="İş Pozisyonu Seç">
                                    <Dropdown.Menu >
                                        {departments.map((department) => (
                                            <Dropdown.Item key={department.id}>
                                                {department.name}
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                        </Menu>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Header
                            as='h1'
                            content='Geleceğine doğru ilk adıma hoşgeldin'
                            inverted
                            style={{
                                color: 'black',
                                fontSize: '2em 4em',
                                fontWeight: 'normal',
                                padding: '1em 1em',
                                marginLeft: '1em'
                            }}
                        />
                        <Header
                            as='h2'
                            content='İş mi  / Çalışan mı arıyorsun ?'
                            inverted
                            style={{
                                color: 'black',
                                fontSize: '1em 2em',
                                fontWeight: 'normal',

                            }}
                        />
                        <Segment vertical>
                            <Button inverted color='blue' size='huge'>
                                <Link to='/register' >
                                    Aramıza Katıl
                                    <Icon name='right arrow' />
                                </Link>
                            </Button>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <JobList></JobList>
        </div>
    )
}
