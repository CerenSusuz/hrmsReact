import { Grid, Menu } from 'semantic-ui-react'
import JobSeekerList from '../pages/JobSeekerList'
import CityList from '../pages/CityList'
import DepartmentList from '../pages/DepartmentList'
import React, { useState, useEffect } from 'react'
import CityService from "../services/cityService";
import DepartmentService from "../services/departmentService";


export default function AdminDashboard() {
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
        <div>
            <Grid className="admin" style={{ margin: '1em 1em' }}>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Menu pointing vertical>
                            <Menu.Item header name='Admin' />
                            <Menu.Item as='a' name="Job Seekers" />
                            <Menu.Item as='a' name="Cities" />
                            <Menu.Item as='a' name="Departments" />

                        </Menu>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <JobSeekerList />
                        <CityList/>
                        <DepartmentList/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
