const TeamMemberCard = ({ employee, employeeCardClick, selectedTeam }) => {
  return (
    <div
      key={employee.id}
      id={employee.id}
      className={employee.teamName === selectedTeam ? "card standout" : "card"}
      onClick={employeeCardClick}
    >
      <div className="card-body">
        <h5>{employee.fullName}</h5>
        <p className="card-text">{employee.designation}</p>
        <p className="card-text">{employee.gender}</p>
        <p className="card-text">{employee.teamName}</p>
      </div>
    </div>
  );
};
export default TeamMemberCard;
