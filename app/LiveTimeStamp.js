import React from 'react'
import Timeago from 'react-timeago'

export default function LiveTimeStamp({time}) {
  return (
    <Timeago date={time}/>
  )
}
