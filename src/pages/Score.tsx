import { Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


interface dataP {
  Id: String;
  Subj: string;
  Credit: String;
  Sum:String;
}


const Score = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // setSum(midterm + final);


  
  // const {state} = location;
  const { Id, Subj, Credit } = location.state;
  console.log(location.state);



  const [Idtsu, setIdtsu] = useState("");
  const [Name, setName] = useState("");
  const [Midterm, setMidterm] = useState("");
  const [Final, setFinal] = useState("");
  const [Point, setPoint] = useState("");
  const [Grade, setGrade] = useState("");
  const [Total, setTotal] = useState("");

  useEffect(() => {
    // Convert Midterm and Final to numbers and sum them
    const midtermValue = parseFloat(Midterm) || 0;
    const finalValue = parseFloat(Final) || 0;
    const totalValue = midtermValue + finalValue;

    setTotal(totalValue.toString());

    // Determine the grade based on the total value
    if (totalValue >= 80) {
      setGrade('A');
    } else if (totalValue >= 70) {
      setGrade('B+');
    } else if (totalValue >= 65) {
      setGrade('B');
    } else if (totalValue >= 60) {
      setGrade('C+');
    } else if (totalValue >= 55) {
      setGrade('C');
    } else if (totalValue >= 50) {
      setGrade('D');
    } else {
      setGrade('F');
    }
  }, [Midterm, Final]);
  
  const handleResult = () => {
    navigate("/Result", {
      state: { Idtsu, Name, Midterm, Final, Point, Grade,Id,Subj,Credit,Total},
    });
  };
  return (
    <>
      <div>
        <h1 className="bg-border h-20 text-xl font-bold pl-16 pt-7 mt-10 ml-20 mr-20 rounded-lg text-black text-left">
          {" "}
          บันทึกคะแนน
        </h1>
      </div>

      <div className="bg-border pl-16 pt-7 mt-10 ml-20 mr-20 rounded-lg">
        <p className="font-bold pt-3 text-2xl text-center text-black">
          วิชา{Subj} หน่วยกิต {Credit}
        </p>
        <p className="text-2xl pt-8 text-center mb-8 text-black">
          ภาคเรียนที่ 2 ปีการศึกษา 2566
        </p>

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
                <th className="border p-2"></th>
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
                  {Midterm && Final ? Total : ""}
                  </th>
                  <th className="border p-2">
                  {Midterm && Final ? Grade : ""}
                  </th>
                  <th className="border p-2">
                    <p></p>
                  </th>
                  <th className="border p-2">
                    <div>
                      <i className="fa-solid fa-house">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </i>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
            <tr>
              <td className="border p-4 text-center" colSpan={10}>
                <button
                  className="bg-green hover:bg-darkgreen text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mt-4 mb-4"
                  type="button"
                >
                  เพิ่มรายชื่อ
                </button>
              </td>
            </tr>
          </table>
          

          <div className="flex items-center justify-center pt-8 pb-8">
            <button
              type="submit"
              className="block bg-blue hover:bg-darkblue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              rel="noreferrer"
              // onClick={handleResult}
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

export default Score;
