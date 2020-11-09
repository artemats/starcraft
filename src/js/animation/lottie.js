import lottie from "lottie-web";

export const initLottie = () => {
    const linksBg = document.querySelectorAll('.follow-link-bg');
    for(let i = 0; i < linksBg.length; i++) {
        lottie.loadAnimation({
            container: linksBg[i],
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'lottie/lightning/data.json',
            rendererSettings: {
                progressiveLoad: true
            }
        });
    }
};