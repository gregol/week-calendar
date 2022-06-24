import React from 'react'
import { Days } from './Days'
import { useMonthsWeek } from './useMonthsWeek';
import { Moment } from "moment";
export const Calendar = () => {
    const { previousWeek,  getNextWeek, weekDayArrayState, CurrenMonth } = useMonthsWeek();

    
  return (     
    <div className="flex flex-col flex-grow">
        <div className="flex items-center mt-4">
            <div className="flex ml-6">
                <button onClick={previousWeek}>
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                </button>
                <button onClick={getNextWeek}> 
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                </button>
            </div>
            <h2 className="ml-2 text-xl font-bold leading-none">{CurrenMonth}</h2>
        </div>
        <div className="grid grid-cols-7 mt-4">
            <div className="pl-1 text-sm">Sun</div>
            <div className="pl-1 text-sm">Mon</div>
            <div className="pl-1 text-sm">Tue</div>
            <div className="pl-1 text-sm">Wed</div>
            <div className="pl-1 text-sm">Thu</div>
            <div className="pl-1 text-sm">Fri</div>
            <div className="pl-1 text-sm">Sat</div>
        </div>
        <div className="grid flex-grow w-full h-100 grid-cols-7 grid-rows-2 gap-px pt-px mt-1 bg-gray-200">
            {
                weekDayArrayState.map((day: Date, index) => <Days key={index} days={day} />)
            }
        </div>
    </div>
  )
}




