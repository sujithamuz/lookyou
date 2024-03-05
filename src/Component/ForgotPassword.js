import React, { useState } from 'react'
import { FacebookLoginButton } from 'react-social-login-buttons'
import { LoginSocialFacebook } from 'reactjs-social-login'
// import FacebookLogin from 'react-facebook-login'
function ForgotPassword() {
  const [userData, setUserData] = useState({})
  const responseFacebook = (response) => {
    setUserData({
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    })
  }
  
  return (
    <div>
      {/* {userData.name ? (
      <div>
        <img src={userData.picture} alt={userData.name} />
        <p>Welcome, {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    ) : (
      <FacebookLogin
        appId="373683318948981"
        autoLoad={false}
        fields="name, email, picture"
        callback={responseFacebook}
      />
    )} */}
    <LoginSocialFacebook
    appId='373683318948981'
    onResolve={(response)=>{
console.log(response)
    }}
    onReject={(error)=>{
      console.log(error)
    }}
    >
      <FacebookLoginButton/>
    </LoginSocialFacebook>
    </div>
  )
}

export default ForgotPassword
