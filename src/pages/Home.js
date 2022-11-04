import React from "react";
import { Link } from "react-router-dom";
import Button from "../component/Button";
import { data } from "../data/data";

const Home = () => {
  return (
    <main>
      <section>
        <img
          src="img/profile.jpg"
          alt="avater-img"
          className="profile-img"
          id="profile__img"
        />
        <h3>Saheed Babatunde</h3>
      </section>
      <section className="buttonCon">
        {data.map(({ id, title, href, link }) => (
          <Button url={href} title={title} id={id} link={link} />
        ))}
        <Link to="/contact" id="contact">
          <button>Contact Me</button>
        </Link>
      </section>
      <section className="sl-gi">
        <img src="img/slack.png" alt="slack" id="slack" />
        <a href="https://github.com/Psyche-dotcom">
          <img src="img/Icon.png" alt="" />
        </a>
      </section>
    </main>
  );
};

export default Home;
