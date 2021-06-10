import axios from "axios";

export default class SchoolInfoService{
    getSchollInfos(){
        return axios.get("http://localhost:8080/api/schoolInfos/getall")
    }
    getSchollInfosByJobSeekerASC(jobSeekerId){
        return axios.get("http://localhost:8080/api/schoolInfos/getASCOrderByGraduationDate?jobSeekerId="+jobSeekerId)
    }
    getSchollInfosByJobSeekerDESC(jobSeekerId){
        return axios.get("http://localhost:8080/api/schoolInfos/getDESCOrderByGraduationDate?jobSeekerId="+jobSeekerId)
    }
}