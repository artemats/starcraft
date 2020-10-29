import { TweenLite, Power4 } from 'gsap';

export const tabsSwitch = () => {
    const tabsBtn = document.querySelectorAll('.tab-btn');
    for(let i = 0; i < tabsBtn.length; i++) {
        tabsBtn[i].addEventListener('click', function () {
            let tabId = this.getAttribute('data-tab-id');
            switchContent(tabId);
        });
    }
    /*
    Set first active tab
     */
    document.querySelector('.tab-btn').classList.add('is-active');
};

const switchContent = (id) => {

    const tabContents = document.querySelectorAll('.tab-content');
    const newTabContent = document.querySelector(`[data-tab-content-id="${id}"]`);

    for(let i = 0; i < tabContents.length; i++) {
        TweenLite.to(tabContents[i], 1, {
            opacity: 0,
            x: 20,
            ease: Power4.easeOut,
            onComplete: () => {
                tabContents[i].style.display = 'none';
                newTabContent.style.display = 'block';
                TweenLite.fromTo(newTabContent,
                    {
                        opacity: 0,
                        x: -20
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1.5,
                        ease: Power4.easeOut,
                    });
            },
        });
    }
};