import { parseISO, format } from 'date-fns'
import { da } from 'date-fns/locale';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}