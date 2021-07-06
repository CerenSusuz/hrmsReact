import React from 'react'
import {
    Container,
    Divider,
    Grid,
    Header,
    Image,
    List,
    Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
                <Container textAlign='center'>
                    <Grid divided inverted stackable>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Group 1' />
                            <List link inverted>
                                <List.Item>
                                    <Link to={`/`}>
                                        Link One
                                    </Link>
                                </List.Item>
                                <List.Item >
                                    <Link to={`/`}>
                                        Link Two
                                    </Link>
                                </List.Item>
                                <List.Item >
                                    <Link to={`/products/`}>
                                        Link Three
                                    </Link>
                                </List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Group 2' />
                            <List link inverted>
                                <List.Item as='a'>Link One</List.Item>
                                <List.Item as='a'>Link Two</List.Item>
                                <List.Item as='a'>Link Three</List.Item>
                                <List.Item as='a'>Link Four</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Group 3' />
                            <List link inverted>
                                <List.Item as='a'>Link One</List.Item>
                                <List.Item as='a'>Link Two</List.Item>
                                <List.Item as='a'>Link Three</List.Item>
                                <List.Item as='a'>Link Four</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header inverted as='h4' content='Footer Header' />
                            <p>
                                Extra space for a call to action inside the footer that could help re-engage users.
                            </p>
                        </Grid.Column>
                    </Grid>

                    <Divider inverted section />
                    <Image centered size='mini' src='https://cdn.pixabay.com/photo/2018/01/14/23/05/visa-3082813_960_720.jpg' />
                    <List horizontal inverted divided link size='small'>
                        <List.Item as='a'>
                            Site Map
                        </List.Item>
                        <List.Item as='a'>
                            Contact Us
                        </List.Item>
                        <List.Item as='a'>
                            Terms and Conditions
                        </List.Item>
                        <List.Item as='a'>
                            Privacy Policy
                        </List.Item>
                    </List>
                </Container>
            </Segment>
        </div>
    )
}



