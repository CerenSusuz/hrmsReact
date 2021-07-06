import React, { useState, useEffect } from 'react'
import { Icon, Table } from 'semantic-ui-react'
import JobAnnouncementService from "../services/jobAnnouncementService";
import { Link } from 'react-router-dom';

export default function JobAnnouncementList() {
  const [announcements, setAnnouncements] = useState([])

  useEffect(() => {
    let jobAnnouncementService = new JobAnnouncementService()
    jobAnnouncementService.getJobAnnouncements().then(result => setAnnouncements(result.data.data))
  }, [])

  return (
    <div>
      İş Duyuruları
      <Table celled style={{ margin: '1em 0em' }}>
        <Table.Header>
          <Table.HeaderCell>
            <Link to='/'>
              Ekle
              <Icon name="plus"></Icon>
            </Link>
          </Table.HeaderCell>
          <Table.Row>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Maaş Aralığı</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyonlar</Table.HeaderCell>
            <Table.HeaderCell>Teslim Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Yayınlanma Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Şirket</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Onay</Table.HeaderCell>
            <Table.HeaderCell>Onay Değiştir</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {announcements.map((announcement) => (
            <Table.Row key={announcement.id}>
              <Table.Cell>{announcement.description}</Table.Cell>
              <Table.Cell>{announcement.minSalary} / {announcement.maxSalary}</Table.Cell>
              <Table.Cell>{announcement.openPositions}</Table.Cell>
              <Table.Cell>{announcement.applicationDeadline}</Table.Cell>
              <Table.Cell>{announcement.releaseDate}</Table.Cell>
              <Table.Cell>{announcement.employer.companyName}</Table.Cell>
              <Table.Cell>{announcement.city.name}</Table.Cell>
              <Table.Cell>{announcement.department.name}</Table.Cell>
              <Table.Cell>
                {announcement.active === true
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
