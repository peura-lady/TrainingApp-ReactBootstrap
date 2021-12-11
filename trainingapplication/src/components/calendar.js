import React from 'react';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

function Calendar() {

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          {
            title: 'Spinning | John Johson',
            start: '2021-12-20T10:30:00',
            end: '2021-12-20T11:30:00',
          },
          {
            title: 'Gym Training | John Johson',
            start: '2021-12-21T12:32:00',
            end: '2021-12-21T13:32:00',
          },
          {
            title: 'Gym Training | John Johson',
            start: '2021-12-21T12:32:00',
            end: '2021-12-21T13:02:00',
          },
          {
            title: 'Gym Training | Mary Philips',
            start: '2021-12-22T12:45:00',
            end: '2021-12-22T14:15:00',
          },
          {
            title: 'Fitness | Mary Philips',
            start: '2021-12-20T12:15:00',
            end: '2021-12-20T13:15:00',
          },
          {
            title: 'Spinning | Mary Philips',
            start: '2021-12-23T12:30:00',
            end: '2021-12-23T13:30:00',
          },
          {
            title: 'Gym Training | Dan Davidson',
            start: '2021-12-24T19:00:00',
            end: '2021-12-24T20:15:00',
          },
          {
            title: 'Zumba | Dan Davidsson',
            start: '2021-12-25T14:45:00',
            end: '2021-12-25T15:45:00',
          },
          {
            title: 'Zumba | Dan Davidson',
            start: '2021-12-20T14:45:00',
            end: '2021-12-20T15:45:00',
          },
          {
            title: 'Jogging | Sally Gareth',
            start: '2021-12-28T12:15:00',
            end: '2021-12-28T13:15:00',
          },
          {
            title: 'Gym Training | Sally Gareth',
            start: '2021-12-29T17:00:00',
            end: '2021-12-29T18:00:00',
          },
        ]}
      />
    </div>
  )
}
export default Calendar;