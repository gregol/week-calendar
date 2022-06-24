import React from 'react'
import moment, { Moment } from 'moment'
import classNames from 'classnames';

interface DaysProps {
    days: Date
}
export const Days = ({ days } : DaysProps) => {
    const month = moment(days).format("MMMM");
    const day = moment(days).format("DD");
    const currenDate = moment().format("YYYY-MM-DD");

  return (
    <div className={classNames('relative flex flex-col bg-white group hover:bg-blue-50 hover:cursor-pointer', {
            'bg-blue-300 text-white': (moment(days).format("YYYY-MM-DD") == currenDate),
            'hover:text-black': (moment(days).format("YYYY-MM-DD") == currenDate),
          })}>
        <span className="mx-2 my-1 text-xs font-bold">{day} {month}</span>
        <div className="flex flex-col px-1 py-1 overflow-auto h-20">
        </div>
    </div>
  )
}
