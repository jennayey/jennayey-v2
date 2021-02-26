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
        <Link to="/">Back</Link>
        <Title pageTitle="Right now" />
          

          <p>I'm spending my weekends learning and creating side projects to further learn more about web and mobile development.
            
         </p>

         <p>
          And I'm learning the korean language in my free time <br></br>
          그리고 내 무료의시간에 한국어 배우고 있어요
         </p>

         <a href="https://nownownow.com/about">About a now page</a>
        </Content>
      </Container>
    </div>
  )
}
