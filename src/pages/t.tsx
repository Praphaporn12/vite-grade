import { Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ScoreN from "./ScoreN";

interface dataP {
  Id: String;
  Subj: string;
  Credit: String;
  Sum: String;
}

const Score = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { Id, Subj, Credit } = location.state;
  console.log(location.state);

  const [rows, setRows] = useState([
    // You can prepopulate the table with some initial rows
    { id: 1, Idtsu: "", Midterm: "", Final: "" },
    { id: 2, Idtsu: "", Midterm: "", Final: "" },
    // Add more rows as needed
  ]);

  const handleAddRow = () => {
    setRows((prevRows) => [
      ...prevRows,
      {
        id: prevRows.length + 1,
        Idtsu: "",
        Midterm: "",
        Final: "",
      },
    ]);
  };

  const handleResult = () => {
    // Process the data, navigate, etc.
    // For now, just log the rows to the console
    console.log(rows);

    // Add your navigation logic here
    // navigate("/Result", { state: yourStateObject });
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
            <table className="min-w-full bg-white border border-grayless rounded-lg text-lg ">
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
                {rows.map((row) => (
                  <tr key={row.id} className="bg-gray-100">
                    <th className="border p-2">{row.id}</th>
                    <th className="p-2">
                      <input
                        className="w-full p-1"
                        id={`Idtsu_${row.id}`}
                        type="text"
                        placeholder="กรุณาป้อนรหัสนิสิต"
                        value={row.Idtsu}
                        onChange={(e) =>
                          setRows((prevRows) =>
                            prevRows.map((prevRow) =>
                              prevRow.id === row.id
                                ? { ...prevRow, Idtsu: e.target.value }
                                : prevRow
                            )
                          )
                        }
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
                        id={`Midterm_${row.id}`}
                        type="text"
                        placeholder="กรุณากรอกคะแนน"
                        value={row.Midterm}
                        onChange={(e) =>
                          setRows((prevRows) =>
                            prevRows.map((prevRow) =>
                              prevRow.id === row.id
                                ? { ...prevRow, Midterm: e.target.value }
                                : prevRow
                            )
                          )
                        }
                        required
                      />
                    </th>
                    <th className="border p-2 bg-yellow-200">
                      <input
                        className="w-full p-1"
                        id={`Final_${row.id}`}
                        type="text"
                        placeholder="กรุณากรอกคะแนน"
                        value={row.Final}
                        onChange={(e) =>
                          setRows((prevRows) =>
                            prevRows.map((prevRow) =>
                              prevRow.id === row.id
                                ? { ...prevRow, Final: e.target.value }
                                : prevRow
                            )
                          )
                        }
                        required
                      />
                    </th>
                    <th className="border p-2">
                      {row.Midterm && row.Final ? Total : ""}
                    </th>
                    <th className="border p-2">
                      {row.Midterm && row.Final ? Grade : ""}
                    </th>
                    <th className="border p-2">
                      <p></p>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex items-center justify-center pt-8 pb-8">
              <button
                type="button"
                onClick={handleAddRow}
                className="bg-green hover:bg-darkgreen text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mt-4 mb-4"
              >
                เพิ่มรายชื่อ
              </button>
            </div>

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
        <div></div>
      </div>
    </>
  );
};

export default Score;
