import axios from "axios";
// const ROOT_API_URL = process.env.NEXT_PUBLIC_API;
const ROOT_API_URL = "http://localhost:3001";
const API_VERSION = "api/v1";

/**
 * This function is used to get all machine stops from the API
 * @returns {array} response array of machine stops or empty array
 */
export async function getAll4M() {
  const endpoint = "/mcnstop";
  try {
    const res = await axios.get(`${ROOT_API_URL}${endpoint}`);
    return res.data;
  } catch (error) {
    return [];
  }
}
