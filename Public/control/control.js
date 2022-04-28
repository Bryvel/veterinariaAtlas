
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
        portada:true
        

    },
    mounted(){
        this.getPartes("encefalo")
    },
    methods:{
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
       this.sourceLamina="/organos/encefalo/encefalo"+index+".html" 
       this.sourceAtlas="/organos/encefalo/encefalo"+index+".jpg" 
       this.nameLamina=this.partes[index];
      },
      _setMode: function(mode){
          if (mode=="atlas"){
            this.laminaMode=true;
            return
          }
          this.laminaMode=false;
         
      }
    }
  })

 