import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Score = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { Id, Subj, Credit } = location.state;

  const [students, setStudents] = useState([
    { Idtsu: '', Midterm: '', Final: '' },
  ]);

  const handleInputChange = (index, event, field) => {
    const newStudents = [...students];
    newStudents[index][field] = event.target.value;
    setStudents(newStudents);
  };

  const handleAddRow = () => {
    setStudents([...students, { Idtsu: '', Midterm: '', Final: '' }]);
  };

  const handleResult = () => {
    // Process the data as needed and navigate to the Result page
    navigate('/Result', {
      state: {
        // Include other relevant data
        students,
      },
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
            <table className="min-w-full bg-white border border-grayless rounded-lg text-lg">
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
                {students.map((student, index) => (
                  <tr key={index} className="bg-gray-100">
                    <th className="border p-2">{index + 1}</th>
                    <th className="p-2">
                      <input
                        className="w-full p-1"
                        type="text"
                        placeholder="กรุณาป้อนรหัสนิสิต"
                        value={student.Idtsu}
                        onChange={(e) => handleInputChange(index, e, 'Idtsu')}
                        required
                      />
                    </th>
                    {/* ... (other columns) */}
                  </tr>
                ))}
              </tbody>
              <tr>
                <td className="border p-4 text-center" colSpan={10}>
                  <button
                    className="bg-green hover:bg-darkgreen text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mt-4 mb-4"
                    type="button"
                    onClick={handleAddRow}
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
