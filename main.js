const dayjs = require('dayjs');

const d = new Date();

const timeElement = document.querySelector('#time');
const tz = dayjs.tz


const formattedTimezone = dayjs().format('Z');
const formattedTime = dayjs().format('HH:mm:ss');
const formattedDate = dayjs().format('DD-MM-YYYY');


console.log(tz);
document.querySelector('#timezone').innerHTML = `${formattedTimezone}`;
document.querySelector('#time').innerHTML = `${formattedTime}`;
document.querySelector('#date').innerHTML = `${formattedDate}`;

