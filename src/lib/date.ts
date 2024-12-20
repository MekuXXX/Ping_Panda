import dayjs from "dayjs"
import isToday from "dayjs/plugin/isToday"
import isSame from "dayjs/plugin/isSameOrAfter"

dayjs.extend(isToday)
dayjs.extend(isSame)

export function formatDate(timestamp: string | number | Date): string {
  const date = dayjs(timestamp)
  const now = dayjs()

  if (date.isToday()) {
    // If the date is today
    return `Today at ${date.format("h:mm A")}`
  } else if (date.isSame(now, "week")) {
    // If the date is within this week
    return `${date.format("dddd")} at ${date.format("h:mm A")}`
  } else {
    // If the date is older than this week
    return date.format("MMM D, YYYY [at] h:mm A")
  }
}
