import axios from "axios";
// const ROOT_API_URL = process.env.NEXT_PUBLIC_API;
const ROOT_API_URL = "http://localhost:3001";
const API_VERSION = "api/v1";

/**
 * This function is used to get all products from the API
 * @param {string} endpoint
 * @returns {array} response array of products or empty array
 */
export async function getProd(endpoint) {
  try {
    const res = await fetch(`${ROOT_API_URL}${endpoint}`);
    return await res.json();
  } catch (res) {
    const err = new Error("Error fetching data");
    err.message = res.messsage;
    return [];
  }
}
