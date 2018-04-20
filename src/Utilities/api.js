import axios from 'axios';

const baseEndpoint = "http://localhost:8080/api/";

function getRequestsForUser(){
    return axios.get(baseEndpoint + "requests");
}

function getUserMatchesForRequest(requestId){
    return axios.get(baseEndpoint + "match/" + requestId)
}

export { getRequestsForUser, getUserMatchesForRequest };