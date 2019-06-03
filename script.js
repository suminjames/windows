    var maximize = document.querySelector('.fa-window-maximize');
    maximize.addEventListener('click', function() {
        var target = this.parentNode;
        var main = target.parentNode;
        var style = getComputedStyle(main);


        main.style.width = 100 + '%';
        main.style.height = 100 + '%';
        main.style.position = "absolute";
        main.style.top = "0";
        main.style.right = "0";
        main.style.bottom = "0";
        main.style.left = "0";
        main.style.borderRadius = "none";
        console.log(main.style);


        document.getElementById('minimize').style.display = "block";
        document.getElementById('maximize').style.display = "none";
    })

    var minimize = document.querySelector('.fa-compress');
    minimize.addEventListener('click', function() {
        var target = this.parentNode;
        var main = target.parentNode;
        var style = getComputedStyle(main);
        main.style.width = "740px";
        main.style.height = "270px";
        main.style.position = "absolute";
        main.style.top = "62px";
        main.style.right = "0";
        main.style.bottom = "0";
        main.style.left = "20px";

        document.getElementById('minimize').style.display = "none";
        document.getElementById('maximize').style.display = "block";
    })

    var minuskey = document.querySelector('.fa-window-minimize');
    minuskey.addEventListener('click', function() {
        var target = this.parentNode;
        var main = target.parentNode;
        var style = getComputedStyle(main);
        main.style.width = "330px";
        main.style.height = "24px";
        main.style.position = "absolute";
        main.style.top = "599px";
        document.getElementById('minimize').style.display = "none";
        document.getElementById('maximize').style.display = "block";

    })

    var close = document.querySelector('.fa-times-circle');
    close.addEventListener('click', function() {
        var target = this.parentNode;
        var main = target.parentNode;
        console.log(main);
        main.style.display = "none";
    })

    dragElement(document.getElementById("drag"));

    function dragElement(elem) {
        var pos1 = 0,
            pos2 = 0,
            pos3 = 0,
            pos4 = 0;
        if (document.getElementById(elem.id + "Window")) {
            document.getElementById(elem.id + "Window").onmousedown = dragMouseDown;
        } else {
            elem.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            // console.log(e);
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            // console.log(pos3);
            // console.log(pos4);
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            // console.log(e);
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;

            console.log(elem.offsetTop)
            elem.style.top = (elem.offsetTop - pos2) + "px";
            elem.style.left = (elem.offsetLeft - pos1) + "px";
            // elem.style.inset = "0px";
            // console.log(elem.style.top);

        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }