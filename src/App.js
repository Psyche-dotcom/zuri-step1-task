import React from "react";
import Button from "./component/Button";
import { data } from "./data/data";
const App = () => {
  return (
    <div className="Container">
      <main>
        <section>
          <img src="img/profile.png" alt="avater-img" className="profile-img" />
          <h3>Annette Black</h3>
        </section>
        <section className="buttonCon">
          {data.map(({ id, title, href }) => (
            <Button url={href} title={title} id={id} />
          ))}
        </section>
        <section className="sl-gi">
          <img src="img/slack.png" alt="" />
          <a href="https://github.com/Psyche-dotcom">
            <img src="img/Icon.png" alt="" />
          </a>
        </section>
      </main>
      <footer>
        <div className="footd">
          <img src="img/zuri.png" alt="zuri-logo" />{" "}
          <p>HNG Internship 9 Frontend Task</p> <img src="img/I4G.png" alt="" />{" "}
        </div>
      </footer>
    </div>
  );
};

export default App;
