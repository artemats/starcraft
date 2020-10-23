export const highwayNav = (router) => {

    router.on('NAVIGATE_IN', ({ to, location }) => {

        const links = document.querySelectorAll('nav a');

        for (let i = 0; i < links.length; i++) {

            const link = links[i];

            link.classList.remove('active');

            link.href === location.href ? link.classList.add('active') : null;
        }

    });

};