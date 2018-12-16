import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Lazyload from 'react-lazyload'
import { IoLogoTwitter, IoIosTime, IoIosCalendar } from 'react-icons/io'
import './styles.css'

export default function Template({ data }) {
  return (
    <Layout>
      <div class="container">
        <h1 class="heading1">Speakers & Schedule</h1>
        <div class="users">
          {data.workshopsJson.speakers.map(speaker => (
            <div class="user">
              <div class="left-bar">
                <Lazyload height="80" width="80">
                  <img alt="speaker" src={speaker.pic} />
                </Lazyload>
              </div>
              <div class="right-bar">
                <p class="name">{speaker.name}</p>
                <p class="bio">{speaker.bio}</p>
                <p class="schedule">
                  <span class="color-gold">
                    <IoLogoTwitter color="gold" />
                    &nbsp;
                  </span>
                  <a href={`http://www.twitter.com/${speaker.twitterHandle}`}>
                    {speaker.twitterHandle}
                  </a>
                </p>
                <p class="topic">
                  <span class="bullet" />
                  &nbsp;
                  {speaker.topic}
                </p>
                <p class="schedule">
                  <span class="color-gold">
                    <IoIosTime color="gold" />
                    &nbsp;
                  </span>
                  {speaker.startTime} - {speaker.endTime}
                </p>
                <p class="schedule">
                  <span class="color-gold">
                    <IoIosCalendar color="gold" />
                    &nbsp;
                  </span>
                  {speaker.startTime} - {speaker.endTime}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    workshopsJson(path: { eq: $path }) {
      id
      title
      path
      speakers {
        name
        pic
        bio
        twitterHandle
        topic
        startTime
        endTime
      }
    }
  }
`
