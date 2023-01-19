const Teams = ({ selectedTeam, handleTeamSelect }) => {
  return (
    <select
      className="form-select"
      value={selectedTeam}
      onChange={handleTeamSelect}
    >
      <option value="Team A">Team A</option>
      <option value="Team B">Team B</option>
    </select>
  );
};
export default Teams;
