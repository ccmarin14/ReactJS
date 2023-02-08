import APIRequest from '../utils/config/axios.config'
import axios from "axios";

export function getRandomUser() {
    return APIRequest.get('/',{
        ValidateStatus: function (status) {
            return status < 500; // Resolve only if the status code is less than 500
        }
    }) // https://randomuser.me/api/

}