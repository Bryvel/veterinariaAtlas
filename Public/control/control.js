
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
      _setLamina: function(index){
       this.sourceLamina="/organos/encefalo"+index+".html" 
       this.sourceAtlas="/organos/encefalo"+index+".jpg" 
       this.nameLamina=this.partes[index];
       this.modePanel=true;
       this.laminaMode=false;
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

 