import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import mick1 from "./images/1980-01-07-01-05-58-1237748348.jpeg";
import mick2 from "./images/1980-01-07-01-06-26--182621492.jpeg";
import mick3 from "./images/1980-01-07-01-06-30--1041913870.jpeg";
// add props
const Person = ({ img, name, job, children }) => {
  // using template litrals
  // const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
    
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

// now to create a component
const PersonList = () => {
  return (
    <section className="person-List">
      <Person  name="MikimThink" job="web developer"><img src={mick1} alt="sometthing here"></img></Person>
      <Person  name="MikimThink" job="designer"><img src={mick2} alt="sometthing here"></img></Person>
      <Person  name="MikimThink" job="boss">
        <img src={mick3} alt="sometthing here"></img>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quis placeat magnam reiciendis quos corporis eum quod quidem labore deleniti.
        </p>
      </Person>
    </section>
  );
};

ReactDom.render(<PersonList></PersonList>, document.getElementById("root"));
