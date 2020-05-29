(() => {
    "use strict";
    document.addEventListener("DOMContentLoaded", () => {
        //GENERAL
        let header = document.createElement("header");
        let titulo = document.createElement("h1");
        let contenedor = document.createElement("div");
        let seccion = document.createElement("section");

        //Audio
        let sources = [
            {
                src: "media/metropolis.ogg",
                type: "audio/ogg",
            },
            {
                src: "media/metropolis.mp3",
                type: "audio/mpeg",
            }

        ]
        let audio;
        let source;
        creaAudio();
        function creaAudio() {
            audio = document.createElement("audio");
            for (let i = 0; i < sources.length; i++) {
                source = document.createElement("source");
                source.src = sources[i].src;
                source.type = sources[i].type;
                audio.appendChild(source);
                audio.setAttribute("loop", "true");
            }
            document.body.appendChild(audio);
        }

        //Se activa el audio al hacer click en cualquier parte de la página

        window.addEventListener("click", reproducir, false);
        function reproducir() {
            audio.play();
        };
        //Más funcionalidad de audio más adelante
        //Fin de audio
        document.body.appendChild(header);
        let textoTitulo = document.createTextNode("Color Out of Space");

        titulo.appendChild(textoTitulo);
        header.appendChild(titulo);

        seccion.appendChild(contenedor);
        document.body.appendChild(seccion);

        /********************    Estilos Header   *******************************/

        titulo.style.textAlign = "center";
        titulo.style.margin = "1vmin";
        titulo.style.letterSpacing = "2vmin";

        /********************    SECCIÓN OPCIONES    ***************************/

        let divOpciones = document.createElement("div");
        let form1 = document.createElement("form");

        let label1 = document.createElement("label");
        let label2 = document.createElement("label");
        let label3 = document.createElement("label");
        let label4 = document.createElement("label");
        let label5 = document.createElement("label");
        let label6 = document.createElement("label");

        let textoLabel1 = document.createTextNode("Dificultad");
        let textoLabel2 = document.createTextNode("Avatar");
        let textoLabel3 = document.createTextNode("Sonido");
        let textoLabel4 = document.createTextNode("Activado");
        let textoLabel5 = document.createTextNode("Puntuación");
        let textoLabel6 = document.createTextNode("Mejor puntuación");
        let textoBoton1 = document.createTextNode("Iniciar");
        /* let textoBoton2 = document.createTextNode("Pausa"); */
        let textoBoton2 = document.createTextNode("Reiniciar");

        label1.appendChild(textoLabel1);
        label2.appendChild(textoLabel2);
        label3.appendChild(textoLabel3);
        label4.appendChild(textoLabel4);
        label5.appendChild(textoLabel5);
        label6.appendChild(textoLabel6);
        label3.style.display = "block";
        label4.style.fontSize = "0.8em";

        let soundContainer = document.createElement("div");
        let sound = document.createElement("input");
        sound.setAttribute("type", "checkbox");
        sound.setAttribute("checked", "true");

        sound.addEventListener("click", function () {
            if (sound.checked) {
                creaAudio();
                audio.play();
                document.getElementsByClassName("optionContainer")[2].childNodes[2].textContent = "Activado";
            } else {
                document.body.removeChild(audio);
                window.removeEventListener("click", reproducir); //Se desactiva el listener para reproducir audio al primer click en cualquier lugar
                document.getElementsByClassName("optionContainer")[2].childNodes[2].textContent = "Desactivado";
            }
        });
        soundContainer.appendChild(label3);
        soundContainer.appendChild(sound);
        soundContainer.appendChild(label4)
        let selectAvatarContainer = document.createElement("div");
        let selectAvatar = document.createElement("div");
        let imgAvatar1 = document.createElement("img");
        let imgAvatar2 = document.createElement("img");
        let imgAvatar3 = document.createElement("img");
        let imgAvatar4 = document.createElement("img");
        imgAvatar1.setAttribute("src", "img/characters/customer_1.png");
        imgAvatar2.setAttribute("src", "img/characters/customer_2.png");
        imgAvatar3.setAttribute("src", "img/characters/customer_3.png");
        imgAvatar4.setAttribute("src", "img/characters/customer_4.png");
        selectAvatar.appendChild(imgAvatar1);
        selectAvatar.appendChild(imgAvatar2);
        selectAvatar.appendChild(imgAvatar3);
        selectAvatar.appendChild(imgAvatar4);
        selectAvatarContainer.appendChild(label2);
        selectAvatarContainer.appendChild(selectAvatar);
        selectAvatar.style.display = "block";

        //Estilos-Listeners de avatares
        imgAvatar1.style.boxShadow = "0px 0px 4px 2px lightgreen";
        imgAvatar1.style.borderRadius = "10px";
        imgAvatar1.style.padding = "0px";
        imgAvatar1.style.backgroundColor = "rgba(224, 255, 255, 0.7)";

        selectAvatar.childNodes.forEach(function (e) {
            e.style.marginRight = "2px";
        });

        //Función para cambiar estilo según avatar seleccionado
        function estiloAvatar(elemento) {
            selectAvatar.childNodes.forEach(function (e) {
                e.style.boxShadow = "none";
                e.style.backgroundColor = "#FFFCE4";
            });
            elemento.style.boxShadow = "0px 0px 4px 2px lightgreen";
            elemento.style.borderRadius = "10px";
            elemento.style.backgroundColor = "rgba(224, 255, 255, 0.7)";
        }

        imgAvatar1.addEventListener("mouseover", function () {
            imgAvatar1.style.cursor = "pointer";
            imgAvatar1.setAttribute("title", "Avatar1");
        })
        imgAvatar2.addEventListener("mouseover", function () {
            imgAvatar2.style.cursor = "pointer";
            imgAvatar2.setAttribute("title", "Avatar2");
        })
        imgAvatar3.addEventListener("mouseover", function () {
            imgAvatar3.style.cursor = "pointer";
            imgAvatar3.setAttribute("title", "Avatar3");
        })
        imgAvatar4.addEventListener("mouseover", function () {
            imgAvatar4.style.cursor = "pointer";
            imgAvatar4.setAttribute("title", "Avatar4");
        })
        //Variable que almacena la ruta para el avatar
        let imagenAvatar = "url(img/characters/customer_1.png) no-repeat center";

        //Asignando personaje
        imgAvatar1.addEventListener("click",selectAvatar1);
        function selectAvatar1() {
            imagenAvatar = "url(img/characters/customer_1.png) no-repeat center";
            estiloAvatar(imgAvatar);
        }
        imgAvatar2.addEventListener("click", selectAvatar2);
        function selectAvatar2() {
            imagenAvatar = "url(img/characters/customer_2.png) no-repeat center";
            estiloAvatar(imgAvatar2);
        }
        imgAvatar3.addEventListener("click", selectAvatar3);
        function selectAvatar3() {
            imagenAvatar = "url(img/characters/customer_3.png) no-repeat center";
            estiloAvatar(imgAvatar3);
        }
        imgAvatar4.addEventListener("click", selectAvatar4);
        function selectAvatar4() {
            imagenAvatar = "url(img/characters/customer_4.png) no-repeat center";
            estiloAvatar(imgAvatar4);
        }

        let difContainer = document.createElement("div");
        let dif = document.createElement("select");
        difContainer.appendChild(label1);
        difContainer.appendChild(dif);
        let buttonContainer = document.createElement("div");
        let btnStartStop = document.createElement("button");
        /* let btnPause = document.createElement("button"); */
        let btnRestart = document.createElement("button");

        let divScore = document.createElement("div");
        let score = document.createElement("input");
        let lastScore = document.createElement("input");
        let hr = document.createElement("hr");

        btnStartStop.style.fontFamily = "'Audiowide', cursive";
        btnRestart.style.fontFamily = "'Audiowide', cursive";
        //Añadiendo Options a campo select
        let facil = document.createElement("option");
        let normal = facil.cloneNode(true);
        let dificil = facil.cloneNode(true);

        let textoFacil = document.createTextNode("Fácil");
        let textoNormal = document.createTextNode("Normal");
        let textoDificil = document.createTextNode("Dificil");

        facil.appendChild(textoFacil);
        normal.appendChild(textoNormal);
        dificil.appendChild(textoDificil);

        btnStartStop.appendChild(textoBoton1);
        /* btnPause.appendChild(textoBoton2); */
        btnRestart.appendChild(textoBoton2);
        buttonContainer.appendChild(btnStartStop);
        buttonContainer.appendChild(btnRestart);

        dif.appendChild(facil);
        dif.appendChild(normal);
        dif.appendChild(dificil);

        //Añdiendo elementos a formulario
        form1.appendChild(difContainer);
        form1.appendChild(selectAvatarContainer);
        form1.appendChild(soundContainer);
        form1.appendChild(buttonContainer);

        //Añadiendo clase para estilos a los div contenedores de opciones
        difContainer.className = "optionContainer";
        selectAvatarContainer.className = "optionContainer";
        soundContainer.className = "optionContainer";
        buttonContainer.className = "optionContainer";
        // Creación de contenedor de objetos
        let mostrador = document.createElement("div");
        let imagenObj = document.createElement("img");
        mostrador.appendChild(imagenObj);
        mostrador.style.backgroundColor = "lightgreen";
        mostrador.style.background = "url(img/gifs/giphy1.gif) center center";
        //imagenObj.setAttribute("src", "img/gifs/giphy1.gif");
        imagenObj.style.maxWidth = "100%";
        imagenObj.style.minWidth = "100%";
        imagenObj.style.maxHeight = "100%";
        imagenObj.style.minHeight = "100%";

        //Sección de puntuaciones y contenedor de objetos
        let scoreContent = document.createElement("div");
        let containerDivScore1 = document.createElement("div");
        let containerDivScore2 = document.createElement("div");

        containerDivScore1.appendChild(label5);
        containerDivScore1.appendChild(score);
        containerDivScore2.appendChild(label6);
        containerDivScore2.appendChild(lastScore);
        scoreContent.appendChild(containerDivScore1);
        scoreContent.appendChild(containerDivScore2);
        divScore.appendChild(mostrador);
        divScore.appendChild(scoreContent);

        divOpciones.appendChild(form1);
        contenedor.appendChild(divScore);
        header.appendChild(divOpciones);
        seccion.insertBefore(hr, contenedor);

        //Añadiendo atributos a los campos del formulario
        dif.setAttribute("type", "text");
        sound.setAttribute("type", "checkbox");
        btnStartStop.setAttribute("id", "btnStartStop");

    
        //let dificultad = document.getElementsByTagName("select")[0].value;

        /***********************    Estilos de sección de Opciones ***********************************/
        contenedor.style.backgroundColor = "rgba(255, 228, 181, 0.6)";
        contenedor.style.display = "flex";
        contenedor.style.justifyContent = "space-around";
        contenedor.style.flexFlow = "row wrap";

        divOpciones.style.width = "100%";
        divOpciones.style.textAlign = "center";

        for (let i = 0; i < document.getElementsByClassName("optionContainer").length; i++) {
            document.getElementsByClassName("optionContainer")[i].style.width = "22%";
            document.getElementsByClassName("optionContainer")[i].style.textAlign = "center";
        }

        for (let i = 0; i < document.getElementsByTagName("label").length; i++) {
            document.getElementsByTagName("label")[i].style.fontWeight = "700";
        }

        document.getElementsByTagName("body")[0].style.fontFamily = "'Audiowide', cursive";

        divScore.style.display = "flex";
        divScore.style.justifyContent = "space-evenly";
        divScore.style.flexFlow = "column nowrap";
        divScore.style.alignItems = "center";
        divScore.style.width = "18%";
        divScore.style.height = "auto";

        //Estilos de contenedor que muestra los objetos
        mostrador.style.border = "groove 2px black";
        mostrador.style.width = "80%";
        mostrador.style.height = "30%";
        mostrador.style.display = "inline-block";
        //Estilos relativos al contenedor de labels e inputs de puntuaciones
        scoreContent.style.marginTop = "-40%";
        scoreContent.style.textAlign = "center";
        //Estilos relativos a la sección de puntuaciones
        score.style.width = "3vmin";
        score.style.fontFamily = " cursive";
        score.style.letterSpacing = "2px";
        score.style.marginLeft = "1vmin";
        score.style.fontFamily = "'Audiowide', cursive";
        score.style.border = "solid 2px black";
        score.value = 0;
        lastScore.style.width = "3vmin";
        lastScore.style.marginLeft = "1vmin";
        lastScore.style.fontFamily = "'Audiowide', cursive";
        lastScore.style.border = "solid 2px black";
        //Se comprueba si existe puntuación previamente almacenada en el navegador. 
        //En caso afirmativo se muestra como valor en mejor puntuación. Más abajo funcionalidad para guardar la mejor puntuación
        try {
            if (localStorage.getItem("puntuacion")) {
                lastScore.value = localStorage.getItem("puntuacion");
            } else {
                lastScore.value = 0;
            }
        } catch {
            lastScore.value = 0;
            window.status = "No permitido guardar en almacenamiento local";
        }
        form1.style.margin = "0 auto";
        form1.style.marginBottom = "2vmin";
        form1.style.width = "90%";
        form1.style.display = "flex";
        form1.style.justifyContent = "space-around";
        form1.style.border = "solid 2px black";
        form1.style.padding = "2vmin";
        form1.style.backgroundColor = "#FFFCE4";
        form1.style.alignItems = "center";

        score.style.width = "40%";
        score.style.padding = "1vmin";

        lastScore.style.width = "40%";
        lastScore.style.padding = "1vmin";

        //Cómo es readonly los demás atributos son prescindibles
        score.setAttribute("type", "number");
        score.setAttribute("max", "100");
        score.setAttribute("maxlength", "3");
        score.setAttribute("readonly", "true");
        lastScore.setAttribute("type", "number");
        lastScore.setAttribute("max", "100");
        lastScore.setAttribute("maxlength", "3");
        lastScore.setAttribute("readonly", "true");

        //Detectando ancho y estableciendo estilos según este
        let ancho = document.body.width;

        function scrolling() {
            if (ancho < 760) {
                form1.style.flexFlow = "column nowrap";
            } else {
                form1.style.flexFlow = "row nowrap";
            }
        }
        scrolling();

        //Detectando si se redimensiona la página para llamar a la función anterior y adaptar el estilo
        window.addEventListener("resize", (e) => {
            ancho = document.body.scrollWidth;
            scrolling();
        }, false);

        /*******************************  Estilos de botones  ********************************/

        for (let i = 0; i < document.getElementsByTagName("button").length; i++) {
            document.getElementsByTagName("button")[i].style.backgroundColor = "silver";
            document.getElementsByTagName("button")[i].style.padding = "1vmin";
            document.getElementsByTagName("button")[i].style.borderRadius = "8px";
            document.getElementsByTagName("button")[i].style.transition = "all 0.3s ease";
            document.getElementsByTagName("button")[i].style.padding = "2vmin";
            document.getElementsByTagName("button")[i].style.fontWeight = "700";

            //Listeners de botones
            document.getElementsByTagName("button")[i].addEventListener("mouseover", (e) => {
                document.getElementsByTagName("button")[i].style.cursor = "pointer";
                document.getElementsByTagName("button")[i].style.transform = "scale(1.1)";
                document.getElementsByTagName("button")[i].style.backgroundColor = "lightgreen";
            }, true);

            document.getElementsByTagName("button")[i].addEventListener("mouseout", () => {
                document.getElementsByTagName("button")[i].style.transform = "scale(1)";
                document.getElementsByTagName("button")[i].style.backgroundColor = "silver";
            });
        }

        /**********************   Estilos de elementos de opciones    *****************************/
        for (let i = 0; i < form1.elements.length; i++) {
            //form1.elements[i].style.marginRight = "3vmin";
            form1.elements[i].style.borderRadius = "6px";
            if (i < 3) {
                document.getElementsByTagName("label")[i].style.marginRight = "1vmin";
            }

            form1.elements[i].addEventListener("focus", () => {
                if (!form1.elements[i].getAttribute("readonly")) {   //Se comprueba que el campo no sea uno de los de puntuación
                    form1.elements[i].style.backgroundColor = "lightgreen";
                }
            });

            form1.elements[i].addEventListener("blur", () => {
                if (!form1.elements[i].getAttribute("readonly")) {
                    form1.elements[i].style.backgroundColor = "white";
                }
            });
        }

        //Audio

        //SECCIÓN TABLERO
        let tablero = document.createElement("div");
        tablero.setAttribute("id", "tablero");
        contenedor.appendChild(tablero);
        //RELOJ
        let divTiempos = document.createElement("div");
        let reloj = document.createElement("input");
        let crono = document.createElement("input");
        let span1 = document.createElement("span");
        let textoSpan1 = document.createTextNode("Tiempo");
        let semaforo = document.createElement("img");
        semaforo.setAttribute("src", "img/cells/verde.png");
        span1.appendChild(textoSpan1);

        divTiempos.appendChild(semaforo);
        divTiempos.appendChild(reloj);
        divTiempos.appendChild(span1);
        divTiempos.appendChild(crono);

        contenedor.appendChild(divTiempos);

        //Atributos de input de reloj
        reloj.setAttribute("type", "text");
        reloj.setAttribute("readonly", "true");

        crono.setAttribute("type", "text");
        crono.setAttribute("readonly", "true");
        //CAMBIAR COLOR DE FONDO DE CRONOMETRO SEGÚN CAMBIEN LAS CELDAS DEL TABLERO
        //Estilos de reloj y crono
        divTiempos.style.width = "15%";
        divTiempos.style.display = "flex";
        divTiempos.style.flexFlow = "column nowrap";
        divTiempos.style.justifyContent = "center";
        divTiempos.style.alignItems = "center";
        divTiempos.style.margin = "2px 0px 2px 0px";
        divTiempos.style.padding = "1vmin";

        reloj.style.border = "solid 2px lightgreen";
        reloj.style.backgroundColor = "black";
        reloj.style.color = "white";
        reloj.style.width = "70%";
        reloj.style.padding = "2vmin";
        reloj.style.borderRadius = "8px";
        reloj.style.textAlign = "center";
        reloj.style.fontFamily = "'Audiowide', cursive";
        reloj.style.marginTop = "15%";

        crono.style.border = "solid 2px green";
        crono.style.backgroundColor = "lightgreen";
        crono.style.color = "black";
        crono.style.width = "70%";
        crono.style.padding = "2vmin";
        crono.style.borderRadius = "8px";
        crono.style.textAlign = "center";
        crono.style.fontFamily = "'Audiowide', cursive";
        crono.setAttribute("value", "0:0:0");

        //Estilos de semáforo

        semaforo.style.width = "80%",
            semaforo.style.maxWidth = "100%";
        semaforo.style.marginBottom = "2vmin";
        semaforo.style.marginTop = "-50%";
        semaforo.style.position = "relative";
        semaforo.style.top = "0px";

        //Funciones de reloj
        function tiempo() {
            let date = new Date();
            let horas = date.getHours();
            let min = date.getMinutes();
            let sec = date.getSeconds();

            if (horas < 10) horas = "0" + horas;
            if (min < 10) min = "0" + min;
            if (sec < 10) sec = "0" + sec;
            let horaFinal = `${horas} : ${min} : ${sec}`;

            reloj.value = horaFinal;
        }
        setInterval(tiempo, 100);

        /***********************     Estilos de tablero    ***********************************/
        //tablero
        tablero.style.display = "flex";
        tablero.style.justifyContent = "space-around";
        tablero.style.flexFlow = "column nowrap";
        tablero.style.margin = "4vmin";
        tablero.style.width = "55%";
        tablero.style.height = "50vh";
        tablero.style.background = "url(img/mando2.png)";
        tablero.style.backgroundSize = "cover";
        tablero.style.backgroundPosition = "center";
        tablero.style.backgroundColor = "black";
        tablero.style.border = "groove 2px black";
        tablero.style.boxShadow = "0px 0px 5px 3px black";
        tablero.style.transition = "all 0.7s ease";

        /***********************  Cuenta atrás al pulsar el botón iniciar     ***********************************/
        btnStartStop.addEventListener("click", cuentaAtras, false);

        function cuentaAtras(e) {
            e.preventDefault();
            //Se deshabilita la posibilidad de cambiar de dificultad en mitad de la partida
            document.getElementsByTagName("select")[0].setAttribute("disabled","true");

            tablero.style.background = "url(img/numeros/uno.png) center no-repeat";
            tablero.style.backgroundColor = "lightgreen";
            setTimeout(() => {

                tablero.style.background = "url(img/numeros/dos.png) center no-repeat";
                tablero.style.backgroundColor = "lightgreen";
            }, 2000);
            setTimeout(() => {

                tablero.style.background = "url(img/numeros/tres.png) center no-repeat";
                tablero.style.backgroundColor = "lightgreen";
            }, 3000);
            //Llamada a la función iniciar
            setTimeout(iniciar, 4000);
        }

        //Función iniciar ************************************************************************************

        let cronoInterval;
        let posicionamiento = new Array(8);
        //Variables que almacenan las rutas de las imágenes correspondientes a los premios
        let imgPremio1 = "url('img/plants/nature2.gif') no-repeat center";
        let imgPremio2 = "url('img/plants/money.gif') no-repeat center";
        //let imgPremio3 = ;
        let clock = "url('img/elements/clock.gif') no-repeat center";
        let imgTrampa1 = "url(img/elements/bomb.gif) no-repeat center";
        function iniciar() {
            //Se pausa la música
            //audio.pause();
            window.removeEventListener("click", reproducir);
            //Se deshabilita el cambio de personaje
            imgAvatar1.removeEventListener("click", selectAvatar1);
            imgAvatar2.removeEventListener("click", selectAvatar2);
            imgAvatar3.removeEventListener("click", selectAvatar3);
            imgAvatar4.removeEventListener("click", selectAvatar4);
            //Se comprueba si existen elementos hijos del tablero, en cuyo caso se eliminan
            while (tablero.firstChild) {
                tablero.removeChild(tablero.firstChild);
            };
            //Llamada a la función crono para iniciar el cronómetro --------------------------------------------
            let min = 0;
            let sec = 0;
            let mil = 0;
            let actual;
            function cronometro() {
                mil++;
                if (mil == 99) {
                    sec++;
                    if (sec < 10) sec = "0" + sec;
                    mil = 0;
                }
                if (sec == 59) {
                    min++;
                    sec = 0;
                }
                actual = `${min}:${sec}:${mil}`;
                crono.value = actual;
            }
            cronoInterval = setInterval(cronometro, 10);
            //Fin de cronómetro-------------------------------------------------------------------------------
            //Deshabilitando el botón
            btnStartStop.setAttribute("disabled", "true");
            //Ocultando el background del tablero
            tablero.style.background = "none";
            let contador = 0;
            let identificador = "c";

            //Creación inicial de celdas de tablero
            for (let i = 1; i <= 8; i++) {
                let fila = document.createElement("div");
                fila.style.width = "100%";
                fila.style.height = "12%";
                fila.style.display = "flex";
                fila.style.justifyContent = "space-around";
                fila.style.flexFlow = "column wrap";
                //Añadiendo fila a tablero
                tablero.appendChild(fila);

                for (let j = 1; j <= 8; j++) {
                    contador++;
                    let celda = document.createElement("div");
                    celda.style.width = "12%";
                    celda.style.height = "95%";
                    celda.setAttribute("id", contador);
                    identificador = "c" + i + j;
                    celda.style.background = `url(img/backgrounds/grass.png)`;
                    celda.style.textAlign = "center";
                    celda.classList.add("verdeClaro");
                    fila.appendChild(celda);
                }
            }
            //Posición inicial de Avatar
            let x = Math.round(Math.random() * (7 - 0) + 0);
            let y = Math.round(Math.random() * (7 - 0) + 0);


            //Se crea el array
            for (let i = 0; i < 8; i++) posicionamiento[i] = new Array(8);
            let count = 0;
            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    posicionamiento[i][j] = document.getElementsByClassName("verdeClaro")[count];
                    count++;
                }
            }
            //Accediendo a las flechas de movimiento
            let top = document.getElementsByClassName("flecha")[0];
            let left = document.getElementsByClassName("flecha")[1];
            let right = document.getElementsByClassName("flecha")[2];
            let down = document.getElementsByClassName("flecha")[3];
            //Llamada a la función avatar, la cual genera el Avatar
            startAvatar(x, y);

            function startAvatar(x, y) {
                let celda = posicionamiento[x][y];     
                let fondo = celda.style.background;
                celda.style.background = `${imagenAvatar}, ${fondo}`;
                celda.classList.add("avatar");
                /***********************     Interacción de controles   ***********************************/
                //Listeners de teclas del teclado
                function detectar_tecla() {
                    if (event.keyCode == 87) moveTop();
                    if (event.keyCode == 83) moveDown();
                    if (event.keyCode == 65) moveLeft();
                    if (event.keyCode == 68) moveRight();
                }
                document.onkeydown = detectar_tecla;
                //Listeners de las flechas de movimiento
                top.addEventListener("click", moveTop);
                left.addEventListener("click", moveLeft);
                right.addEventListener("click", moveRight);
                down.addEventListener("click", moveDown);
            }
            //Función que cambia la sombra del borde del tablero al intentar pasar un límiote del tablero
            function sombra() {
                tablero.style.boxShadow = "0px 0px 5px 4px red";
                setTimeout(() => {
                    tablero.style.boxShadow = "0px 0px 5px 3px black";
                }, 1000);
            }
            //Funciones de movimiento
            function moveTop() {
                if (x > 0) {
                    let celda = document.getElementsByClassName("avatar")[0];
                    let subUrl = celda.style.background.substring(celda.style.background.indexOf(",") + 1);
                    celda.style.background = `${subUrl}`;
                    celda.classList.remove("avatar");
                    x--;
                    celda = posicionamiento[x][y];
                    compruebaPremio(celda);
                    let subUrl2 = celda.style.background.substring(celda.style.background.indexOf(",") + 1);
                    celda.style.background = `${imagenAvatar}, ${subUrl2}`;                  
                    celda.classList.add("avatar");

                } else {
                    sombra();
                    let celda = document.getElementsByClassName("avatar")[0];
                    let subUrl = celda.style.background.substring(celda.style.background.indexOf(",") + 1);
                    celda.style.background = `${subUrl}`;
                    celda.classList.remove("avatar");
                    x++;
                    celda = posicionamiento[x][y];
                    compruebaPremio(celda);
                    let subUrl2 = celda.style.background.substring(celda.style.background.indexOf(",") + 1);
                    celda.style.background = `${imagenAvatar}, ${subUrl2}`;                  
                    celda.classList.add("avatar");
                }
            }

            function moveLeft() {
                if (y > 0) {
                    let celda = document.getElementsByClassName("avatar")[0];
                    let subUrl = celda.style.background.substring(celda.style.background.indexOf(",") + 1);
                    celda.style.background = `${subUrl}`;
                    celda.classList.remove("avatar");
                    y--;
                    //Se cambia la imagen para dar la vuelta al avatar - Se comprueba el avatar elegido
                    if (imagenAvatar == "url(img/characters/customer_1.png) no-repeat center")
                        imagenAvatar = "url(img/characters/customer_1L.png) no-repeat center";
                    if (imagenAvatar == "url(img/characters/customer_2.png) no-repeat center")
                        imagenAvatar = "url(img/characters/customer_2L.png) no-repeat center";
                    if (imagenAvatar == "url(img/characters/customer_3.png) no-repeat center")
                        imagenAvatar = "url(img/characters/customer_3L.png) no-repeat center";
                    if (imagenAvatar == "url(img/characters/customer_4.png) no-repeat center")
                        imagenAvatar = "url(img/characters/customer_4L.png) no-repeat center";

                    celda = posicionamiento[x][y];
                    compruebaPremio(celda);
                    let subUrl2 = celda.style.background.substring(celda.style.background.indexOf(",") + 1);
                    celda.style.background = `${imagenAvatar}, ${subUrl2}`;
                    celda.classList.add("avatar");
                } else {
                    sombra();
                    let celda = document.getElementsByClassName("avatar")[0];
                    let subUrl = celda.style.background.substring(celda.style.background.indexOf(",") + 1);
                    celda.style.background = `${subUrl}`;
                    celda.classList.remove("avatar");
                    y++;
                    celda = posicionamiento[x][y];
                    compruebaPremio(celda);
                    let subUrl2 = celda.style.background.substring(celda.style.background.indexOf(",") + 1);
                    celda.style.background = `${imagenAvatar}, ${subUrl2}`;
                    celda.classList.add("avatar");
                }
            }

            function moveRight() {
                if (y < 7) {
                    let celda = document.getElementsByClassName("avatar")[0];
                    let subUrl = celda.style.background.substring(celda.style.background.indexOf(",") + 1);
                    celda.style.background = `${subUrl}`;
                    celda.classList.remove("avatar");
                    y++;
                    //Se cambia la imagen para dar la vuelta al avatar - Se comprueba el avatar elegido
                    if (imagenAvatar == "url(img/characters/customer_1L.png) no-repeat center")
                        imagenAvatar = "url(img/characters/customer_1.png) no-repeat center";
                    if (imagenAvatar == "url(img/characters/customer_2L.png) no-repeat center")
                        imagenAvatar = "url(img/characters/customer_2.png) no-repeat center";
                    if (imagenAvatar == "url(img/characters/customer_3L.png) no-repeat center")
                        imagenAvatar = "url(img/characters/customer_3.png) no-repeat center";
                    if (imagenAvatar == "url(img/characters/customer_4L.png) no-repeat center")
                        imagenAvatar = "url(img/characters/customer_4.png) no-repeat center";

                    celda = posicionamiento[x][y];
                    compruebaPremio(celda);
                    let subUrl2 = celda.style.background.substring(celda.style.background.indexOf(",") + 1);
                    celda.style.background = `${imagenAvatar}, ${subUrl2}`;
                    celda.classList.add("avatar");
                } else {
                    sombra();
                    let celda = document.getElementsByClassName("avatar")[0];
                    let subUrl = celda.style.background.substring(celda.style.background.indexOf(",") + 1);
                    celda.style.background = `${subUrl}`;
                    celda.classList.remove("avatar");
                    y--;
                    celda = posicionamiento[x][y];
                    compruebaPremio(celda);
                    let subUrl2 = celda.style.background.substring(celda.style.background.indexOf(",") + 1);
                    celda.style.background = `${imagenAvatar}, ${subUrl2}`;
                    celda.classList.add("avatar");
                }
            }

            function moveDown() {
                if (x < 7) {
                    let celda = document.getElementsByClassName("avatar")[0];
                    let subUrl = celda.style.background.substring(celda.style.background.indexOf(",") + 1);
                    celda.style.background = `${subUrl}`;
                    celda.classList.remove("avatar");
                    x++;
                    celda = posicionamiento[x][y];
                    compruebaPremio(celda);
                    let subUrl2 = celda.style.background.substring(celda.style.background.indexOf(",") + 1);
                    celda.style.background = `${imagenAvatar}, ${subUrl2}`;
                    celda.classList.add("avatar");
                } else {
                    sombra();
                    let celda = document.getElementsByClassName("avatar")[0];
                    let subUrl = celda.style.background.substring(celda.style.background.indexOf(",") + 1);
                    celda.style.background = `${subUrl}`;
                    celda.classList.remove("avatar");
                    x--;
                    celda = posicionamiento[x][y];
                    compruebaPremio(celda);
                    let subUrl2 = celda.style.background.substring(celda.style.background.indexOf(",") + 1);
                    celda.style.background = `${imagenAvatar}, ${subUrl2}`;
                    celda.classList.add("avatar");
                }

            }

            /*********************Funciones de Premios ******************************************************/
            let scoreValue = 0;
            function compruebaPremio(celda) {
                if (celda.style.background.indexOf("nature") != -1) {
                    premio1(celda);
                } else if (celda.style.background.indexOf("money") != -1) {
                    premio2(celda);
                } else if (celda.style.background.indexOf("bomb") != -1) {
                    bomba(celda);
                }
            }
            function premio1(celda) {
                scoreValue += 10;
                score.value = scoreValue;
                cambiaColorBorde("green");
                cambiaObjeto("img/plants/nature2.gif", "lightgreen");
            }

            function premio2(celda) {
                scoreValue += 20;
                score.value = scoreValue;
                cambiaColorBorde("green");
                cambiaObjeto("img/plants/moneyTransparencia.png", "lightgreen");
            }

            function bomba(celda) {
                let explosion = "url(img/elements/explosion.gif) no-repeat center";
                let indice = celda.style.background.indexOf(",");
                let celdaBackground = celda.style.background.substring(0, celda.style.background.indexOf(",") + 1);
                let background = celda.style.background.replace(celdaBackground, explosion);

                celda.style.background = background;
                //Deshabilita brevemente las flechas de dirección
                top.removeEventListener("click", moveTop);
                left.removeEventListener("click", moveLeft);
                right.removeEventListener("click", moveRight);
                down.removeEventListener("click", moveDown);
                //Habilita nuevamente las flechas de dirección
                setTimeout(function () {
                    top.addEventListener("click", moveTop);
                    left.addEventListener("click", moveLeft);
                    right.addEventListener("click", moveRight);
                    down.addEventListener("click", moveDown);
                }, 1000);
                //celda.style.background = explosion , celdaBackground;
                //setTimeout(function() {celda.style.background =  imagenAvatar,celdaBackground}, 500);
                scoreValue -= 30;   //Se resta de la puntuación actual
                score.value = scoreValue;
                //Se cambia durante un momento el color del borde de la caja de puntuación
                cambiaColorBorde("red");
                //Mostrando el objeto
                cambiaObjeto("img/elements/explosion.gif", "red");
                contenedor.style.backgroundColor = "rgba(255, 99, 71, 0.5)";
                //Se cambia el color de fondo del contenedor durante un instante
                setTimeout(function () { contenedor.style.backgroundColor = "rgba(255, 228, 181, 0.6)"; }, 1000);
            }

            //Función para cambiar el color del borde de caja de puntuación
            function cambiaColorBorde(color) {
                score.style.borderColor = color;
                setTimeout(() => {
                    score.style.borderColor = "black";
                }, 500);
            }

            //Función para cambiar la visualización en el recuadro en la parte izquierda
            function cambiaObjeto(url, colorFondo) {
                mostrador.style.backgroundColor = colorFondo;
                imagenObj.style.transition = "all 0.5s ease";
                if (imagenObj.style.background == "img/gifs/giphy2.gif") {
                    imagenObj.style.transform = "scale(0)";
                }
                imagenObj.src = url;
                imagenObj.style.transform = "scale(1)";
                setTimeout(function () {
                    cambiaColorBorde();
                    imagenObj.style.transform = "scale(0)";
                }, 500);
            }

            /***********************   Fin de Interacción de controles   ***********************************/
            //LLamada a la función que genera los elementos de premio del tablero de manera aleatoria
            generadora();
            //Cambiando la disposición de celdas
            let lanzaCambio1 = setTimeout(cambio1, 3000);
            let lanzaCambio2;
            //Arrays para alamcenar los números aleatorios que se generen en las distintas fases
            let arrayAleatorios = [];
            let arrayAleatorios2 = [];

            //Función que es llamada dentro de cada cambio de celdas
            function setBackground(celdaId,fondo) {
                if (!celdaId.classList.contains("avatar")) {
                    if (celdaId.style.background.indexOf("nature") == -1 && celdaId.style.background.indexOf("money") && celdaId.style.background.indexOf("bomb") == -1 && celdaId.style.background.indexOf("clock") == -1) {
                        celdaId.style.background = fondo
                    } else {
                        if (celdaId.style.background.indexOf("nature") != -1) {
                            celdaId.style.background = `${imgPremio1},${fondo}`;
                        } else if (celdaId.style.background.indexOf("money") != -1) {
                            celdaId.style.background = `${imgPremio2},${fondo}`;
                        } else if (celdaId.style.background.indexOf("bomb") != -1) {
                            celdaId.style.background = `${imgTrampa1},${fondo}`;
                        }  else if (celdaId.style.background.indexOf("clock") != -1) {
                            celdaId.style.background = `${clock},${fondo}`;
                        }
                    }
                } else {
                    celdaId.style.background = `${imagenAvatar}, ${fondo}`;
                }
            }

            //Primera función de cambio de disposición de celdas------------------------------------------------------
            function cambio1() {
                //Generando número aleatorio
                let n1 = 0;
                while (n1 < 20) {
                    let aleatorio = Math.round(Math.random() * (64 - 1) + 1);
                    //Se comprueba si el número ya está incluido en el array
                    if (!arrayAleatorios.includes(aleatorio)) {
                        arrayAleatorios.push(aleatorio);    //Se guardan los números generados en un array     
                        n1++;
                    }
                }
                //ALERT: En este bucle código a incluir en función para reducir (comprobaciones)
                for (let i = 1; i < 8; i++) {
                    let itinerante = arrayAleatorios[i];
                    let celdaId = document.getElementById(itinerante);
                    celdaId.classList.replace("verdeClaro", "verdeOscuro");
                     setBackground(celdaId,"url(img/backgrounds/fondo1.png) no-repeat");
                }
                //Llamada a función que genera las plantas
                generadora();
                //Llmando al siguiente cambio de disposición de celdas
                lanzaCambio2 = setTimeout(cambio2, 3000);
            }
            //Fin de primera función de cambio de disposición de celdas--------------------------------------------
            let lanzaCambio3;
            //Segunda función de cambio de disposición-------------------------------------------------------------
            function cambio2() {
                let n2 = 0;
                while (n2 < 20) {
                    let aleatorio2 = Math.round(Math.random() * (64 - 1) + 1);

                    if (!arrayAleatorios2.includes(aleatorio2) && !arrayAleatorios.includes(aleatorio2)) {
                        arrayAleatorios2.push(aleatorio2);
                        n2++;
                    }
                }
                //ALERT: En este bucle código a incluir en función para reducir (comprobaciones)
                for (let i = 0; i < arrayAleatorios2.length; i++) {
                    let celdaId = document.getElementById(arrayAleatorios2[i]);
                    celdaId.classList.replace("verdeClaro", "verdeOscuro");
                    setBackground(celdaId,"url(img/backgrounds/fondo1.png) no-repeat");
                }
                //ALERT: En este bucle código a incluir en función para reducir (comprobaciones)
                for (let i = 0; i < arrayAleatorios.length; i++) {
                    let celdaId = document.getElementById(arrayAleatorios[i]);
                    celdaId.classList.replace("verdeOscuro", "naranja");
                    setBackground(celdaId,"url(img/backgrounds/fondo2.png) no-repeat");
                }

                //Llamada a la función del siguiente cambio
                lanzaCambio3 = setInterval(cambio3, 3000);
            }
            //Fin de segunda función de cambio de disposición de celdas-------------------------------------------------

            //Tercera función de cambio de disposición------------------------------------------------------------------

            //Variable para almacenar el número de divs con la clase final, cuando se llegue al número total de divs se acaba el juego
            let cuentaCeldasFinales = 0;
            //Variable para almacenar posteriormente una función setInterval que actuara sobre el semáforo
            let parpadear;
            function cambio3() {
                let divTotalesTablero = document.getElementById("tablero").getElementsByTagName("div");
                //Se cambia la imagen del semáforo
                semaforo.setAttribute("src", "img/cells/amarillo.png");
                //Array que almacenarán los divs iniciales del tablero que incluirá sólo celdas
                let celdasTotales = [];
                //Extrayendo los divs correspondientes a celdas del los divs totales
                for (let i = 0; i < divTotalesTablero.length; i++) {
                    if (divTotalesTablero[i].classList != "") {
                        celdasTotales.push(divTotalesTablero[i]);
                    }
                }
                //ALERT: En este bucle código a incluir en función para reducir (comprobaciones)
                for (let i = 0; i < celdasTotales.length; i++) {
                    if (celdasTotales[i].classList.contains("verdeClaro")) {
                        celdasTotales[i].classList.replace("verdeClaro", "verdeOscuro");
                        setBackground(celdasTotales[i],"url(img/backgrounds/fondo1.png) no-repeat");
                        /*-------------------------------------------------------------------- */
                    } else if (celdasTotales[i].classList.contains("verdeOscuro")) {
                        //ALERT: En este bucle código a incluir en función para reducir (comprobaciones)
                        celdasTotales[i].classList.replace("verdeOscuro", "naranja");
                        setBackground(celdasTotales[i],"url(img/backgrounds/fondo2.png) no-repeat");
                        /*-------------------------------------------------------------------- */
                    } else if (celdasTotales[i].classList.contains("naranja")) {
                        celdasTotales[i].classList.replace("naranja", "final");
                        setBackground(celdasTotales[i],"url(img/backgrounds/fondo3.png) no-repeat");   
                        
                        if (cuentaCeldasFinales == celdasTotales.length - 1) {
                            semaforo.setAttribute("src", "img/cells/rojo.png");
                            gameOver();
                        } else {
                            if(cuentaCeldasFinales ==  5) {
                                semaforo.setAttribute("src", "img/cells/sinColor.png");
                                //Llamada a la función que simula el efecto de parpadeo del semáforo
                                parpadear = setInterval(cambiaLuz, 500);
                            }
                            cuentaCeldasFinales++;
                        }
                    }
                }
                return celdasTotales;
            }
            //función que simula el efecto parpadeo de la luz roja del semáforo cuando se está llegando al final
            function cambiaLuz() {
                if(semaforo.getAttribute("src") == "img/cells/sinColor.png") {
                    semaforo.setAttribute("src", "img/cells/rojo.png");
                }  else {
                    semaforo.setAttribute("src", "img/cells/sinColor.png");
                }
            }
            //Llamada a la función 'generadora' cada 3 segundos, la cuál genera los premios
            let lanzaGeneradora;
            setTimeout(() => {
                lanzaGeneradora = setInterval(generadora, 3000);
            }, 3000);

            function gameOver() {
                clearInterval(parpadear);
                //Se detiene la ejecución del cronómetro y de las demás setInteral que cambiaban el color de las celdas
                clearInterval(cronoInterval);
                clearInterval(lanzaCambio1);
                clearInterval(lanzaCambio2);
                clearInterval(lanzaCambio3);
                clearInterval(lanzaGeneradora);
                //Se inhabilitan los controles de dirección
                document.getElementsByClassName("flecha")[0].removeEventListener("click", moveTop);
                document.getElementsByClassName("flecha")[1].removeEventListener("click", moveLeft);
                document.getElementsByClassName("flecha")[2].removeEventListener("click", moveRight);
                document.getElementsByClassName("flecha")[3].removeEventListener("click", moveDown);
                //Se reproduce nuevamente el audio si la casilla de sonido se encuentra habilitada
                if(sound.checked) {
                    audio.play();
                }
                //Se guarda en variable local el tiempo del cronómetro
                try {
                if (localStorage.getItem("mejor tiempo")) {
                    if (localStorage.getItem("mejor tiempo") < crono.value) {
                        localStorage.setItem("mejor tiempo", crono.value);
                    }
                } else {
                    localStorage.setItem("mejor tiempo", crono.value);
                }
                } catch {
                    window.status = "No permitido guardar en almacenamiento local";
                }
                //Se cambia el fondo del tablero
                let celdas = document.getElementsByClassName("final");
                setTimeout(() => {
                    for (let i = 0; i < celdas.length; i++) {
                        celdas[i].style.opacity = "0.2";
                    }
                    tablero.style.background = "url(img/numeros/gameOver.png) center no-repeat ";
                }, 2000);
                //Se guarda en variable local la mejor puntuación
                try {
                    if (!localStorage.getItem("puntuacion")) {
                        localStorage.setItem("puntuacion", score.value);
                    } else {
                        if (parseInt(localStorage.getItem("puntuacion")) < parseInt(score.value)) {
                            localStorage.setItem("puntuacion", score.value);
                        }
                    }
                } catch {
                    window.status = "No permitido guardar en almacenamiento local";
                }
                //Efecto visual en el tablero
                //Se habilita nuevamente el botón 'iniciar'
                btnStartStop.removeAttribute("disabled");
                //Se cambia el color del recuadro de objetos de la izquierda del tablero
                //mostrador.style.background= "url(img/gifs/giphy1.gif)";
                //Para asegurar que todos las celdas se quedan con el mismo background. Código a eliminar.
                for (let i = 0; i < document.getElementsByClassName("final").length; i++) {
                    if (document.getElementsByClassName("final")[i] != "url(img/backgrounds/fondo3.png)") {
                        document.getElementsByClassName("final")[i].style.background = "url(img/backgrounds/fondo3.png)";
                    }
                }
            }

        }

        //Fin de función principal Iniciar *********************************************************************
        //Función generadora que genera los premios********************************************************
        function generadora() {
            //Se elimina cualquier reloj en una celda en caso de existir antes de crear nuevo más adelante
            for(let i = 1; i < 64;i++) {
                if(document.getElementById(i).style.background.indexOf("clock") != -1) {
                    let indice = document.getElementById(i).style.background.indexOf(",");
                    let fondo = document.getElementById(i).style.background;
                    let fondoFinal =  fondo.substring(indice+1);

                    document.getElementById(i).style.background = fondoFinal;
                }
            }
            //-----------------------------1º tipo de premio--------------------------
            //Array para guardar las posiciones del primer tipo de premio
            let arrayAleatoriosPremios1 = [];
            //Array para guardar las posiciones de trampas de premio
            let arrayTrampas = [];
            //Se insertan todos las celdas en el array, del que luego se irán eliminando aquellos que contienen premio o avatar
            for (let i = 1; i < 65; i++) {
                arrayTrampas.push(document.getElementById(i));
            }

            let elemento;
            let fondoActual;
            //Variable que almacena cantidad de premios y trampas según nivel de dificultad
            let dificultad = document.getElementsByTagName("select")[0].value;
            let cantidadPremios1, cantidadPremios2, cantidadPremios3, cantidadTrampas1, cantidadTrampas2;

            switch(dificultad) {
                case "Fácil":
                    cantidadPremios1 = 8;
                    cantidadPremios2 = 4;
                    cantidadTrampas1 = 4;
                    break;
                case "Normal":
                    cantidadPremios1 = 6;
                    cantidadPremios2 = 3;
                    cantidadTrampas1 = 5;
                    break;
                case "Dificil":
                    cantidadPremios1 = 5;
                    cantidadPremios2 = 2;
                    cantidadTrampas1 = 6;
                    break;
            }

            //Generando número aleatorios e introduciendolos en el array arrayAleatoriosPremios1
            for (let i = 0; i < cantidadPremios1; i++) {
                let aleatorio = Math.round(Math.random() * (64 - 1) + 1);
                if (arrayAleatoriosPremios1.includes(aleatorio) || aleatorio == document.getElementsByClassName("avatar")[0].id) {
                    i--;
                } else {
                    arrayAleatoriosPremios1.push(aleatorio);
                    arrayTrampas.splice(aleatorio - 1, 1);
                }
            }

            //Asignando las imágenes de premios de primer tipo
            //Se asignan los fondos a  los divs cuyos ids correspondan con los número aleatorios generados
            for (let i = 0; i < arrayAleatoriosPremios1.length; i++) {
                elemento = document.getElementById(arrayAleatoriosPremios1[i]);
                let clase;
                if (elemento.style.background.indexOf("avatar") == -1) {
                    clase = elemento.classList.value;
                }

                switch (clase) {
                    case "verdeClaro":
                        fondoActual = `${imgPremio1},url('img/backgrounds/grass.png')`;
                        break;
                    case "verdeOscuro":
                        fondoActual = `${imgPremio1},url('img/backgrounds/fondo1.png')`;
                        break;
                    case "naranja":
                        fondoActual = `${imgPremio1},url('img/backgrounds/fondo2.png')`;
                        break;
                    case "final":
                        fondoActual = `url('img/backgrounds/fondo3.png')`;
                        //ALERT: Código a sustituir, optimizar o introducir a función  
                        //elemento.classList.remove("premio1");
                        break;
                }
                elemento.style.background = fondoActual;
            }

            //-----------------------------2º tipo de premio--------------------------
            //Array para guardar las posiciones del segundo tipo de premio
            let arrayAleatoriosPremios2 = [];
            //Generando número aleatorios e introduciendolos en el array arrayAleatoriosPremios2
            for (let i = 0; i < cantidadPremios2+1; i++) { //Se suma +1 para almacenar una celda para el reloj del tablero
                //Se comprueba que el número generado no se encuentre ya en el primer array de premios
                let aleatorio = Math.round(Math.random() * (64 - 1) + 1);
                if (arrayAleatoriosPremios1.includes(aleatorio) || aleatorio == document.getElementsByClassName("avatar")[0].id) {
                    i--;
                } else {
                    arrayAleatoriosPremios2.push(aleatorio);
                    arrayTrampas.splice(aleatorio - 1, 1);
                }
            }
            //Asignando las imágenes de premios de primer tipo
            //Se asignan los fondos a  los divs cuyos ids correspondan con los número aleatorios generados
            for (let i = 0; i < arrayAleatoriosPremios2.length; i++) {
                elemento = document.getElementById(arrayAleatoriosPremios2[i]);
                let clase;
                if (!elemento.classList.contains("avatar")) {
                    clase = elemento.classList.value;
                }
                if(i != cantidadPremios2) { //Si la iteración no ha llegado a la ultima
                switch (clase) {
                    case "verdeClaro":
                        fondoActual = `${imgPremio2},url('img/backgrounds/grass.png')`;
                        break;
                    case "verdeOscuro":
                        fondoActual = `${imgPremio2},url('img/backgrounds/fondo1.png')`;
                        break;
                    case "naranja":
                        fondoActual = `${imgPremio2},url('img/backgrounds/fondo2.png')`;
                        break;
                    case "final":
                        fondoActual = "url('img/backgrounds/fondo3.png')";
                        //ALERT: Código a sustituir, optimizar o introducir a función  
                        break;
                }
                } else { //Si la iteración ha llegado a la ultima, queda una celda que se asigna al reloj
                    switch (clase) {
                    case "verdeClaro":
                        fondoActual = `${clock},url('img/backgrounds/grass.png')`;
                        break;
                    case "verdeOscuro":
                        fondoActual = `${clock},url('img/backgrounds/fondo1.png')`;
                        break;
                    case "naranja":
                        fondoActual = `${clock},url('img/backgrounds/fondo2.png')`;
                        break;
                    case "final":
                        fondoActual = "url('img/backgrounds/fondo3.png')";
                        //ALERT: Código a sustituir, optimizar o introducir a función  
                        break;
                    }
                }
                elemento.style.background = fondoActual;
            }

            //-----------------------------1º tipo de trampas--------------------------
            let arrayFinal = [];
            while (arrayFinal.length < cantidadTrampas1) {
                let aleatorio = Math.round(Math.random() * (arrayTrampas.length));
                if (arrayFinal.indexOf(arrayTrampas[aleatorio]) == -1) {
                    arrayFinal.push(arrayTrampas[aleatorio]);
                }
            }
          
            for (let i = 0; i < arrayFinal.length; i++) {
                if(arrayFinal[i] != undefined) {
                let url1 = arrayFinal[i].style.background.indexOf("customer");
                let url2 = arrayFinal[i].style.background.indexOf("nature");
                let url3 = arrayFinal[i].style.background.indexOf("money");
                let url4 = arrayFinal[i].style.background.indexOf("bomb");
                let backg = arrayFinal[i].style.background;
                if (url1 == -1 && url2 == -1 && url3 == -1 && url4 == -1) {
                    arrayFinal[i].style.background = `${imgTrampa1}, ${backg}`;
                    //ALERT: Código a sustituir, optimizar o introducir a función  
                }
                };
                
            }
        }
        
        //Fin de función generadora

        /************************ Fin de tablero     ********************************************************* */
        //SECCIÓN CONTROL

        //Creación Sección de controles (flechas, salida de datos y opciones)
        let divControls = document.createElement("div");
        let divFlecha = document.createElement("div");
        let image = document.createElement("img");

        /***********************     Estilos de controles   ***********************************/
        divControls.style.display = "relative";
        divControls.style.textAlign = "center";
        divControls.style.width = "100%";
        image.style.width = "4vw";

        for (let i = 0; i < 4; i++) {
            let newImage = image.cloneNode(true);
            let divNewFlecha = divFlecha.cloneNode(true);
            newImage.setAttribute("src", "img/left.ico");
            newImage.className = "flecha";

            newImage.addEventListener("mouseover", () => {
                newImage.style.cursor = "pointer";
                newImage.style.boxShadow = "0px 0px 2px 2px lightgreen";
                /*  newImage.style.transition = "all 0.5s ease";  */
                newImage.style.borderRadius = "20px";
                newImage.style.backgroundColor = "orange";
            });

            newImage.addEventListener("mouseout", () => {
                newImage.style.boxShadow = "0px 0px 0px 0px white";
                newImage.style.backgroundColor = "rgba(0, 0, 0, 0)";
            });

            if (i == 0) {
                newImage.style.transform = "rotate(90deg)";
            } else if (i == 1) {
                divNewFlecha.style.display = "inline";
            } else if (i == 2) {
                newImage.style.transform = "rotate(180deg)";
                divNewFlecha.style.display = "inline";
            } else if (i == 3) {
                newImage.style.transform = "rotate(270deg)";
            }
            divNewFlecha.appendChild(newImage);
            divControls.appendChild(divNewFlecha);
        }

        seccion.appendChild(divControls);
        seccion.insertBefore(hr.cloneNode(true), divControls);



    });
})();