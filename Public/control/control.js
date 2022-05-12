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
        organo:""

    },
    methods:{
      _laminaChoiser: function(){
           this.portada=false;
           this.loading=true;
           this.getPartes(this.organo)
           this.loading=false;
           this.lamina=true;
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

 