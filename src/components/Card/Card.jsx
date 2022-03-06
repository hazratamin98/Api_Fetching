import React from "react"
import classNames from "classnames/bind"

import styles from "./Card.module.scss"
const cx = classNames.bind(styles)

const Card = ({ data }) => {
  return (
    <div className={cx("card_wrapper")}>
      <img src={data.poster} alt="..." />
      <div>
        <span>
          {" "}
          <strong>{data.title}</strong>
        </span>
        <h1 className={cx("genre")}>Genres : {data.genre} </h1>
      </div>
    </div>
  )
}

export default Card
