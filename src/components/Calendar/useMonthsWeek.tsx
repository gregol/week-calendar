import { useState, useEffect } from "react";
import moment, { Moment } from "moment";



export const useMonthsWeek = () =>{
    const [currentWeek, setCurrentWeek] = useState<number>(0)
    const [weekDayArrayState, setWeekDayArrayState] = useState<Date[]>([])
    const [CurrenMonth, setCurrenMonth] = useState<string>('')


    useEffect(() => {
        const currenWeekArray = getWeekDays(currentWeek)
        setCurrenMonth(moment(currenWeekArray[0]).format("MMMM YYYY"))
        setWeekDayArrayState(currenWeekArray)
    },[])
    let today = moment(moment.now()).format("YYYY-MM-DD");
    let tomorrow = moment(moment.now() + 1000 * 60 * 60 * 24).format("YYYY-MM-DD");

    const calculateNextDay = (days: number) => {
        let nextDay = moment(today).add(days, 'days').format("YYYY-MM-DD");
        return nextDay;
    }

    const calculateNextWeek = (weeks: number) => {
        const startNWeek = moment().add(weeks, 'weeks').startOf('week')
        const endNWeek = moment().add(weeks, 'weeks').endOf('week')
        return { startNWeek, endNWeek }
    }

    const getWeekDays = (weeks : number) => {
        let days = [];
        const currentWeek  = calculateNextWeek(weeks) 
        let endOfWeek = currentWeek.endNWeek;
        let day = currentWeek.startNWeek;

        while (day <= endOfWeek) {
            days.push(day.toDate());
            day = day.clone().add(1, 'd');
        }
        setWeekDayArrayState(days)
        return days;
    }

    const getNextWeek = () => {
        const nextWeek = (currentWeek + 1)
        setCurrentWeek(nextWeekCount => nextWeekCount + 1);
        const nextWeekA = calculateNextWeek(nextWeek)
        const currenWeekArray = getWeekDays(nextWeek)
        setCurrenMonth(moment(currenWeekArray[0]).format("MMMM YYYY"))
        setWeekDayArrayState(currenWeekArray)
        return nextWeekA;
    } 

    const previousWeek = () => { 
        const prev = (currentWeek - 1)
        setCurrentWeek(prevCount => prevCount - 1);
        const prevWeek = calculateNextWeek(prev)
        const currenWeekArray = getWeekDays(prev)
        setCurrenMonth(moment(currenWeekArray[0]).format("MMMM YYYY"))
        setWeekDayArrayState(currenWeekArray)
        return prevWeek;
    }


    return {
        today,
        tomorrow,
        calculateNextDay,
        calculateNextWeek,
        getWeekDays,
        previousWeek,
        weekDayArrayState,
        getNextWeek,
        CurrenMonth
    }
}