import { Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface dataS {
    Idtsu: String;
    Name: String;
    Midterm: String;
    Final: String;
    Point: String;
    Grade: String;
  }
  interface dataP {
    Id: String;
    Subj: string;
    Credit: String;
  }

  const Edit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    if (location.state !== null) {
        const { Idtsu, Name, Midterm, Final, Point, Grade, Id, Subj, Credit } = location.state;

        return (
            <div className="bg-border  pl-16 pt-7 mt-10 ml-20 mr-20 rounded-lg text-black text-left">
              <p className="pt-3 text-xl ... ">ปีการศึกษา 2566</p>
              <p className=" text-xl ... pt-2   ">
                รหัสวิชา{Id} วิชา{Subj} {Name}
              </p>
              </div>
        )
        }
};
export default Edit;

