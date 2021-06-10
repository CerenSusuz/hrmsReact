import axios from "axios";

export default class PreWritingService{
    getPreWritings(){
        return axios.get("http://localhost:8080/api/preWritings/getall")
    }
    getPreWritingsByJobSeeker(jobSeekerId){
        return axios.get("http://localhost:8080/api/preWritings/getByJobSeeker?jobSeekerId="+jobSeekerId)
    }
}