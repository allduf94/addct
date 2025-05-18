import "./Header.scss";
import { Link } from "react-router-dom";


export function Header() {
  return (
    <header id="Header">
      <nav>
        <Link to="/addct" id="logo">a ddct</Link>
        <Link to="/all?filter=all">제품 보기</Link>
        <Link to="/all?filter=best">베스트 셀러</Link>
        <Link to="/brand">브랜드</Link>
        <Link to="/note">조향 노트</Link>
        <Link to="/storelist">매장 보기</Link>
      </nav>
      <div className="utils">
        <button className="search">
          <i className="bi bi-search" />
        </button>
        <Link to="cart" className="cart">
          <i class="bi bi-bag" />
        </Link>
        <Link to="/login" className="user">
          <i class="bi bi-person-circle" />
        </Link>
      </div>
    </header>
  )
}