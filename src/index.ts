import { format, parseISO } from "date-fns"

const formatDate = (date: string): string => {
    const isoDate = parseISO(date)
    const formattedDate = format(isoDate, "MMMM d, y")
    return formattedDate
}

function truncate(str: string, len: number) {
    for (let i = len - 2; i >= 0; i--) {
        str = str.substring(0, i)
    }

    return str.trim()
}

export { formatDate, truncate }