import React, { useState } from "react"

import classNames from "classnames/bind"

import styles from "./Header.module.scss"
const cx = classNames.bind(styles)

const Header = ({
  check,
  searchText,
  setCheck,
  setSearchText,
  handleClick,
}) => {
  return (
    <div className={cx("header_wrapper")}>
      <div className={cx("category ")}>
        <div className="category_radio">
          <input
            type="radio"
            name="mediaType"
            id="movie"
            checked={check === "movie"}
            value="movie"
            onClick={(e) => setCheck(e.target.value)}
          />
          <label htmlFor="movie">Movies</label>
        </div>
        <div className="category_radio">
          <input
            type="radio"
            name="mediaType"
            id="book"
            checked={check === "book"}
            value="book"
            onClick={(e) => setCheck(e.target.value)}
          />
          <label htmlFor="book">Books</label>
        </div>
      </div>
      <div className="search">
        <div className="input-container">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          {/* {data
            .filter((val) => {
              if (searchText == "") {
                return val
              } else if (val.title) {
              }
            })
            .map((val, key) => {
              return (
                <div>
                  <p>{val.title}</p>
                </div>
              )
            })} */}
        </div>

        <label className="clear-filters" onClick={handleClick}>
          CLEAR FILTERS
        </label>
      </div>
    </div>
  )
}

export default Header
