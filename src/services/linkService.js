import axios from "axios"

export default class LinkService{
    getLinks(){
        return axios.get("http://localhost:8080/api/links/getall")
    }
    getLinksByJobSeeker(jobSeekerId){
        return axios.get("http://localhost:8080/api/links/getByJobSeeker?jobSeekerId="+jobSeekerId)
    }
}