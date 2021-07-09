import React, { useState, useEffect } from 'react'
import CityService from "../services/cityService";
import DepartmentService from "../services/departmentService";
import DatePicker from "react-datepicker";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import KodlamaioTextInput from "../utilities/customFormControls/KodlamaioTextInput";

import {
    Button,
    Image,
    Dropdown,
    Grid,
    Label
} from 'semantic-ui-react'


export default function JobAnnouncementAdd() {
    const [cities, setCities] = useState([])
    const [departments, setDepartments] = useState([])
    const [startDate, setStartDate] = useState(new Date());
    const initialValues =
    {
        description: "",
        minSalary: 0,
        maxSalary: 0,
        openPositions: 0,
        city: "",
        department: "",
    }

    const schema = Yup.object({
        description: Yup.string().required("Zorunlu alan*"),
        city: Yup.string(),
        department: Yup.string(),
        minSalary: Yup.number(),
        maxSalary: Yup.number(),
        openPositions: Yup.number().required("Zorunlu alan*"),
        applicationDeadline: Yup.date().required("Zorrunlu alan*")
    });


    useEffect(() => {
        let cityService = new CityService()
        cityService.getCities().then(result => setCities(result.data.data))
    }, [])

    useEffect(() => {
        let departmentService = new DepartmentService()
        departmentService.getDepartments().then(result => setDepartments(result.data.data))
    }, [])


    return (
        <div>
            <Image size='medium' centered src='https://cdn.pixabay.com/photo/2020/08/16/03/30/remote-5491798_960_720.png' />
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.info(values)
                }}
            >
                <Form className="ui form">

                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Dropdown
                                    button
                                    className='icon'
                                    floating
                                    labeled
                                    icon='angle double right'
                                    text='Şehir Seç'
                                    search
                                    options={
                                        cities.map((city) => (
                                            <Dropdown.Item key={city.id}>
                                                {city.name}
                                            </Dropdown.Item>
                                        ))
                                    }
                                />
                            </Grid.Column>

                            <Grid.Column width={8}>
                                <Dropdown
                                    button
                                    className='icon'
                                    floating
                                    labeled
                                    icon='angle double right'
                                    text='İş Pozisyonu Seç'
                                    search
                                    options={
                                        departments.map((department) => (
                                            <Dropdown.Item key={department.id}>
                                                {department.name}
                                            </Dropdown.Item>
                                        ))
                                    }
                                />
                            </Grid.Column>

                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={16}>
                            <Label >İlan Açıklaması</Label>
                                <KodlamaioTextInput name="decription"
                                    style={{
                                        minHeight: 20,
                                        marginTop: '2em'
                                    }} />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={3}>
                            <Label>En Düşük Maaş</Label>
                                <KodlamaioTextInput name="minSalary"
                                    style={{
                                        minHeight: 1,
                                        marginTop: '2em'
                                    }} />
                            </Grid.Column>

                            <Grid.Column width={3}>
                            <Label >En Yüksek Maaş</Label>
                                <KodlamaioTextInput name="maxSalary"
                                    style={{
                                        minHeight: 1,
                                        marginTop: '2em'
                                    }} />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Label >Açık Pozisyon</Label>
                                <KodlamaioTextInput name="openPositions"
                                    style={{
                                        minHeight: 1,
                                        marginTop: '2em'
                                    }} />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Label style={{ marginBottom: '2em' }}>Son Başvuru Tarihi</Label>
                                <DatePicker
                                    selected={startDate} onChange={(date) => setStartDate(date)}
                                    name="applicationDeadline" />
                            </Grid.Column>
                        </Grid.Row>

                    </Grid>

                    <Button
                        type='submit'
                        content="İlanı Yayınla"
                        labelPosition='right'
                        icon='checkmark'
                        positive
                        style={{ marginTop: '4em' }}
                    />

                </Form>
            </Formik>
        </div >
    )
}
