import { format, parseISO } from "date-fns"

const formatDate = (date: string): string => {
    const isoDate = parseISO(date)
    const formattedDate = format(isoDate, "MMMM d, y")
    return formattedDate
}

function truncate(str: string, len: number) {
    return (str.length > len) ? str.substring(0, len - 1) + '…' : str;
}

export { formatDate, truncate }
