/* Clock */
const hour = document.getElementById("clock-hour")
const minutes = document.getElementById("clock-minutes")

const clock = () => {
  let date = new Date()
  let options = { timeZone: "America/Sao_Paulo", hour12: false }
  let formatter = new Intl.DateTimeFormat("pt-BR", options)

  let formattedTime = formatter.format(date)
  let [hh, mm] = formattedTime.split(":").map(Number)

  hh = (hh / 12) * 360
  mm = (mm / 60) * 360

  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
  minutes.style.transform = `rotateZ(${mm}deg)`
}

setInterval(clock, 1000)


/* Tempo e a Data */
const dateDayWeek = document.getElementById("date-day-week"),
  dateMonth = document.getElementById("date-month"),
  dateDay = document.getElementById("date-day"),
  dateYear = document.getElementById("date-year"),
  dateHour = document.getElementById("text-hour"),
  dateMinutes = document.getElementById("text-minutes")

const clockText = () => {
  let date = new Date()
  date.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" })

  let dayWeek = date.getDay(),
    month = date.getMonth(),
    day = date.getDate(),
    year = date.getFullYear(),
    hh = date.getHours(),
    mm = date.getMinutes()

  let daysWeek = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ]
  let months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ]

  dateDayWeek.innerHTML = `${daysWeek[dayWeek]}`
  dateMonth.innerHTML = `${months[month]}`
  dateDay.innerHTML = `${day},`
  dateYear.innerHTML = year

  if (hh < 10) {
    hh = `0${hh}`
  }
  dateHour.innerHTML = `${hh}:`

  if (mm < 10) {
    mm = `0${mm}`
  }
  dateMinutes.innerHTML = mm
}

setInterval(clockText, 1000)
