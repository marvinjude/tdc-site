import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Lazyload from 'react-lazyload'
import { Helmet } from 'react-helmet'
import { IoLogoTwitter, IoIosTime, IoIosCalendar } from 'react-icons/io'
import { FiBookOpen } from 'react-icons/fi'
import './styles.css'

export default function Template({ data }) {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.workshopsJson.title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {console.log(data.workshopsJson)}
      <div className="container">
        <div className="cover">
          <div className="label">THEME</div>
          {data.workshopsJson.title}
          <div className="date">
            {data.workshopsJson.startDate}th - {data.workshopsJson.endDate}st
            DEC 2018
          </div>
          <a
            role="button"
            class="cover__call-to-action"
            href="http://bit.ly/tdc-meetup"
          >
            REGISTER
          </a>
        </div>
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
                <span class="handle">
                  <a href={`http://www.twitter.com/${speaker.twitterHandle}`}>
                    {speaker.twitterHandle}
                  </a>
                </span>
                <p class="bio">{speaker.bio}</p>
                <p class="topic">
                  <FiBookOpen color="gold" />
                  &nbsp;
                  {speaker.topic}
                </p>
                <p class="date">
                  <span class="color-gold">
                    <IoIosCalendar color="gold" />
                    &nbsp;
                  </span>
                  {speaker.date}
                </p>
                <p class="time">
                  <span class="color-gold">
                    <IoIosTime color="gold" />
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
      startDate
      endDate
      title
      path
      speakers {
        name
        pic
        bio
        twitterHandle
        date
        topic
        startTime
        endTime
      }
    }
  }
`
