                      /* Clock */
const hour = document.getElementById('clock-hour'),
      minutes = document.getElementById('clock-minutes')

const clock = () => {
   let date = new Date()

   let hh = date.getHours() / 12 * 360,
       mm = date.getMinutes() / 60 * 360

    hour.style.transform = 'rotateZ(${hh + mm / 12}deg)'
    minutes.style.transform = 'rotateZ(${mm}deg)'
}
setInterval(clock, 1000)

                  /* Tempo e a Data */     
const dateDayWeek = document.getElementById('date-day-week'),
      dateMonth = document.getElementById('date-month'),
      dateDay = Document.getElementById('date-day'),
      dateYear = Document.getElementById('date-year'),
      dateHour = Document.getElementById('text-hour'),
      dateMinutes = Document.getElementById('text-minutes'),
      dateAmPM = Document.getElementById('text-ampm')