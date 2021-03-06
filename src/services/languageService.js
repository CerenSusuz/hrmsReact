import axios from "axios"

export default class LanguageService{
    getLanguages(){
        return axios.get("http://localhost:8080/api/languages/getall")
    }
    getLanguagesByJobSeeker(jobSeekerId){
        return axios.get("http://localhost:8080/api/languages/getByJobSeeker?jobSeekerId="+jobSeekerId)
    }
}