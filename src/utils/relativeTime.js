var time = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

function getRelativeTime(time1, time2) {
  console.log(time1);
  console.log(time2);
  return time.format(time2 - time1, "day");
}

export { getRelativeTime };
