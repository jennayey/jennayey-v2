import React from "react"
import { Link } from "gatsby"
import Container from "../components/container"
import Header from "../components/header"
import Content from "../components/content"

import Title from "../components/title"
export default function Contact() {
  return (
    <div>
      <Container>
        <Header pageTitle="contact"/>
        <Content>
         <Title pageTitle="Chit chat"/>

         <p>Send me a message at Twitter <a href="https://twitter.com/jennayey">@jennayey</a></p>

         <p>Or you can send me a message on my email at <span><a href="mailto:hello@jennayey.com">hello@jennayey.com</a></span></p>

        </Content>
      </Container>
    </div>
  )
}
