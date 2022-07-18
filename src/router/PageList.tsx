import { Link } from "react-router-dom";

const PageList = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/wantToBuy">WantToBuy</Link>
          </li>
          <li>
            <Link to="/commitCounter">CommitCounter</Link>
          </li>
          <li>
            <Link to="/twitterManagement">TwitterManagement</Link>
          </li>
          <li>
            <Link to="/lifeGame">LifeGame</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </>
  );
};
export default PageList;
