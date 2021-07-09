import React, { useState, useEffect } from 'react'
import CityService from "../services/cityService";
import DepartmentService from "../services/departmentService";
import JobAnnouncementService from "../services/jobAnnouncementService";
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
import AllJobList from '../pages/AllJobList';

export default function Homepage() {
    const [cities, setCities] = useState([])
    const [departments, setDepartments] = useState([])
    const [employers, setemployers] = useState([])
    const [jobs, setjobs] = useState([])

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

    useEffect(() => {
        let jobService = new JobAnnouncementService()
        jobService.getJobAnnouncements().then(result => setjobs(result.data.data))
    }, [])

    return (
        <div >
            <Menu style={{ marginBottom: '2em' }}>
                <Menu.Item  >
                    <Link to={`/findJob`} style={{ color: 'blue' }}>
                        Tüm İlanlar
                    </Link>
                </Menu.Item>
                <Menu.Item  >
                    <Link to={`/activeAnnouncements`} style={{ color: 'green' }}>
                        Aktif İlanlar
                    </Link>
                </Menu.Item>
                <Menu.Item >
                    <Dropdown pointing="top right" text="Firma">
                        <Dropdown.Menu >
                            {employers.map((employer) => (
                                <Dropdown.Item key={employer.companyName}>
                                    <Link to={`/inCompanyNameJobs/${employer.companyName}`}
                                    >
                                        {
                                            `${employer.companyName}`.toLocaleUpperCase()
                                        }
                                    </Link>
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
                <Menu.Item>
                    <Dropdown pointing="top right" text="Şehir">
                        <Dropdown.Menu >
                            {cities.map((city) => (
                                <Dropdown.Item key={city.id}>
                                    <Link to={`/inCityJobs/${city.id}`} >
                                        {
                                            `${city.name}`.toLocaleUpperCase()
                                        }
                                    </Link>
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
                <Menu.Item >
                    <Dropdown pointing="top right" text="İş Pozisyonu">
                        <Dropdown.Menu >
                            {departments.map((department) => (
                                <Dropdown.Item key={department.id}>
                                    <Link to={`/inDepartmentJobs/${department.id}`} >
                                        {
                                            `${department.name}`.toLocaleUpperCase()
                                        }
                                    </Link>
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
                <Menu.Item >
                    <Dropdown pointing="top right" text="Son Başvuru Tarihi">
                        <Dropdown.Menu >
                            {jobs.map((job) => (
                                <Dropdown.Item key={job.id}>
                                    <Link to={`/inAppDeadLineJobs/${job.applicationDeadline}`} >
                                        {job.applicationDeadline}
                                    </Link>
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Menu>

            <Grid className="admin"
                style={{
                    background: 'rgb(228, 224, 247)'
                }}  >
                <Grid.Row>
                    <Grid.Column>
                        <Header
                            as='h1'
                            content='Geleceğine doğru ilk adıma hoş geldin !!'
                            inverted
                            style={{
                                color: 'black',
                                fontSize: '2em 4em',
                                fontWeight: 'normal',
                                padding: '2em 2em',
                                margin: '1em'
                            }}
                        />
                        <Header
                            as='h2'
                            content=''
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
            <AllJobList></AllJobList>
        </div>
    )
}
