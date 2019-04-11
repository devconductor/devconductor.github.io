const getDifference = (dateStarted) => {

    let dateEvent = new Date(dateStarted)
    const today = new Date()

    let delta = Math.abs(dateEvent - today) / 1000;

    const days = Math.floor(delta / 86400);
    delta -= days * 86400;

    const hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    const minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    const seconds = parseInt(delta % 60);


    return { days: days, hours: hours, minutes: minutes, seconds: seconds }
}

const todayIsLessThanDateCompare = (dateToCompare) => {

    const date = new Date(dateToCompare)
    const today = new Date()

    return today < date
}

const convertDate = (inputFormat) => {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
}

export const timeUtils = {
    getDifference,
    todayIsLessThanDateCompare,
    convertDate
}