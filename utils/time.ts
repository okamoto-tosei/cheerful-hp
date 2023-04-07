import dayjs from 'dayjs'

const YMD_FORMAT = (date: dayjs.Dayjs) => date.format('YYYY年MM月DD日')
export const timeFormat = {
  YYYY_MM_DD: YMD_FORMAT
}
