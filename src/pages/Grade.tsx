import { useEffect, useState } from "react";

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