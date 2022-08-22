

const contenedorLamina = new Vue({
    el: "#contenedorLamina",   
    data:{
        partes:{},
        nombre:"",
        sourceLamina:"",
        sourceAtlas:"",
        nameLamina:"",
        modePanel:false,
        laminaMode:false,
        index:"",
        portada:true,
        lamina:false,
        loading:false,
        organo:"",
        nameShow:true,
        ruta3D:""

    },
    mounted(){
     this.organo= this.obtenerParametroRuta("organo")
     this.ruta3D="/3D?organo="+this.organo
      this.getPartes(this.organo)
    },
    methods:{

      obtenerParametroRuta: function(nombreParametro) {
        let result = "";
        let tmp = [];
        let items = location.search.substr(1).split("&");
        for (let index = 0; index < items.length; index++) {
          tmp = items[index].split("=");
          if (tmp[0] === nombreParametro) result = decodeURIComponent(tmp[1]);
        }
        return result;
      },
      getPartes: async function(organo){
          const dataRaw= await axios.get("http://atlascanino.uce.edu.ec/api/v1/getOrgano/"+organo)
          this.partes=dataRaw.data[0].partes
          this.nombre=dataRaw.data[0].nombre
      },
      _loadingImg: function(index){
       this._setLamina(index)
       this.modePanel=true;
       this.laminaMode=false;
      },
      _setLamina: function(index){
       this.sourceLamina="/organos/"+this.organo+"/"+this.organo+index+".html" 
       this.sourceAtlas="/organos/"+this.organo+"/"+this.organo+index+".jpg" 
       this.nameLamina=(index+1)+". "+this.partes[index];
       this.nameShow=true
      },
      _setMode: function(mode){
        
          if (mode=="atlas"){
            this.laminaMode=true;
            this.nameShow=false;
            return
          }
          this.laminaMode=false;
          this.nameShow=true;
         
      }
    }
  })

 