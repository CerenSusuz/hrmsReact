import React from "react";
import { Route } from "react-router";
import Homepage from "./Homepage";
import { ToastContainer } from 'react-toastify';
import AdminDashboard from "./AdminDashboard";
import { Container } from 'semantic-ui-react';
import JobSeekerList from '../pages/JobSeekerList'
import CityList from '../pages/CityList'
import DepartmentList from '../pages/DepartmentList'
import JobAnnouncementList from '../pages/JobAnnouncementList'
import EmployerList from "../pages/EmployerList";
import ActiveJobList from "../pages/ActiveJobList";
import ActiveGetDeadLineJobList from "../pages/ActiveGetDeadLineJobList";
import CityJobList from "../pages/CityJobList";
import EmployerRegister from "../pages/Register/EmployerRegister";
import JobSeekerRegister from "../pages/Register/JobSeekerRegister";
import HrmsRegister from "../pages/Register/HrmsRegister";

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position='bottom-right' />
            <Container style={{ marginTop: '4em', paddingTop: '4em' }}>
                <Route exact path="/" component={Homepage} />
                <Route path='/admin/2a4a8a6a5a' component={AdminDashboard} />
                <Route path="/jobSeekerList" component={JobSeekerList} />
                <Route path="/cityList" component={CityList} />
                <Route path="/departmentList" component={DepartmentList} />
                <Route path="/employerList" component={EmployerList} />
                <Route path="/jobAnnouncementList" component={JobAnnouncementList} />
                <Route exact path="/activeAnnouncements" component={ActiveJobList} />
                <Route path="/activeDeadLineAnnouncements/:deadLine" component={ActiveGetDeadLineJobList} />
                <Route path="/cityJob" component={CityJobList} />
                <Route path="/employerRegister" component={EmployerRegister} />
                <Route path="/jobSeekerRegister" component={JobSeekerRegister} />
                <Route path="/hrmsRegister" component={HrmsRegister} />
            </Container>
        </div>
    );
}