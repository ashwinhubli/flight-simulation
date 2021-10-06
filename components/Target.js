AFRAME.registerComponent("target-ring",{
  init:function(){
    for(i =1;i<=20;i++){
      var id = `ring${i}`;
      var posx = (Math.random()*3000+(-1000))  
      var posy = (Math.random()*2+(-1))  
      var posz = (Math.random()*3000+ -1000)  
      var position = {x:posx,y:posy,z:posz}
      
      this.createRings(id,position)
    }
  },
  createRings:function(id,position){
    var terrain1 = document.querySelector("#terrain"); 

    var ring1 = document.createElement("a-entity");
    ring1.setAttribute("id",id);
    ring1.setAttribute("position",position);
    ring1.setAttribute("material","color","#ff9100"); 
    ring1.setAttribute("geometry",{primitive:"torus",radius:8}); 
    ring1.setAttribute("static-body",{shape:"sphere",sphereRadius:2})
    ring1.setAttribute("game-play",{elementId:`#${id}`})

    terrain1.appendChild(ring1);
}

})