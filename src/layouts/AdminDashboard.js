import { Grid, Menu } from 'semantic-ui-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminDashboard() {

    return (
        <div>
            <Grid className="admin">
                <Grid.Row>
                    <Grid.Column width={4}>
                        İncele/Düzenle
                        <Menu fluid vertical tabular>
                            <Menu.Item header name='Yönetim Sistemleri' />
                            <Menu.Item>
                                <Link to={`/jobSeekerList`}>
                                    İş Arayanlar 
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={`/employerList`}>
                                    İş Verenler 
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={`/`}>
                                    Yönetim Çalışanları 
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={`/jobAnnouncementList`}>
                                    İş İlanları
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Grid.Column>
                    <Grid.Column stretched width={12} style={{ marginTop: '6em' }}>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
