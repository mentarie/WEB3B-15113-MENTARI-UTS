import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isShow, setShow] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const { pathname } = useLocation();

  const onClickBurgerButton = function() {
    setShow(!isShow);
  };

  const onChangeSearchInput = function(event) {
    const value = event.target.value;
    setSearchValue(value);
  };

  const onClickSearchButton = function(event) {
    event.preventDefault();
    // Send search request to API using fetch
    // https://developer.mozilla.org/id/docs/Web/API/Fetch_API/Using_Fetch
    fetch("/api/search/?searchValue=" + searchValue)
      .then(res => res.json())
      .then(json => json.search)
      .then(value => alert(value))
      .catch(err => console.log(err));
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <a className="navbar-brand" href="#!">
        Top navbar
      </a>
      <button
        onClick={onClickBurgerButton}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isShow ? "show" : ""}`}
        id="navbarCollapse"
      >
        <ul className="navbar-nav mr-auto">
          <li className={`nav-item ${pathname === "/" ? "active" : ""}`}>
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li
            className={`nav-item ${
              pathname.indexOf("/blog") > -1 ? "active" : ""
            }`}
          >
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
          </li>
          <li
            className={`nav-item ${
              pathname.indexOf("/about") > -1 ? "active" : ""
            }`}
          >
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className={`nav-item ${pathname === "/#!" ? "active" : ""}`}>
            <a
              className="nav-link disabled"
              href="#!"
              tabIndex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
        <form
          className="form-inline mt-2 mt-md-0"
          onSubmit={onClickSearchButton}
        >
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={onChangeSearchInput}
            value={searchValue}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
