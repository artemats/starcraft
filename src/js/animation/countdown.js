import Odometer from 'odometer';

const counter = document.querySelector('.much-counter-value');

if(counter) {

    const od = new Odometer({
        el: counter,
        value: 65.123,
        format: '(,ddd)',
    });

    const updateCounter = () => {
        od.update();
        counter.innerHTML = getRandomInt(55000, 70000);
    };

    const counterInterval = setInterval(() => updateCounter(), 3000);

    const getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);

}