import axios from "axios"

export default class JobSeekerService{
    getJobSeekers(){
        return axios.get("http://localhost:8080/api/jobseekers/getall")
    }
    getJobSeekerCv(jobSeekerId){
        return axios.get("http://localhost:8080/api/jobseekers/getcv?id="+jobSeekerId)
    }
}