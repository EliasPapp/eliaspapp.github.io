"use client"

import { TextButton } from "./components/text-button/text-button.jsx"
import { IconButton } from "./components/icon-button/icon-button.jsx"

import "./styles/global.css"

export default function Page() {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
        <link href='https://fonts.googleapis.com/css?family=DM Sans' rel='stylesheet' />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <link href="/favicon.ico" rel="icon" sizes="any" />
        
        <title>Elias Papp - Links</title>
      </head>

      <body>
        <main>
          <img className="avatar" src="images/profile-pic.png" alt="Profile picture" />

          <h1>Elias Papp</h1>

          <h2>Web & game developer</h2>

          <p>Hungarian-Brazilian professional with 5 years of experience in IT</p>

          <ul>
            <li>
              <TextButton
                text="Youtube portfolio"
                url="https://www.youtube.com/@EliasPappBR"
              />
            </li>

            <li>
              <TextButton
                text="Instagram portfolio"
                url="https://www.instagram.com/elias.papp.gamedev"
              />
            </li>

            <li>
              <TextButton
                text="Newgrounds account"
                url="https://1999elias.newgrounds.com/"
              />
            </li>
          </ul>

          <ul className="icon-buttons-container">
            <li>
              <IconButton
                icon="linkedin-square"
                url="https://www.linkedin.com/in/elias-papp"
              />
            </li>

            <li>
              <IconButton
                icon="github"
                url="https://github.com/EliasPapp"
              />
            </li>

            <li>
              <IconButton
                icon="instagram"
                url="https://www.instagram.com/elias.papp"
              />
            </li>
          </ul>
        </main>
      </body>
    </html>
  )
}