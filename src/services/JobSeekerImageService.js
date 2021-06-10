import axios from "axios";

export default class JobSeekerImageService {
    upload(file, jobSeekerId) {
        const data = new FormData();
        data.append('file', file);
        return axios.post("http://localhost:8080/api/jobSeekerImages/upload", data, { headers: { 'Content-Type': 'multipart/form-data' }, params: { jobSeekerId } });
    }
    getAll() {
        return axios.get("http://localhost:8080/api/jobSeekerImages/getall");
    }
    getAllByJobSeekerId(jobSeekerId) {
        return axios.get("http://localhost:8080/api/jobSeekerImages/getByJobSeekerId?id="+jobSeekerId);
    }
}