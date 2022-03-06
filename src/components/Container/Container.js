import React from "react"
import classNames from "classnames/bind"

import styles from "./Container.module.scss"
const cx = classNames.bind(styles)

const Container = ({ children }) => {
  return <div className={cx("container_wrapper")}>{children}</div>
}

export default Container
