import axios from "axios";

export default class JobAnnouncementService{
    getJobAnnouncements(){
        return axios.get("http://localhost:8080/api/jobAnnouncements/getAll")
    }
    getByActive(){
        return axios.get("http://localhost:8080/api/jobAnnouncements/getByActive")
    }
    getByActiveAndApplicationDeadline(date){
        return axios.get("http://localhost:8080/api/jobAnnouncements/getByActiveAndApplicationDeadline?date="+date)
    }
    changeStatus(announcementId,employerId,status){
        return axios.get("http://localhost:8080/api/jobAnnouncements/changeStatus?announcementId="+announcementId+"&employerId="+employerId+"&status="+status)
    }
    getByActiveAndCompanyName(companyName){
        return axios.get("http://localhost:8080/api/jobAnnouncements/getByActiveAndCompanyName?companyName="+companyName)
    }
    getByApplicationDeadline(date){
        return axios.get("http://localhost:8080/api/jobAnnouncements/getByApplicationDeadline?date="+date)
    }
    getByEmployer(id){
        return axios.get("http://localhost:8080/api/jobAnnouncements/getByEmployer?id="+id)
    }



}