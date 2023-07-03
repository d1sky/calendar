const log = text => console.log(text)

log('calendar');

let today = new Date();
log(today); // показывает текущие дату и время

let month = today.getMonth();
let year = today.getFullYear();

const DAY_OF_WEEK = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const MONTH = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];


// по указанной дате возвращает день недели 
const getDayOfWeek = date => {
    const dayOfWeek = new Date(date).getDay();

    return isNaN(dayOfWeek) ? null :
        DAY_OF_WEEK[dayOfWeek];
}

const handleSelect = () => {
    month = document.getElementById("month-select").value;
    log(month)
    drawDays(new Date(year, month - 1, 2))
}

const elementDaysOfMonth = document.querySelector('.days-of-month')
log(elementDaysOfMonth)

document.getElementById("month-select").selectedIndex = today.getMonth();

// document.addEventListener('load', () => {
//     console.log('load')
//     document.querySelector('.days-of-month').selectedIndex = today.getMonth();
// });

const drawDays = (date) => {
    log(date)

    let day = 1
    let firstWeekDay = true
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let firstDayOfWeek = firstDay.getDay() == 0 ? 7 : firstDay.getDay();

    log(firstDay)
    log(lastDay.getDate())
    elementDaysOfMonth.innerHTML = ''

    for (let weekOfMonth = 1; weekOfMonth < 7; weekOfMonth++) {
        const elementWeek = document.createElement("div");
        elementWeek.className = 'week-of-month';

        for (let dayOfWeek = 1; dayOfWeek < 8; dayOfWeek++) {
            const elementDayOfWeek = document.createElement("div");
            elementDayOfWeek.className = 'day-of-month';

            if ((firstWeekDay && firstDayOfWeek == dayOfWeek) || !firstWeekDay) {
                firstWeekDay = false

                if (day <= lastDay.getDate()) {
                    log('tut')
                    elementDayOfWeek.innerHTML = day;

                    // log('year ' + date.getFullYear() + ' ' + today.getFullYear())
                    // log('month ' + date.getMonth() + ' ' + today.getMonth())
                    // log('day ' + day + ' ' + today.getDate())

                    if (day == today.getDate() && date.getMonth() == today.getMonth() && date.getFullYear() == today.getFullYear()) {

                        elementDayOfWeek.classList.add('current-day')
                    }

                    day++
                }
            }
            elementWeek.append(elementDayOfWeek)
        }
        elementDaysOfMonth.append(elementWeek)
    }
}

// log(getDayOfWeek(today))

var firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
var lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);

// log(firstDay.getDay())
// log(lastDay.getDate())

drawDays(today)