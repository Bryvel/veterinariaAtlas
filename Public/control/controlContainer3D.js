const contenedorLamina = new Vue({
    el: "#controlador3D",
    data: {
        organo: "",
        title: "",
        source:"",
        options:"",
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
 methods:{
    _charge3D: function(organo,modelo){
        this.source="/3D/"+organo+"/Contenedores/"+modelo+".html?organo="+organo+"&modelo="+modelo
        switch (modelo) {
            case "encefaloBase":
                this.options = "encefaloBase"
                break;
            case "encefaloCorte":
                this.options = "encefaloCorte"
   

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