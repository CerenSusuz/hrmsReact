import { useParams } from 'react-router-dom'
import JobAnnouncementService from '../services/jobAnnouncementService'
import React, { useState, useEffect } from "react";
import { Card, Image, Rating, Grid, Header, Feed } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function CompanyNameJobList() {

    let { companyName } = useParams()

    const [jobs, setJobs] = useState({})

    useEffect(() => {
        let jobAnnouncementService = new JobAnnouncementService()
        jobAnnouncementService.getByActiveAndCompanyName(companyName).then(result => setJobs(result.data.data))
    }, [companyName])

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
                                                                Açık Pozisyon : {job.openPositions}
                                                            </Feed.Summary>
                                                            <br></br>
                                                            <Feed.Date>{`Yayınlanma Tarihi: ${job.releaseDate}`}</Feed.Date>
                                                            <br></br>
                                                            <Feed.Date>{`İlan ${job.applicationDeadline} tarihinde kapatılacaktır`}</Feed.Date>
                                                        </Feed.Content>
                                                    </Feed.Event>
                                                </Feed>
                                                <Link style={{ color: 'green' }} to={`/jobDetail/${job.id}`}>
                                                    İlan Detayları
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
                        Aktif ilan Bulunamadı !!!
                    </Header>
                    <Image
                        size="huge"
                        src="https://cdn.pixabay.com/photo/2015/03/25/13/04/page-not-found-688965_960_720.png"
                    >
                    </Image>
                </Grid>
            }
        </div>
    )
}

