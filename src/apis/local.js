import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:9005/api/v1", //for the localhost
  //baseURL: "https://api.eshieldafrica.com/api/v1", // for production
});
