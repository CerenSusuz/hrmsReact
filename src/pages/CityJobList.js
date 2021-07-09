import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import JobAnnouncementService from '../services/jobAnnouncementService'
import { Card, Image, Rating, Grid, Header } from 'semantic-ui-react'

export default function CityJobList() {

    let { id } = useParams()

    const [job, setJob] = useState({})

    useEffect(() => {
        let jobAnnouncementService = new JobAnnouncementService()
        jobAnnouncementService.getByIsActiveTrueAndCity_Id(id).then(result => setJob(result.data.data))
    }, [id])

    console.log(job)

    return (
        <div>
            <Grid >
                {job.active === true
                    ? <Grid.Row>
                        <Grid.Column width={8}>
                            <Image
                                floated="right"
                                size="huge"
                                src="https://cdn.pixabay.com/photo/2016/06/13/09/57/meeting-1453895_960_720.png"
                            />
                            <Card.Header>{job.companyName}</Card.Header>
                            <Rating defaultRating={4} maxRating={5} disabled />
                            <Card.Description><strong>{job.description}</strong>
                            </Card.Description>
                        </Grid.Column>
                    </Grid.Row>
                    :
                    <Grid.Row>
                        <Grid.Column width={14}>
                            <Image
                                floated="right"
                                size="huge"
                                src="https://cdn.pixabay.com/photo/2015/03/25/13/04/page-not-found-688965_960_720.png"
                            />
                            
                        </Grid.Column>
                    </Grid.Row>
                }
            </Grid>
        </div >
    )
}
