import axios from "axios"
import React, { useState, useEffect } from "react"
import Container from "../../components/Container/Container"

import List from "../../components/List/List"

const Home = () => {
  const [notes, setNotes] = useState([])

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

  return (
    <Container>
      <List data={notes} />
    </Container>
  )
}

export default Home
