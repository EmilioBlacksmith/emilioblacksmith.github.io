function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
}

window.executeIntersection = function()
{
    if(!isMobile()){
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle('show', entry.isIntersecting);
            })
        }, {
            threshold: .9,
        });
    
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
    }else{
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => {
            el.classList.remove('hidden');
        });
    }
}