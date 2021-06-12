import { Grid, Menu } from 'semantic-ui-react'
import JobSeekerList from '../pages/JobSeekerList'
import CityList from '../pages/CityList'
import DepartmentList from '../pages/DepartmentList'
import JobAnnouncementList from '../pages/JobAnnouncementList'
import React from 'react'


export default function AdminDashboard() {

    return (
        <div>
            <Grid className="admin" style={{ padding: '0em 1em' }}>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Menu pointing vertical>
                            <Menu.Item header name='Admin' />
                            <Menu.Item as='a' name="Job Seekers" />
                            <Menu.Item as='a' name="Cities" />
                            <Menu.Item as='a' name="Departments" />
                            <Menu.Item as='a' name="Announcements" />
                        </Menu>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <JobSeekerList />
                        <CityList/>
                        <DepartmentList/>
                        <JobAnnouncementList/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
