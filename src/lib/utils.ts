const SECOND = 1e3;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;

export function displayDateTime(date: Date | string, now: Date | number = Date.now()) {
  if(typeof date == 'string') date = new Date(date);
  let nowDate;
  if(typeof now == 'object') {
    nowDate = now;
    now = now.getTime();
  }

  const distance = now - date.getTime();

  if(distance < 30 * SECOND) {
    return "just now";
  }

  if(distance < 90 * SECOND) {
    return "a minute ago";
  }

  if(distance < HOUR) {
    return Math.round(distance / MINUTE) + " minutes ago";
  }

  if(distance < 24 * HOUR) {
    return Math.round(distance / HOUR) + " hours ago";
  }

  if(!nowDate) nowDate = new Date(now);

  if(distance < 48 * HOUR && date.getDate() == nowDate.getDate()-1) {
    return "yesterday";
  }


  return date.toLocaleString();
}