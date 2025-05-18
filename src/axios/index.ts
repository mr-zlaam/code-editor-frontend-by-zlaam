import { ENV } from "@/config/env.config";
import axios from "axios";
const baseurl = ENV.NEXT_PUBLIC_BACKEND_URI;

export const instance = axios.create({
  baseURL: baseurl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
});
