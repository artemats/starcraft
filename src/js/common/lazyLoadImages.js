export const lazyLoadImages = () => {

    const element = document.querySelector('.lazy-load');

    let src = element.getAttribute('data-src');

    element.setAttribute('src', src);
    element.removeAttribute('data-src');

};