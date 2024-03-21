import axios from "axios";
const apiUrl =  "http://k8s-threetie-mainlb-1dd958d0ec-679101898.us-east-1.elb.amazonaws.com//api/tasks" //process.env.REACT_APP_BACKEND_URL //"http://localhost:8080/api/tasks";
console.log(apiUrl)
export function getTasks() {
    return axios.get(apiUrl);
}

export function addTask(task) {
    return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}

export function deleteTask(id) {
    return axios.delete(apiUrl + "/" + id);
}
