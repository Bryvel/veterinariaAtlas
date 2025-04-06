const contenedorLamina = new Vue({
    el: "#controlador3D",
    data: {
        organo: "",
        title: "",
        source: "",
        options: "",
        model: "",
        sourcePartes: "",
        leyenda: ""
    },
    mounted() {
        this.organo = this.obtenerParametroRuta("organo")
        switch (this.organo) {
            case "encefalo":
                this.title = "Encéfalo"
                break;
            case "rinon":
                this.title = "Riñón"
                break;
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
                    this.leyenda = false
                    break;
                case "encefaloCorte":
                    this.options = "encefaloCorte"
                    this.model = " Corte plano medio"
                    this.leyenda = false
                    break;
                case "encefaloBasePartes1":
                    this.sourcePartes = "/3D/" + organo + "/Partes/Partes1.jpg"
                    this.model = " 1.Modelo Base - Cerébro, cerebelo y tallo encefálico"
                    this.leyenda = true
                    break;
                case "encefaloBasePartes2":
                    this.sourcePartes = "/3D/" + organo + "/Partes/Partes2.jpg"
                    this.model = " 2.Modelo Base - Circunvoluciones cerebrales"
                    this.leyenda = true
                    break;
                case "encefaloBasePartes3":
                    this.sourcePartes = "/3D/" + organo + "/Partes/Partes4.jpg"
                    this.model = " 4.Modelo Base - Estructuras del encéfalo"
                    this.leyenda = true
                    break;
                case "encefaloBasePartes4":
                    this.sourcePartes = "/3D/" + organo + "/Partes/Partes3.jpg"
                    this.model = " 3.Modelo Base - Surcos cerebrales"
                    this.leyenda = true
                    break;
                case "encefaloBasePartes5":
                    this.sourcePartes = "/3D/" + organo + "/Partes/Partes5.jpg"
                    this.model = " 5.Modelo Base - Estructuras del encéfalo (vista ventral)"
                    this.leyenda = true
                    break;
                case "encefaloCortePartes1":
                    this.sourcePartes = "/3D/" + organo + "/Partes/Partes6.jpg"
                    this.model = " 1.Corte plano medio - Estructuras encéfalo "
                    this.leyenda = true
                    break;
                case "rinonBase":
                    this.options = "rinonBase"
                    this.model = "Corte plano medio"
                    this.leyenda = true
                    break;
                case "rinonBasePartes1":
                    this.sourcePartes = "/3D/" + organo + "/Partes/Partes1.jpg"
                    this.options = "rinonBase"
                    this.model = "1.Estructuras externas del riñón"
                    this.leyenda = true
                    break;
                case "rinonBasePartes2":
                    this.sourcePartes = "/3D/" + organo + "/Partes/Partes2.jpg"
                    this.options = "rinonBase"
                    this.model = "2.Estructuras internas del riñón"
                    this.leyenda = true
                    break;
                case "corazonBase":
                    this.options = "corazonBase"
                    this.model = "Modelo Base"
                    this.leyenda = false
                    break;
                case "corazonBasePartes1":
                    this.sourcePartes = "/3D/" + organo + "/Partes/Partes1.jpg"
                    this.options = "corazonBase"
                    this.model = "1.Corazón cara auricular: compartimentos, surcos y grandes vasos"
                    this.leyenda = true
                    break;
                case "corazonBasePartes2":
                    this.sourcePartes = "/3D/" + organo + "/Partes/Partes2.jpg"
                    this.options = "corazonBase"
                    this.model = "2.Corazón cara atrial: compartimentos, surcos y grandes vasos"
                    this.leyenda = true
                    break;
                case "corazonCorte":
                    this.options = "corazonCorte"
                    this.model = "Corte plano medio"
                    this.leyenda = false
                    break;
                case "corazonCortePartes1":
                    this.options = "corazonCorte"
                    this.model = "Corazón (corte sagital): compartimentos y estructuras"
                    this.leyenda = false
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