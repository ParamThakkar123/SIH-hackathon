import React from 'react'


const Profile = () => {
  return (
    <div>
        <header>
        <div class="navbar-container">
            <div class="navbar">
                <div class="navbar-text">Students Mental Health Survey</div>
                <ul class="navbar-links">
                    <li class="profile-dropdown">
                        <a href="#">Profile &#9662;</a>
                        <div class="profile-dropdown-content">
                            <a href="viewprofile.html">View Profile</a>
                            <a href="editprofile.html">Edit Profile</a>
                            <a href="index.html">Sign Out</a>
                            <a href="delete.html">Delete Account</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </header>

    <nav class="additional-navbar">
        <a href="resources.html">Resources</a>
        <span class="nav-separator">|</span>
        <a href="health.html">Understand about Student Mental Health</a>
        <span class="nav-separator">|</span>
        <a href="about.html">About Us</a>
        <span class="nav-separator">|</span>
        <a href="faq.html">FAQs</a>
    </nav>

    <div class="container">
        <h1>View Profile</h1>
        <header>
            <h1 class="h2-style">varun35</h1>
        <ul class="right inline-list">
                <li><a href="/users/varun35/edit/" title="Edit Profile"></a>
        </li>
        <li>
            <div id="ember_root" class="user-add-button ember-application">
                <div id="ember320" class="ember-view">
            
            <div>
                <a class="user-add"></a>
                <div id="ember363" class="ember-view">

                    <div class="add-button-set">
                        <table id="test" border="0" cellpadding="0" cellspacing="0">
                            <tbody>
                            
                                
                                <tr>
                                    <td></td>
                                    <td colspan="2"><a href="/sets" target="_blank">Create new set</a></td>
                                </tr>
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        
            <div id="ember360" class="ember-view growl-notifications"></div>
            </div></div></li>
            </ul>
        </header>
        <section class="user-details">
            <ul class="side-nav">
                <li><label>Name : </label><span>Varun Sriram</span></li>
                <li>
                    <label>Username : </label><span></span><span class="m-username--link">varun35</span>
                </li>
                <li><label>Email Id : </label><span>vssriram_b22@ce.vjti.ac.in</span></li><br/>
                <li><label>Gender : </label><span>Male</span></li><br/>

                <li><label>City : </label><span><span class="user-country-name">Mumbai</span></span></li>
                <br/>
                <li><label>School/College : </label><span>VJTI</span></li>
                <br/>
                <li><label>Age : </label><span>18</span></li>
                <br/>
                <li><label>Personal Contact No. : </label><span maxlength="10">9283747823</span></li><br/>
                <li><label>Parents/Guardians Contact No. : </label><span maxlength="10">9938432903</span></li>
               
            </ul>
        </section>
    </div>
    </div>
  )
}

export default Profile