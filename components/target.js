// Registering component in Target.js

AFRAME.registerComponent("target-ring", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `ring${i}`;
  
        //position variables   
        var posX = Math.random() * 100 + -50;
        var posY = 2;
        var posZ = Math.random() * 100 + -50;
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createRings(id, position);
      }
    } ,
  
    createRings: function(id, position) { 
      
      var terrainEl = document.querySelector("#cityTerrain");
  
      var ringEl = document.createElement("a-entity");
  
      ringEl.setAttribute("id",id);
      ringEl.setAttribute("position",position);
      
      ringEl.setAttribute("material","color","#ff9100");
      
      ringEl.setAttribute("geometry",{ primitive: "torus",radius: 1 });   
  
      terrainEl.appendChild(ringEl);
    }
  });
  
  