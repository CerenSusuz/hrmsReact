import axios from "axios"

export default class JobExperienceService{
    getJobExperiences(){
        return axiosios.get("http://localhost:8080/api/jobExperiences/getall")
    }
    getByJobSeekerIdOrderByDateOfEndASC(jobSeekerId){
        return axios.get("http://localhost:8080/api/jobExperiences/getByJobSeekerIdOrderByDateOfEndASC?jobSeekerId="+jobSeekerId)
    }
    getByJobSeekerIdOrderByDateOfEndDESC(jobSeekerId){
        return axios.get("http://localhost:8080/api/jobExperiences/getByJobSeekerIdOrderByDateOfEndDESC?jobSeekerId="+jobSeekerId)
    }
}