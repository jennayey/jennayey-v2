import React from "react"
import { Link } from "gatsby"
import Container from "../components/container"
import Header from "../components/header"
import Content from "../components/content"

export default function Home() {
  return (
    <div>
      <Container>
        <Header pageTitle="" />
        <Content>
          <p>
          Currently working on cool stuff at <a href="https://orangefix.xyz">Orangefix</a> and creating more cool stuff at my free time.
          </p>
          <Link to="/now/">Now</Link>
          <Link to="/contact/">Contact</Link>
          {/* <Link to="/projects/">Projects</Link> */}
          <a href="https://github.com/jennayey">Github</a>
        </Content>
      </Container>
    </div>
  )
}
