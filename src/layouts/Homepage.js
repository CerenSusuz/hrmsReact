import React, { useState, useEffect } from 'react'
import CityService from "../services/cityService";
import DepartmentService from "../services/departmentService";
import {
    Button,
    Icon,
    Grid,
    Header,
    Menu,
    Segment,
    Dropdown
} from 'semantic-ui-react'

export default function Homepage() {
    const [cities, setCities] = useState([])
    const [departments, setDepartments] = useState([])

    useEffect(() => {
        let cityService = new CityService()
        cityService.getCities().then(result => setCities(result.data.data))
    }, [])

    useEffect(() => {
        let departmentService = new DepartmentService()
        departmentService.getDepartments().then(result => setDepartments(result.data.data))
    }, [])

    return (
        <div style={{
            background: 'rgb(228, 224, 247)'
        }} >
            <Grid className="admin" >
                <Grid.Row>
                    <Grid.Column width={5}
                        style={{
                            color: 'black',
                            fontSize: '2em 4em',
                            fontWeight: 'normal',
                            padding: '4em 4em',
                        }}
                    >
                        <Menu pointing vertical>
                            <Menu.Item>
                                <Dropdown pointing="top right" text="Cities">
                                    <Dropdown.Menu>
                                        {cities.map((city) => (
                                            <Dropdown.Item>
                                                {city.name}
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                            <Menu.Item>
                                <Dropdown pointing="top right" text="Departments">
                                    <Dropdown.Menu>
                                        {departments.map((department) => (
                                            <Dropdown.Item>
                                                {department.name}
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                        </Menu>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Header
                            as='h1'
                            content='Find a job? / Looking for an employee?'
                            inverted
                            style={{
                                color: 'black',
                                fontSize: '2em 4em',
                                fontWeight: 'normal',
                                padding: '2em 2em',
                            }}
                        />
                        <Header
                            as='h2'
                            content='Want access to all the job announcements? / Publish your announcements?'
                            inverted
                            style={{
                                color: 'black',
                                fontSize: '1em 2em',
                                fontWeight: 'normal',
                            }}
                        />
                        <Segment style={{ padding: '2em 0em' }} vertical>

                            <Button basic color='violet' size='huge'
                                style={{
                                    margin: '1em 1em'
                                }}
                            >
                                Join us
                    <Icon name='right arrow' />
                            </Button>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>


        </div>
    )
}
