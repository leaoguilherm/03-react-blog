import { format } from "date-fns"

export const FormatDate = (dateString) => {
    const formatDate = format(new Date(dateString), 'dd/MM/yyyy - HH:mm',)

    return formatDate
}