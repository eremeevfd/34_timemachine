var TIMEOUT_IN_SECS = 5
var TEMPLATE = '<h1 style="color: #6da3bd"><span id="timer-minutes">00</span>:<span id="timer-seconds">00</span></h1>'
var ALERT_INTERVAL = 1000 * 30 // 1000 ms * 30 = 30 sec
var INSPIRATIONAL_PHRASES = [
    {phrase: "Что разум человека может постигнуть и во что он может поверить, того он способен достичь. ",
        signature: "Наполеон Хилл, журналист и писатель "},
    {phrase: "Стремитесь не к успеху, а к ценностям, которые он дает.",
        signature: "Альберт Эйнштейн​"},
    {phrase: "Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.",
        signature: "Флоренс Найтингейл"},
    {phrase: "За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр." +
    " 26 раз мне доверяли сделать финальный победный бросок, и я промахивался." +
    " Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха.",
        signature: "Майкл Джордан"},
    {phrase: "Сложнее всего начать действовать, все остальное зависит только от упорства.",
        signature: "Амелия Эрхарт"},
    {phrase: "Надо любить жизнь больше, чем смысл жизни.",
        signature: "Федор Достоевский"},
    {phrase: "Жизнь - это то, что с тобой происходит, пока ты строишь планы.",
        signature: "Джон Леннон"},
    {phrase: "Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно.",
        signature: "Альберт Эйнштейн"},
    {phrase: "Через 20 лет вы будете больше разочарованы теми вещами, которые вы не делали, чем теми, которые вы сделали." +
    " Так отчальте от тихой пристани. " +
    "Почувствуйте попутный ветер в вашем парусе. Двигайтесь вперед, действуйте, открывайте!",
        signature: "Марк Твен"}
    ]

// adds HTML tag to current page
var timerContainer = document.createElement('div')
timerContainer.setAttribute("style", "height: 23px;")
timerContainer.style.position = "fixed"
timerContainer.style.top = "18px"
timerContainer.style.zIndex = "1"
timerContainer.style.padding = "20px 10px"
timerContainer.style.margin = "10px"
timerContainer.style.color = "red"
var bodyTag = document.body
bodyTag.insertBefore(timerContainer, bodyTag.firstChild)
timerContainer.innerHTML = TEMPLATE

function alerter() {
        clearInterval(timerId)
        var inspiration = INSPIRATIONAL_PHRASES[Math.floor(Math.random()*INSPIRATIONAL_PHRASES.length)]
        window.alert(inspiration.phrase + "\n\n" + inspiration.signature)
        setTimeout(alerter, ALERT_INTERVAL)
}

function getTimestampInSecs(){
  var timestampInMilliseconds = new Date().getTime()
  return Math.round(timestampInMilliseconds/1000)
}

function padZero(number){
  return ("00" + String(number)).slice(-2)
}

var timestampOnStart = getTimestampInSecs()

function displayTimer(){
  var currentTimestamp = getTimestampInSecs()
  var secsGone = currentTimestamp - timestampOnStart
  var secsLeft = Math.max(TIMEOUT_IN_SECS - secsGone, 0)

  var minutes = Math.floor(secsLeft / 60)
  var seconds = secsLeft - minutes * 60

  document.getElementById('timer-minutes').innerHTML = padZero(minutes)
  document.getElementById('timer-seconds').innerHTML = padZero(seconds)

  var minutes_left = parseInt(document.getElementById('timer-minutes').innerHTML)
  var seconds_left = parseInt(document.getElementById('timer-seconds').innerHTML)

  if ((minutes_left===00) && (seconds_left===00)) {
        alerter()
    }
}
var timerId = setInterval(displayTimer, 300)
