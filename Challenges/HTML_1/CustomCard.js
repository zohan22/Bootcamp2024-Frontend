class Tarjeta extends HTMLElement {
    constructor() {
        super();

    }

    static get observedAttributes() {
        return ['img'];
    }

    attributeChangedCallback(img, oldvalue, newvalue) {
        if(img === "img") {
            this.img = newvalue;
        } else {
            this.img = './images/pexels-blitzboy-1040880.jpg';
        }
    }

    connectedCallback() {
        const shadow = this.attachShadow({mode: 'open'});
        
        const contenedor = document.createElement("div");
        contenedor.setAttribute("class", "contenedor");

        const cabecera = document.createElement("header");
        cabecera.setAttribute("class", "cabecera");

        const logo = this.getAttribute("logo");
        cabecera.textContent = logo;

        const contenido = document.createElement("div");
        contenido.setAttribute("class", "contenido");

        const contenidoImagen = document.createElement("div");
        contenidoImagen.setAttribute("class", "contenido-imagen");

        const contenidoNombre = document.createElement("div");
        contenidoNombre.setAttribute("class", "contenido-nombre");

        const nombre = this.getAttribute("nombre");
        contenidoNombre.textContent = nombre;

        contenido.appendChild(contenidoImagen);
        contenido.appendChild(contenidoNombre);

        const pie = document.createElement("footer");
        pie.setAttribute("class", "pie");

        const cargo = this.getAttribute("cargo");
        pie.textContent = cargo;

        const estilos = document.createElement('style');
        console.log(estilos.isConnected);

        estilos.textContent = `
            .contenedor {
                width: 500px;
                height: 700px;
                display: flex;
                flex-direction: column;
                background-color: #f1faee;
                border: 3px solid #000;
            }

            .cabecera {
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #f1faee;
                border-bottom: 3px solid #000;
                color: #000;
                font-weight: bold;
                font-size: 5rem;
                text-align: center;
            }

            .contenido {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                flex: 5;
                background-color: #1d3557;;
                align-items: center;
                row-gap: 25px;
            }

            .contenido-imagen {
                margin-top: 35px;
                flex: 4;
                display: flex;
                border-radius: 25%;
                width: 70%;
                height: 60%;
                background-image: url(${this.img});
                background-repeat: no-repeat;
                background-size: cover;
                background-color: #000;
                -webkit-border-radius: 25%;
                -moz-border-radius: 25%;
                -ms-border-radius: 25%;
                -o-border-radius: 25%;
                border: 3px solid #000;
            }

            .contenido-nombre {
                flex: 1;
                color: #f1faee;
                font-weight: bold;
                font-size: 3rem;
                margin-top: 30px;
            }

            .pie {
                flex: 1;
                background-color: #e63946;
                border-top: 3px solid #000;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #f1faee;
                font-weight: bold;
                font-size: 3rem;
            }
        `;

        
        shadow.appendChild(estilos);
        console.log(estilos.isConnected);
        shadow.appendChild(contenedor);
        contenedor.appendChild(cabecera);
        contenedor.appendChild(contenido);
        contenedor.appendChild(pie);
    }
}

customElements.define("tarjeta-personal", Tarjeta);