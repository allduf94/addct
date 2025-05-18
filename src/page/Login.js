import "./Login.scss"


export function Login() {
  return (
    <section id="Login">
      <div className="left" />
      <div className="right">
        <h2 className="title">LOGIN</h2>
        <form action="">
          <input type="text" placeholder="아이디를 입력해 주세요"/>
          <input type="password" placeholder="비밀번호를 입력해 주세요"/>
          <div className="wrap_checkbox">
            <input type="checkbox" id="saveId" />
            <label htmlFor="saveId">아이디 저장</label>
          </div>
          <button className="login">LOGIN</button>
          <hr />
          <button className="kakao">카카오 간편 로그인/회원가입</button>
          <button className="naver">네이버 로그인</button>
        </form>
        <div className="wrap_find">
          <button>아이디 찾기</button>
          <button>비밀번호 찾기</button>
        </div>
        <button className="signin">회원가입</button>
        <button className="inquiry">비회원 주문조회</button>
      </div>
    </section>
  )
}