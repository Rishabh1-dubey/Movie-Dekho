import axios from "../../utils/axios";
import { loadperson } from "../reducers/personSlice";
export const asyncloaddPersons = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalid = await axios.get(`/person/${id}/external_ids`);
    const combinedCredit = await axios.get(`/person/${id}/combined_credits`);
    const images = await axios.get(`/person/${id}/images`);
    const moviecredit = await axios.get(`/person/${id}/movie_credits`);

    let theUltimatedetails = {
      detail: detail.data,
      externalid: externalid.data,
      combinedCredit:combinedCredit.data,
      images: images,
      moviecredit: moviecredit.data
    };
    dispatch(loadperson(theUltimatedetails));
 
  } catch (error) {
    console.log("Error", error);
  }
};
