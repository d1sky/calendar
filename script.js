const log = text => console.log(text)

const DAY_OF_WEEK = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const MONTH = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь']


const getDayOfWeek = date => {
    const dayOfWeek = new Date(date).getDay();

    return isNaN(dayOfWeek) ? null :
        DAY_OF_WEEK[dayOfWeek];
}

const drawDays = (firstDay, lastDay) => {
    let row
    let day = 1
    let firstWeekDay = true

    for (let weekOfMonth = 1; weekOfMonth < 7; weekOfMonth++) {
        row = ''
        for (let dayOfWeek = 1; dayOfWeek < 8; dayOfWeek++) {
            if ((firstWeekDay && firstDay.getDay() == dayOfWeek) || !firstWeekDay) {
                firstWeekDay = false
                if (day <= lastDay.getDate()) {
                    row += ' ' + (day < 10 ? ' ' + day : day)
                    day++
                }
            } else {
                row += day < 10 ? '   ' : '  '
            }

        }
        log(row)
    }
}

log('calendar');

let today = new Date();
log(today); // показывает текущие дату и время

log(getDayOfWeek(today))

var firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
var lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);



log(firstDay.getDay())
log(lastDay.getDate())

drawDays(firstDay, lastDay)