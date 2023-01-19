import TeamMemberCard from "./TeamMemberCard";

const TeamMembers = ({ employees, employeeCardClick, selectedTeam }) => {
  return employees.map((employee) => (
    <TeamMemberCard
      employee={employee}
      employeeCardClick={employeeCardClick}
      selectedTeam={selectedTeam}
    />
  ));
};
export default TeamMembers;
