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
      <section className="loginsection register-section h-screen flex justify-center items-center">
        <div className="bg-gray-200 p-8 rounded-3xl">
          <div className="login-image">
            {/* <img src="/hero.png" alt="user loggin pic" /> */}
            {/* <img src={heroImage} className="hero-image" alt="user login " /> */}
          </div>
          {/* right side div  */}
          <div className="login-data register-data">
            <p className="bold-text text-center text-4xl">Create Your Account!</p>
            {/* form start  */}
            <form className="flex flex-col" action="# ">
              
                <input
                  type="text"
                  id="email"
                  className="form__input px-4 py-1 m-2 rounded-3xl"
                  placeholder="Email"
                  name="username"
                  value={userRegister.username}
                  onChange={handleInput}
                />
                
              

              {/* for mobile number  */}
              
                <input
                  type="text"
                  id="phone"
                  className="form__input px-4 py-1 m-2 rounded-3xl"
                  placeholder="Your Contact Number"
                  name="Sphone"
                  value={userRegister.Sphone}
                  onChange={handleInput}
                />
                
              

              
                <input
                  type='number'
                  id="pasword"
                  className="form__input px-4 py-1 m-2 rounded-3xl"
                  placeholder="Age"
                  name="age"
                  value={userRegister.age}
                  onChange={handleInput}
                />
                
              

              
                <input
                  type="text"
                  id="institute"
                  className="form__input px-4 py-1 m-2 rounded-3xl"
                  placeholder="Institute"
                  name="institute"
                  value={userRegister.institute}
                  onChange={handleInput}
                />
                
              

              
                <input
                  type="text"
                  id="phone"
                  className="form__input px-4 py-1 m-2 rounded-3xl"
                  placeholder="Parents' Contact Number"
                  name="Pphone"
                  value={userRegister.Pphone}
                  onChange={handleInput}
                />
                
              

              
                <input
                  type="text"
                  id="phone"
                  className="form__input px-4 py-1 m-2 rounded-3xl"
                  placeholder="Guardian Contact Number"
                  name="Gphone"
                  value={userRegister.Gphone}
                  onChange={handleInput}
                />
                
              

              
                <input
                  type="password"
                  id="pasword"
                  className="form__input px-4 py-1 m-2 rounded-3xl"
                  placeholder="password"
                  name="password"
                  value={userRegister.password}
                  onChange={handleInput}
                />
               
              

              
                <input
                  type="text"
                  id="repeat password"
                  className="form__input px-4 py-1 m-2 rounded-3xl"
                  placeholder="Confirm Password"
                  name="repeatpassword"
                  value={userRegister.cpassword}
                  onChange={handleInput}
                />
                
              

              <div className="pl-4">
                <input className='inline' type="checkbox" />
                <p className="pl-4 inline">
                  By clicking the checkbox, I agree to Playwise{" "}
                  <a href="#"> Terms & Conditions </a>
                </p>
              </div>
              <div className="pl-4">
                <input type="checkbox" className='inline'/>
                <p className="pl-4 inline">
                  Two Factor Authentication (Dual Layer Security)
                </p>
              </div>

              <input
                type="submit"
                value="REGISTER"
                className="btn register-btn bg-indigo-500 rounded-3xl text-white p-3 m-3"
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
            <p className="common-para text-center m-3">
              Already have an account with us? <a href="/login"> Login </a> here
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Studentsign