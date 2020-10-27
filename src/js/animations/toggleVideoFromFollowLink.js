

export const toggleVideoFromFollowLink = () => {

    const videoLinks = document.querySelectorAll('.circle-box-video');

    for(let i = 0; i < videoLinks.length; i++) {

        videoLinks[i].addEventListener('click', function () {

            console.log('open video modal');

        });

    }

};