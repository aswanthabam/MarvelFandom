window.onscroll = () => {
    if(window.scrollY > 300) {
        document.getElementsByClassName("topbar")[0].style.height = '60px';
        document.getElementsByClassName("topbar")[0].style.background = 'rgb(116, 8, 3)';
    }else {
        document.getElementsByClassName("topbar")[0].style.height = '100px';
        document.getElementsByClassName("topbar")[0].style.background = 'none';
    }
}