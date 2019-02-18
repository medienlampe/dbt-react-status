import React, { useState, useEffect } from "react";

export default function Clock(props) {
  const [timezone, setTimezone] = useState({
    timezone: "MEZ"
  });

  function updateTimezone() {
    var currentDate = new Date(),
      GMTOffset = currentDate.getTimezoneOffset % 60,
      timeZoneString = "GMT";

    if ((GMTOffset = 1)) {
      timeZoneString = "MEZ";
    } else if ((GMTOffset = 2)) {
      timeZoneString = "MESZ";
    } else if (GMTOffset > 0) {
      timeZoneString = "GMT+" + GMTOffset;
    } else if (GMTOffset < 0) {
      timeZoneString = "GMT" + GMTOffset;
    }

    setTimezone({ timezone: timeZoneString });
  }

  useEffect(() => {
    let timer = setTimeout(() => updateTimezone(), 1000);

    return () => {
      clearTimeout(timer);
    };
  });

  const [clock, setClock] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00"
  });

  function updateClock() {
    var currentDate = new Date(),
      h = currentDate.getHours(),
      m = currentDate.getMinutes(),
      s = currentDate.getSeconds();

    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    setClock({ hours: h, minutes: m, seconds: s });
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }

  useEffect(() => {
    let timer = setTimeout(() => updateClock(), 1000);

    // this will clear Timeout when component unmont like in willComponentUnmount
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <div id="time">
      <span id="clock">
        <span id="clock-hours">{clock.hours}</span>
        <span className="clock-dots">:</span>
        <span id="clock-minutes">{clock.minutes}</span>
      </span>{" "}
      Uhr
      <span id="timezone">, {timezone.timezone} </span>
    </div>
  );
}
