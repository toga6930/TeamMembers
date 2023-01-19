const Header = ({ selectedTeam, memberCount }) => {
  return (
    <header className="container">
      <h2>
        {selectedTeam} has {memberCount} Members
      </h2>
    </header>
  );
};

export default Header;
