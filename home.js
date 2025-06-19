document.getElementById('default').click()

function swap(ele, e) {
    var i;
    var x = document.getElementsByClassName('inner-content')
    var y = document.getElementsByClassName('button1')

    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('active')
    }
    for (i = 0; i < y.length; i++) {
        y[i].classList.remove('active')
    }

    setTimeout(function() {
        document.getElementById(ele).classList.add('active')
    }, 300)

    e.classList.add('active')
}