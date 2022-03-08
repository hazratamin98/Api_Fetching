import React, { useState } from "react";

import classNames from "classnames/bind";

import styles from "./Card.module.scss";
const cx = classNames.bind(styles);

const Card = ({ data }) => {
  return (
    <div className={cx("card_wrapper")}>
      <img src={data.poster} alt="..." />
      <div>
        <span>
          {" "}
          <strong>{data.title}</strong>
        </span>
        <div className={cx("genres_content")}>
          <span>Genres:</span>
          <ul className={cx("genres_list")}>
            {data.genre?.map((g) => (
              <li className="genre" key={g}>
                {g}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
