import React, { useState, useEffect } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import JobSeekerService from "../services/jobSeekerService";


export default function JobSeekerList() {
  const [jobSeekers, setjobSeekers] = useState([])

  useEffect(() => {
    let jobSeekerService = new JobSeekerService()
    jobSeekerService.getJobSeekers().then(result => setjobSeekers(result.data.data))
  }, [])

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Seeker</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Nationality Id</Table.HeaderCell>
            <Table.HeaderCell>Year of Birth</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobSeekers.map((jobSeeker) => (
            <Table.Row >
              <Table.Cell>{jobSeeker.firstName} {jobSeeker.lastName}</Table.Cell>
              <Table.Cell>{jobSeeker.email}</Table.Cell>
              <Table.Cell>{jobSeeker.nationalityId}</Table.Cell>
              <Table.Cell>{jobSeeker.yearOfBirth}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="center" >
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>

    </div>
  )
}
