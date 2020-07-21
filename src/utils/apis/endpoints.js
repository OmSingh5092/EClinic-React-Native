const BASE_URL = "http://192.168.0.106:4000/";

export const signInEndPoint = {
    patient:BASE_URL+"api/google/patient",
    doctor:BASE_URL+"api/google/doctor",
}

export const doctorProfileEndPoint = {
    getProfile:BASE_URL+"api/doctor/get",
    getAllProfle:BASE_URL+"api/doctor/getall",
    updateProfile:BASE_URL+"api/doctor/update",
}