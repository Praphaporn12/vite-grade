import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ScoreN from "./ScoreN";

const Subject = () => {
  const navigate = useNavigate();
  const [Id, setId] = useState("");
  const [Subj, setSubj] = useState("");
  const [Credit, setCredit] = useState("");


  return (
    <>
      <div>
        <h1 className="text-xl font-bold mb-4 mt-8 text-center">ระบบตัดเกรด</h1>
        <h2 className="text-center">
          บริการระบบตัดเกรดออนไลน์ฟรีเพื่ออำนวยความสะดวกแก่ครูอาจารย์ทุกท่าน
        </h2>
      </div>
      <div className="bg-border text-1xl font-sans text-center m-16 p-8 rounded-lg">
        <p className="font-bold pt-7 text-xl text-black">กรุณาเลือกวิชา</p>
        <div className="bg-white text-1xl font-sans text-center m-8 p-20 rounded-lg">
          <div className="w-full max-w-xs mx-auto">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Id"
                >
                  <p className="mr-40 text-black">รหัสวิชา</p>
                </label>
                <input
                  className=" bg-white border-grayless shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="Id"
                  type="text"
                  placeholder="รหัสวิชา"
                  value={Id}
                  onChange={(e) => setId(e.target.value)}
                  required
                />
              </div>
              <div className="mb-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Subj"
                >
                  <p className="mr-40 text-black">ชื่อวิชา</p>
                </label>
                <input
                  className="bg-white border-grayless shadow appearance-none border  rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="Subj"
                  type="text"
                  placeholder="ชื่อวิชา"
                  value={Subj}
                  onChange={(e) => setSubj(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Credit"
                >
                  <p className="mr-40 text-black">หน่วยกิต</p>
                </label>
                <input
                  className="bg-white border-grayless shadow appearance-none border  rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="Credit"
                  type="text"
                  placeholder="หน่วยกิต"
                  value={Credit}
                  onChange={(e) => setCredit(e.target.value)}
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const Score = () => {
  const navigate = useNavigate();

  const [Idtsu, setIdtsu] = useState("");
  const [Midterm, setMidterm] = useState("");
  const [Final, setFinal] = useState("");


  const handleResult = () => {
    navigate("/Result", {
      state: { Idtsu, Midterm, Final },
    });
  };

  return (
    <>
      <div>
      <div className="max-w-screen-xl mx-auto">
      <form onSubmit={handleResult}>
          <table className="min-w-full bg-white border border-grayless rounded-lg text-lg " >
            <thead>
              <tr className="bg-grayblue p-8 text-black">
                <th className="border p-2">ลำดับ</th>
                <th className="border p-2">รหัสนิสิต</th>
                <th className="border p-2">ชื่อ-นามสกุล</th>
                <th className="border p-2">คะแนนเก็บ</th>
                <th className="border p-2">สอบกลางภาค</th>
                <th className="border p-2">สอบปลายภาค</th>
                <th className="border p-2">คะแนนรวม</th>
                <th className="border p-2">ผลการเรียน</th>
                <th className="border p-2">หมายเหตุ</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, index) => (
                <tr key={index} className="bg-gray-100">
                  <th className="border p-2">{index + 1}</th>
                  <th className="p-2">
                    <input
                      className="w-full p-1"
                      id="Idtsu"
                      type="text"
                      placeholder="กรุณาป้อนรหัสนิสิต"
                      value={Idtsu}
                      onChange={(e) => setIdtsu(e.target.value)}
                      required
                    />
                  </th>
                  <th className="border p-2 bg-green-200"></th>
                  <th className="border p-2">
                    <p>100</p>
                  </th>
                  <th className="border p-2">
                    <input
                      className="w-full p-1"
                      id="Midterm"
                      type="text"
                      placeholder="กรุณากรอกคะแนน"
                      value={Midterm}
                      onChange={(e) => setMidterm(e.target.value)}
                      required
                    />
                  </th>
                  <th className="border p-2 bg-yellow-200">
                    <input
                      className="w-full p-1"
                      id="Final"
                      type="text"
                      placeholder="กรุณากรอกคะแนน"
                      value={Final}
                      onChange={(e) => setFinal(e.target.value)}
                      required
                    />
                  </th>
                  <th className="border p-2">
                  </th>
                  <th className="border p-2">
                  </th>
                  <th className="border p-2">
                    <p></p>
                  </th>
                </tr>
              ))}
            </tbody>
            <tr>
              <td className="border p-4 text-center" colSpan={10}>
                <ScoreN />
              </td>
            </tr>
          </table>
          

          <div className="flex items-center justify-center pt-8 pb-8">
            <button
              type="submit"
              className="block bg-blue hover:bg-darkblue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              rel="noreferrer"
            >
              บันทึก
            </button>
          </div>
          </form>      
          </div>
          </div>
    </>
  );
};

const GradeSystem = () => {
  return (
    <div >
      {<Subject />}
      {<Score />}
    </div>
  );
};

export default GradeSystem;
