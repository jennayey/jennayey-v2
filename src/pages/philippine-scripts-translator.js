import React from "react"
import { Link } from "gatsby"
import Container from "../components/container"
import ButtonPrimary from "../components/button.primary"

import Content from "../components/content"

import Title from "../components/title"
export default function TranslatorProject() {
  return (
    <div>
      <Container>
        <Content>
          <Link to="/">Back</Link>
          <Title pageTitle="This page has been moved!" />
          <h3>Access my Script Translator Project here</h3>
          <ButtonPrimary link="https://translate.jennayey.com/" title="Philippine Scripts Translator"/>
        
        </Content>
      </Container>
    </div>
  )
}
