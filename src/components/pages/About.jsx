import React from "react";
import author from "../images/DSC_0785 (2).jpg";
const Profile = () => {
  return (
    <div className="about">
      <h1>About Recipe</h1>
      <div className="aboutGrid">
        <img src={author} alt="developer" />
        <div className="aboutP">
          <p>
            I am the frontend developer who worked on this project as a side
            project but you can use it i guarantee you that the details here are
            true and reliable. So if you feel the project is not true then
            contact me and i'll pick it up from there.
          </p>
          <br />
          <p>
            The project was worked on to make our chefs, our food makers whether
            at home or restaurant to cook all things if you feel it is not reliable do a test on it try it at home on your own and try it{" "}
          </p>
          <br />
          <p>Are you still looking at this page common give it a test and stop looking at my words and try it 😏😏😏😏😏</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
