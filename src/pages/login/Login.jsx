import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Jesusbook</h3>
          <span className="loginDesc">Łączymy wierzących w Boga i nie tylko ...</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput"/>
            <input placeholder="Password" className="loginInput"/>
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Zapomniałeś hasło?</span>
            <button className="loginRegisterButton">Stwórz nowe konto</button>
          </div>
        </div>
      </div>
    </div>
  )
}