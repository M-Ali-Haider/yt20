import { format } from 'date-fns'

export const getLast7Days = () => {
    const dates = []
    for (let i = 0; i < 7; i++) {
        const date = new Date()
        date.setDate(date.getDate() - i)
        const day = format(date, 'EE').slice(0, 2)
        const formattedDay = day === 'Sa' ? 'Sat' : day
        dates.unshift({
            day: formattedDay,
            dateNumber: format(date, 'd'),
            value: format(date, 'yyyy-MM-dd'),
        })
    }
    return dates
}
