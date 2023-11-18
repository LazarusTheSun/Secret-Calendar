import React from 'react';

import present1 from '../images/presents/present-1.png';

// #TODO после получения данных по подаркам добавить новые объекты и поменять ID у первого
// потом убрать
const currentDay = (new Date()).getDate()

export const PRESENTS = [
    {
        id: currentDay,
        title: <>Ricers 1.1 <br /> со скидкой 15%</>,
        promocode: "wr24935",
        imgSrc: present1,
    }
]