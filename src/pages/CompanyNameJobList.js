import { useParams } from 'react-router-dom'
import JobAnnouncementService from '../services/jobAnnouncementService'
import React, { useState, useEffect } from "react";
import { Card, Image, Rating, Grid } from 'semantic-ui-react'


export default function CompanyNameJobList() {

    let { companyName } = useParams()

    const [job, setJob] = useState({})

    useEffect(() => {
        let jobAnnouncementService = new JobAnnouncementService()
        jobAnnouncementService.getByActiveAndCompanyName(companyName).then(result => setJob(result.data.data))
    }, [companyName])

    console.log(job)

    return (
        <div>
            <Grid >
                <Grid.Row>
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
            </Grid>
        </div>
    )
}
