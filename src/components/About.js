import { useState } from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h2>About page</h2>
      <h4>this is just about page to know better.</h4>

      <User name={"Sourabh Yadav (Function)"} location={"Delhi"}/>

      {/* <UserClass name={"Sourabh Yadav (Class)"} location={"Chandigarh"} /> */}
    </div>
  );
};

export default About;
