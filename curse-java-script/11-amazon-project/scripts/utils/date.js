import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export function dateAdd(days) {
    const today = dayjs();
    const deliveryDate = today.add(days, 'days');

    return deliveryDate.format('dddd, MMMM, D');
}

export default dateAdd;
