const contenedorLamina = new Vue({
    el: "#controlador3D",
    data: {
        organo: "",
        title: "",
        source: "",
        options: "",
        model: ""
    },
    mounted() {
        this.organo = this.obtenerParametroRuta("organo")
        switch (this.organo) {
            case "encefalo":
                this.title = "Encéfalo"
                break;
            case "rinon":
                this.title = "Riñón"
            case "corazon":
                this.title = "Corazón"
                break;

        }
    },
    methods: {
        _charge3D: function (organo, modelo) {
            this.source = "/3D/" + organo + "/Contenedores/" + modelo + ".html?organo=" + organo + "&modelo=" + modelo
            switch (modelo) {
                case "encefaloBase":
                    this.options = "encefaloBase"
                    this.model = " Modelo Base"
                    break;
                case "encefaloCorte":
                    this.options = "encefaloCorte"
                    this.model = " Corte plano medio"
                    break;
                case "encefaloBasePartes1":
                    this.model = " Modelo Base - Cerébro, cerebelo y tallo encefálico"
                    break;
                case "encefaloBasePartes2":
                    this.model = " Modelo Base - Surcos y cincunvoluciones cerebrales"
                    break;
                case "encefaloBasePartes3":
                    this.model = " Modelo Base - Estructuras del encéfalo"
                    break;
                case "encefaloCortePartes1":
                    this.model = " Corte plano medio - Estructuras encéfalo "
                    break;


            }


        },
        obtenerParametroRuta: function (nombreParametro) {
            let result = "";
            let tmp = [];
            let items = location.search.substr(1).split("&");
            for (let index = 0; index < items.length; index++) {
                tmp = items[index].split("=");
                if (tmp[0] === nombreParametro) result = decodeURIComponent(tmp[1]);
            }
            return result;
        },

    }

})