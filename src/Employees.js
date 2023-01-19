import TeamMembers from "./TeamMembers";
import Teams from "./Teams";

const Employees = ({
  employees,
  selectedTeam,
  handleTeamSelect,
  employeeCardClick
}) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <Teams
            selectedTeam={selectedTeam}
            handleTeamSelect={handleTeamSelect}
          />
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            <TeamMembers
              employees={employees}
              employeeCardClick={employeeCardClick}
              selectedTeam={selectedTeam}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
