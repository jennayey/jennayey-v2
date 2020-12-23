import React from "react"
import { Link } from "gatsby"
import Container from "../components/container"
import Header from "../components/header"
import Content from "../components/content"

import Title from "../components/title"
export default function Projects() {
  return (
    <div>
      <Container>
        <Content>
          <Link to="/">Back</Link>
          <Title pageTitle="Projects" />

          <h3>2020</h3>
          <a href="https://jennayey.itch.io/the-gift-wrapper">
            The Gift Wrapper: A 2D Game
          </a>
          <a href="https://github.com/jennayey/home-inventory-rn">
            Home Inventory: A React Native App
          </a>
          <a href="https://translate.jennayey.com/">
            Philippine Scripts Translator
          </a>

          <h3>2018</h3>
          <a href="https://jennayey.itch.io/nolimetangere">
            Noli Me Tangere: The Game
          </a>
          <a href="https://jennayey.itch.io/somber">Somber: A 2D Game</a>
        </Content>
      </Container>
    </div>
  )
}
