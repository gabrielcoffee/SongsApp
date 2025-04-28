import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>SongsApp</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/add" style={styles.link}>Add Song</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff"
  },
  logo: {
    margin: 0,
    fontSize: "24px"
  },
  links: {
    display: "flex",
    gap: "15px"
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px"
  }
};

export default Navbar;
