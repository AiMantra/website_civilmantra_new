import axios from "axios";

const BASE_URL = "https://cipl.aimantra.info";
export const APPLY_URL = "https://www.cipl.aimantrahrms.com/personaldetails"
export const MEDIA_URL = "https://civilmantra.s3.ap-south-1.amazonaws.com/civilmantra-website-images/CivilmantraAssets%5B1%5D/CivilmantraAssets"

export const API = axios.create({baseURL: BASE_URL, headers: {
    'Content-Type': 'application/json'
  }});

