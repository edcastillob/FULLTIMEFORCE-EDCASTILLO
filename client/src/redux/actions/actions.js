import { ENDPOINT } from "../../components/endpoint/ENDPOINT";
import { GET_COMMITS, GET_SEARCH } from "./types";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





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
  
  export const getSearch = (search) => {
    return async (dispatch) => {
      try {
        const resp = await axios.get(`${ENDPOINT}commits/search?query=${search}`);        
        if (!resp.data.length | undefined) {
          toast.info('there is no coincidence', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000, 
          });
          return;
        }
        dispatch({ type: GET_SEARCH, payload: resp.data });
      } catch (error) {
        throw new Error("Error fetching commits");
      }
    };
  };