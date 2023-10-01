import { ENDPOINT } from "../../components/endpoint/ENDPOINT";
import { GET_COMMITS } from "./types";
import axios from 'axios';





export const getCommits = () => {
    return async (dispatch) => {
      try {
        const resp = await axios.get(`${ENDPOINT}commits`);
        const commits = resp.data;
        return dispatch({ type: GET_COMMITS, payload: commits });
      } catch (error) {
        return error.message;
      }
    };
  };