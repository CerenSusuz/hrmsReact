import React from 'react'
import { Route } from 'react-router'
import { Grid, Menu} from 'semantic-ui-react'
import JobSeekerList from '../pages/JobSeekerList'

export default function AdminDashboard() {
    return (
        <div>
            <Grid className="admin">
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Menu text vertical>
                            <Menu.Item header>ADMIN</Menu.Item>
                            <Menu.Item
                                name='closest'
                            />
                            <Menu.Item
                                name='mostComments'
                            />
                            <Menu.Item
                                name='mostPopular'
                            />
                        </Menu>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Route exact path="/jobSeekers" component={JobSeekerList} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
