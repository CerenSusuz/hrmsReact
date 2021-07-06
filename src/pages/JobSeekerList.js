import React, { useState, useEffect } from 'react'
import { Icon, Table } from 'semantic-ui-react'
import JobSeekerService from "../services/jobSeekerService";
import { Link } from 'react-router-dom';

export default function JobSeekerList() {
  const [jobSeekers, setjobSeekers] = useState([])

  useEffect(() => {
    let jobSeekerService = new JobSeekerService()
    jobSeekerService.getJobSeekers().then(result => setjobSeekers(result.data.data))
  }, [])

  return (
    <div>
      İş Arayanlar
      <Table celled style={{ margin: '1em 0em' }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>İş Arayan</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Kimlik No</Table.HeaderCell>
            <Table.HeaderCell>Year of Birth</Table.HeaderCell>
            <Table.HeaderCell>Aktiflik Durumu</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobSeekers.map((jobSeeker) => (
            <Table.Row key={jobSeeker.id} >
              <Table.Cell>{jobSeeker.id}</Table.Cell>
              <Table.Cell>{jobSeeker.firstName} {jobSeeker.lastName}</Table.Cell>
              <Table.Cell>{jobSeeker.email}</Table.Cell>
              <Table.Cell>{jobSeeker.nationalityId}</Table.Cell>
              <Table.Cell>{jobSeeker.yearOfBirth}</Table.Cell>
              <Table.Cell >
                {jobSeeker.status === true
                ? <Icon loading size='small' name='circle notch' color='green'/>
                : <Icon size='small' color='red' name='dont' /> 
              }
              </Table.Cell>
              <Table.Cell>
                <Link>
                  <Icon name="edit" style={{ color: 'blue' }}></Icon>
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link>
                  <Icon name="delete" style={{color:'red'}}></Icon>
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

      </Table>

    </div>
  )
}
