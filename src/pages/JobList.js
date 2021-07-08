import React, { useState, useEffect } from 'react'
import {
    Grid,
    Card,
    Feed
} from 'semantic-ui-react'
import JobAnnouncementService from "../services/jobAnnouncementService";
import { Link } from 'react-router-dom';


export default function JobList() {
    const [announcements, setAnnouncements] = useState([])
    useEffect(() => {
        let jobAnnouncementService = new JobAnnouncementService()
        jobAnnouncementService.getJobAnnouncements().then(result => setAnnouncements(result.data.data))
    }, [])

    return (
        <div>
            <Grid>
                <Grid.Column width={14}>
                </Grid.Column>
                {announcements.map((announcement) => (
                    <Grid.Column width={5} key={announcement.id} >
                        <Card position='right' style={{ color: 'green', padding: '.4em' }}>
                            İlan Sahibi :
                            &nbsp; {`${announcement.employer.companyName}`.toLocaleUpperCase()}
                            <Card.Content>
                                <Card.Header>{announcement.department.name}</Card.Header>
                            </Card.Content>
                            <Card.Content>
                                <Feed>
                                    <Feed.Event>
                                        <Feed.Label image='https://cdn.pixabay.com/photo/2019/01/19/19/22/recruitment-3942378__340.jpg' />
                                        <Feed.Content>
                                            <Feed.Summary>
                                                {announcement.description}
                                                <br></br>
                                                Açık Pozisyon : {announcement.openPositions}
                                            </Feed.Summary>
                                            <br></br>
                                            <Feed.Date>{`Yayınlanma Tarihi: ${announcement.releaseDate}`}</Feed.Date>
                                            <br></br>
                                            <Feed.Date>{`İlan ${announcement.applicationDeadline} tarihinde kapatılacaktır`}</Feed.Date>
                                        </Feed.Content>
                                    </Feed.Event>
                                </Feed>
                                <Link style={{ color: 'green' }} to={`/jobDetail/${announcement.id}`}>
                                    İlan Detayları
                                </Link>

                            </Card.Content>
                        </Card>

                    </Grid.Column>
                ))}

            </Grid>
        </div>
    )
}
