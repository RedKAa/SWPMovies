import axios from "axios";
import { API_URL } from "./constants";

const instance = axios.create({
  baseURL: API_URL,
  params: {
    api_key: '04568aae3ff021c0f1d8d0e5126d39e0',
  },
});

export default instance;
