import React, { useState, useEffect } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import JobAnnouncementService from "../services/jobAnnouncementService";

export default function JobAnnouncementList() {
    const [announcements, setAnnouncements] = useState([])

    useEffect(() => {
      let jobAnnouncementService = new JobAnnouncementService()
      jobAnnouncementService.getJobAnnouncements().then(result => setAnnouncements(result.data.data))
    }, [])
  
    return (
      <div>
        <Table celled style={{ margin: '1em 0em' }}>
          <Table.Header>
          <Table.HeaderCell>Announcements</Table.HeaderCell>
            <Table.Row>
              <Table.HeaderCell>description</Table.HeaderCell>
              <Table.HeaderCell>minSalary/maxSalary</Table.HeaderCell>
              <Table.HeaderCell>openPositions</Table.HeaderCell>
              <Table.HeaderCell>applicationDeadline</Table.HeaderCell>
              <Table.HeaderCell>releaseDate</Table.HeaderCell>
              <Table.HeaderCell>companyName</Table.HeaderCell>
              <Table.HeaderCell>city</Table.HeaderCell>
              <Table.HeaderCell>department</Table.HeaderCell>
              <Table.HeaderCell>active</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            {announcements.map((announcement) => (
              <Table.Row >
                <Table.Cell>{announcement.description}</Table.Cell>
                <Table.Cell>{announcement.minSalary}  {announcement.maxSalary}</Table.Cell>
                <Table.Cell>{announcement.openPositions}</Table.Cell>
                <Table.Cell>{announcement.applicationDeadline}</Table.Cell>
                <Table.Cell>{announcement.releaseDate}</Table.Cell>
                <Table.Cell>{announcement.employer.companyName}</Table.Cell>
                <Table.Cell>{announcement.city.name}</Table.Cell>
                <Table.Cell>{announcement.department.name}</Table.Cell>
                <Table.Cell>{announcement.isActive}</Table.Cell>
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
