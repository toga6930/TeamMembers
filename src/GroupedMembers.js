import { useState } from "react";

const GroupedMembers = ({ employees, selectedTeam, setTeam }) => {
  const [groupedEmployees, setGrouped] = useState(groupedMembers());

  function groupedMembers() {
    let teams = [];
    let teamAMembers = employees.filter(
      (employee) => employee.teamName === "Team A"
    );
    let teamA = {
      team: "Team A",
      members: teamAMembers,
      collapsed: selectedTeam === "Team A" ? false : true
    };
    teams.push(teamA);
    let teamBMembers = employees.filter(
      (employee) => employee.teamName === "Team B"
    );
    let teamB = {
      team: "Team B",
      members: teamBMembers,
      collapsed: selectedTeam === "Team B" ? false : true
    };
    teams.push(teamB);

    return teams;
  }

  function handleTeamClick(evnet) {
    let groupData = groupedEmployees.map((groupedData) =>
      groupedData.team === event.currentTarget.id
        ? { ...groupedData, collapsed: !groupedData.collapsed }
        : groupedData
    );
    setGrouped(groupData);
    setTeam(evnet.currentTarget.id);
  }
  return (
    <main className="container">
      {groupedEmployees.map((item) => {
        return (
          <div key={item.team} className="card">
            <h4 id={item.team} className="card-title" onClick={handleTeamClick}>
              Team Name: {item.team}
            </h4>
            <div
              id={"collapse_" + item.team}
              className={item.collapsed === true ? "collapse" : ""}
            >
              {item.members.map((member) => {
                return (
                  <div>
                    <h5>
                      <span>Full Name: {member.fullName}</span>
                    </h5>
                    <p>Designation: {member.designation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default GroupedMembers;
