import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTJmMTllZjEzMTZlNzJmY2MzM2EyOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzEzNjgyNywiZXhwIjoxNjYzMzk2MDI3fQ.hb8tPODuIA1Bz0nV9mih3aDrV5VMiEE6b5fc75Y35ek"
  


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});