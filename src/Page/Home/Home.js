import axios from "axios"
import React, { useState, useEffect } from "react"
import Container from "../../components/Container/Container"
import Header from "../../components/Header/Header"

import List from "../../components/List/List"

const Home = () => {
  const [notes, setNotes] = useState([])
  const [temp, setTemp] = useState([])
  const [searchText, setSearchText] = useState("")
  const [check, setCheck] = useState("")

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/HubSpotWebTeam/CodeExercise/main/src/js/data/data.json"
      )
      .then((res) => {
        const data = res.data.media

        setNotes(data)
        setTemp(data)
      })
  }, [])

  useEffect(() => {
    let filterText = temp.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    )

    let filterCheck =
      check !== ""
        ? filterText.filter((item) => item.type === check)
        : filterText

    setNotes(filterCheck)
  }, [searchText, check])

  const handleClear = () => {
    setSearchText("")
    setCheck("")
  }

  return (
    <Container>
      <Header
        check={check}
        setCheck={setCheck}
        searchText={searchText}
        setSearchText={setSearchText}
        handleClick={handleClear}
      />
      <List data={notes} />
    </Container>
  )
}

export default Home
