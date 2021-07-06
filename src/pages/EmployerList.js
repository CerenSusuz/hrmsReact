import React, { useState, useEffect } from 'react'
import { Icon, Table } from 'semantic-ui-react'
import EmployerService from "../services/employerService";
import { Link } from 'react-router-dom';

export default function EmployerList() {
  const [employers, setEmployers] = useState([])

  useEffect(() => {
    let employerService = new EmployerService()
    employerService.getEmployers().then(result => setEmployers(result.data.data))
  }, [])

  return (
    <div>
      İş Verenler
      <Table celled style={{ margin: '1em 0em' }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Şifre</Table.HeaderCell>
            <Table.HeaderCell>Şirket </Table.HeaderCell>
            <Table.HeaderCell>Web Sitesi</Table.HeaderCell>
            <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
            <Table.HeaderCell>Aktiflik Durumu</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body >
          {employers.map((employer) => (
            <Table.Row key={employer.id} >
              <Table.Cell>{employer.id}</Table.Cell>
              <Table.Cell>{employer.email}</Table.Cell>
              <Table.Cell>{employer.password}</Table.Cell>
              <Table.Cell>{employer.companyName}</Table.Cell>
              <Table.Cell>{employer.webAddress}</Table.Cell>
              <Table.Cell>{employer.phoneNumber}</Table.Cell>
              <Table.Cell >
                {employer.status === true
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
                  <Icon name="delete" style={{ color: 'red' }}></Icon>
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

    </div>
  )
}
