import axios from "axios"
import React, { useState, useEffect } from "react"
import Container from "../../components/Container/Container"
import Header from "../../components/Header/Header"

import List from "../../components/List/List"

const Home = () => {
  const [notes, setNotes] = useState([])

  // const [userData, setUserData] = useState([])
  // const [genres, setGenres] = useState([])
  // const [years, setYears] = useState([])

  // const [selectedType, setSelectedType] = useState("")
  // const [selectedGenres, setSelectedGenres] = useState([])
  // const [selectedYears, setSelectedYears] = useState([])
  // const [searchText, setSearchText] = useState("")

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/HubSpotWebTeam/CodeExercise/main/src/js/data/data.json"
      )
      .then((res) => {
        const data = res.data.media

        setNotes(data)
      })
  }, [])

  console.log(notes)

  // const cleaAllFilters = () => {
  //   setSearchText("")
  //   setSelectedGenres([])
  //   setSelectedType("")
  //   setSelectedYears([])
  // }

  return (
    <Container>
      <Header data={notes} />
      <List data={notes} />
    </Container>
  )
}

export default Home
