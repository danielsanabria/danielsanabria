//Play an animation back on second click

let iconMenu = document.querySelector('.bodymovinanim');

    let animationMenu = bodymovin.loadAnimation({
            container: iconMenu,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: "https://assets1.lottiefiles.com/packages/lf20_BUR6BY.json"
    });

    var directionMenu = 1;
      iconMenu.addEventListener('click', (e) => {
      animationMenu.setDirection(directionMenu);
      animationMenu.play();
      directionMenu = -directionMenu;
    });