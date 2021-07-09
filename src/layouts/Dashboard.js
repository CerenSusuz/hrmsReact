import React from "react";
import { Route } from "react-router";
import Homepage from "./Homepage";
import { ToastContainer } from 'react-toastify';
import AdminDashboard from "../pages/AdminDashboard";
import { Container } from 'semantic-ui-react';
import JobSeekerList from '../pages/JobSeekerList'
import CityList from '../pages/CityList'
import DepartmentList from '../pages/DepartmentList'
import JobAnnouncementList from '../pages/JobAnnouncementList'
import EmployerList from "../pages/EmployerList";
import ActiveJobList from "../pages/ActiveJobList";
import ActiveGetDeadLineJobList from "../pages/ActiveGetDeadLineJobList";
import CityJobList from "../pages/CityJobList";
import DepartmentJobList from "../pages/DepartmentJobList";
import EmployerRegister from "../pages/Register/EmployerRegister";
import JobSeekerRegister from "../pages/Register/JobSeekerRegister";
import HrmsRegister from "../pages/Register/HrmsRegister";
import CompanyNameJobList from "../pages/CompanyNameJobList";
import AllJobList from "../pages/AllJobList";
import Register from "../pages/Register";

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position='bottom-right' />
            <Container style={{ marginTop: '4em', paddingTop: '4em' }}>
                <Route exact path="/" component={Homepage} />
                {/* admin */}
                <Route path='/admin/2a4a8a6a5a' component={AdminDashboard} />
                <Route path="/jobSeekerList" component={JobSeekerList} />
                <Route path="/cityList" component={CityList} />
                <Route path="/departmentList" component={DepartmentList} />
                <Route path="/employerList" component={EmployerList} />
                <Route path="/jobAnnouncementList" component={JobAnnouncementList} />

                <Route exact path="/activeAnnouncements" component={ActiveJobList} />
                <Route path="/activeDeadLineAnnouncements/:date" component={ActiveGetDeadLineJobList} />
                
                <Route path="/employerRegister" component={EmployerRegister} />
                <Route path="/jobSeekerRegister" component={JobSeekerRegister} />
                <Route path="/register" component={Register} />
                <Route path="/hrmsRegister" component={HrmsRegister} />

                <Route path="/inCompanyNameJobs/:companyName" component={CompanyNameJobList} />
                <Route path="/cityJob" component={CityJobList} />
                <Route path="/departmentJob" component={DepartmentJobList} />

                <Route path="/findJob" component={AllJobList} />
            </Container>
        </div>
    );
}