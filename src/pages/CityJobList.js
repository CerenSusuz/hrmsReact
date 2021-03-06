import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import JobAnnouncementService from '../services/jobAnnouncementService'
import { Card, Image, Rating, Grid, Header, Feed } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function CityJobList() {
    let { id } = useParams();

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        let jobAnnouncementService = new JobAnnouncementService()
        jobAnnouncementService.getByIsActiveTrueAndCity_Id(id).then(result => setJobs(result.data.data))
    }, [id])

    return (
        <div>
            {jobs.length > 0
                ?
                <Grid >
                    {jobs
                        .map(job => {
                            return (
                                <Grid.Row key={job.id}>
                                    <Grid.Column >
                                        <Card >
                                            <Card.Content>
                                                <Header size='huge' style={{ color: 'green' }}>{`${job.employer.companyName}`.toLocaleUpperCase()}</Header>
                                                <Image
                                                    src="https://cdn.pixabay.com/photo/2016/06/13/09/57/meeting-1453895_960_720.png"
                                                />
                                                <Rating maxRating={5} clearable />
                                            </Card.Content>
                                            <Card.Content>
                                                <Feed>
                                                    <Feed.Event>
                                                        <Feed.Label image='https://cdn.pixabay.com/photo/2019/01/19/19/22/recruitment-3942378__340.jpg' />
                                                        <Feed.Content>
                                                            <Feed.Summary>
                                                                {job.description}
                                                                <br></br>
                                                                A????k Pozisyon : {job.openPositions}
                                                            </Feed.Summary>
                                                            <br></br>
                                                            <Feed.Date>{`Yay??nlanma Tarihi: ${job.releaseDate}`}</Feed.Date>
                                                            <br></br>
                                                            <Feed.Date>{`??lan ${job.applicationDeadline} tarihinde kapat??lacakt??r`}</Feed.Date>
                                                        </Feed.Content>
                                                    </Feed.Event>
                                                </Feed>
                                                <Link style={{ color: 'green' }} to={`/jobDetail/${job.id}`}>
                                                    ??lan Detaylar??
                                                </Link>
                                            </Card.Content>
                                        </Card>
                                    </Grid.Column>
                                </Grid.Row>
                            )
                        })}
                </Grid>
                :
                <Grid >
                    <Header style={{ color: 'green' }}>
                        Aktif ilan Bulunamad?? !!!
                    </Header>
                    <Image
                        size="huge"
                        src="https://cdn.pixabay.com/photo/2015/03/25/13/04/page-not-found-688965_960_720.png"
                    >
                    </Image>
                </Grid>
            }

        </div >
    )

}
