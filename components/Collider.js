AFRAME.registerComponent("flying-birds",{
    init:function(){
        for(i =1;i<=20;i++){
          var id = `hurdle${i}`;
          var posx = (Math.random()*3000+ -1000)  
          var posy = (Math.random()*2+ -1)  
          var posz = (Math.random()*3000+ -1000)  
          var position = {x:posx,y:posy,z:posz}
          
          this.flyingBirds(id,position)
        }
      },
  flyingBirds:(id,position)=>{
    var terrain1 = document.querySelector("#terrain");  
    
    var bird1 = document.createElement("a-entity");
    bird1.setAttribute("id",id);
    bird1.setAttribute("position",position);
    bird1.setAttribute("scale",{x:500,y:500,z:500});
    bird1.setAttribute("static-body",{shape:"sphere",sphereRadius:5})

    bird1.setAttribute(
     "gltf-model",
     "./assets/models/flying_bird/scene.gltf"   
    );  

    bird1.setAttribute("animation-mixer",{});
    bird1.setAttribute("game-play",{elementId:`#${id}`})

    terrain1.appendChild(bird1);
}  
})