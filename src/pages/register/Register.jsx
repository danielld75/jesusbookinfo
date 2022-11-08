import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Jesusbook</h3>
          <span className="loginDesc">Łączymy wierzących w Boga i nie tylko ...</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput"/>
            <input placeholder="Email" className="loginInput"/>
            <input placeholder="Date of Babptism" className="loginInput" type="date"/>
            {/*data chrztu lub rok urodzenia || nie znam swojej daty chrztu*/}
            <input placeholder="Password" className="loginInput"/>
            <input placeholder="Password Again" className="loginInput"/>
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Log Into Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}