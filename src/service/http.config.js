import axios from "axios";

const http = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://api.cc0820.top:8888"
      : "http://localhost:3002",
});
export default http;
