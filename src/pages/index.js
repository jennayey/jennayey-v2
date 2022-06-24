import React from "react"
import { Link } from "gatsby"
import Container from "../components/container"
import Header from "../components/header"
import Content from "../components/content"
import Title from "../components/title"

export default function Home() {
  return (
    <div>
      <Container>
        
        <Content>

        <Title pageTitle="Hi, I'm Jenna"/>

          <p>
          Currently working on cool stuff at <a href="https://yaziacademy.com">Yazi</a> and creating more cool stuff at my free time.
          </p>
          <Link to="/now/">Now</Link>
          <Link to="/contact/">Contact</Link>
          <Link to="/projects/">Projects</Link>
          <a href="https://github.com/jennayey">Github</a>
        </Content>
      </Container>
    </div>
  )
}
