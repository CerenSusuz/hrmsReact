import React, { useState, useEffect } from 'react'
import { Icon, Table } from 'semantic-ui-react'
import DepartmentService from "../services/departmentService";
import { Link } from 'react-router-dom';

export default function DepartmentList() {
  const [departments, setDepartments] = useState([])

  useEffect(() => {
    let departmentService = new DepartmentService()
    departmentService.getDepartments().then(result => setDepartments(result.data.data))
  }, [])

  return (
    <div>
      <Table celled style={{ margin: '1em 0em' }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş Pozisyon Listesi </Table.HeaderCell>
            <Table.HeaderCell>
              <Link to='/'>
                Ekle
                <Icon name="plus"></Icon>
              </Link>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {departments.map((department) => (
            <Table.Row >
              <Table.Cell>{department.name}</Table.Cell>
              <Table.Cell>
                <Link>
                  <Icon name="edit"></Icon>
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link>
                  <Icon name="delete"></Icon>
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

    </div>
  )
}