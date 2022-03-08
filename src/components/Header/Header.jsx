import React, { useState } from "react"

import classNames from "classnames/bind"

import styles from "./Header.module.scss"
const cx = classNames.bind(styles)

const Header = ({ data }) => {
  const [searchText, setSearchText] = useState("")

  return (
    <div className={cx("header_wrapper")}>
      <div className={cx("category ")}>
        <div className="category-radio">
          <input
            type="radio"
            // checked={selectedType === "movie"}
            name="mediaType"
            id="movie"
            // onChange={() => setSelectedType("movie")}
          />
          <label htmlFor="movie">Movies</label>
        </div>
        <div className="category-radio">
          <input
            type="radio"
            // checked={selectedType === "book"}
            name="mediaType"
            id="book"
            // onChange={() => setSelectedType("book")}
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
        {/* onClick={clearAllFilters} */}
        <label className="clear-filters">CLEAR FILTERS</label>
      </div>
    </div>
  )
}

export default Header
