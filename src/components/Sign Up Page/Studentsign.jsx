import React, { useState } from 'react'

const Studentsign = () => {
  const [userRegister, setUserRegister] = useState({
    username: "",
    email: "",
    age: "",
    institute: "",
    Sphone: "",
    Pphone: "",
    Gphone: "",
    password: "",
    cpassword: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegister({ ...userRegister, [name]: value });
  };

  return (
    <>
      <section className="loginsection register-section ">
        <div className="container grid grid-two-column">
          <div className="login-image">
            {/* <img src="/hero.png" alt="user loggin pic" /> */}
            {/* <img src={heroImage} className="hero-image" alt="user login " /> */}
          </div>
          {/* right side div  */}
          <div className="login-data register-data">
            <p className="bold-text">Create Your Account!</p>
            {/* form start  */}
            <form action="#">
              <div className="form">
                <input
                  type="text"
                  id="email"
                  className="form__input"
                  placeholder="Email"
                  name="username"
                  value={userRegister.username}
                  onChange={handleInput}
                />
                <label htmlFor="email" className="form__label">
                  Email Address
                </label>
              </div>

              {/* for mobile number  */}
              <div className="form">
                <input
                  type="text"
                  id="phone"
                  className="form__input"
                  placeholder="Your Contact Number"
                  name="Sphone"
                  value={userRegister.Sphone}
                  onChange={handleInput}
                />
                <label htmlFor="phone" className="form__label">
                  Student Contact No.
                </label>
              </div>

              <div className="form">
                <input
                  type='number'
                  id="pasword"
                  className="form__input"
                  placeholder="Age"
                  name="age"
                  value={userRegister.age}
                  onChange={handleInput}
                />
                <label htmlFor="age" className="form__label">
                  Age
                </label>
              </div>

              <div className="form">
                <input
                  type="text"
                  id="institute"
                  className="form__input"
                  placeholder="Institute"
                  name="institute"
                  value={userRegister.institute}
                  onChange={handleInput}
                />
                <label htmlFor="institute" className="form__label">
                  Institute
                </label>
              </div>

              <div className="form">
                <input
                  type="text"
                  id="phone"
                  className="form__input"
                  placeholder="Parents' Contact Number"
                  name="Pphone"
                  value={userRegister.Pphone}
                  onChange={handleInput}
                />
                <label htmlFor="phone" className="form__label">
                  Parents' Contact No.
                </label>
              </div>

              <div className="form">
                <input
                  type="text"
                  id="phone"
                  className="form__input"
                  placeholder="Guardian Contact Number"
                  name="Gphone"
                  value={userRegister.Gphone}
                  onChange={handleInput}
                />
                <label htmlFor="phone" className="form__label">
                  Guardian Contact No.
                </label>
              </div>

              <div className="form">
                <input
                  type="password"
                  id="pasword"
                  className="form__input"
                  placeholder=" "
                  name="password"
                  value={userRegister.password}
                  onChange={handleInput}
                />
                <label htmlFor="pasword" className="form__label">
                  Password
                </label>
              </div>

              <div className="form">
                <input
                  type="text"
                  id="repeat password"
                  className="form__input"
                  placeholder="Confirm Password"
                  name="repeatpassword"
                  value={userRegister.cpassword}
                  onChange={handleInput}
                />
                <label htmlFor="repeat password" className="form__label">
                  Confirm Password
                </label>
              </div>

              <div className="checkbox">
                <input type="checkbox" />
                <p className="common-para">
                  By clicking the checkbox, I agree to Playwise{" "}
                  <a href="#"> Terms & Conditions </a>
                </p>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <p className="common-para">
                  Two Factor Authentication (Dual Layer Security)
                </p>
              </div>

              <input
                type="submit"
                value="REGISTER"
                className="btn register-btn"
              />
            </form>
            {/* extra way to login  */}
            <p className="common-para">
              You will receive a confirmation email to your registered mailbox
              to activate the account. If you face any issues, kindly{" "}
              <a href="#"> contact us!</a>
            </p>

            <p className="common-para">
              or join us with your social network account
            </p>
            <div className="social-btn">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-solid fa-m"></i>
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
            <p className="common-para">
              Already have an account with us? <a href="/login"> Login </a> here
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Studentsign