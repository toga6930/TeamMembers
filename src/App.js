import React, { useState, useEffect } from "react";
import Employees from "./Employees";
import Header from "./Header";
import GroupedMembers from "./GroupedMembers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import Nav from "./Nav";
import NotFound from "./NotFound";

export default function App() {
  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "Team A"
  );
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeeList")) || [
      {
        id: 1,
        fullName: "IshowSpeed",
        designation: "Youtuber",
        gender: "male",
        teamName: "Team A"
      },
      {
        id: 2,
        fullName: "Messi",
        designation: "Footballer",
        gender: "male",
        teamName: "Team A"
      },
      {
        id: 3,
        fullName: "Yamato",
        designation: "Baseball Player",
        gender: "female",
        teamName: "Team B"
      },
      {
        id: 4,
        fullName: "Ronaldo",
        designation: "Footballer",
        gender: "male",
        teamName: "Team B"
      }
    ]
  );

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees));
  }, [employees]);
  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  function handleTeamSelect(event) {
    setTeam(event.target.value);
  }
  function employeeCardClick(event) {
    const transformEmployees = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    setEmployees(transformEmployees);
  }
  return (
    <Router>
      <Nav />
      <Header
        selectedTeam={selectedTeam}
        memberCount={
          employees.filter((employee) => employee.teamName === selectedTeam)
            .length
        }
      />
      <Routes>
        <Route
          path="/"
          element={
            <Employees
              employees={employees}
              selectedTeam={selectedTeam}
              employeeCardClick={employeeCardClick}
              handleTeamSelect={handleTeamSelect}
            />
          }
        ></Route>
        <Route
          path="/GroupedMembers"
          element={
            <GroupedMembers
              employees={employees}
              selectedTeam={selectedTeam}
              setTeam={setTeam}
            />
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}
