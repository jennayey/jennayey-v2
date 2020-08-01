import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Content from "../components/content"
import Title from "../components/title"

export default function Home() {
  return (
    <div>
      <Container>
        <Header pageTitle="now" />
        <Content>
        <Title pageTitle="Right now" />
          

          <p>I'm currently spending my weekends learning and creating side projects to further learn more about the web these past few weeks. 
            
         </p>

         <p>
           Also I am currently working on my typing speeds as I've recently switched to a Dvorak layout and an 40% ortholinear keyboard
         </p>

         <a href="https://nownownow.com/about">About a now page</a>
        </Content>
      </Container>
    </div>
  )
}
