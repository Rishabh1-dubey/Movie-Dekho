import React, { useEffect } from "react";
import { asyncloaddPersons } from "../../store/actions/personAction";
import { useDispatch, useSelector } from "react-redux";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { removeperson } from "../../store/reducers/personSlice";
import Loader from "../templates/Loader";


const PersonDetails = () => {
  //for person path name
  const { pathname } = useLocation();
  // const params=  useParams()
  const { id } = useParams();
  //getting data form our store
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();
  // console.log(info)

  //for navigating the page
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncloaddPersons(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);

  return info ? (
    <div className="p-9 bg-black min-h-screen">
     <img
          className="h-[55vh] w-[40vh]   rounded-lg  hover:scale-105 delay-100 transition-all ease-in-out  "
          src={`https://image.tmdb.org/t/p/original/${
                  info.detail.profile_path
                }`
          }
          alt=""
        />
        <h1 className="text-3xl text-white">
           {info.detail.name}
          </h1>
          <div className="text-2xl italic font-bold text-white mb-4">
           cast- {info.moviecredit.cast.map((m,i)=>(m.original_title))}
          </div>
    </div>
  ) : (
    <Loader />
  );
};

export default PersonDetails;
