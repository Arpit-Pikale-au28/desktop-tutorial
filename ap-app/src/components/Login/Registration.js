import React from 'react'

export default function Registration() {
  return (
      <div>
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>

          <label for="email"><b>Email</b></label><br/>
          <input type="text"placeholder="Enter Email" required />
          <br/>
          <label for="psw"><b>Password</b></label><br/>
          <input type="password" placeholder="Enter Password"  required /><br/>
          <label for="psw-repeat"><b>Repeat Password</b></label><br/>
          <input type="password" placeholder="Repeat Password" required></input>

          <p><i>By creating an account you agree to our Terms & Privacy</i></p>
          <button type="submit" class="registerbtn">Register</button>
      </div>
  )
}
