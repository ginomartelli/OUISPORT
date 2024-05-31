
// INTERFACE MENU
const jeux = ["Jeu1","Jeu2","Jeu3","Jeu4"];
const backinterface = document.getElementById("backinterface");
const Interface = document.getElementById("interface");
const canvas = document.getElementById("renderCanvas");
const gameinterface = document.getElementById("gameinterface");
const interface1 = document.getElementById("interface1");
const interface2 = document.getElementById("interface2");
const interface3 = document.getElementById("interface3");
const interface4 = document.getElementById("interface4");
const interfaceParam = document.getElementById("interfaceInfo");
const loading = document.getElementById("loading");
const end1 = document.getElementById("end1");
const end2 = document.getElementById("end2");
const end3 = document.getElementById("end3");
const end4 = document.getElementById("end4");
const wintext = document.getElementById("wintext");
const wintext2 = document.getElementById("wintext2");
const wintext4 = document.getElementById("wintext4");
canvas.classList.add("notplaying");
const menu = document.getElementById("menu");
const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");
const menu3 = document.getElementById("menu3");
const menu4 = document.getElementById("menu4");
const soundactive = document.getElementById("sound");
menu.classList.add("notplaying");
soundactive.classList.add("notplaying");
interface1.classList.add("notplaying");
interface2.classList.add("notplaying");
interface3.classList.add("notplaying");
interface4.classList.add("notplaying");
interfaceParam.classList.add("notplaying");
const info = document.getElementById("INFORMATIONS")
const crowds = document.getElementById("crowds");
const volum = document.getElementById("volume");
gameinterface.classList.add("notplaying");
loading.classList.add("notplaying")
end1.classList.add("notplaying");
end2.classList.add("notplaying");
end3.classList.add("notplaying");
end4.classList.add("notplaying");
//START JEU AFFICHAGE DU HAUT
const start1 = document.getElementById("start1");
start1.classList.add("notplaying");
const start2 = document.getElementById("start2");
start2.classList.add("notplaying");
const start3 = document.getElementById("start3");
start3.classList.add("notplaying");
const start4 = document.getElementById("start4");
start4.classList.add("notplaying");
//SCORES JEU 
const score1 = document.querySelectorAll("#score4")
const score2 = document.querySelectorAll("#score3");
const score3 = document.querySelectorAll("#score2");
const score4 = document.querySelectorAll("#score1");

const tip = document.getElementById("tiptxt");
const tips = ["Si vous jouez sur un ordinateur portable et que le jeu n'est pas fluide, branchez-le sur secteur. Si le problème persiste ou si vous jouez sur un ordinateur fixe, réglez la qualité d'affichage.",
            "Pour ajuster la qualité d'affichage, vous pouvez utiliser le zoom de votre fenêtre de navigateur (CTRL + molette de la souris).",
            "Appuyez sur Échap pour afficher le curseur de la souris.",
            "Pour jouer en plein écran, appuyez sur F11.",
            "Pour couper la musique, cliquez sur l'icône de la note de musique.",
            "La foule utilise les ressources graphiques de votre appareil. Réduisez la foule dans les paramètres si vous avez des bugs",
            "Le jeu peut présenter des comportements étranges si vous le quittez alors qu'une partie est en cours.",
            "Le jeu peut ne pas fonctionner sur le navigateur Opera GX.",
            "Si le nombre de joueurs requis pour jouer à un niveau n'est pas atteint, vous pouvez choisir vos propres règles et techniques pour jouer avec moins de joueurs ou en solo."
        ];
tip.innerHTML = tips[Math.floor(Math.random() * tips.length)]+" <a href='https://github.com/gamesonweb/gow-olympic-edition-ouisport/blob/main/Documentation.md' target='_blank'>Aide</a>";
//JEU 2
var qtebox = document.getElementById("qte");
qtebox.classList.add("notplaying");
//JEU 3
var crs = document.getElementById("crs");
crs.classList.add("notplaying");

//decompte jeu 2 3 
var time = document.getElementById("timej2");
time.classList.add("notplaying");

//FAIL JEU 1
var fail1=false;
var fail2=false;
var fail3 = false;
var fail4 = false;

var pubList = ["./textures/pub1.png", "./textures/pub2.png", "./textures/pub3.png", "./textures/pub4.png", "./textures/pub5.png", "./textures/pub6.png"]
var finish=false;
var activated=false;
var jeut=1;

if(localStorage.getItem("sound")==null){
    localStorage.setItem("sound", true);
}


var background = new BABYLON.Sound("background", "sounds/background.mp3", undefined, null, { loop: true, autoplay: true, volume:0.05});

jeux.forEach((elem) => {
    let jeu = document.getElementById(elem);
    jeu.addEventListener('click', async function(){
        loading.classList.remove("notplaying");
        const engine = new BABYLON.Engine(canvas, true);
        jeut=jeux.indexOf(elem)+1;
        var scene = await createScene(engine);   
        
        engine.resize();
        window.addEventListener("resize", function () {
            engine.resize();
        });
        engine.enterPointerlock();
        gameinterface.classList.add("playing");
        gameinterface.classList.remove("notplaying");
        canvas.classList.remove("notplaying");
        canvas.classList.add("playing");
        menu.classList.remove("notplaying");
        soundactive.classList.remove("notplaying");
        if(jeut==1){
            interface1.classList.remove("notplaying");
            start1.classList.remove("notplaying");
        }else if(jeut==2){
            interface2.classList.remove("notplaying");
            start2.classList.remove("notplaying");
        }else if(jeut==3){
            interface3.classList.remove("notplaying");
            start3.classList.remove("notplaying");
            crs.classList.remove("notplaying");
        } else if(jeut==4){
            interface4.classList.remove("notplaying");                    
            interface2.classList.remove("notplaying");
            start4.classList.remove("notplaying");
        }
        
        engine.resize();
        Interface.classList.add("notplaying");
        backinterface.classList.add("notplaying");
        engine.runRenderLoop(() => {
            scene.render();
        });
    })
})
info.addEventListener('click', function() {
    menu.classList.remove("notplaying");
    interfaceParam.classList.remove("notplaying");
    Interface.classList.add("notplaying");
    if(localStorage.getItem("vol")==null){
        document.getElementById('rangeValue1').innerHTML = 1.5;
        volum.value = 1.5;
    } else {
        document.getElementById('rangeValue1').innerHTML = localStorage.getItem("vol");
        volum.value = localStorage.getItem("vol");
    }
    if(localStorage.getItem("foule")==null){
        document.getElementById('rangeValue').innerHTML = "25%";
        crowds.value = 25;
    } else {
        document.getElementById('rangeValue').innerHTML = localStorage.getItem("foule")+"%";
        crowds.value = localStorage.getItem("foule");
    }
})
crowds.addEventListener('click', function() {
    var val = crowds.value;
    localStorage.setItem("foule", val);
});
volum.addEventListener('click', function() {
    var val = volum.value;
    localStorage.setItem("vol", val);
});
menu.addEventListener('click', function() {
    location.reload();
})
menu1.addEventListener('click', function() {
    location.reload();
})
menu2.addEventListener('click', function() {
    location.reload();
})
menu3.addEventListener('click', function() {
    location.reload();
})
menu4.addEventListener('click', function() {
    location.reload();
})
soundactive.addEventListener('click', function() {
    if(localStorage.getItem("sound")=="true"){
        localStorage.setItem("sound", false);
        background.setVolume(0);
    } else {
        localStorage.setItem("sound", true);
        background.setVolume(0.05*localStorage.getItem("vol"));
    }
});

//SCENE DE JEU

async function createScene(engine) {
    var scene = new BABYLON.Scene(engine);
    scene.onPointerDown = (evt)=>{
        if(evt.button === 0) engine.enterPointerlock();
        if(evt.button === 1) engine.exitPointerlock();
    }

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("hemiLight", new BABYLON.Vector3(-1, 1, 0), scene);
    light.diffuse = new BABYLON.Color3(1, 1, 1);
    light.specular = new BABYLON.Color3(0, 0, 0);
    light.groundColor = new BABYLON.Color3(1, 1, 1);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.8;

    var vol = localStorage.getItem("vol");
    if(vol==null) {vol=1;}
    //soundstade
    const music1 = new BABYLON.Sound("stade", "sounds/stadium.mp3", scene, null, { loop: true, autoplay: true, length: 24, offset: 2.0, volume:0.12*vol});
    background = new BABYLON.Sound("background", "sounds/background.mp3", scene, null, { loop: true, autoplay: true, volume:0.05*vol});
    //clapping stade
    const clap1 = new BABYLON.Sound("gunshot", "sounds/clapping.mp3", scene,null, { loop: true, autoplay: false, length: 18, offset: 3.0, volume:0.5*vol});
    //wintrumpet
    const wined = new BABYLON.Sound("win", "sounds/win.mp3", scene,null, { loop: false, autoplay: false, volume:0.4*vol});
    const jumpsound = new BABYLON.Sound("jump", "sounds/jump.mp3", scene, null, { loop: false, autoplay: false, volume:0.4*vol, length: 1.4, offset: 0.6});
    const success = new BABYLON.Sound("success", "sounds/success.mp3", scene, null, { loop: false, autoplay: false, volume:0.4*vol,length: 1.5, offset: 0.5});
    const countdown = new BABYLON.Sound("countdown", "sounds/countdown.mp3", scene, null, { loop: false, autoplay: false, volume:0.4*vol});
    //sound jeu 3
    const air = new BABYLON.Sound("air", "sounds/air.mp3", scene, null, { loop: false, autoplay: false, volume:0.22*vol,length: 1, offset: 0.5});
    const machine = new BABYLON.Sound("machine", "sounds/machine.mp3", scene, null, { loop: false, autoplay: false, volume:0.12*vol,length: 5, offset: 0.5});
    const sifflet = new BABYLON.Sound("sifflet", "sounds/sifflet.mp3", scene, null, { loop: false, autoplay: false, volume:0.4*vol,length: 1.5, offset: 0.5});
    
    const envTex = BABYLON.CubeTexture.CreateFromPrefilteredData("./textures/environment.env", scene);
    scene.environmentTexture = envTex;
    scene.createDefaultSkybox(envTex,true);

    //para jeu1  utile pour autre jeu ??
    var positions= new Array();
    for(let i=0;i<20;i++){
        positions.push(140-i*12);
    }
    var boxs1=[];
    var boxs2=[];
    var boxs3=[];
    var boxs4=[];
    var metal = new BABYLON.Sound("metal", "sounds/metal.mp3", scene, null, { loop: false, autoplay: false, volume:0.005*vol});

    //gradin
    var foule = localStorage.getItem("foule");
    if(foule==null) {foule=25;}
    if(localStorage.getItem("sound")=="false"){
        background.setVolume(0);
    }
    if(jeut==3){
        foule=foule/3;
    }        

    var path = [];
    var bottomLine = BABYLON.Curve3.CreateQuadraticBezier(
    new BABYLON.Vector3(0, 3, -10),
    new BABYLON.Vector3(7.5, 8, -15),
    new BABYLON.Vector3(16, 3, -10),
    50);
    path.push(bottomLine.getPoints());
    var topLine = BABYLON.Curve3.CreateQuadraticBezier(
    new BABYLON.Vector3(0, 0, 20),
    new BABYLON.Vector3(7.5, 5, 20),
    new BABYLON.Vector3(16, 0, 20),
    50);
    path.push(topLine.getPoints());
    var path1=[];
    bottomLine = BABYLON.Curve3.CreateQuadraticBezier(
    new BABYLON.Vector3(0, 3, -10),
    new BABYLON.Vector3(7.5, 8, -15),
    new BABYLON.Vector3(16, 3, -10),
    4);
    path1.push(bottomLine.getPoints());
    topLine = BABYLON.Curve3.CreateQuadraticBezier(
    new BABYLON.Vector3(0, 0, 20),
    new BABYLON.Vector3(7.5, 2, 20),
    new BABYLON.Vector3(16, 0, 20),
    4);
    path1.push(topLine.getPoints());
    var barricades = [[],[],[],[]];
    if(jeut==1){
        var Lbarricade = await BABYLON.SceneLoader.LoadAssetContainerAsync("./models/","Barricade.glb",scene);
        Lbarricade.addAllToScene();
        Lbarricade.meshes[0].position.y=-10;
    }
    for(let k=0; k<3;k++){
        var stair = BABYLON.MeshBuilder.CreateGround("stair", { width: 5, height: 10 }, scene);
        stair.material = CreateStairMaterial();
        stair.position.y=0.5+k*3;
        stair.position.x=-173-10*k;
        stair.position.z=32;
        stair.rotation.y=-1.57;
        stair.rotation.x=-0.52;
        var stair = BABYLON.MeshBuilder.CreateGround("stair", { width: 5, height: 10 }, scene);
        stair.material = CreateStairMaterial();
        stair.position.y=0.5+k*3;
        stair.position.x=173+10*k;
        stair.position.z=-32;
        stair.rotation.y=1.57;
        stair.rotation.x=-0.52;
        for(let j=0; j<5;j++){
            for(let i=0;i<4;i++){
                var grad1 = BABYLON.MeshBuilder.CreateGround("grad1", { width: 15, height: 1 }, scene);
                grad1.material = CreateGradMaterial();
                grad1.position.y=0.5+j*0.6+k*3;
                grad1.position.x=-172-j-10*k;
                grad1.position.z=16*i-24;
                grad1.rotation.y=-1.57;
                grad1.rotation.x=-1;
                var grad1 = BABYLON.MeshBuilder.CreateGround("grad1", { width: 15, height: 1 }, scene);
                grad1.material = CreateGradMaterial();
                grad1.position.y=0.5+j*0.6+k*3;
                grad1.position.x=172+j+10*k;
                grad1.position.z=16*i-24;
                grad1.rotation.y=1.57;
                grad1.rotation.x=-1;
                if(j==0){
                    var stair = BABYLON.MeshBuilder.CreateGround("stair", { width: 5, height: 10 }, scene);
                    stair.material = CreateStairMaterial();
                    stair.position.y=0.5+k*3;
                    stair.position.x=-173-10*k;
                    stair.position.z=16*i-32;
                    stair.rotation.y=-1.57;
                    stair.rotation.x=-0.52;
                    var stair = BABYLON.MeshBuilder.CreateGround("stair", { width: 5, height: 10 }, scene);
                    stair.material = CreateStairMaterial();
                    stair.position.y=0.5+k*3;
                    stair.position.x=173+10*k;
                    stair.position.z=-16*i+32;
                    stair.rotation.y=1.57;
                    stair.rotation.x=-0.52;
                    if(k==2){
                        var bendedMesh = BABYLON.MeshBuilder.CreateRibbon("ribbon", { pathArray: path }, scene)
                        bendedMesh.material = CreateBendedMaterial();
                        bendedMesh.position.z=16*i-32;
                        bendedMesh.rotation.y=-1.57;
                        bendedMesh.position.y=10;
                        bendedMesh.position.x=-178;
                        var bendedMesh = BABYLON.MeshBuilder.CreateRibbon("ribbon", { pathArray: path }, scene)
                        bendedMesh.material = CreateBendedMaterial();
                        bendedMesh.position.z=-16*i+32;
                        bendedMesh.rotation.y=1.57;
                        bendedMesh.position.y=10;
                        bendedMesh.position.x=178;
                    }
                    if(k==1){
                        var bendedMesh = BABYLON.MeshBuilder.CreateRibbon("ribbon", {pathArray: path1 }, scene)
                        bendedMesh.material = CreateBendMaterial();
                        bendedMesh.position.z=16*i-32;
                        bendedMesh.rotation.y=-1.57;
                        bendedMesh.position.y=9.8;
                        bendedMesh.position.x=-178;
                        var bendedMesh = BABYLON.MeshBuilder.CreateRibbon("ribbon", {pathArray: path1 }, scene)
                        bendedMesh.material = CreateBendMaterial();
                        bendedMesh.position.z=-16*i+32;
                        bendedMesh.rotation.y=1.57;
                        bendedMesh.position.y=9.8;
                        bendedMesh.position.x=178;
                    }
                }
            }
            for(let i=0;i<=20;i++){
                var grad = BABYLON.MeshBuilder.CreateGround("grad", { width: 15, height: 1 }, scene);
                grad.material = CreateGradMaterial();
                grad.position.y=0.5+j*0.6+k*3;
                grad.position.z=30+j+10*k;
                grad.position.x=16*i-160;
                grad.rotation.x=-1;
                var grad1 = BABYLON.MeshBuilder.CreateGround("grad1", { width: 15, height: 1 }, scene);
                grad1.material = CreateGradMaterial();
                grad1.position.y=0.5+j*0.6+k*3;
                grad1.position.z=-30-j-10*k;
                grad1.position.x=16*i-160;
                grad1.rotation.y=-3.14;
                grad1.rotation.x=-1;   
                if(j==0){
                    var stair = BABYLON.MeshBuilder.CreateGround("stair", { width: 5, height: 10 }, scene);
                    stair.material = CreateStairMaterial();
                    stair.position.y=0.5+k*3;
                    stair.position.z=30.5+10*k;
                    stair.position.x=16*i-168;
                    stair.rotation.x=-0.52;
                    var stair = BABYLON.MeshBuilder.CreateGround("stair", { width: 5, height: 10 }, scene);
                    stair.material = CreateStairMaterial();
                    stair.position.y=0.5+k*3;
                    stair.position.z=-30.5-10*k;
                    stair.position.x=16*i-168;
                    stair.rotation.y=-3.14;
                    stair.rotation.x=-0.52;
                    if(k==2){
                        var bendedMesh = BABYLON.MeshBuilder.CreateRibbon("ribbon", { pathArray: path }, scene)
                        bendedMesh.material = CreateBendedMaterial();
                        bendedMesh.position.x=16*i-168;
                        bendedMesh.position.y=10;
                        bendedMesh.position.z=35.5;
                        var bendedMesh = BABYLON.MeshBuilder.CreateRibbon("ribbon", { pathArray: path }, scene)
                        bendedMesh.material = CreateBendedMaterial();
                        bendedMesh.position.x=16*(i+1)-168;
                        bendedMesh.rotation.y=-3.14;
                        bendedMesh.position.y=10;
                        bendedMesh.position.z=-35.5;
                    }
                    if(k==1){
                        var bendedMesh = BABYLON.MeshBuilder.CreateRibbon("ribbon", {pathArray: path1 }, scene)
                        bendedMesh.material = CreateBendMaterial();
                        bendedMesh.position.x=16*i-168;
                        bendedMesh.position.y=9.8;
                        bendedMesh.position.z=35.5;
                        var bendedMesh = BABYLON.MeshBuilder.CreateRibbon("ribbon", {pathArray: path1 }, scene)
                        bendedMesh.material = CreateBendMaterial();
                        bendedMesh.position.x=16*(i+1)-168;
                        bendedMesh.rotation.y=-3.14;
                        bendedMesh.position.y=9.8;
                        bendedMesh.position.z=-35.5;
                    }
                } else if(jeut==1&&k==0){
                    var barricade = Lbarricade.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
                    console.log(barricades);
                    barricade = barricade.rootNodes[0];
                    barricade.position.z=3.8-2.6*(j-1);
                    barricade.position.x=positions.at(i);
                    barricade.rotationQuaternion=false;
                    barricade.rotation.y=3.14;
                    barricade.position.y=0;
                    barricades[j-1].push([barricade, false]);
                    scene.onAfterRenderObservable.add(function(){
                        if(!barricades[j-1].at(i)[1]){
                            if(j==4&&fail1){   //j1
                                if(barricades[j-1].at(i)[0].intersectsMesh(camerabox1,false)){
                                    barricades[j-1].at(i)[0].rotation.z=1.47;
                                    barricades[j-1].at(i)[1]=true;
                                    metal.play();
                                }
                            } else if(j==3&&fail2){   //j1
                                if(barricades[j-1].at(i)[0].intersectsMesh(camerabox2,false)){
                                    barricades[j-1].at(i)[0].rotation.z=1.47;
                                    barricades[j-1].at(i)[1]=true;
                                    metal.play();
                                }
                            } else if(j==2&&fail3){   //j1
                                if(barricades[j-1].at(i)[0].intersectsMesh(camerabox3,false)){
                                    barricades[j-1].at(i)[0].rotation.z=1.47;
                                    barricades[j-1].at(i)[1]=true;
                                    metal.play();
                                }
                            } else if(j==1&&fail4){   //j1
                                if(barricades[j-1].at(i)[0].intersectsMesh(camerabox4,false)){
                                    barricades[j-1].at(i)[0].rotation.z=1.47;
                                    barricades[j-1].at(i)[1]=true;
                                    metal.play();
                                }
                            }
                        }
                    });
                    var limitBox = BABYLON.MeshBuilder.CreateBox("startBox", { height: 2 , width:0.4,depth:2}, scene);
                    limitBox.position.x = positions.at(i);
                    limitBox.position.z=-3.8+2.5*(j-1);
                    limitBox.isVisible=false;
                    if(j==1) boxs1.push(limitBox);
                    if(j==2) boxs2.push(limitBox);
                    if(j==3) boxs3.push(limitBox);
                    else boxs4.push(limitBox);
                }
            }
        }
    }
    for(let i=0;i<2;i++){
        var grad1 = BABYLON.MeshBuilder.CreateGround("grad1", { width: 370, height: 6 }, scene);
        grad1.material = CreateGradGroundMaterial();
        grad1.position.y=(i+1)*3;
        grad1.position.z=37.2+10*i;
        var wall = BABYLON.MeshBuilder.CreateGround("wall", { width: 370, height: 25 }, scene);
        wall.material = CreateWallMaterial();
        wall.position.z=-40.5+81*i;
        var grad1 = BABYLON.MeshBuilder.CreateGround("grad1", { width: 370, height: 6 }, scene);
        grad1.material = CreateGradGroundMaterial();
        grad1.position.y=(i+1)*3;
        grad1.position.z=-37.2-10*i;
        var wall = BABYLON.MeshBuilder.CreateGround("wall", { width: 370, height: 25 }, scene);
        wall.material = CreateWallMaterial();
        wall.position.z=-55.5+111.03*i;
        wall.rotation.x=1.57;
        var grad1 = BABYLON.MeshBuilder.CreateGround("grad1", { width: 6, height: 100 }, scene);
        grad1.material = CreateGradGroundMaterial();
        grad1.position.y=(i+1)*3;
        grad1.position.x=179.5+10*i;
        var wall = BABYLON.MeshBuilder.CreateGround("wall", { width: 100, height: 25 }, scene);
        wall.material = CreateWallMaterial();
        wall.position.x=180-360*i;
        wall.rotation.y=1.57;
        var grad1 = BABYLON.MeshBuilder.CreateGround("grad1", { width: 6, height: 100 }, scene);
        grad1.material = CreateGradGroundMaterial();
        grad1.position.y=(i+1)*3;
        grad1.position.x=-179.5-10*i;
        var wall = BABYLON.MeshBuilder.CreateGround("wall", { width: 100, height: 25 }, scene);
        wall.material = CreateWallMaterial();
        wall.position.x=-198.1+396.2*i;
        wall.rotation.x=1.57;
        wall.rotation.y=1.57;
        for(let j=0;j<2;j++){
            var cornwall = BABYLON.MeshBuilder.CreateGround("wall", { width: 25, height: 27 }, scene);
            cornwall.material = CreateWallMaterial();
            cornwall.position.x=-183+363*i;
            cornwall.rotation.x=1.57;
            cornwall.position.z=34-68*j;
            var cornwall = BABYLON.MeshBuilder.CreateGround("wall", { width: 25, height: 27 }, scene);
            cornwall.material = CreateWallMaterial();
            cornwall.position.x=-170.5+338*i;
            cornwall.rotation.x=1.57;
            cornwall.rotation.y=1.57;
            cornwall.position.z=46.5-93*j;
        }
    }
    for(let i=0;i<19;i++){
        const pub = BABYLON.MeshBuilder.CreateGround("pub", { width: 18, height: 1.24 }, scene);
        pub.position.z=28;
        pub.position.x=18*i-170;
        pub.rotation.x=-1.47;
        pub.position.y=0.62
        pub.material = CreatePubMaterial();
        scene.onAfterRenderObservable.add(function(){
            pub.position.x+=0.05;
            if(pub.position.x>170){
                pub.position.x=-170;
            }
        })
        const pub2 = BABYLON.MeshBuilder.CreateGround("pub", { width: 18, height: 1.24 }, scene);
        pub2.position.z=-28;
        pub2.position.x=170-18*i;
        pub2.rotation.x=-1.47;
        pub2.rotation.y=3.14;
        pub2.position.y=0.62
        pub2.material = CreatePubMaterial();
        scene.onAfterRenderObservable.add(function(){
            pub2.position.x-=0.05;
            if(pub2.position.x<-170){
                pub2.position.x=170;
            }
        })
    for(let i=0;i<5;i++){
        const pub3 = BABYLON.MeshBuilder.CreateGround("pub", { width: 18, height: 1.24 }, scene);
        pub3.position.z=-50+18*i;
        pub3.position.x=-170;
        pub3.rotation.x=-1.47;
        pub3.rotation.y=-Math.PI/2;
        pub3.position.y=0.62
        pub3.material = CreatePubMaterial();
        scene.onAfterRenderObservable.add(function(){
            pub3.position.z+=0.05;
            if(pub3.position.z>40){
                pub3.position.z=-50;
            }
        })
        const pub4 = BABYLON.MeshBuilder.CreateGround("pub", { width: 18, height: 1.24 }, scene);
        pub4.position.z=50-18*i;
        pub4.position.x=170;
        pub4.rotation.x=-1.47;
        pub4.rotation.y=Math.PI/2;
        pub4.position.y=0.62
        pub4.material = CreatePubMaterial();
        scene.onAfterRenderObservable.add(function(){
            pub4.position.z-=0.05;
            if(pub4.position.z<-40){
                pub4.position.z=50;
            }
        })
    }
    }
    //foule 
    if(foule!="0"){
        foule=foule*3;
        var posy= new Array();
        var posyrd= new Array();
        for(let i=0;i<15;i++){
            posy.push(i*0.9);
        }
        for(let i=0;i<97;i++){
            posyrd.push(posy[Math.floor(Math.random() * posy.length)]);
        }
        var posx = new Array();
        var posxrd = new Array();
        for(let i=0;i<97;i++){
            posx.push(7*i-340);
        }
        for(let i=0;i<97;i++){
            posxrd.push(posx[Math.floor(Math.random() * posx.length)]+Math.random() *2);
        }
        var box = await BABYLON.SceneLoader.ImportMeshAsync('',"./models/",'crowd.glb',scene);
        var matrix = BABYLON.Matrix.Translation(0, -10, 0);
        for(let j=0;j<box.meshes.length;j++){
            var mesh = box.meshes[j];
            mesh.rotationQuaternion = false;
            mesh.scaling = new BABYLON.Vector3(0.7, 0.7, 0.7);
            var idx = mesh.thinInstanceAdd(matrix);
            for(let i=0;i<foule;i++){
                var ofstz = 0;
                var ofsty = 0;
                if(posyrd[i]>4.1){ofstz = 9;ofsty=1.9;}
                if(posyrd[i]>8.2){ofstz = 18;ofsty=3.7;}
                var matrix2 = BABYLON.Matrix.Translation(posxrd[i], posyrd[i]+ofsty, -60-2.5*posyrd[i]-ofstz);
                var idx2 = mesh.thinInstanceAddSelf();
                mesh.thinInstanceSetMatrixAt(idx2, matrix2);
            }
        }
        shuffle(posyrd);
        shuffle(posxrd);
        var box = await BABYLON.SceneLoader.ImportMeshAsync('',"./models/",'crowd1.glb',scene);
        box.animationGroups[1].play(true);
        var matrix = BABYLON.Matrix.Translation(2, -10, 0);
        for(let j=0;j<box.meshes.length;j++){
            var mesh = box.meshes[j];
            mesh.rotationQuaternion = false;
            mesh.scaling = new BABYLON.Vector3(0.7, 0.7, 0.7);
            var idx = mesh.thinInstanceAdd(matrix);
            for(let i=0;i<foule;i++){
                var ofstz = 0;
                var ofsty = 0;
                if(posyrd[i]>4.1){ofstz = 9;ofsty=1.9;}
                if(posyrd[i]>8.2){ofstz = 18;ofsty=3.7;}
                var matrix2 = BABYLON.Matrix.Translation(posxrd[i]+2, posyrd[i]+ofsty, -60-2.5*posyrd[i]-ofstz);
                var idx2 = mesh.thinInstanceAddSelf();
                mesh.thinInstanceSetMatrixAt(idx2, matrix2);
            }
        }
        shuffle(posyrd);
        shuffle(posxrd);
        var box = await BABYLON.SceneLoader.ImportMeshAsync('',"./models/",'crowd2.glb',scene);
        box.animationGroups[3].play(true);
        var matrix = BABYLON.Matrix.Translation(4, -50, 0);
        for(let j=0;j<box.meshes.length;j++){
            var mesh = box.meshes[j];
            mesh.rotationQuaternion = false;
            mesh.scaling = new BABYLON.Vector3(0.7, 0.7, 0.7);
            var idx = mesh.thinInstanceAdd(matrix);
            for(let i=0;i<foule;i++){
                var ofstz = 0;
                var ofsty = 0;
                if(posyrd[i]>4.1){ofstz = 9;ofsty=1.9;}
                if(posyrd[i]>8.2){ofstz = 18;ofsty=3.7;}
                var matrix2 = BABYLON.Matrix.Translation(posxrd[i]-2, posyrd[i]+ofsty, -60-2.5*posyrd[i]-ofstz);
                var idx2 = mesh.thinInstanceAddSelf();
                mesh.thinInstanceSetMatrixAt(idx2, matrix2);
            }
        }
        shuffle(posyrd);
        shuffle(posxrd);
        var box = await BABYLON.SceneLoader.ImportMeshAsync('',"./models/",'crowd3.glb',scene);
        box.animationGroups[1].play(true);
        var matrix = BABYLON.Matrix.Translation(8, -50, 0);
        for(let j=0;j<box.meshes.length;j++){
            var mesh = box.meshes[j];
            mesh.rotationQuaternion = false;
            mesh.scaling = new BABYLON.Vector3(0.7, 0.7, 0.7);
            var idx = mesh.thinInstanceAdd(matrix);
            for(let i=0;i<foule;i++){
                var ofstz = 0;
                var ofsty = 0;
                if(posyrd[i]>4.1){ofstz = 9;ofsty=1.9;}
                if(posyrd[i]>8.2){ofstz = 18;ofsty=3.7;}
                var matrix2 = BABYLON.Matrix.Translation(posxrd[i]-4, posyrd[i]+ofsty, -60-2.5*posyrd[i]-ofstz);
                var idx2 = mesh.thinInstanceAddSelf();
                mesh.thinInstanceSetMatrixAt(idx2, matrix2);
            }
        }
        shuffle(posyrd);
        shuffle(posxrd);
        var box = await BABYLON.SceneLoader.ImportMeshAsync('',"./models/",'crowd4.glb',scene);
        box.animationGroups[0].play(true);
        var matrix = BABYLON.Matrix.Translation(6, -50, 0);
        for(let j=0;j<box.meshes.length;j++){
            var mesh = box.meshes[j];
            mesh.rotationQuaternion = false;
            mesh.scaling = new BABYLON.Vector3(0.7, 0.7, 0.7);
            var idx = mesh.thinInstanceAdd(matrix);
            for(let i=0;i<foule;i++){
                var ofstz = 0;
                var ofsty = 0;
                if(posyrd[i]>4.1){ofstz = 9;ofsty=1.9;}
                if(posyrd[i]>8.2){ofstz = 18;ofsty=3.7;}
                var matrix2 = BABYLON.Matrix.Translation(posxrd[i]-6, posyrd[i]+ofsty, -60-2.5*posyrd[i]-ofstz);
                var idx2 = mesh.thinInstanceAddSelf();
                mesh.thinInstanceSetMatrixAt(idx2, matrix2);
            }
        }
        shuffle(posyrd);
        shuffle(posxrd);
        var box = await BABYLON.SceneLoader.ImportMeshAsync('',"./models/",'crowd.glb',scene);
        var matrix = BABYLON.Matrix.Translation(0, -50, 0);
        for(let j=0;j<box.meshes.length;j++){
            var mesh = box.meshes[j];
            mesh.rotationQuaternion = null;
            mesh.scaling = new BABYLON.Vector3(0.7, 0.7, 0.7);
            var idx = mesh.thinInstanceAdd(matrix);
            mesh.rotation= new BABYLON.Vector3(0,Math.PI/2,0);
            for(let i=0;i<foule;i++){
                var ofstz = 0;
                var ofsty = 0;
                if(posyrd[i]>4.1){ofstz = 9;ofsty=1.9;}
                if(posyrd[i]>8.2){ofstz = 18;ofsty=3.7;}
                var matrix2 = BABYLON.Matrix.Translation(posxrd[i], posyrd[i]+ofsty, -60-2.5*posyrd[i]-ofstz);
                var idx2 = mesh.thinInstanceAddSelf();
                mesh.thinInstanceSetMatrixAt(idx2, matrix2);
            }
        }
        shuffle(posyrd);
        shuffle(posxrd);
        var box = await BABYLON.SceneLoader.ImportMeshAsync('',"./models/",'crowd1.glb',scene);
        box.animationGroups[3].play(true);
        var matrix = BABYLON.Matrix.Translation(2, -50, 0);
        for(let j=0;j<box.meshes.length;j++){
            var mesh = box.meshes[j];
            mesh.rotationQuaternion = false;
            mesh.scaling = new BABYLON.Vector3(0.7, 0.7, 0.7);
            var idx = mesh.thinInstanceAdd(matrix);
            mesh.rotation= new BABYLON.Vector3(0,Math.PI/2,0);
            for(let i=0;i<foule;i++){
                var ofstz = 0;
                var ofsty = 0;
                if(posyrd[i]>4.1){ofstz = 9;ofsty=1.9;}
                if(posyrd[i]>8.2){ofstz = 18;ofsty=3.7;}
                var matrix2 = BABYLON.Matrix.Translation(posxrd[i]+2, posyrd[i]+ofsty, -60-2.5*posyrd[i]-ofstz);
                var idx2 = mesh.thinInstanceAddSelf();
                mesh.thinInstanceSetMatrixAt(idx2, matrix2);
            }
        }
        shuffle(posyrd);
        shuffle(posxrd);
        var box = await BABYLON.SceneLoader.ImportMeshAsync('',"./models/",'crowd2.glb',scene);
        box.animationGroups[0].play(true);
        var matrix = BABYLON.Matrix.Translation(4, -50, 0);
        for(let j=0;j<box.meshes.length;j++){
            var mesh = box.meshes[j];
            mesh.rotationQuaternion = false;
            mesh.scaling = new BABYLON.Vector3(0.7, 0.7, 0.7);
            var idx = mesh.thinInstanceAdd(matrix);
            mesh.rotation= new BABYLON.Vector3(0,Math.PI/2,0);
            for(let i=0;i<foule;i++){
                var ofstz = 0;
                var ofsty = 0;
                if(posyrd[i]>4.1){ofstz = 9;ofsty=1.9;}
                if(posyrd[i]>8.2){ofstz = 18;ofsty=3.7;}
                var matrix2 = BABYLON.Matrix.Translation(posxrd[i]-2, posyrd[i]+ofsty, -60-2.5*posyrd[i]-ofstz);
                var idx2 = mesh.thinInstanceAddSelf();
                mesh.thinInstanceSetMatrixAt(idx2, matrix2);
            }
        }
        shuffle(posyrd);
        shuffle(posxrd);
        var box = await BABYLON.SceneLoader.ImportMeshAsync('',"./models/",'crowd3.glb',scene);
        box.animationGroups[1].play(true);
        var matrix = BABYLON.Matrix.Translation(8, -50, 0);
        for(let j=0;j<box.meshes.length;j++){
            var mesh = box.meshes[j];
            mesh.rotationQuaternion = false;
            mesh.scaling = new BABYLON.Vector3(0.7, 0.7, 0.7);
            var idx = mesh.thinInstanceAdd(matrix);
            mesh.rotation= new BABYLON.Vector3(0,Math.PI/2,0);
            for(let i=0;i<foule;i++){
                var ofstz = 0;
                var ofsty = 0;
                if(posyrd[i]>4.1){ofstz = 9;ofsty=1.9;}
                if(posyrd[i]>8.2){ofstz = 18;ofsty=3.7;}
                var matrix2 = BABYLON.Matrix.Translation(posxrd[i]-4, posyrd[i]+ofsty, -60-2.5*posyrd[i]-ofstz);
                var idx2 = mesh.thinInstanceAddSelf();
                mesh.thinInstanceSetMatrixAt(idx2, matrix2);
            }
        }
        shuffle(posyrd);
        shuffle(posxrd);
        var box = await BABYLON.SceneLoader.ImportMeshAsync('',"./models/",'crowd4.glb',scene);
        box.animationGroups[1].play(true);
        var matrix = BABYLON.Matrix.Translation(6, -50, 0);
        for(let j=0;j<box.meshes.length;j++){
            var mesh = box.meshes[j];
            mesh.rotationQuaternion = false;
            mesh.scaling = new BABYLON.Vector3(0.7, 0.7, 0.7);
            var idx = mesh.thinInstanceAdd(matrix);
            mesh.rotation= new BABYLON.Vector3(0,Math.PI/2,0);
            for(let i=0;i<foule;i++){
                var ofstz = 0;
                var ofsty = 0;
                if(posyrd[i]>4.1){ofstz = 9;ofsty=1.9;}
                if(posyrd[i]>8.2){ofstz = 18;ofsty=3.7;}
                var matrix2 = BABYLON.Matrix.Translation(posxrd[i]-6, posyrd[i]+ofsty, -60-2.5*posyrd[i]-ofstz);
                var idx2 = mesh.thinInstanceAddSelf();
                mesh.thinInstanceSetMatrixAt(idx2, matrix2);
            }
        
        }
        if(foule>10){
            var posy= new Array();
            var posyrd= new Array();
            for(let i=0;i<15;i++){
                posy.push(i*0.9);
            }
            for(let i=0;i<30;i++){
                posyrd.push(posy[Math.floor(Math.random() * posy.length)]);
            }
            var posz = new Array();
            var poszrd = new Array();
            for(let i=0;i<60;i++){
                posz.push(60-2*i);
            }
            for(let i=0;i<30;i++){
                poszrd.push(posz[Math.floor(Math.random() * posz.length)]+Math.random() *2);
            }
            var box = await BABYLON.SceneLoader.ImportMeshAsync('',"./models/",'crowd4.glb',scene);
            box.animationGroups[0].play(true);
            var matrix = BABYLON.Matrix.Translation(6, -50, 0);
            for(let j=0;j<box.meshes.length;j++){
                var mesh = box.meshes[j];
                mesh.rotationQuaternion = false;
                mesh.scaling = new BABYLON.Vector3(0.7, 0.7, 0.7);
                var idx = mesh.thinInstanceAdd(matrix);
                mesh.rotation= new BABYLON.Vector3(0,-Math.PI/4,0);
                for(let i=0;i<foule/4;i++){
                    var ofstz = 0;
                    var ofsty = 0;
                    if(posyrd[i]>4.1){ofstz = 9;ofsty=1.9;}
                    if(posyrd[i]>8.2){ofstz = 18;ofsty=3.7;}
                    var matrix2 = BABYLON.Matrix.Translation(poszrd[i]-6, posyrd[i]+ofsty, -350-2.5*posyrd[i]-ofstz);
                    var idx2 = mesh.thinInstanceAddSelf();
                    mesh.thinInstanceSetMatrixAt(idx2, matrix2);
                }
            }
            shuffle(posyrd);
            shuffle(posxrd);
            var box = await BABYLON.SceneLoader.ImportMeshAsync('',"./models/",'crowd3.glb',scene);
            box.animationGroups[1].play(true);
            var matrix = BABYLON.Matrix.Translation(6, -50, 0);
            for(let j=0;j<box.meshes.length;j++){
                var mesh = box.meshes[j];
                mesh.rotationQuaternion = false;
                mesh.scaling = new BABYLON.Vector3(0.7, 0.7, 0.7);
                var idx = mesh.thinInstanceAdd(matrix);
                mesh.rotation= new BABYLON.Vector3(0,-Math.PI/4,0);
                for(let i=0;i<foule/4;i++){
                    var ofstz = 0;
                    var ofsty = 0;
                    if(posyrd[i]>4.1){ofstz = 9;ofsty=1.9;}
                    if(posyrd[i]>8.2){ofstz = 18;ofsty=3.7;}
                    var matrix2 = BABYLON.Matrix.Translation(poszrd[i]-4, posyrd[i]+ofsty, -350-2.5*posyrd[i]-ofstz);
                    var idx2 = mesh.thinInstanceAddSelf();
                    mesh.thinInstanceSetMatrixAt(idx2, matrix2);
                }
            }
            shuffle(posyrd);
            shuffle(posxrd);
            var box = await BABYLON.SceneLoader.ImportMeshAsync('',"./models/",'crowd2.glb',scene);
            box.animationGroups[3].play(true);
            var matrix = BABYLON.Matrix.Translation(6, -50, 0);
            for(let j=0;j<box.meshes.length;j++){
                var mesh = box.meshes[j];
                mesh.rotationQuaternion = false;
                mesh.scaling = new BABYLON.Vector3(0.7, 0.7, 0.7);
                var idx = mesh.thinInstanceAdd(matrix);
                mesh.rotation= new BABYLON.Vector3(0,-Math.PI/4,0);
                for(let i=0;i<foule/4;i++){
                    var ofstz = 0;
                    var ofsty = 0;
                    if(posyrd[i]>4.1){ofstz = 9;ofsty=1.9;}
                    if(posyrd[i]>8.2){ofstz = 18;ofsty=3.7;}
                    var matrix2 = BABYLON.Matrix.Translation(poszrd[i]-2, posyrd[i]+ofsty, -350-2.5*posyrd[i]-ofstz);
                    var idx2 = mesh.thinInstanceAddSelf();
                    mesh.thinInstanceSetMatrixAt(idx2, matrix2);
                }
            }
            shuffle(posyrd);
            shuffle(posxrd);
            var box = await BABYLON.SceneLoader.ImportMeshAsync('',"./models/",'crowd1.glb',scene);
            box.animationGroups[1].play(true);
            var matrix = BABYLON.Matrix.Translation(6, -50, 0);
            for(let j=0;j<box.meshes.length;j++){
                var mesh = box.meshes[j];
                mesh.rotationQuaternion = false;
                mesh.scaling = new BABYLON.Vector3(0.7, 0.7, 0.7);
                var idx = mesh.thinInstanceAdd(matrix);
                mesh.rotation= new BABYLON.Vector3(0,-Math.PI/4,0);
                for(let i=0;i<foule/4;i++){
                    var ofstz = 0;
                    var ofsty = 0;
                    if(posyrd[i]>4.1){ofstz = 9;ofsty=1.9;}
                    if(posyrd[i]>8.2){ofstz = 18;ofsty=3.7;}
                    var matrix2 = BABYLON.Matrix.Translation(poszrd[i], posyrd[i]+ofsty, -350-2.5*posyrd[i]-ofstz);
                    var idx2 = mesh.thinInstanceAddSelf();
                    mesh.thinInstanceSetMatrixAt(idx2, matrix2);
                }
            }
            var box = await BABYLON.SceneLoader.ImportMeshAsync('',"./models/",'crowd4.glb',scene);
            box.animationGroups[0].play(true);
            var matrix = BABYLON.Matrix.Translation(6, -50, 0);
            for(let j=0;j<box.meshes.length;j++){
                var mesh = box.meshes[j];
                mesh.rotationQuaternion = false;
                mesh.scaling = new BABYLON.Vector3(0.7, 0.7, 0.7);
                var idx = mesh.thinInstanceAdd(matrix);
                mesh.rotation= new BABYLON.Vector3(0,Math.PI/4,0);
                for(let i=0;i<foule/4;i++){
                    var ofstz = 0;
                    var ofsty = 0;
                    if(posyrd[i]>4.1){ofstz = 9;ofsty=1.9;}
                    if(posyrd[i]>8.2){ofstz = 18;ofsty=3.7;}
                    var matrix2 = BABYLON.Matrix.Translation(poszrd[i]-6, posyrd[i]+ofsty, -350-2.5*posyrd[i]-ofstz);
                    var idx2 = mesh.thinInstanceAddSelf();
                    mesh.thinInstanceSetMatrixAt(idx2, matrix2);
                }
            }
            shuffle(posyrd);
            shuffle(posxrd);
            var box = await BABYLON.SceneLoader.ImportMeshAsync('',"./models/",'crowd3.glb',scene);
            box.animationGroups[1].play(true);
            var matrix = BABYLON.Matrix.Translation(6, -50, 0);
            for(let j=0;j<box.meshes.length;j++){
                var mesh = box.meshes[j];
                mesh.rotationQuaternion = false;
                mesh.scaling = new BABYLON.Vector3(0.7, 0.7, 0.7);
                var idx = mesh.thinInstanceAdd(matrix);
                mesh.rotation= new BABYLON.Vector3(0,Math.PI/4,0);
                for(let i=0;i<foule/4;i++){
                    var ofstz = 0;
                    var ofsty = 0;
                    if(posyrd[i]>4.1){ofstz = 9;ofsty=1.9;}
                    if(posyrd[i]>8.2){ofstz = 18;ofsty=3.7;}
                    var matrix2 = BABYLON.Matrix.Translation(poszrd[i]-4, posyrd[i]+ofsty, -350-2.5*posyrd[i]-ofstz);
                    var idx2 = mesh.thinInstanceAddSelf();
                    mesh.thinInstanceSetMatrixAt(idx2, matrix2);
                }
            }
            shuffle(posyrd);
            shuffle(posxrd);
            var box = await BABYLON.SceneLoader.ImportMeshAsync('',"./models/",'crowd2.glb',scene);
            box.animationGroups[3].play(true);
            var matrix = BABYLON.Matrix.Translation(6, -50, 0);
            for(let j=0;j<box.meshes.length;j++){
                var mesh = box.meshes[j];
                mesh.rotationQuaternion = false;
                mesh.scaling = new BABYLON.Vector3(0.7, 0.7, 0.7);
                var idx = mesh.thinInstanceAdd(matrix);
                mesh.rotation= new BABYLON.Vector3(0,Math.PI/4,0);
                for(let i=0;i<foule/4;i++){
                    var ofstz = 0;
                    var ofsty = 0;
                    if(posyrd[i]>4.1){ofstz = 9;ofsty=1.9;}
                    if(posyrd[i]>8.2){ofstz = 18;ofsty=3.7;}
                    var matrix2 = BABYLON.Matrix.Translation(poszrd[i]-2, posyrd[i]+ofsty, -350-2.5*posyrd[i]-ofstz);
                    var idx2 = mesh.thinInstanceAddSelf();
                    mesh.thinInstanceSetMatrixAt(idx2, matrix2);
                }
            }
            shuffle(posyrd);
            shuffle(posxrd);
            var box = await BABYLON.SceneLoader.ImportMeshAsync('',"./models/",'crowd1.glb',scene);
            box.animationGroups[1].play(true);
            var matrix = BABYLON.Matrix.Translation(6, -50, 0);
            for(let j=0;j<box.meshes.length;j++){
                var mesh = box.meshes[j];
                mesh.rotationQuaternion = false;
                mesh.scaling = new BABYLON.Vector3(0.7, 0.7, 0.7);
                var idx = mesh.thinInstanceAdd(matrix);
                mesh.rotation= new BABYLON.Vector3(0,Math.PI/4,0);
                for(let i=0;i<foule/4;i++){
                    var ofstz = 0;
                    var ofsty = 0;
                    if(posyrd[i]>4.1){ofstz = 9;ofsty=1.9;}
                    if(posyrd[i]>8.2){ofstz = 18;ofsty=3.7;}
                    var matrix2 = BABYLON.Matrix.Translation(poszrd[i], posyrd[i]+ofsty, -350-2.5*posyrd[i]-ofstz);
                    var idx2 = mesh.thinInstanceAddSelf();
                    mesh.thinInstanceSetMatrixAt(idx2, matrix2);
                }
            }
        }
    }
    //pelouse
    var grassGrd = BABYLON.MeshBuilder.CreateGround("Grassground", { width: 400, height: 300 }, scene);
    grassGrd.material = CreateGrassGroundMaterial();
    grassGrd.position.y=-0.1;

    //POUR TOUS LES JEU !! a regler
    var fps = 60;
    scene.onAfterRenderObservable.add(function(){
        if(finish&&!activated){
            clap1.play();
            if(localStorage.getItem("sound")=="true"){
                background.setVolume(0.3*vol);
            }
            activated=true;
        }
        fps = engine.getFps();
    })

    //JEU 1
    if(jeut==1){
        var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(-99, 10, -20), scene);
        var runGrd = BABYLON.MeshBuilder.CreateGround("runGrd", { width: 300, height: 12 }, scene);
        runGrd.material = CreateGroundMaterial();
        var traitGrd = BABYLON.MeshBuilder.CreateGround("traitGrd", { width: 300, height: 0.1}, scene);
        traitGrd.position.y=0.01;
        var traitGrd1 = BABYLON.MeshBuilder.CreateGround("traitGrd1", { width: 300, height: 0.1}, scene);
        traitGrd1.position.y=0.01;
        traitGrd1.position.z=2.5;
        var traitGrd2 = BABYLON.MeshBuilder.CreateGround("traitGrd2", { width: 300, height: 0.1}, scene);
        traitGrd2.position.y=0.01;
        traitGrd2.position.z=-2.5;
        var traitGrd3 = BABYLON.MeshBuilder.CreateGround("traitGrd1", { width: 300, height: 0.1}, scene);
        traitGrd3.position.y=0.01;
        traitGrd3.position.z=5;
        var traitGrd4 = BABYLON.MeshBuilder.CreateGround("traitGrd2", { width: 300, height: 0.1}, scene);
        traitGrd4.position.y=0.01;
        traitGrd4.position.z=-5;
        var traitGrd5 = BABYLON.MeshBuilder.CreateGround("traitGrd2", { width: 0.1, height: 12}, scene);
        traitGrd5.position.y=0.01;
        traitGrd5.position.x=-100;
        var traitGrd6 = BABYLON.MeshBuilder.CreateGround("traitGrd2", { width: 0.1, height: 12}, scene);
        traitGrd6.position.y=0.01;
        traitGrd6.position.x=-150;
        var traitGrd7 = BABYLON.MeshBuilder.CreateGround("traitGrd2", { width: 0.1, height: 12}, scene);
        traitGrd7.position.y=0.01;
        traitGrd7.position.x=150;
        var traitGrd8 = BABYLON.MeshBuilder.CreateGround("traitGrd2", { width: 0.6, height: 12}, scene);
        traitGrd8.position.y=0.01;
        traitGrd8.position.x=145;
        var limitBox = BABYLON.MeshBuilder.CreateBox("startBox", { height: 5 , width:10,depth:12}, scene);
        limitBox.position.x = 150;
        limitBox.isVisible=false;
        var camerabox1 = BABYLON.MeshBuilder.CreateBox("startBox", { size:3}, scene); camerabox1.isVisible=false; camerabox1.position.z=-3.8;
        var camerabox2 = BABYLON.MeshBuilder.CreateBox("startBox", { size:3}, scene); camerabox2.isVisible=false; camerabox2.position.z=-1.8;
        var camerabox3 = BABYLON.MeshBuilder.CreateBox("startBox", { size:3}, scene); camerabox3.isVisible=false; camerabox3.position.z=1.8;
        var camerabox4 = BABYLON.MeshBuilder.CreateBox("startBox", { size:3}, scene); camerabox4.isVisible=false; camerabox4.position.z=3.8;

        BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "gate.glb", scene).then((result) => {
            var mesh = result.meshes[1];
            mesh.rotationQuaternion = null;
            mesh.rotation.y=1.57;
            mesh.position.x=-145;
        });

        var camra = await BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "camera.glb", scene)
        var cam1 = camra.meshes[0];
        cam1.rotationQuaternion = null;
        cam1.scaling = new BABYLON.Vector3(0.4, 0.4, 0.4)
        cam1.rotation.y=0;
        cam1.position.z=6;
        cam1.position.x=-100;
        var cam2 = cam1.clone("cam2");
        cam2.position.z=-6;
        cam2.rotation.y=3.14;
        cam2.position.x=-100;
        var cam3 = cam1.clone("cam3");
        cam3.position.z=6;
        cam3.position.x=104;
        var cam4 = cam1.clone("cam4");
        cam4.position.z=-6;
        cam4.position.x=70;
        cam4.rotation.y=2;
        var cam5 = cam1.clone("cam5");
        cam5.position.z=6;
        cam5.position.x=44;
        cam5.rotation.y=0;
        var cam6 = cam1.clone("cam6");
        cam6.position.z=6;
        cam6.position.x=150;
        cam6.rotation.y=0.7;
        var cam7 = cam1.clone("cam7");
        cam7.position.z=-6;
        cam7.position.x=150;
        cam7.rotation.y=2.74;
        var cam8 = cam1.clone("cam8");
        cam8.position.z=-6;
        cam8.position.x=8;
        cam8.rotation.y= 3.14;


        var timed = false;
        var started=false;
        var para1 = true;
        var para2 = true;
        var para3 = true;
        var para4 = true;
        var ended=false;
        var generaltime=0;
        var timescore1=0;
        var timescore2=0;
        var timescore3=0;
        var timescore4=0;
        var timesc1 = document.getElementById("time1");
        var timesc2 = document.getElementById("time2");
        var timesc3 = document.getElementById("time3");
        var timesc4 = document.getElementById("time4");
        //PLAYER
        BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "player1bis.glb", scene).then((result) => {  //PLAYER 1
            var mesh = result.meshes[0];
            var anim = result.animationGroups;
            mesh.rotate(new BABYLON.Vector3(0,1,0),-Math.PI/2);
            mesh.scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
            mesh.position.z=-3.8;
            mesh.position.x=-100;
            anim[3].play(true);
            var injump=false;
            var jumped=false;
            var score = 20;
            const jumpAnim = anim[1].targetedAnimations[0].animation;
            const jumpEvt = new BABYLON.AnimationEvent(
                44,
                () => {
                    anim.forEach((an) => an.stop());
                    jumped=false;
                    anim[2].start(true);
                },
                false
            );
            const injumpEvt = new BABYLON.AnimationEvent(
                15,
                () => {
                    injump=true;
                },
                false
            );
            const offjumpEvt = new BABYLON.AnimationEvent(
                30,
                () => {
                    injump=false;
                },
                false
            );
            jumpAnim.addEvent(jumpEvt);
            jumpAnim.addEvent(offjumpEvt);
            jumpAnim.addEvent(injumpEvt);
            const failAnim = anim[0].targetedAnimations[0].animation;
            const failEvt = new BABYLON.AnimationEvent(
                25,
                () => {
                    anim[0].stop();
                    fail1 = false;
                    anim[2].start(true);
                },
                false
            );
            failAnim.addEvent(failEvt);
            var line=false;
            var reg=true;
            scene.onAfterRenderObservable.add(function () {
                camerabox1.position.x=mesh.position.x;
                if (started){
                    if(para1){
                        anim.forEach((an) => an.stop());
                        anim[2].start(true);
                        window.addEventListener("keydown", function (event) {  
                            if (started && !jumped && !fail1 && !line && (event.key === "a"||event.key==="A")){
                                jumpsound.play();
                                anim.forEach((an) => an.stop());
                                anim[1].start();
                                jumped=true;
                            }
                        });
                        para1=false;
                    }
                    if(!line){
                        
                        if(!fail1)mesh.position.x+=0.18*(60/fps);
                        boxs1.forEach((box) => {
                            if(!injump){
                                if(mesh.intersectsMesh(box, false)){
                                    boxs1.splice(boxs1.indexOf(box))
                                    anim[1].stop();
                                    jumped=false;
                                    anim[2].stop()
                                    fail1=true;
                                    anim[0].start(false);
                                    score-=1;
                                    camerabox1.position.y=1;
                                }
                                score1.forEach(function(scor){scor.innerText=score+"/20";})
                            }
                        });
                    }
                    if(mesh.intersectsMesh(limitBox, false)){
                        anim[1].stop();
                        jumped=false;
                        anim[2].stop()
                        anim[3].start(true);
                        if(!ended){
                            ended=true;
                            anim[3].start(true);
                            wintext.innerText = "FÉLICITATIONS JOUEUR 4";

                        }else if(wintext.innerText != "FÉLICITATIONS JOUEUR 4"){
                            anim[3].goToFrame(15)
                            anim[3].stop();
                        }
                        line=true;
                        if(reg){
                            timescore1=generaltime;
                            reg=false;
                        }
                    }
                }
            })
        });
        BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "player2bis.glb", scene).then((result) => {  //PLAYER 2
            var mesh = result.meshes[0];
            var anim = result.animationGroups;
            mesh.rotate(new BABYLON.Vector3(0,1,0),-Math.PI/2);
            mesh.scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
            mesh.position.z=-1.3;
            mesh.position.x=-100;
            anim[3].play(true);
            var injump=false;
            var jumped=false;
            var score = 20;
            const jumpAnim = anim[1].targetedAnimations[0].animation;
            const jumpEvt = new BABYLON.AnimationEvent(
                44,
                () => {
                    anim.forEach((an) => an.stop());
                    jumped=false;
                    anim[2].start(true);
                },
                false
            );
            const injumpEvt = new BABYLON.AnimationEvent(
                15,
                () => {
                    injump=true;
                },
                false
            );
            const offjumpEvt = new BABYLON.AnimationEvent(
                30,
                () => {
                    injump=false;
                },
                false
            );
            jumpAnim.addEvent(jumpEvt);
            jumpAnim.addEvent(offjumpEvt);
            jumpAnim.addEvent(injumpEvt);
            const failAnim = anim[0].targetedAnimations[0].animation;
            const failEvt = new BABYLON.AnimationEvent(
                25,
                () => {
                    anim[0].stop();
                    fail2 = false;
                    anim[2].start(true);
                },
                false
            );
            failAnim.addEvent(failEvt);
            var line=false;
            var reg=true;
            scene.onAfterRenderObservable.add(function () {
                camerabox2.position.x=mesh.position.x;
                if (started){
                    if(para2){
                        anim.forEach((an) => an.stop());
                        anim[2].start(true);
                        window.addEventListener("keydown", function (event) {  
                            if (started && !jumped && !fail2 && !line && (event.key === "p"||event.key ==="P") ){
                                jumpsound.play();
                                anim.forEach((an) => an.stop());
                                anim[1].start();
                                jumped=true;
                            }
                        });
                        para2=false;
                    }
                    if(!line){
                        if(!fail2)mesh.position.x+=0.18*(60/fps);
                        boxs2.forEach((box) => {
                            if(!injump){
                                if(mesh.intersectsMesh(box, false)){
                                    boxs2.splice(boxs2.indexOf(box))
                                    anim[1].stop();
                                    jumped=false;
                                    anim[2].stop()
                                    fail2=true;
                                    anim[0].start(false);
                                    score-=1;
                                    camerabox2.position.y=1;
                                }
                                score2.forEach(function(scor){scor.innerText=score+"/20";})
                            }
                        });
                    }
                    if(mesh.intersectsMesh(limitBox, false)){
                        anim[1].stop();
                        jumped=false;
                        anim[2].stop()
                        anim[3].start(true);
                        if(!ended){
                            ended=true;
                            anim[3].start(true);
                            wintext.innerText = "FÉLICITATIONS JOUEUR 3";

                        }else if(wintext.innerText != "FÉLICITATIONS JOUEUR 3"){
                            anim[3].goToFrame(6)
                            anim[3].stop();
                        }
                        line=true;
                        if(reg){
                            timescore2=generaltime;
                            reg=false;
                        }
                    }
                }
            })
        });
        BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "player3bis.glb", scene).then((result) => {  //PLAYER 3 (2)
            var mesh = result.meshes[0];
            var anim = result.animationGroups;
            mesh.rotate(new BABYLON.Vector3(0,1,0),-Math.PI/2);
            mesh.scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
            mesh.position.z=1.3;
            mesh.position.x=-100;
            anim[3].play(true);
            var injump=false;
            var jumped=false;
            var score = 20;
            const jumpAnim = anim[1].targetedAnimations[0].animation;
            const jumpEvt = new BABYLON.AnimationEvent(
                44,
                () => {
                    anim.forEach((an) => an.stop());
                    jumped=false;
                    anim[2].start(true);
                },
                false
            );
            const injumpEvt = new BABYLON.AnimationEvent(
                15,
                () => {
                    injump=true;
                },
                false
            );
            const offjumpEvt = new BABYLON.AnimationEvent(
                30,
                () => {
                    injump=false;
                },
                false
            );
            jumpAnim.addEvent(jumpEvt);
            jumpAnim.addEvent(offjumpEvt);
            jumpAnim.addEvent(injumpEvt);
            const failAnim = anim[0].targetedAnimations[0].animation;
            const failEvt = new BABYLON.AnimationEvent(
                25,
                () => {
                    anim[0].stop();
                    fail3 = false;
                    anim[2].start(true);
                },
                false
            );
            failAnim.addEvent(failEvt);
            var line=false;
            var reg=true;
            scene.onAfterRenderObservable.add(function () {
                camerabox3.position.x=mesh.position.x;
                if (started){
                    if(para3){
                        anim.forEach((an) => an.stop());
                        anim[2].start(true);
                        window.addEventListener("keydown", function (event) {  
                            if (started && !jumped && !fail3 && !line && (event.key === "w"||event.key==="W") ){
                                jumpsound.play();
                                anim.forEach((an) => an.stop());
                                anim[1].start();
                                jumped=true;
                            }
                        });
                        para3=false;
                    }
                    if(!line){
                        if(!fail3)mesh.position.x+=0.18*(60/fps);
                        boxs3.forEach((box) => {
                            if(!injump){
                                if(mesh.intersectsMesh(box, false)){
                                    boxs3.splice(boxs3.indexOf(box))
                                    anim[1].stop();
                                    jumped=false;
                                    anim[2].stop()
                                    fail3=true;
                                    anim[0].start(false);
                                    score-=1;
                                    camerabox3.position.y=1;
                                }
                                score3.forEach(function(scor){scor.innerText=score+"/20";})
                            }
                        });
                    }
                    if(mesh.intersectsMesh(limitBox, false)){
                        anim[1].stop();
                        jumped=false;
                        anim[2].stop()
                        anim[3].start(true);
                        if(!ended){
                            ended=true;
                            anim[3].start(true);
                            wintext.innerText = "FÉLICITATIONS JOUEUR 2";

                        }else if(wintext.innerText != "FÉLICITATIONS JOUEUR 2"){
                            anim[3].goToFrame(4)
                            anim[3].stop();
                        }
                        line=true;
                        if(reg){
                            timescore3=generaltime;
                            reg=false;
                        }
                    }
                }
            })
        });
        
        BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "player4bis.glb", scene).then((result) => {  //PLAYER 4
            var mesh = result.meshes[0];
            var anim = result.animationGroups;
            mesh.rotate(new BABYLON.Vector3(0,1,0),-Math.PI/2);
            mesh.scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
            mesh.position.z=3.8;
            mesh.position.x=-100;
            anim[3].play(true);
            var injump=false;
            var jumped=false;
            var score = 20;
            const jumpAnim = anim[1].targetedAnimations[0].animation;
            const jumpEvt = new BABYLON.AnimationEvent(
                44,
                () => {
                    anim.forEach((an) => an.stop());
                    jumped=false;
                    anim[2].start(true);
                },
                false
            );
            const injumpEvt = new BABYLON.AnimationEvent(
                15,
                () => {
                    injump=true;
                },
                false
            );
            const offjumpEvt = new BABYLON.AnimationEvent(
                30,
                () => {
                    injump=false;
                },
                false
            );
            jumpAnim.addEvent(jumpEvt);
            jumpAnim.addEvent(offjumpEvt);
            jumpAnim.addEvent(injumpEvt);
            const failAnim = anim[0].targetedAnimations[0].animation;
            const failEvt = new BABYLON.AnimationEvent(
                25,
                () => {
                    anim[0].stop();
                    fail4 = false;
                    anim[2].start(true);
                },
                false
            );
            failAnim.addEvent(failEvt);
            var line=false;
            var reg=true;
            scene.onAfterRenderObservable.add(function () {
                camerabox4.position.x=mesh.position.x;
                if (started){
                    if(para4){
                        anim.forEach((an) => an.stop());
                        anim[2].start(true);
                        window.addEventListener("keydown", function (event) {  
                            if (started && !jumped && !fail4 && !line &&(event.key === "n"||event.key==="N") ){
                                jumpsound.play();
                                anim.forEach((an) => an.stop());
                                anim[1].start();
                                jumped=true;
                            }
                        });
                        para4=false;
                    }
                    if(!line){
                        if(!fail4)mesh.position.x+=0.18*(60/fps);
                        boxs4.forEach((box) => {
                            if(!injump){
                                if(mesh.intersectsMesh(box, false)){
                                    boxs4.splice(boxs4.indexOf(box))
                                    anim[1].stop();
                                    jumped=false;
                                    anim[2].stop()
                                    fail4=true;
                                    anim[0].start(false);
                                    score-=1;
                                    camerabox4.position.y=1;
                                }
                                score4.forEach(function(scor){scor.innerText=score+"/20";})
                            }
                        });
                    }
                    if(mesh.intersectsMesh(limitBox, false)){
                        anim[1].stop();
                        jumped=false;
                        anim[2].stop()
                        anim[3].start(true);
                        if(!ended){
                            ended=true;
                            anim[3].start(true);
                            wintext.innerText = "FÉLICITATIONS JOUEUR 1";
                        }else if(wintext.innerText != "FÉLICITATIONS JOUEUR 1"){
                            anim[3].goToFrame(10)
                            anim[3].stop();
                        }
                        line=true;
                        if(reg){
                            timescore4=generaltime;
                            reg=false;
                        }
                    }
                }
            })
            loading.classList.add("notplaying");
        });
        var timer=0;
        var tps=0;
        var lt=0;
        window.addEventListener("keydown", function (event) {  
            if (started==false && event.key === " "){
                timed=true;
                gameinterface.classList.add("notplaying");
                gameinterface.classList.remove("playing");
                engine.enterPointerlock();
            }
        });
        scene.onAfterRenderObservable.add(function () {
            if(started){
                generaltime+=1/fps;
            }
            if(timed){
                time.classList.remove("notplaying");
                timer+=1/fps;
                tps = Math.floor(timer);
                if(tps==3){
                    time.innerText = "GO !";
                    time.classList.add("disapear")
                }else{
                    time.innerText = 3-tps;
                    if(lt==tps){
                        countdown.play(0,tps,1)
                        lt = tps+1;
                    }
                }
                if(timer>3){
                    countdown.play(0,3,1)
                    started=true;
                    timed=false;
                    
                }
            }
        });
        scene.onAfterRenderObservable.add(function () {
            var listbox=[camerabox1.position.x,camerabox2.position.x,camerabox3.position.x,camerabox4.position.x];
            var max = Math.max(...listbox);
            var min = Math.min(...listbox)
            var center = (max+min)/2;
            camera.setTarget(new BABYLON.Vector3(center,0,0));
            camera.position.y=10;
            if(center>=100&&center<130){
                camera.position.z=-36;
                camera.position.x=100;
                camera.position.y=6;
            }else if(center>143){
                camera.position.x=160;
                camera.position.y=3;
                camera.position.z=0
                camera.setTarget(new BABYLON.Vector3(center,3,0));
                if(center>145){
                    end1.classList.remove("notplaying");
                    interface1.classList.add("notplaying");
                    finish=true;
                    engine.exitPointerlock();
                    var timscs = [timescore4,timescore3,timescore2,timescore1];
                    var timescs = [timesc1,timesc2,timesc3,timesc4];
                    var max = Math.min(...timscs);
                    var maxsc = timscs.indexOf(max);
                    timescs[maxsc].innerText = Math.floor(timscs[maxsc]*1000)/1000+"s";
                    timescs.forEach((affich) => {
                        if(affich!=timescs[maxsc]){
                            affich.innerText = "+"+(Math.floor((timscs[timescs.indexOf(affich)]-timscs[maxsc])*1000)/1000)+"s";
                        }
                    });
                }
            }else if(center<-95){
                camera.position.y=3;
                camera.position.z=0;
                camera.position.x=-115;
                camera.setTarget(new BABYLON.Vector3(center,3,0));
            } else {
                camera.position.z=-25;
                camera.position.z-=(max-min)/4;
                camera.position.x=center
            }
        });
    }

    //JEU 2 clone fait (pas joueur #flemme)
    if(jeut==2){
        var randomPos="pos1";
        var randomPosList=["pos1","pos2","pos3","pos4"];
        var start2tour = document.getElementById("start2tour");
        var score = new Array(3).fill(0);
        var qtelettre = document.getElementById("qtelettre");
        var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(-30, 10, -20), scene);
        var runGrd = BABYLON.MeshBuilder.CreateGround("runGrd", { width: 62, height: 10 }, scene);
        runGrd.material = CreateGroundMaterial();
        runGrd.position.x=-61;
        runGrd.position.y=0.008;
        for(let i=0;i<29;i++){
            var traitGrd = BABYLON.MeshBuilder.CreateGround("traitGrd", { width: 10+i*(1.2), height: (i%4==0? 0.3:0.1)}, scene);
            traitGrd.position.y=0.0001;
            traitGrd.rotation.y=1.57;
            traitGrd.position.x=-30+i*5;
        }
        var traitGrd = BABYLON.MeshBuilder.CreateGround("traitGrd", { width: 142, height: 0.3}, scene);
        traitGrd.position.y=0.005;
        traitGrd.position.x=40;
        traitGrd.position.z=13.5;
        traitGrd.rotation.y=-0.1212;
        var traitGrd = BABYLON.MeshBuilder.CreateGround("traitGrd", { width: 142, height: 0.3}, scene);
        traitGrd.position.y=0.005;
        traitGrd.position.x=40;
        traitGrd.position.z=-13.5;
        traitGrd.rotation.y=0.1212;
        var traitGrd = BABYLON.MeshBuilder.CreateGround("traitGrd", { width: 62, height: 0.3}, scene);
        traitGrd.position.y=0.01;
        traitGrd.position.x=-61;
        traitGrd.position.z=-5;
        var traitGrd = BABYLON.MeshBuilder.CreateGround("traitGrd", { width: 62, height: 0.3}, scene);
        traitGrd.position.y=0.01;
        traitGrd.position.x=-61;
        traitGrd.position.z=5;
        var traitGrd = BABYLON.MeshBuilder.CreateGround("traitGrd", { width: 10.3, height: 0.3}, scene);
        traitGrd.position.y=0.01;
        traitGrd.position.x=-92;
        traitGrd.rotation.y=1.57;
        var bench = BABYLON.MeshBuilder.CreateBox("bench", { height: 0.68, width: 10, depth: 1 }, scene);
        bench.position.x=-50;
        bench.position.y=0.2;
        bench.position.z=5;
        var material = CreateWallMaterial();
        material.diffuseTexture.uScale=0.1;
        material.diffuseTexture.vScale=0.1;
        bench.material = material;

        var player1 = await BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "player12.glb", scene);  //PLAYER 1
        var mesh1 = player1.meshes[0];
        var anim1 = player1.animationGroups;
        anim1[0].stop();
        anim1[1].play(false);
        anim1[1].pause();
        anim1[1].goToFrame(20);
        mesh1.position.x=-53;
        mesh1.position.z=4.8;
        mesh1.scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
        mesh1.rotationQuaternion = null;
        mesh1.rotation.y=3.14;
        var player2 = await BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "player22.glb", scene);  //PLAYER 2
        var mesh2 = player2.meshes[0];
        var anim2 = player2.animationGroups;
        anim2[0].stop();
        anim2[1].play(true);
        anim2[1].pause();
        anim2[1].goToFrame(17);
        mesh2.position.x=-50;
        mesh2.position.z=4.8;
        mesh2.scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
        mesh2.rotationQuaternion = null;
        mesh2.rotation.y=3.14;
        var player3 = await BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "player32.glb", scene);  //PLAYER 3
        var mesh3 = player3.meshes[0];
        var anim3 = player3.animationGroups;
        anim3[0].stop();
        anim3[1].play(true);
        anim3[1].pause();
        anim3[1].goToFrame(12);
        mesh3.position.x=-47;
        mesh3.position.z=4.8;
        mesh3.scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
        mesh3.rotationQuaternion = null;
        mesh3.rotation.y=3.14;
        camera.position.x=-50;
        camera.position.y=2;
        camera.position.z=-10;
        camera.setTarget(new BABYLON.Vector3(-50,1,5));
        
        var camra = await BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "camera.glb", scene)
        var cam1 = camra.meshes[0];
        cam1.rotationQuaternion = null;
        cam1.scaling = new BABYLON.Vector3(0.4, 0.4, 0.4)
        cam1.rotation.y=-1.2;
        cam1.position.z=5.5;
        cam1.position.x=-58;
        var cam2 = cam1.clone("cam2");
        cam2.position.z=-5.5;
        cam2.rotation.y=-1.9;
        var cam3 = cam1.clone("cam3");
        cam3.position.z=5.5;
        cam3.position.x=-42;
        cam3.rotation.y=1.2;
        var cam4 = cam1.clone("cam4");
        cam4.position.z=-5.5;
        cam4.position.x=-30;
        cam4.rotation.y=-3.14;
        var cam5 = cam1.clone("cam5");
        cam5.position.z=15;
        cam5.position.x=40;
        cam5.rotation.y=0;
        var cam6 = cam1.clone("cam6");
        cam6.position.z=0;
        cam6.position.x=115;
        cam6.rotation.y=1.57;

        var javelot1 = await BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "javelin.glb", scene);
        var jav1 = javelot1.meshes[0];
        jav1.rotationQuaternion = null;
        jav1.scaling = new BABYLON.Vector3(2, 1, 1);
        jav1.rotation.y=-Math.PI/2;
        jav1.position.y=0.53;
        jav1.position.z=5;
        jav1.position.x=-53.5;
        var jav2 = jav1.clone("jav2");
        jav2.position.x=-50.5;
        var jav3 = jav1.clone("jav3");
        jav3.position.x=-47.5;
        var jav = jav1.clone("jav");
        jav.rotation.y=Math.PI;
        jav.position.y=-1;
        var limitJav = BABYLON.MeshBuilder.CreateBox("startBox", { size:1}, scene);
        limitJav.position.x = -30;
        limitJav.position.y = 2;
        limitJav.isVisible=false;
        var limitBox = BABYLON.MeshBuilder.CreateBox("startBox", { size: 2 }, scene);
        limitBox.position.x = -80;
        limitBox.isVisible=false;
        var throwBox = BABYLON.MeshBuilder.CreateBox("startBox", { size: 3 }, scene);
        throwBox.position.x = -30;
        throwBox.isVisible=false;
        loading.classList.add("notplaying");

        var tour=1;
        var started = false;
        var run = false;
        var throwing = false;
        var nbSuccess = 0;
        var isSuccess = false;
        var stop=false;
        var QTEkeys = ["a","t","p","w","v","n"];
        var QTEkey="";
        var count=0;
        var maxcount=0.1;
        var varcount=0;
        const start1Anim = anim1[1].targetedAnimations[0].animation;
        const start2Anim = anim2[1].targetedAnimations[0].animation;
        const start3Anim = anim3[1].targetedAnimations[0].animation;
        const start1Evt = new BABYLON.AnimationEvent(60,
            () => {
                anim1[1].stop();
                mesh1.position.z=0;
                mesh1.rotation.y=0;
                mesh1.position.x=-90;
                camera.position.x=-105;
                camera.position.y=4;
                camera.position.z=0;
                camera.setTarget(new BABYLON.Vector3(0,1,0));
                jav1.position.y=-1;
                anim1[3].start(true);
                anim1[3].goToFrame(15);
                anim1[3].pause();
            },false);
        const start2Evt = new BABYLON.AnimationEvent(60,
            () => {
                anim2[1].stop();
                mesh2.position.z=0;
                mesh2.rotation.y=0;
                mesh2.position.x=-90;
                camera.position.x=-105;
                camera.position.y=4;
                camera.position.z=0;
                camera.setTarget(new BABYLON.Vector3(0,1,0));
                jav2.position.y=-1;
                anim2[3].start(true);
                anim2[3].goToFrame(15);
                anim2[3].pause();
            },false);
        const start3Evt = new BABYLON.AnimationEvent(60,
            () => {
                anim3[1].stop();
                mesh3.position.z=0;
                mesh3.rotation.y=0;
                mesh3.position.x=-90;
                camera.position.x=-105;
                camera.position.y=4;
                camera.position.z=0;
                camera.setTarget(new BABYLON.Vector3(0,1,0));
                jav3.position.y=-1;
                anim3[3].start(true);
                anim3[3].goToFrame(15);
                anim3[3].pause();
            },false);
        start1Anim.addEvent(start1Evt);
        start2Anim.addEvent(start2Evt);
        start3Anim.addEvent(start3Evt);
        
        const throw1Anim = anim1[4].targetedAnimations[0].animation;
        const throw2Anim = anim2[4].targetedAnimations[0].animation;
        const throw3Anim = anim3[4].targetedAnimations[0].animation;
        const throwEvt = new BABYLON.AnimationEvent(55,
            () => {
                throwing=true;
            },false);
        const throw1Evt = new BABYLON.AnimationEvent(10,
            () => {
                jav.rotation.z=-0.6;
                jav.position.x-=0.2;
                jav.position.y-=0.6;
                jav.rotation.y=-0.4+Math.PI;
            },false);
        const throw2Evt = new BABYLON.AnimationEvent(15,
            () => {
                jav.position.x-=0.1
                jav.position.y-=0.2
                jav.rotation.y=-0.3+Math.PI;
            },false);
        const throw3Evt = new BABYLON.AnimationEvent(20,
            () => {
                jav.position.x+=0.5
                jav.position.y+=0.2
                jav.rotation.y=-0.1+Math.PI;
            },false);
        const throw4Evt = new BABYLON.AnimationEvent(25,
            () => {
                jav.position.x+=0.5
                jav.position.y+=0.2
                jav.rotation.y=Math.PI;
            },false);
        const throw5Evt = new BABYLON.AnimationEvent(30,
            () => {
                jav.position.x+=0.7
                jav.position.y+=0.2
            },false);
        throw1Anim.addEvent(throwEvt);throw1Anim.addEvent(throw1Evt);throw1Anim.addEvent(throw2Evt);throw1Anim.addEvent(throw3Evt);throw1Anim.addEvent(throw4Evt);throw1Anim.addEvent(throw5Evt);   
        throw2Anim.addEvent(throwEvt);throw2Anim.addEvent(throw1Evt);throw2Anim.addEvent(throw2Evt);throw2Anim.addEvent(throw3Evt);throw2Anim.addEvent(throw4Evt);throw2Anim.addEvent(throw5Evt);
        throw3Anim.addEvent(throwEvt);throw3Anim.addEvent(throw1Evt);throw3Anim.addEvent(throw2Evt);throw3Anim.addEvent(throw3Evt);throw3Anim.addEvent(throw4Evt);throw3Anim.addEvent(throw5Evt);

        const run1Anim = anim1[3].targetedAnimations[0].animation;
        const run2Anim = anim2[3].targetedAnimations[0].animation;
        const run3Anim = anim3[3].targetedAnimations[0].animation;
        const runEvt = new BABYLON.AnimationEvent(5,
            () => {
                jav.position.y=1.7;
                jav.position.z=0.5;
            },false);
        const run1Evt = new BABYLON.AnimationEvent(12,
            () => {
                jav.position.y=1.65;
                jav.position.z=0.45;
            },false);
        const run3Evt = new BABYLON.AnimationEvent(40,
            () => {
                jav.position.y=1.63;
                jav.position.z=0.45;
            },false);
        const run2Evt = new BABYLON.AnimationEvent(20,
            () => {
                jav.position.y=1.6;
                jav.position.z=0.4;
            },false);
        run1Anim.addEvent(runEvt);run1Anim.addEvent(run2Evt);run1Anim.addEvent(run1Evt);run1Anim.addEvent(run3Evt);
        run2Anim.addEvent(runEvt);run2Anim.addEvent(run2Evt);run2Anim.addEvent(run1Evt);run2Anim.addEvent(run3Evt);
        run3Anim.addEvent(runEvt);run3Anim.addEvent(run2Evt);run3Anim.addEvent(run1Evt);run3Anim.addEvent(run3Evt);

        var timer=0;
        var timed = false
        var tps=0;
        var lt=0;
        scene.onAfterRenderObservable.add(function () {
            if(timed){
                timer+=1/fps;
                tps = Math.floor(timer);
                if(tps==3){
                    time.innerText = "GO !";
                    time.classList.add("disapear")
                }else{
                    time.innerText = 3-tps;
                    if(lt==tps){
                        countdown.play(0,tps,1)
                        lt = tps+1;
                    }
                }
                if(timer>3){
                    countdown.play(0,3,1)
                    timed=false;
                    timer=0;
                    lt=0;
                    run=true;
                    qtebox.classList.remove("notplaying");
                    qtebox.classList.add("pos1");
                    QTEkey = QTEkeys[Math.floor(Math.random()*QTEkeys.length)];
                    qtelettre.innerText = QTEkey.toUpperCase();
                    qtebox.classList.remove("fail");
                    qtebox.classList.remove("success");
                    qtelettre.classList.remove("disapear");
                    if(tour==1){
                        anim1[3].stop();
                        anim1[3].start(true);
                    } else if(tour==2){
                        anim2[3].stop();
                        anim2[3].start(true);
                    }else if(tour==3){
                        anim3[3].stop();
                        anim3[3].start(true);
                    }
                }
            }
            if(tour==0){
                if(localStorage.getItem("sound")=="true"){
                    background.setVolume(0.3*vol);
                }
                clap1.play();
                camera.position.x=-50;
                camera.position.y=2;
                camera.position.z=-10;
                camera.setTarget(new BABYLON.Vector3(-50,1,5));
                mesh1.position.x=-53;
                mesh2.position.x=-50;
                mesh3.position.x=-47;  
                mesh1.rotation.y=3.14;
                mesh2.rotation.y=3.14;
                mesh3.rotation.y=3.14;
                mesh1.position.z=4.8;
                mesh2.position.z=4.8;
                mesh3.position.z=4.8;
                anim1[0].stop();
                anim2[0].stop();
                anim3[0].stop();
                anim1[2].start(false);
                anim1[2].speedRatio=0.25;
                anim2[2].start(false);
                anim2[2].speedRatio=0.25;
                anim3[2].start(false);
                anim3[2].speedRatio=0.25;
                var max = Math.max(...score);
                var index = score.indexOf(max);
                end2.classList.remove("notplaying");
                gameinterface.classList.add("notplaying");
                engine.exitPointerlock();
                if(index==0){
                    wintext2.innerText = "FÉLICITATIONS JOUEUR 1";
                    anim1[2].stop();
                    anim1[0].start(true);
                    mesh1.position.z=0;
                } else if(index==1){
                    wintext2.innerText = "FÉLICITATIONS JOUEUR 2";
                    anim2[2].stop();
                    anim2[0].start(true);
                    mesh2.position.z=0;
                } else if(index==2){
                    wintext2.innerText = "FÉLICITATIONS JOUEUR 3";
                    anim3[2].stop();
                    anim3[0].start(true);
                    mesh3.position.z=0;
                }
                tour=-1;
            }
            if(started){
                if(run){
                    camera.position.x=-10+jav.position.x;
                    if(camera.position.x<=-90){
                        camera.position.y=5;
                        camera.position.z=0;
                    } else if(camera.position.x>=-90&&camera.position.x<=-85){
                        camera.position.y=0.2;
                        camera.position.z=-1;
                        camera.position.x=-75;
                    } else if(camera.position.x>=-85&&camera.position.x<=-75){
                        camera.position.y=7;
                        camera.position.z=8;
                        camera.position.x=0;
                    } else if(camera.position.x>=-75&&camera.position.x<=-60){
                        camera.position.y=2;
                        camera.position.z=6.5;
                        camera.position.x=-50;
                    } else if(camera.position.x>=-60&&camera.position.x<=-45){
                        camera.position.y=0.5;
                        camera.position.z=0;
                        camera.position.x=-20;
                    } else if(camera.position.x>=-45&&camera.position.x<=-30){
                        camera.position.x=-50;
                        camera.position.y=2;
                        camera.position.z=0;
                    }
                    camera.setTarget(new BABYLON.Vector3(jav.position.x,1,0));
                    count+=0.1;
                    jav.position.x+=0.1*(60/fps);
                    if(tour==1){
                        mesh1.position.x+=0.1*(60/fps);
                        if (mesh1.intersectsMesh(limitBox, false)){
                            maxcount=count;
                            if(isSuccess){
                                nbSuccess+=1-varcount/(maxcount*10);
                            }
                            NextQTE();
                        }
                        if (mesh1.intersectsMesh(throwBox, false)){
                            anim1[3].stop();
                            mesh1.rotation.y=1.47;
                            anim1[4].start(false);
                            run=false;
                        }
                    }
                    if(tour==2){
                        mesh2.position.x+=0.1*(60/fps);
                        if (mesh2.intersectsMesh(limitBox, false)){
                            maxcount=count;
                            if(isSuccess){
                                nbSuccess+=1-varcount/(maxcount*10);
                            }
                            NextQTE();
                        }
                        if (mesh2.intersectsMesh(throwBox, false)){
                            anim2[3].stop();
                            mesh2.rotation.y=1.47;
                            anim2[4].start(false);
                            run=false;
                        }
                    }
                    if(tour==3){
                        mesh3.position.x+=0.1*(60/fps);
                        if (mesh3.intersectsMesh(limitBox, false)){
                            maxcount=count;
                            if(isSuccess){
                                nbSuccess+=1-varcount/(maxcount*10);
                            }
                            NextQTE();
                        }
                        if (mesh3.intersectsMesh(throwBox, false)){
                            anim3[3].stop();
                            mesh3.rotation.y=1.47;
                            anim3[4].start(false);
                            run=false;
                        }
                    }
                } else if(throwing){
                    time.classList.add("notplaying");
                    time.classList.remove("disapear");
                    limitBox.position.x = -80;
                    limitJav.position.x+=(nbSuccess*0.01+0.4)*(60/fps);
                    limitJav.position.y=-((limitJav.position.x+33)*(limitJav.position.x-8.46*nbSuccess))/(100 + 20*nbSuccess);
                    jav.position.x=limitJav.position.x;
                    jav.position.y=limitJav.position.y;
                    jav.rotation.z=-Math.asin((2*jav.position.x+33-8.46*nbSuccess)/(-(100+20*nbSuccess)));
                    camera.position.x=jav.position.x-5;
                    camera.position.y=jav.position.y+1;
                    camera.position.z=0.5;
                    camera.setTarget(new BABYLON.Vector3(jav.position.x,jav.position.y,0));
                    if(limitJav.intersectsMesh(grassGrd, false)){
                        wined.play();
                        throwing=false;
                        started=false;
                        score[tour-1]=Math.floor(limitJav.position.x*10)/10+30; 
                        nbSuccess=0;
                        limitJav.position.y = 2;
                        limitJav.position.x = -30;
                        if(tour==1){
                            anim1[4].stop();
                            anim1[0].start(true);
                            tour=2;
                            jav1.position.x=jav.position.x;
                            jav1.rotation.z=jav.rotation.z;
                            jav1.position.y=jav.position.y;
                            jav1.position.z=jav.position.z;
                            jav1.rotation.y=jav.rotation.y;
                        }
                        else if(tour==2){
                            anim2[4].stop();
                            anim2[0].start(true);
                            tour=3;
                            jav2.position.x=jav.position.x;
                            jav2.rotation.z=jav.rotation.z;
                            jav2.position.y=jav.position.y;
                            jav2.position.z=jav.position.z;
                            jav2.rotation.y=jav.rotation.y;
                        }
                        else if(tour==3){
                            anim3[4].stop();
                            anim3[0].start(true);
                            tour=0;
                            jav3.position.y=-1;
                            
                        }
                        interface2.classList.remove("notplaying");
                        gameinterface.classList.remove("notplaying");
                        const score12 = document.getElementById("score12")
                        const score22 = document.getElementById("score22");
                        const score32 = document.getElementById("score32");
                        score12.innerText=score[0]+"m";
                        score22.innerText=score[1]+"m";
                        score32.innerText=score[2]+"m";
                        if(tour!=0){
                            start2tour.innerText = "Appuyez sur espace pour commencer au tour du joueur "+tour;
                        }
                    }
                }
            }
        });
        var NextQTE = function () {
            limitBox.position.x += 4;
            count=0;
            QTEkey = QTEkeys[Math.floor(Math.random()*QTEkeys.length)];
            qtelettre.innerText = QTEkey.toUpperCase();
            isSuccess = false;
            stop=false;
            qtebox.classList.remove("fail");
            qtebox.classList.remove("success");
            qtelettre.classList.remove("disapear");
            qtebox.classList.remove(randomPos);
            randomPos = randomPosList[Math.floor(Math.random()*randomPosList.length)];
            qtebox.classList.add(randomPos);
            if(limitBox.position.x>=throwBox.position.x){
                qtebox.classList.add("notplaying");
            }
        };
        window.addEventListener("keydown", function (event){
            if (tour!=-1&&!started&&event.key === " "){
                camera.position.x=-50;
                camera.position.y=2;
                camera.position.z=-10;
                camera.setTarget(new BABYLON.Vector3(-50,1,5));
                interface2.classList.add("notplaying"); 
                gameinterface.classList.add("notplaying");
                engine.enterPointerlock();
                jav.position.x=-90;
                jav.position.y=1.65;
                jav.position.z=0.45;
                jav.rotation.z=0;
                if(tour==1){
                    anim1[1].stop();
                    anim1[1].play();
                } else if(tour==2){
                    mesh1.position.x=-53;
                    anim1[0].stop();
                    anim1[1].play(true);
                    anim1[1].pause();
                    anim1[1].goToFrame(12);
                    mesh1.rotation.y=3.14;
                    mesh1.position.z=4.8;
                    anim2[1].stop();
                    anim2[1].play();
                } else if(tour==3){ 
                    mesh2.position.x=-50;
                    anim2[0].stop();
                    anim2[1].play(true);
                    anim2[1].pause();
                    anim2[1].goToFrame(12);
                    mesh2.rotation.y=3.14;
                    mesh2.position.z=4.8;
                    anim3[1].stop();
                    anim3[1].play();
                }
                started=true;
                time.classList.remove("notplaying");
                timed=true;
            }
            if(started&&run){
                if(isSuccess){return;}
                if (stop||event.key.toLowerCase()!== QTEkey) {stop=true;qtebox.classList.add("fail");qtelettre.classList.add("disapear");}
                else{
                    if(tour==1){
                        if (mesh1.position.x < limitBox.position.x ) {isSuccess = true;qtebox.classList.add("success");qtelettre.classList.add("disapear");varcount=count;success.play();} 
                    }
                    else if(tour==2){
                        if (mesh2.position.x < limitBox.position.x ) {isSuccess = true;qtebox.classList.add("success");qtelettre.classList.add("disapear");varcount=count;success.play();} 
                    }
                    else if(tour==3){
                        if (mesh3.position.x < limitBox.position.x ) {isSuccess = true;qtebox.classList.add("success");qtelettre.classList.add("disapear");varcount=count;success.play();} 
                    }
                }
            }
        });
    }

    //JEU 3 clone fait
    if(jeut==3){
        var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(-120, 1.8, 0), scene);
        camera.attachControl(canvas, true);
        camera.inputs.removeByType("FreeCameraKeyboardMoveInput");
        camera.setTarget(new BABYLON.Vector3(0,10,0));
        camera.inertia = 0.1;
        //cadre et decor :
        var truss = await BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "truss.glb", scene);
        var truss1 = truss.meshes[0];
        var truss2 = truss1.clone("truss2");
        var truss3 = truss1.clone("truss3");
        truss1.position.x=-100;
        truss2.position.x=-100;
        truss3.position.x=-99.7;
        truss2.position.z=5;
        truss1.position.z=-5;
        truss1.scaling = new BABYLON.Vector3(1, 2, 1);
        truss2.scaling = new BABYLON.Vector3(1, 2, 1);
        truss3.scaling = new BABYLON.Vector3(1, 4.139, 1);
        truss3.rotationQuaternion = null;
        truss3.rotation.x=1.57;
        truss3.position.z=-5;
        truss3.position.y=4.67;
        var truss4 = truss3.clone("truss4");
        truss4.position.y=0;
        var grd = BABYLON.MeshBuilder.CreateGround("grd", { width: 150, height: 30 }, scene);
        grd.material = CreateGroundMaterial();
        grd.position.x=-150;
        //cadre cible :
        var trussV = truss2.clone("trussV");
        trussV.scaling = new BABYLON.Vector3(1, 2, 0.5);
        trussV.position.z=-0.08;
        var trussH = truss3.clone("trussH");
        trussH.scaling = new BABYLON.Vector3(1, 4.139, 0.5);
        trussH.position.y=1.92;
        //cible :
        var cible1 = BABYLON.MeshBuilder.CreateCylinder("cible", {diameter: 1.5, height: 1}, scene);
        var cible2 = BABYLON.MeshBuilder.CreateCylinder("cible", {diameter: 1.2, height: 1}, scene);
        var mat2 = new BABYLON.StandardMaterial('mat2', scene);
        mat2.diffuseColor = new BABYLON.Color3(0, 0, 0);
        cible2.material = mat2;
        var cible3 = BABYLON.MeshBuilder.CreateCylinder("cible", {diameter: 0.9, height: 1}, scene);
        var mat2 = new BABYLON.StandardMaterial('mat2', scene);
        mat2.diffuseColor = new BABYLON.Color3(0, 0, 1);
        cible3.material = mat2;
        var cible4 = BABYLON.MeshBuilder.CreateCylinder("cible", {diameter: 0.6, height: 1}, scene);
        var mat2 = new BABYLON.StandardMaterial('mat2', scene);
        mat2.diffuseColor = new BABYLON.Color3(1, 0, 0);
        cible4.material = mat2;
        var cible5 = BABYLON.MeshBuilder.CreateCylinder("cible", {diameter: 0.3, height: 1}, scene);
        var mat2 = new BABYLON.StandardMaterial('mat2', scene);
        mat2.diffuseColor = new BABYLON.Color3(1, 1, 0);
        cible5.material = mat2;
        var cibles = [cible1,cible2,cible3,cible4,cible5];
        for(let i=0;i<5;i++){
            cibles[i].rotation.z=1.57;;
            cibles[i].position.y=2;
            cibles[i].position.x=-100.1-0.001*i;
        }

        //operateur set:
        var estr = BABYLON.MeshBuilder.CreateBox("estr", { height: 1, width: 7, depth: 7 }, scene);
        estr.position.x=-110;
        estr.position.z=8;
        estr.rotation.y=0.3;
        var mat = CreateWallMaterial();
        mat.diffuseTexture.uScale=0.5;
        mat.diffuseTexture.vScale=0.5;
        estr.material = mat;
        var board1 = BABYLON.MeshBuilder.CreateBox("board1", { height: 1, width: 2, depth: 4 }, scene);
        board1.position.x=-108;
        board1.position.z=8;
        board1.position.y=1;
        board1.rotation.y=0.3;
        const board2 = BABYLON.MeshBuilder.CreateCylinder("cylinder", {tessellation: 3, height: 4, diameter: 3}, scene);
        board2.position.x=-107.75;
        board2.position.z=7.92;
        board2.position.y=1.5;
        board2.rotation.y=0.3;
        board2.rotation.x=1.57;
        board2.rotation.z=3.14
        const boardz = BABYLON.MeshBuilder.CreateBox("boardz", { height: 0.5, width: 0.5, depth: 0.5 }, scene);
        const boardq = BABYLON.MeshBuilder.CreateBox("boardz", { height: 0.5, width: 0.5, depth: 0.5 }, scene);
        const boards = BABYLON.MeshBuilder.CreateBox("boardz", { height: 0.5, width: 0.5, depth: 0.5 }, scene);
        const boardd = BABYLON.MeshBuilder.CreateBox("boardz", { height: 0.5, width: 0.5, depth: 0.5 }, scene);
        var matb = new BABYLON.StandardMaterial(scene);
        matb.diffuseColor = new BABYLON.Color3(1,1,1);
        var matbOn = new BABYLON.StandardMaterial(scene);
        matbOn.diffuseColor = new BABYLON.Color3(1,0,0);
        boardz.position.x=-107.7;
        boardz.position.z=8;
        boardz.position.y=2.2;
        boardz.rotation.y=0.3;
        boardz.rotation.z=0.58;
        boardq.position.x=-107.9;
        boardq.position.z=8.65;
        boardq.position.y=1.98;
        boardq.rotation.y=0.3;
        boardq.rotation.z=0.58;
        boards.position.x=-108.18;
        boards.position.z=8.15;
        boards.position.y=1.9;
        boards.rotation.y=0.3;
        boards.rotation.z=0.58;
        boardd.position.x=-108.2;
        boardd.position.z=7.59;
        boardd.position.y=1.98;
        boardd.rotation.y=0.3;
        boardd.rotation.z=0.58;
        boardz.material = matb;
        boardq.material = matb;
        boards.material = matb;
        boardd.material = matb;
        var mat = new BABYLON.StandardMaterial(scene);
        mat.diffuseColor = new BABYLON.Color3(0.2,0.2,0.2);
        board1.material = mat;
        board2.material = mat;
        //opérateur fct
        var Z=false;
        var Q=false;
        var S=false;
        var D=false;

        var indic = document.getElementById("indic");
        //affichage set:
        var screen = BABYLON.MeshBuilder.CreateBox("screen", { height: 4.5, width: 8, depth: 0.1 }, scene);
        screen.position.x=-108;
        screen.position.z=-9;
        screen.position.y=2.25;
        screen.rotation.y=-Math.PI/4;
        screen.material=mat
        var screenEffect = BABYLON.MeshBuilder.CreateGround("screenef", {height:4.5, width:8}, scene);
        screenEffect.position.x=-108.05;
        screenEffect.position.z=-8.95;
        screenEffect.position.y=2.25;
        screenEffect.rotation.y=-Math.PI/4;
        screenEffect.rotation.x=Math.PI/2;
        screenEffect.material = CreateScreenMaterial(scene);
        var trussS = truss2.clone("trussS");
        trussS.position.x=-105.17;
        trussS.position.z=-6.17;
        trussS.position.y-=0.5;
        var trussS2 = trussS.clone("trussS2");
        trussS2.position.x-=5.66+0.3;
        trussS2.position.z-=5.66+0.3;
        var cible1a = BABYLON.MeshBuilder.CreateCylinder("cible", {diameter: 3, height: 0.1}, scene);
        var mat21 = new BABYLON.StandardMaterial('mat2', scene);
        mat21.diffuseColor = new BABYLON.Color3(1, 1, 1);
        cible1a.material = mat21;
        var cible2a = BABYLON.MeshBuilder.CreateCylinder("cible", {diameter: 2.4, height: 0.1}, scene);
        var mat22 = new BABYLON.StandardMaterial('mat2', scene);
        mat22.diffuseColor = new BABYLON.Color3(0, 0, 0);
        cible2a.material = mat22;
        var cible3a = BABYLON.MeshBuilder.CreateCylinder("cible", {diameter: 1.8, height: 0.1}, scene);
        var mat23 = new BABYLON.StandardMaterial('mat2', scene);
        mat23.diffuseColor = new BABYLON.Color3(0, 0, 1);
        cible3a.material = mat23;
        var cible4a = BABYLON.MeshBuilder.CreateCylinder("cible", {diameter: 1.2, height: 0.1}, scene);
        var mat24 = new BABYLON.StandardMaterial('mat2', scene);
        mat24.diffuseColor = new BABYLON.Color3(1, 0, 0);
        cible4a.material = mat24;
        var cible5a = BABYLON.MeshBuilder.CreateCylinder("cible", {diameter: 0.6, height: 0.1}, scene);
        var mat25 = new BABYLON.StandardMaterial('mat2', scene);
        mat25.diffuseColor = new BABYLON.Color3(1, 1, 0);
        cible5a.material = mat25;
        var ciblesa = [cible1a,cible2a,cible3a,cible4a,cible5a];
        for(let i=0;i<5;i++){
            ciblesa[i].rotation.z=1.57;;
            ciblesa[i].position.z=-9;
            ciblesa[i].rotation.y=Math.PI/4;
            ciblesa[i].position.y=2.25;
            ciblesa[i].position.x=-108.02-0.001*i;
        }
        //texte j1 
        var txtj1 = (await BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "joueurText.glb", scene)).meshes[0];
        txtj1.scaling = new BABYLON.Vector3(0.7, 0.7, 0.7);
        txtj1.position.x=-105.42;
        txtj1.position.z=-6.43;
        txtj1.position.y=3.9;
        txtj1.rotationQuaternion = null;
        txtj1.rotation.y=-Math.PI/4+3.14;
        txtj1.rotation.x=1.57;
        txtj1.scaling = new BABYLON.Vector3(0.7, 0.7, 0.7);
        var txtj2 = txtj1.clone("txtj2");
        txtj2.position.y=0.2
        var numbers = await BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "numbers.glb", scene); //nb[1]==0
        numbers.meshes.forEach( (value,index)=>{
            if(index!=0){
                value.position.y=-10;
                value.scaling = new BABYLON.Vector3(0.7, 0.7, 0.7)
            }
        });
        //j1 et j2
        var ofstnb = 0.39;
        var nb1 = numbers.meshes[2];
        var nb2 = numbers.meshes[3];
        nb1.rotationQuaternion = null;nb2.rotationQuaternion = null;
        nb1.position.x=107.2-ofstnb;nb2.position.x=107.2-2*ofstnb;
        nb1.position.z=-8.2+ofstnb;nb2.position.z=-(8.2-ofstnb*2);
        nb1.position.y=3.9;nb2.position.y=0.2;
        nb1.rotation.y=Math.PI/4;nb2.rotation.y=Math.PI/4;
        nb1.rotation.x=1.57;nb2.rotation.x=1.57;
        //unités j1
        var j10 = numbers.meshes[1];
        var j11 = nb1.clone("j11")
        var j12 = nb2.clone("j12")
        var j13 = numbers.meshes[4];
        var j14 = numbers.meshes[5];
        var j15 = numbers.meshes[6];
        var j16 = numbers.meshes[7];
        var j17 = numbers.meshes[8];
        var j18 = numbers.meshes[9];
        var j19 = numbers.meshes[10];
        var j1 = [j10,j11,j12,j13,j14,j15,j16,j17,j18,j19];
        //unités j2 et position
        var j2 = [];
        j1.forEach((value,index)=>{
            value.rotationQuaternion = null;
            value.position.x=108.3-ofstnb*index;
            value.position.z=-9.3+ofstnb*index;
            value.position.y=-10;
            value.rotation.y=Math.PI/4;
            value.rotation.x=1.57;
            j2.push(value.clone("j2"+index));
            j2[index].position.y=-12;
        });
        //dizaine j1
        var j1d1 = j11.clone("j1d1");j1d1.position.x=108-ofstnb;j1d1.position.z=-9+ofstnb;
        var j1d2 = j12.clone("j1d2");j1d2.position.x=108-2*ofstnb;j1d2.position.z=-9+2*ofstnb;
        //dizaine j2
        var j2d1 = j1d1.clone("j2d1");j2d1.position.y=0.2;
        var j2d2 = j1d2.clone("j2d2");j2d2.position.y=0.2;
        function scoreAff(score,joueur) {
            var str = score.toString();
            var unité = str.charAt(0);
            var dizaine = 0;
            if(str.length==2){
                var dizaine = unité;
                unité = str.charAt(1);
            }
            if(joueur==1){
                if(dizaine==0){
                    j1d1.position.y=-10;
                    j1d2.position.y=-10;
                } else if(dizaine==1){
                    j1d1.position.y=3.9;
                    j1d2.position.y=-10;
                } else {
                    j1d1.position.y=-10;
                    j1d2.position.y=3.9;
                }
                j1.forEach((value,index)=>{
                    value.position.y=-10;
                    if(index==unité){
                        value.position.y=3.9;
                    }
                });
            }
            if(joueur==2){
                if(dizaine==0){
                    j2d1.position.y=-10;
                    j2d2.position.y=-10;
                } else if(dizaine==1){
                    j2d1.position.y=0.2;
                    j2d2.position.y=-10;
                } else {
                    j2d1.position.y=-10;
                    j2d2.position.y=0.2;
                }
                j2.forEach((value,index)=>{
                    value.position.y=-10;
                    if(index==unité){
                        value.position.y=0.2;
                    }
                });
            }

        }
        var player1 = await BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "player3.glb", scene);
        player1.meshes[0].scaling = new BABYLON.Vector3(1.6, 1.6, 1.6);
        player1.meshes[0].rotationQuaternion = null;
        player1.meshes[0].position.x=-109.2;
        player1.meshes[0].position.z=8.35;
        player1.meshes[0].rotation.y=2.07;
        player1.meshes[0].position.y=0.5;
        player1.animationGroups[0].speedRatio=0.5;
        var tour = 0;
        var pause = true;
        var end=false;
        window.addEventListener("keydown", function (event){
            if(event.key === " "){
                if(pause&&!end){
                    gameinterface.classList.add("notplaying");
                    time.classList.remove("notplaying");
                    timed=true;
                }
            }
        });
        var timer=0;
        var timed = false
        var tps=0;
        var lt=0;
        scene.onAfterRenderObservable.add(function () {
            if(timed){
                timer+=1/fps;
                tps = Math.floor(timer);
                if(tps==3){
                    time.innerText = "GO !";
                    time.classList.add("disapear")
                }else{
                    time.innerText = 3-tps;
                    if(lt==tps){
                        countdown.play(0,tps,1)
                        lt = tps+1;
                    }
                }
                if(timer>3){
                    countdown.play(0,3,1)
                    timed=false;
                    timer=0;
                    lt=0;
                    engine.enterPointerlock();
                    pause=false;
                    tour+=1;
                    if(tour==1){
                        scoreAff(0,1);
                        scoreAff(0,2);
                    }
                    indic.innerText = "Au tour du joueur "+tour+" de tirer : il reste 5 flèches";
                    time.classList.add("notplaying");
                    time.classList.remove("disapear");
                }
            }
        });
        //scene action:
        var fleche = (await BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "arrow.glb", scene)).meshes[0];
        fleche.rotationQuaternion = null;
        fleche.rotation.z=-1.57;
        fleche.position.x=-120;
        fleche.position.y=1.5;
        var launch = false;
        var z=0;
        var y =0;
        var clicked = false;
        var scorej1 = 0;
        var scorej2 = 0;
        var sc = 0;
        var charge = 5;
        var speed = 0.04;
        const GrdMat = new BABYLON.StandardMaterial("GrdMat", scene);
        GrdMat.diffuseColor = new BABYLON.Color3(0.1, 0.1, 0.1);
        GrdMat.diffuseTexture = undefined;
        var timej1=0;
        var timej2=0;
        var vect1 = new BABYLON.Vector3(0,0,0);
        scene.onBeforeRenderObservable.add(function () {
            if(!pause&&!end){
                if(!launch){
                    fleche.rotation.y=camera.rotation.y-1.57;
                    fleche.rotation.z=-camera.rotation.x-1.57;
                }
                if(tour==1){
                    timej1+=1/fps;
                }
                if(tour==2){
                    timej2+=1/fps;
                }
                var vect = camera.absoluteRotation.toEulerAngles();
                if(!clicked){
                    vect1 = camera.absoluteRotation.toEulerAngles();
                }
                if(Math.floor(vect.y*100)/100 > 1.845){
                    camera.rotation.y=1.845;
                }
                else if(Math.floor(vect.y*100)/100 < 1.275){
                    camera.rotation.y=1.275;
                }
                if(Math.floor(vect.x*100)/100 < -0.2){
                    camera.rotation.x=-0.2;
                }
                else if(Math.floor(vect.x*100)/100 > 0.08){
                    camera.rotation.x=0.08;
                }
                //opérateur action:
                if(Z&&cible1.position.y<4.8){
                    trussH.position.y+=speed*(60/fps);
                    for(let i=0;i<5;i++){
                        cibles[i].position.y+=speed*(60/fps);
                    }
                }
                if(Q&&cible1.position.z<5.1){
                    trussV.position.z+=speed*(60/fps);
                    for(let i=0;i<5;i++){
                        cibles[i].position.z+=speed*(60/fps);
                    }
                }
                if(S&&cible1.position.y>0.8){
                    trussH.position.y-=speed*(60/fps);
                    for(let i=0;i<5;i++){
                        cibles[i].position.y-=speed*(60/fps);
                    }
                }
                if(D&&cible1.position.z>-4.9){
                    trussV.position.z-=speed*(60/fps);
                    for(let i=0;i<5;i++){
                        cibles[i].position.z-=speed*(60/fps);
                    }
                }
                if(launch){
                    fleche.position.x+=(60/fps);
                    fleche.position.z=-((fleche.position.x+120)*z);
                    fleche.position.y=1.5-((fleche.position.x+120)*y);
                    if(fleche.position.x>=-90){
                        launch=false;
                        sc = 0;
                    }
                    if(fleche.intersectsMesh(cible5, false)){
                        sc = 5;
                        launch=false;
                        cible5a.material.diffuseColor = new BABYLON.Color3(0, 1, 0);
                        cible4a.material.diffuseColor = new BABYLON.Color3(1, 0, 0);
                        cible3a.material.diffuseColor = new BABYLON.Color3(0, 0, 1);
                        cible2a.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
                        cible1a.material.diffuseColor = new BABYLON.Color3(1, 1, 1);
                    }
                    else if(fleche.intersectsMesh(cible4, false)){
                        sc = 4;
                        launch=false;
                        cible5a.material.diffuseColor = new BABYLON.Color3(1, 1, 0);
                        cible4a.material.diffuseColor = new BABYLON.Color3(0, 1, 0);
                        cible3a.material.diffuseColor = new BABYLON.Color3(0, 0, 1);
                        cible2a.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
                        cible1a.material.diffuseColor = new BABYLON.Color3(1, 1, 1);
                    }
                    else if(fleche.intersectsMesh(cible3, false)){
                        sc=3;
                        launch=false;
                        cible5a.material.diffuseColor = new BABYLON.Color3(1, 1, 0);
                        cible4a.material.diffuseColor = new BABYLON.Color3(1, 0, 0);
                        cible3a.material.diffuseColor = new BABYLON.Color3(0, 1, 0);
                        cible2a.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
                        cible1a.material.diffuseColor = new BABYLON.Color3(1, 1, 1);
                    }
                    else if(fleche.intersectsMesh(cible2, false)){
                        sc=2;
                        launch=false;
                        cible5a.material.diffuseColor = new BABYLON.Color3(1, 1, 0);
                        cible4a.material.diffuseColor = new BABYLON.Color3(1, 0, 0);
                        cible3a.material.diffuseColor = new BABYLON.Color3(0, 0, 1);
                        cible2a.material.diffuseColor = new BABYLON.Color3(0, 1, 0);
                        cible1a.material.diffuseColor = new BABYLON.Color3(1, 1, 1);
                    }
                    else if(fleche.intersectsMesh(cible1, false)){
                        sc=1;
                        launch=false;
                        cible5a.material.diffuseColor = new BABYLON.Color3(1, 1, 0);
                        cible4a.material.diffuseColor = new BABYLON.Color3(1, 0, 0);
                        cible3a.material.diffuseColor = new BABYLON.Color3(0, 0, 1);
                        cible2a.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
                        cible1a.material.diffuseColor = new BABYLON.Color3(0, 1, 0);
                    } 
                    if(!launch){
                        air.stop();
                        if(tour==1){
                            scorej1+=sc;
                            scoreAff(scorej1,1);
                        } else {
                            scorej2+=sc;
                            scoreAff(scorej2,2);
                        }
                        if(sc!=0){
                            success.play();
                        }
                        charge--;
                        indic.innerText = "Au tour du joueur "+tour+" de tirer : il reste "+charge+" flèche(s)";
                        clicked=false;
                        fleche.position.x=-120;
                        fleche.position.z=0;
                        fleche.position.y=1.5;
                    }
                    if(charge==0){
                        if(tour==1){
                            charge=5;
                            player1.meshes[6].material = GrdMat;
                            gameinterface.classList.remove("notplaying");
                            pause=true;
                            indic.innerText = "Au tour du joueur "+(tour+1)+" de tirer";
                        } else {
                            engine.exitPointerlock();
                            pause=true;
                            end = true;
                            camera.position.x=-118;
                            camera.detachControl();
                            camera.setTarget(new BABYLON.Vector3(-108,2,-9));
                            player1.meshes[0].position.z=-9;
                            player1.meshes[0].rotation.y=-0.5;
                            player1.meshes[0].position.y=0;
                            player1.meshes[0].position.x=-110;
                            var ctr="";
                            if(scorej1==scorej2){
                                if(timej1<timej2){
                                    scorej2--;
                                    ctr="<br> (contre "+Math.floor(timej2*100)/100+" secondes)"
                                } else {
                                    scorej1--;
                                    ctr="<br> (contre "+Math.floor(timej1*100)/100+" secondes)"
                                }
                            }
                            if(scorej1>scorej2){
                                indic.innerHTML = "Le joueur 1 a gagné avec "+scorej1+" points en "+Math.floor(timej1*100)/100+" secondes"+ctr+"";
                                GrdMat.diffuseColor = new BABYLON.Color3(1, 1, 1);
                                player1.meshes[6].material = GrdMat;
                            } else {
                                indic.innerHTML = "Le joueur 2 a gagné avec "+scorej2+" points en "+Math.floor(timej2*100)/100+" secondes"+ctr+"";
                            }
                            clap1.play();
                            if(localStorage.getItem("sound")=="true"){
                                background.setVolume(0.3*vol);
                            }
                            end3.classList.remove("notplaying");
                            crs.classList.add("notplaying");
                            player1.animationGroups[0].stop();
                            player1.animationGroups[1].play(true);
                            engine.exitPointerlock();
                        }
                        machine.stop();
                        Q=false;
                        boardq.material = matb;
                        Z=false;
                        boardz.material = matb;
                        S=false;
                        boards.material = matb;
                        D=false;
                        boardd.material = matb;
                    }
                }
            }
        
        });
        window.addEventListener("click", function (event){
            if(!pause){
                if(vect1!=undefined){
                    z = Math.sin(vect1.y-1.57);
                    fleche.rotation.y=vect1.y-1.57;
                    y = Math.sin(vect1.x);
                    fleche.rotation.z=-vect1.x-1.57;
                }
                launch = true;
                clicked=true;
                air.play();
            }  
        });
        var plysd = false;
        window.addEventListener("keydown", function (event){
            if(!pause){
                if(!Z&&event.key.toLowerCase() === "z"){
                    if(!plysd){
                        machine.play();
                        
                    } else {
                        machine.stop();
                        machine.play();
                    }
                    plysd=true;
                    Z=true;
                    boardz.material = matbOn;
                }
                if(!Q&&event.key.toLowerCase() === "q"){
                    if(!plysd){
                        machine.play();
                        
                    } else {
                        machine.stop();
                        machine.play();
                    }
                    plysd=true;
                    Q=true;
                    boardq.material = matbOn;
                }
                if(!S&&event.key.toLowerCase() === "s"){
                    if(!plysd){
                        machine.play();
                        
                    } else {
                        machine.stop();
                        machine.play();
                    }
                    plysd=true;
                    S=true;
                    boards.material = matbOn;
                }
                if(!D&&event.key.toLowerCase() === "d"){
                    if(!plysd){
                        machine.play();
                        
                    } else {
                        machine.stop();
                        machine.play();
                    }
                    plysd=true;
                    D=true;
                    boardd.material = matbOn;
                }
            } 
        });
        window.addEventListener("keyup", function (event){
            if(!pause){
                if(event.key.toLowerCase() === "z"){
                    Z=false;
                    boardz.material = matb;
                }
                if(event.key.toLowerCase() === "q"){
                    Q=false;
                    boardq.material = matb;
                }
                if(event.key.toLowerCase() === "s"){
                    S=false;
                    boards.material = matb;
                }
                if(event.key.toLowerCase() === "d"){
                    D=false;
                    boardd.material = matb;
                }
                if(!(Z||Q||S||D)){
                    machine.stop();
                    plysd=false;
                }
            }
        });
        loading.classList.add("notplaying");
    }

    //JEU4
    if(jeut==4){
        menu1.classList.add("notplaying");
        var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(179,11, 0), scene);
        camera.rotation.y=-1.57;
        camera.rotation.x=0.5;
        var started=false;
        // CONSTRUCTIOINN TERRAIN :
        BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "soccergoal.glb", scene).then((result) => {
            var mesh = result.meshes[0];
            mesh.scaling = new BABYLON.Vector3(0.025, 0.022, 0.022);
            mesh.rotationQuaternion = null;
            mesh.position.x=164.6;
            mesh.rotation.y=1.57;
            mesh.position.z=7;
        });
        BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "soccergoal.glb", scene).then((result) => {
            var mesh = result.meshes[0];
            mesh.scaling = new BABYLON.Vector3(0.025, 0.022, 0.022);
            mesh.rotationQuaternion = null;
            mesh.position.x=-164.6;
            mesh.rotation.y=-1.57;
            mesh.position.z=-5.5;
        });

        const landPoints = [
            new BABYLON.Vector3(163, 0, -25),
            new BABYLON.Vector3(163, 0, 25),
            new BABYLON.Vector3(-163, 0, 25),
            new BABYLON.Vector3(-163, 0, -25),
            new BABYLON.Vector3(163, 0, -25),
        ]
        const midlePoints = [
            new BABYLON.Vector3(0, 0, -25),
            new BABYLON.Vector3(0, 0, 25),
        ]
        const landLines = BABYLON.MeshBuilder.CreateLines("lines", {points: landPoints});
        const midleLines = BABYLON.MeshBuilder.CreateLines("lines", {points: midlePoints});


        const goalPointsDroite = [
            new BABYLON.Vector3(163, 0, 7),
            new BABYLON.Vector3(155, 0, 7),
            new BABYLON.Vector3(155, 0, -5.5),
            new BABYLON.Vector3(163, 0, -5.5),
        ]
        
        const butPointsDroite = [
            new BABYLON.Vector3(163, 0, 15),
            new BABYLON.Vector3(145, 0, 15),
            new BABYLON.Vector3(145, 0, -15),
            new BABYLON.Vector3(163, 0, -15),
        ]
        const goalLinesDroite = BABYLON.MeshBuilder.CreateLines("lines", {points: goalPointsDroite});
        const butLinesDroite = BABYLON.MeshBuilder.CreateLines("lines", {points: butPointsDroite});


        const goalPointsGauche= [
            new BABYLON.Vector3(-163, 0, 7),
            new BABYLON.Vector3(-155, 0, 7),
            new BABYLON.Vector3(-155, 0, -5.5),
            new BABYLON.Vector3(-163, 0, -5.5),
        ]
        
        const butPointsGauche = [
            new BABYLON.Vector3(-163, 0, 15),
            new BABYLON.Vector3(-145, 0, 15),
            new BABYLON.Vector3(-145, 0, -15),
            new BABYLON.Vector3(-163, 0, -15),
        ]
        const goalLinesGauche  = BABYLON.MeshBuilder.CreateLines("lines", {points: goalPointsGauche});
        const butLinesGauche  = BABYLON.MeshBuilder.CreateLines("lines", {points: butPointsGauche});
        var mySinus = [];
        var radius = 10;
        for (var i = -Math.PI; i <= Math.PI; i+=Math.PI/360) {
         mySinus.push( new BABYLON.Vector3(radius*Math.cos(i),0, radius*Math.sin(i)) );
        }
        const baseCircle = BABYLON.Mesh.CreateLines("qbezier2", mySinus, scene);
        baseCircle.scaling = new BABYLON.Vector3(1.3, 1.3, 1.3);

        var premierGardien = await BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "premierGardien.glb", scene);
                premierGardien.animationGroups[0].play(true);
                premierGardien.meshes[0].rotationQuaternion = null;
                premierGardien.meshes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
                premierGardien.meshes[0].position.x=162;
                premierGardien.meshes[0].rotation.y=-1.57;
                
        //LIGNE JOEUR 1 :
        var Joeur = await BABYLON.SceneLoader.LoadAssetContainerAsync("./models/","soccerPlayer.glb",scene);// ("", "/models/", "player13.glb", scene);
        Joeur.addAllToScene();
        Joeur.meshes[0].position.y=-10;
        console.log(Joeur.animationGroups.length)
        const JoeurDroite1 = Joeur.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        JoeurDroite1.animationGroups[51].play(true);
        JoeurDroite1.animationGroups[51].speedRatio=Math.random()*2+0.5;
        JoeurDroite1.animationGroups[51].goToFrame(Math.floor(Math.random()*100));
        JoeurDroite1.rootNodes[0].rotationQuaternion = null;
        JoeurDroite1.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        JoeurDroite1.rootNodes[0].position.x=115;
        JoeurDroite1.rootNodes[0].rotation.y=1.57;
        JoeurDroite1.rootNodes[0].position.z=20;
        JoeurDroite1.rootNodes[0].position.y=0;
        
        const JoeurMilieu1 = Joeur.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        JoeurMilieu1.animationGroups[51].play(true);
        JoeurMilieu1.animationGroups[51].speedRatio=Math.random()*2+0.5;
        JoeurMilieu1.animationGroups[51].goToFrame(Math.floor(Math.random()*100));
        JoeurMilieu1.rootNodes[0].rotationQuaternion = null;
        JoeurMilieu1.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        JoeurMilieu1.rootNodes[0].position.x=115;
        JoeurMilieu1.rootNodes[0].rotation.y=1.57;
        JoeurMilieu1.rootNodes[0].position.z=0;
        JoeurMilieu1.rootNodes[0].position.y=0;
        
        const JoeurGauche1 = Joeur.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        JoeurGauche1.animationGroups[51].play(true);
        JoeurGauche1.animationGroups[51].speedRatio=Math.random()*2+0.5;
        JoeurGauche1.animationGroups[51].goToFrame(Math.floor(Math.random()*100));
        JoeurGauche1.rootNodes[0].rotationQuaternion = null;
        JoeurGauche1.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        JoeurGauche1.rootNodes[0].position.x=115;
        JoeurGauche1.rootNodes[0].rotation.y=1.57;
        JoeurGauche1.rootNodes[0].position.z=-20;
        JoeurGauche1.rootNodes[0].position.y=0;
        
        //LIGNE JOEUR 2 :
        const JoeurDroite2 = Joeur.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        JoeurDroite2.animationGroups[51].play(true);
        JoeurDroite2.animationGroups[51].speedRatio=Math.random()*2+0.5;
        JoeurDroite2.animationGroups[51].goToFrame(Math.floor(Math.random()*100));
        JoeurDroite2.rootNodes[0].rotationQuaternion = null;
        JoeurDroite2.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        JoeurDroite2.rootNodes[0].position.x=75;
        JoeurDroite2.rootNodes[0].rotation.y=1.57;
        JoeurDroite2.rootNodes[0].position.z=20;
        JoeurDroite2.rootNodes[0].position.y=0;


        const JoeurMilieu2 = Joeur.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        JoeurMilieu2.animationGroups[51].play(true);
        JoeurMilieu2.animationGroups[51].speedRatio=Math.random()*2+0.5;
        JoeurMilieu2.animationGroups[51].goToFrame(Math.floor(Math.random()*100));
        JoeurMilieu2.rootNodes[0].rotationQuaternion = null;
        JoeurMilieu2.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        JoeurMilieu2.rootNodes[0].position.x=75;
        JoeurMilieu2.rootNodes[0].rotation.y=1.57;
        JoeurMilieu2.rootNodes[0].position.z=0;
        JoeurMilieu2.rootNodes[0].position.y=0;
        
        const JoeurGauche2 = Joeur.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        JoeurGauche2.animationGroups[51].play(true);
        JoeurGauche2.animationGroups[51].speedRatio=Math.random()*2+0.5;
        JoeurGauche2.animationGroups[51].goToFrame(Math.floor(Math.random()*100));
        JoeurGauche2.rootNodes[0].rotationQuaternion = null;
        JoeurGauche2.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        JoeurGauche2.rootNodes[0].position.x=75;
        JoeurGauche2.rootNodes[0].rotation.y=1.57;
        JoeurGauche2.rootNodes[0].position.z=-20;
        JoeurGauche2.rootNodes[0].position.y=0;
        

        //LIGNE JOEUR 3 :

        const JoeurDroite3 = Joeur.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        JoeurDroite3.animationGroups[51].play(true);
        JoeurDroite3.animationGroups[51].speedRatio=Math.random()*2+0.5;
        JoeurDroite3.animationGroups[51].goToFrame(Math.floor(Math.random()*100));
        JoeurDroite3.rootNodes[0].rotationQuaternion = null;
        JoeurDroite3.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        JoeurDroite3.rootNodes[0].position.x=35;
        JoeurDroite3.rootNodes[0].rotation.y=1.57;
        JoeurDroite3.rootNodes[0].position.z=20;
        JoeurDroite3.rootNodes[0].position.y=0;
        
        const JoeurMilieu3 = Joeur.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        JoeurMilieu3.animationGroups[51].play(true);
        JoeurMilieu3.animationGroups[51].speedRatio=Math.random()*2+0.5;
        JoeurMilieu3.animationGroups[51].goToFrame(Math.floor(Math.random()*100));
        JoeurMilieu3.rootNodes[0].rotationQuaternion = null;
        JoeurMilieu3.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        JoeurMilieu3.rootNodes[0].position.x=35;
        JoeurMilieu3.rootNodes[0].rotation.y=1.57;
        JoeurMilieu3.rootNodes[0].position.z=0;
        JoeurMilieu3.rootNodes[0].position.y=0;
        
        const JoeurGauche3 = Joeur.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        JoeurGauche3.animationGroups[51].play(true);
        JoeurGauche3.animationGroups[51].speedRatio=Math.random()*2+0.5;
        JoeurGauche3.animationGroups[51].goToFrame(Math.floor(Math.random()*100));
        JoeurGauche3.rootNodes[0].rotationQuaternion = null;
        JoeurGauche3.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        JoeurGauche3.rootNodes[0].position.x=35;
        JoeurGauche3.rootNodes[0].rotation.y=1.57;
        JoeurGauche3.rootNodes[0].position.z=-20;
        JoeurGauche3.rootNodes[0].position.y=0;
        

        //LIGNE JOEUR 4 :
        const JoeurDroite4 = Joeur.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        JoeurDroite4.animationGroups[51].play(true);
        JoeurDroite4.animationGroups[51].speedRatio=Math.random()*2+0.5;
        JoeurDroite4.animationGroups[51].goToFrame(Math.floor(Math.random()*100));
        JoeurDroite4.rootNodes[0].rotationQuaternion = null;
        JoeurDroite4.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        JoeurDroite4.rootNodes[0].position.x=-5;
        JoeurDroite4.rootNodes[0].rotation.y=1.57;
        JoeurDroite4.rootNodes[0].position.z=20;
        JoeurDroite4.rootNodes[0].position.y=0;

        const JoeurMilieu4 = Joeur.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        JoeurMilieu4.animationGroups[51].play(true);
        JoeurMilieu4.animationGroups[51].speedRatio=Math.random()*2+0.5;
        JoeurMilieu4.animationGroups[51].goToFrame(Math.floor(Math.random()*100));
        JoeurMilieu4.rootNodes[0].rotationQuaternion = null;
        JoeurMilieu4.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        JoeurMilieu4.rootNodes[0].position.x=-5;
        JoeurMilieu4.rootNodes[0].rotation.y=1.57;
        JoeurMilieu4.rootNodes[0].position.z=0;
        JoeurMilieu4.rootNodes[0].position.y=0;

        const JoeurGauche4 = Joeur.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        JoeurGauche4.animationGroups[51].play(true);
        JoeurGauche4.animationGroups[51].speedRatio=Math.random()*2+0.5;
        JoeurGauche4.animationGroups[51].goToFrame(Math.floor(Math.random()*100));
        JoeurGauche4.rootNodes[0].rotationQuaternion = null;
        JoeurGauche4.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        JoeurGauche4.rootNodes[0].position.x=-5;
        JoeurGauche4.rootNodes[0].rotation.y=1.57;
        JoeurGauche4.rootNodes[0].position.z=-20;
        JoeurGauche4.rootNodes[0].position.y=0;

        //LIGNE JOEUR 5 :
        const JoeurDroite5 = Joeur.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        JoeurDroite5.animationGroups[51].play(true);
        JoeurDroite5.animationGroups[51].speedRatio=Math.random()*2+0.5;
        JoeurDroite5.animationGroups[51].goToFrame(Math.floor(Math.random()*100));
        JoeurDroite5.rootNodes[0].rotationQuaternion = null;
        JoeurDroite5.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        JoeurDroite5.rootNodes[0].position.x=-45;
        JoeurDroite5.rootNodes[0].rotation.y=1.57;
        JoeurDroite5.rootNodes[0].position.z=20;
        JoeurDroite5.rootNodes[0].position.y=0;

        const JoeurMilieu5 = Joeur.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        JoeurMilieu5.animationGroups[51].play(true);
        JoeurMilieu5.animationGroups[51].speedRatio=Math.random()*2+0.5;
        JoeurMilieu5.animationGroups[51].goToFrame(Math.floor(Math.random()*100));
        JoeurMilieu5.rootNodes[0].rotationQuaternion = null;
        JoeurMilieu5.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        JoeurMilieu5.rootNodes[0].position.x=-45;
        JoeurMilieu5.rootNodes[0].rotation.y=1.57;
        JoeurMilieu5.rootNodes[0].position.z=0;
        JoeurMilieu5.rootNodes[0].position.y=0;
        
        const JoeurGauche5 = Joeur.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        JoeurGauche5.animationGroups[51].play(true);
        JoeurGauche5.animationGroups[51].speedRatio=Math.random()*2+0.5;
        JoeurGauche5.animationGroups[51].goToFrame(Math.floor(Math.random()*100));
        JoeurGauche5.rootNodes[0].rotationQuaternion = null;
        JoeurGauche5.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        JoeurGauche5.rootNodes[0].position.x=-45;
        JoeurGauche5.rootNodes[0].rotation.y=1.57;
        JoeurGauche5.rootNodes[0].position.z=-20;
        JoeurGauche5.rootNodes[0].position.y=0;
        
        //LIGNE JOEUR 6 :

        const JoeurDroite6 = Joeur.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        JoeurDroite6.animationGroups[51].play(true);
        JoeurDroite6.animationGroups[51].speedRatio=Math.random()*2+0.5;
        JoeurDroite6.animationGroups[51].goToFrame(Math.floor(Math.random()*100));
        JoeurDroite6.rootNodes[0].rotationQuaternion = null;
        JoeurDroite6.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        JoeurDroite6.rootNodes[0].position.x=-85;
        JoeurDroite6.rootNodes[0].rotation.y=1.57;
        JoeurDroite6.rootNodes[0].position.z=20;
        JoeurDroite6.rootNodes[0].position.y=0;

        const JoeurMilieu6 = Joeur.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        JoeurMilieu6.animationGroups[51].play(true);
        JoeurMilieu6.animationGroups[51].speedRatio=Math.random()*2+0.5;
        JoeurMilieu6.animationGroups[51].goToFrame(Math.floor(Math.random()*100));
        JoeurMilieu6.rootNodes[0].rotationQuaternion = null;
        JoeurMilieu6.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        JoeurMilieu6.rootNodes[0].position.x=-85;
        JoeurMilieu6.rootNodes[0].rotation.y=1.57;
        JoeurMilieu6.rootNodes[0].position.z=0;
        JoeurMilieu6.rootNodes[0].position.y=0;
        
        const JoeurGauche6 = Joeur.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        JoeurGauche6.animationGroups[51].play(true);
        JoeurGauche6.animationGroups[51].speedRatio=Math.random()*2+0.5;
        JoeurGauche6.animationGroups[51].goToFrame(Math.floor(Math.random()*100));
        JoeurGauche6.rootNodes[0].rotationQuaternion = null;
        JoeurGauche6.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        JoeurGauche6.rootNodes[0].position.x=-85;
        JoeurGauche6.rootNodes[0].rotation.y=1.57; 
        JoeurGauche6.rootNodes[0].position.z=-20;
        JoeurGauche6.rootNodes[0].position.y=0;
            //LIGNE JOEUR 7 :

        const JoeurDroite7 = Joeur.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        JoeurDroite7.animationGroups[51].play(true);
        JoeurDroite7.animationGroups[51].speedRatio=Math.random()*2+0.5;
        JoeurDroite7.animationGroups[51].goToFrame(Math.floor(Math.random()*100));
        JoeurDroite7.rootNodes[0].rotationQuaternion = null;
        JoeurDroite7.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        JoeurDroite7.rootNodes[0].position.x=-125;
        JoeurDroite7.rootNodes[0].rotation.y=1.57;
        JoeurDroite7.rootNodes[0].position.z=20;
        JoeurDroite7.rootNodes[0].position.y=0;

        const JoeurMilieu7 = Joeur.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        JoeurMilieu7.animationGroups[51].play(true);
        JoeurMilieu7.animationGroups[51].speedRatio=Math.random()*2+0.5;
        JoeurMilieu7.animationGroups[51].goToFrame(Math.floor(Math.random()*100));
        JoeurMilieu7.rootNodes[0].rotationQuaternion = null;
        JoeurMilieu7.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        JoeurMilieu7.rootNodes[0].position.x=-125;
        JoeurMilieu7.rootNodes[0].rotation.y=1.57;
        JoeurMilieu7.rootNodes[0].position.z=0;
        JoeurMilieu7.rootNodes[0].position.y=0;

        const JoeurGauche7 = Joeur.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        JoeurGauche7.animationGroups[51].play(true);
        JoeurGauche7.animationGroups[51].speedRatio=Math.random()*2+0.5;
        JoeurGauche7.animationGroups[51].goToFrame(Math.floor(Math.random()*100));
        JoeurGauche7.rootNodes[0].rotationQuaternion = null;
        JoeurGauche7.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        JoeurGauche7.rootNodes[0].position.x=-125;
        JoeurGauche7.rootNodes[0].rotation.y=1.57;
        JoeurGauche7.rootNodes[0].position.z=-20;
        JoeurGauche7.rootNodes[0].position.y=0;



        //LIGNE D'ADVERSAIRE 1
        let rand1=getRand1to3();
        var JoeurAdd = await BABYLON.SceneLoader.LoadAssetContainerAsync("./models/","adversairplayer.glb",scene);// ("", "/models/", "player13.glb", scene);
        JoeurAdd.meshes[0].position.y=-10;
        var adversairePlayer11 = JoeurAdd.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        adversairePlayer11.animationGroups[0].play(true);
        adversairePlayer11.animationGroups[0].speedRatio=Math.random()*2+0.5;
        adversairePlayer11.animationGroups[0].goToFrame(Math.floor(Math.random()*100));
        adversairePlayer11.rootNodes[0].rotationQuaternion = null;
        adversairePlayer11.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        adversairePlayer11.rootNodes[0].position.x=120;
        adversairePlayer11.rootNodes[0].position.y=0;
        adversairePlayer11.rootNodes[0].rotation.y=1.57;
        if(rand1[0]==0){
            adversairePlayer11.rootNodes[0].position.z=20;
        }
        if(rand1[0]==1){
            adversairePlayer11.rootNodes[0].position.z=0;
        }
        if(rand1[0]==2){
            adversairePlayer11.rootNodes[0].position.z=-20;
        }
        var adversairePlayer12 = JoeurAdd.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        adversairePlayer12.animationGroups[0].play(true);
        adversairePlayer12.animationGroups[0].speedRatio=Math.random()*2+0.5;
        adversairePlayer12.animationGroups[0].goToFrame(Math.floor(Math.random()*100));
        adversairePlayer12.rootNodes[0].rotationQuaternion = null;
        adversairePlayer12.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        adversairePlayer12.rootNodes[0].position.x=120;
        adversairePlayer12.rootNodes[0].position.y=0;
        adversairePlayer12.rootNodes[0].rotation.y=1.57;
        if(rand1[1]==0){
            adversairePlayer12.rootNodes[0].position.z=20;
        }
        if(rand1[1]==1){
            adversairePlayer12.rootNodes[0].position.z=0;
        }
        if(rand1[1]==2){
            adversairePlayer12.rootNodes[0].position.z=-20;
        }
        //LIGNE D'ADVERSAIRE 2
        let rand2=getRand1to3();
        var adversairePlayer21 = JoeurAdd.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        adversairePlayer21.animationGroups[0].play(true);
        adversairePlayer21.animationGroups[0].speedRatio=Math.random()*2+0.5;
        adversairePlayer21.animationGroups[0].goToFrame(Math.floor(Math.random()*100));
        adversairePlayer21.rootNodes[0].rotationQuaternion = null;
        adversairePlayer21.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        adversairePlayer21.rootNodes[0].position.x=80;
        adversairePlayer21.rootNodes[0].rotation.y=1.57;
        adversairePlayer21.rootNodes[0].position.y=0;
        if(rand2[0]==0){
            adversairePlayer21.rootNodes[0].position.z=20;
        }
        if(rand2[0]==1){
            adversairePlayer21.rootNodes[0].position.z=0;
        }
        if(rand2[0]==2){
            adversairePlayer21.rootNodes[0].position.z=-20;
        }
        var adversairePlayer22 = JoeurAdd.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        adversairePlayer22.animationGroups[0].play(true);
        adversairePlayer22.animationGroups[0].speedRatio=Math.random()*2+0.5;
        adversairePlayer22.animationGroups[0].goToFrame(Math.floor(Math.random()*100));
        adversairePlayer22.rootNodes[0].rotationQuaternion = null;
        adversairePlayer22.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        adversairePlayer22.rootNodes[0].position.x=80;
        adversairePlayer22.rootNodes[0].rotation.y=1.57;
        adversairePlayer22.rootNodes[0].position.y=0;
        if(rand2[1]==0){
            adversairePlayer22.rootNodes[0].position.z=20;
        }
        if(rand2[1]==1){
            adversairePlayer22.rootNodes[0].position.z=0;
        }
        if(rand2[1]==2){
            adversairePlayer22.rootNodes[0].position.z=-20;
        }
        //LIGNE D'ADVERSAIRE 3
        let rand3=getRand1to3();
        var adversairePlayer31 = JoeurAdd.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        adversairePlayer31.animationGroups[0].play(true);
        adversairePlayer31.animationGroups[0].speedRatio=Math.random()*2+0.5;
        adversairePlayer31.animationGroups[0].goToFrame(Math.floor(Math.random()*100));
        adversairePlayer31.rootNodes[0].rotationQuaternion = null;
        adversairePlayer31.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        adversairePlayer31.rootNodes[0].position.x=40;
        adversairePlayer31.rootNodes[0].rotation.y=1.57;
        adversairePlayer31.rootNodes[0].position.y=0;
        if(rand3[0]==0){
            adversairePlayer31.rootNodes[0].position.z=20;
        }
        if(rand3[0]==1){
            adversairePlayer31.rootNodes[0].position.z=0;
        }
        if(rand3[0]==2){
            adversairePlayer31.rootNodes[0].position.z=-20;
        }
        var adversairePlayer32 = JoeurAdd.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        adversairePlayer32.animationGroups[0].play(true);
        adversairePlayer32.animationGroups[0].speedRatio=Math.random()*2+0.5;
        adversairePlayer32.animationGroups[0].goToFrame(Math.floor(Math.random()*100));
        adversairePlayer32.rootNodes[0].rotationQuaternion = null;
        adversairePlayer32.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        adversairePlayer32.rootNodes[0].position.x=40;
        adversairePlayer32.rootNodes[0].rotation.y=1.57;
        adversairePlayer32.rootNodes[0].position.y=0;
        if(rand3[1]==0){
            adversairePlayer32.rootNodes[0].position.z=20;
        }
        if(rand3[1]==1){
            adversairePlayer32.rootNodes[0].position.z=0;
        }
        if(rand3[1]==2){
            adversairePlayer32.rootNodes[0].position.z=-20;
        }
        //LIGNE D'ADVERSAIRE 4
        let rand4=getRand1to3();
        var adversairePlayer41 = JoeurAdd.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        adversairePlayer41.animationGroups[0].play(true);
        adversairePlayer41.animationGroups[0].speedRatio=Math.random()*2+0.5;
        adversairePlayer41.animationGroups[0].goToFrame(Math.floor(Math.random()*100));
        adversairePlayer41.rootNodes[0].rotationQuaternion = null;
        adversairePlayer41.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        adversairePlayer41.rootNodes[0].position.x=0;
        adversairePlayer41.rootNodes[0].rotation.y=1.57;
        adversairePlayer41.rootNodes[0].position.y=0;
        if(rand4[0]==0){
            adversairePlayer41.rootNodes[0].position.z=20;
        }
        if(rand4[0]==1){
            adversairePlayer41.rootNodes[0].position.z=0;
        }
        if(rand4[0]==2){
            adversairePlayer41.rootNodes[0].position.z=-20;
        }
        var adversairePlayer42 = JoeurAdd.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        adversairePlayer42.animationGroups[0].play(true);
        adversairePlayer42.animationGroups[0].speedRatio=Math.random()*2+0.5;
        adversairePlayer42.animationGroups[0].goToFrame(Math.floor(Math.random()*100));
        adversairePlayer42.rootNodes[0].rotationQuaternion = null;
        adversairePlayer42.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        adversairePlayer42.rootNodes[0].position.x=0;
        adversairePlayer42.rootNodes[0].rotation.y=1.57;
        adversairePlayer42.rootNodes[0].position.y=0;
        if(rand4[1]==0){
            adversairePlayer42.rootNodes[0].position.z=20;
        }
        if(rand4[1]==1){
            adversairePlayer42.rootNodes[0].position.z=0;
        }
        if(rand4[1]==2){
            adversairePlayer42.rootNodes[0].position.z=-20;
        }
        //LIGNE D'ADVERSAIRE 5
        let rand5=getRand1to3(); 
        var adversairePlayer51 = JoeurAdd.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        adversairePlayer51.animationGroups[0].play(true);
        adversairePlayer51.animationGroups[0].speedRatio=Math.random()*2+0.5;
        adversairePlayer51.animationGroups[0].goToFrame(Math.floor(Math.random()*100));
        adversairePlayer51.rootNodes[0].rotationQuaternion = null;
        adversairePlayer51.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        adversairePlayer51.rootNodes[0].position.x=-40;
        adversairePlayer51.rootNodes[0].rotation.y=1.57;
        adversairePlayer51.rootNodes[0].position.y=0;
        if(rand5[0]==0){
            adversairePlayer51.rootNodes[0].position.z=20;
        }
        if(rand5[0]==1){
            adversairePlayer51.rootNodes[0].position.z=0;
        }
        if(rand5[0]==2){
            adversairePlayer51.rootNodes[0].position.z=-20;
        }
        var adversairePlayer52 = JoeurAdd.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        adversairePlayer52.animationGroups[0].play(true);
        adversairePlayer52.animationGroups[0].speedRatio=Math.random()*2+0.5;
        adversairePlayer52.animationGroups[0].goToFrame(Math.floor(Math.random()*100));
        adversairePlayer52.rootNodes[0].rotationQuaternion = null;
        adversairePlayer52.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        adversairePlayer52.rootNodes[0].position.x=-40;
        adversairePlayer52.rootNodes[0].rotation.y=1.57;
        adversairePlayer52.rootNodes[0].position.y=0;
        if(rand5[1]==0){
            adversairePlayer52.rootNodes[0].position.z=20;
        }
        if(rand5[1]==1){
            adversairePlayer52.rootNodes[0].position.z=0;
        }
        if(rand5[1]==2){
            adversairePlayer52.rootNodes[0].position.z=-20;
        }
        //LIGNE D'ADVERSAIRE 6
        let rand6=getRand1to3(); 
        var adversairePlayer61 = JoeurAdd.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        adversairePlayer61.animationGroups[0].play(true);
        adversairePlayer61.animationGroups[0].speedRatio=Math.random()*2+0.5;
        adversairePlayer61.animationGroups[0].goToFrame(Math.floor(Math.random()*100));
        adversairePlayer61.rootNodes[0].rotationQuaternion = null;
        adversairePlayer61.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        adversairePlayer61.rootNodes[0].position.x=-80;
        adversairePlayer61.rootNodes[0].rotation.y=1.57;
        adversairePlayer61.rootNodes[0].position.y=0;
        if(rand6[0]==0){
            adversairePlayer61.rootNodes[0].position.z=20;
        }
        if(rand6[0]==1){
            adversairePlayer61.rootNodes[0].position.z=0;
        }
        if(rand6[0]==2){
            adversairePlayer61.rootNodes[0].position.z=-20;
        }
        var adversairePlayer62 = JoeurAdd.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        adversairePlayer62.animationGroups[0].play(true);
        adversairePlayer62.animationGroups[0].speedRatio=Math.random()*2+0.5;
        adversairePlayer62.animationGroups[0].goToFrame(Math.floor(Math.random()*100));
        adversairePlayer62.rootNodes[0].rotationQuaternion = null;
        adversairePlayer62.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        adversairePlayer62.rootNodes[0].position.x=-80;
        adversairePlayer62.rootNodes[0].rotation.y=1.57;
        adversairePlayer62.rootNodes[0].position.y=0;
        if(rand6[1]==0){
            adversairePlayer62.rootNodes[0].position.z=20;
        }
        if(rand6[1]==1){
            adversairePlayer62.rootNodes[0].position.z=0;
        }
        if(rand6[1]==2){
            adversairePlayer62.rootNodes[0].position.z=-20;
        }
        //LIGNE D'ADVERSAIRE 7
        let rand7=getRand1to3();
        var adversairePlayer71 = JoeurAdd.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        adversairePlayer71.animationGroups[0].play(true);
        adversairePlayer71.animationGroups[0].speedRatio=Math.random()*2+0.5;
        adversairePlayer71.animationGroups[0].goToFrame(Math.floor(Math.random()*100));
        adversairePlayer71.rootNodes[0].rotationQuaternion = null;
        adversairePlayer71.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        adversairePlayer71.rootNodes[0].position.x=-120;
        adversairePlayer71.rootNodes[0].rotation.y=1.57;
        adversairePlayer71.rootNodes[0].position.y=0;
        if(rand7[0]==0){
            adversairePlayer71.rootNodes[0].position.z=20;
        }
        if(rand7[0]==1){
            adversairePlayer71.rootNodes[0].position.z=0;
        }
        if(rand7[0]==2){
            adversairePlayer71.rootNodes[0].position.z=-20;
        }
        var adversairePlayer72 = JoeurAdd.instantiateModelsToScene(undefined, false, { doNotInstantiate: false });
        adversairePlayer72.animationGroups[0].play(true);
        adversairePlayer72.animationGroups[0].speedRatio=Math.random()*2+0.5;
        adversairePlayer72.animationGroups[0].goToFrame(Math.floor(Math.random()*100));
        adversairePlayer72.rootNodes[0].rotationQuaternion = null;
        adversairePlayer72.rootNodes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        adversairePlayer72.rootNodes[0].position.x=-120;
        adversairePlayer72.rootNodes[0].rotation.y=1.57;
        adversairePlayer72.rootNodes[0].position.y=0;
        if(rand7[1]==0){
            adversairePlayer72.rootNodes[0].position.z=20;
        }
        if(rand7[1]==1){
            adversairePlayer72.rootNodes[0].position.z=0;
        }
        if(rand7[1]==2){
            adversairePlayer72.rootNodes[0].position.z=-20;
        }
        var soccereGoal = await BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "goalPlayer.glb", scene);
        soccereGoal.animationGroups[3].play(true);
        soccereGoal.meshes[0].rotationQuaternion = null;
        soccereGoal.meshes[0].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
        soccereGoal.meshes[0].position.x=-162;
        soccereGoal.meshes[0].rotation.y=1.57;
        var ball =  (await BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "ball.glb", scene));
        ball.meshes[0].position.x=120;
        ball.meshes[0].position.z=-0.7;
        ball.meshes[0].position.y=0.1;
        ball.meshes[0].position.x=160;
        ball.meshes[0].scaling= new BABYLON.Vector3(1.5,1.5,1.5);
        interface2.style.display = "none";
        loading.classList.add("notplaying");
        window.addEventListener("keydown", async function (event) {  
            if (started==false && event.key === " "){
                let compteur=0;
                sifflet.play();
                gameinterface.classList.remove("playing");
                gameinterface.classList.add("notplaying");
                started=true;
                var depasser=false;
                window.addEventListener("keydown",function(event){
                    if (camera.isInFrustum(ball.meshes[0])&&((compteur!=1)||(compteur!=2))) { 
                    if((started==true)){
                        if((event.key=="q"||event.key=="s"||event.key=="d")&&(compteur==0)){
                            var cameraMove = BABYLON.MeshBuilder.CreateBox("startBox", { size:3}, scene); cameraMove.isVisible=false; cameraMove.position.x=180; cameraMove.position.y=11; cameraMove.position.z=0;
                            scene.onAfterRenderObservable.add(function () { 
                                setTimeout(function (){
                                    if(cameraMove.position.x>-100){
                                        let vitesse=parseInt(cameraMove.position.x);
                                        cameraMove.position.x-=(360-vitesse)*0.001*(60/fps);
                                        camera.position.x= cameraMove.position.x;
                                        premierGardien.animationGroups.forEach((an) => an.stop());
                                        premierGardien.animationGroups[1].start();
                                        
                                    } 
                                });
                            });
                            compteur+=1;
                            if((compteur==1)&&(((event.key=="d")&&(((rand1[0]==0)||(rand1[1]==0))))||((event.key=="s")&&((rand1[0]==1)||(rand1[1]==1)))||((event.key=="q")&&((rand1[0]==2)||(rand1[1]==2))))){
                                console.log("collision");
                                started=false;
                                wintext4.innerText="MAUVAISE PASSE !";
                                menu2.classList.remove("notplaying");
                                menu2.classList.add("playing");
                                end4.classList.remove("notplaying");
                                end4.classList.add("playing");

                            } 
                            
                            
                        }
                        
                        
                        else if ((ball.meshes[0].position.z>5)&&(compteur==1)){
                            compteur+=1;
                            JoeurDroite1.rootNodes[0].rotation.y=-1.57;
                            JoeurDroite1.animationGroups.forEach((an) => an.stop());
                            JoeurDroite1.animationGroups[36].start();
                            
                            
                        }
                        else if((ball.meshes[0].position.z>-5)&&(ball.meshes[0].position.z<5)&&(compteur==1)){
                            compteur+=1;
                            JoeurMilieu1.rootNodes[0].rotation.y=-1.57;
                            JoeurMilieu1.animationGroups.forEach((an) => an.stop());
                            JoeurMilieu1.animationGroups[36].start();
                            
                        }
                        else if((ball.meshes[0].position.z<-5)&&(compteur==1)){
                            compteur+=1;
                            JoeurGauche1.rootNodes[0].rotation.y=-1.57;
                            JoeurGauche1.animationGroups.forEach((an) => an.stop());
                            JoeurGauche1.animationGroups[36].start();
                            
                        }


                        else if ((ball.meshes[0].position.z>5)&&(compteur==2)){
                            compteur+=1;
                            JoeurDroite2.rootNodes[0].rotation.y=-1.57;
                            JoeurDroite2.animationGroups.forEach((an) => an.stop());
                            JoeurDroite2.animationGroups[36].start();
                            
                            
                        }
                        else if((ball.meshes[0].position.z>-5)&&(ball.meshes[0].position.z<5)&&(compteur==2)){
                            compteur+=1;
                            JoeurMilieu2.rootNodes[0].rotation.y=-1.57;
                            JoeurMilieu2.animationGroups.forEach((an) => an.stop());
                            JoeurMilieu2.animationGroups[36].start();
                            
                        }
                        else if((ball.meshes[0].position.z<-5)&&(compteur==2)){
                            compteur+=1;
                            JoeurGauche2.rootNodes[0].rotation.y=-1.57;
                            JoeurGauche2.animationGroups.forEach((an) => an.stop());
                            JoeurGauche2.animationGroups[36].start();
                            
                        }
                        else if ((ball.meshes[0].position.z>5)&&(compteur==3)){
                            compteur+=1;
                            JoeurDroite3.rootNodes[0].rotation.y=-1.57;
                            JoeurDroite3.animationGroups.forEach((an) => an.stop());
                            JoeurDroite3.animationGroups[36].start();
                            
                            
                        }
                        else if((ball.meshes[0].position.z>-5)&&(ball.meshes[0].position.z<5)&&(compteur==3)){
                            compteur+=1;
                            JoeurMilieu3.rootNodes[0].rotation.y=-1.57;
                            JoeurMilieu3.animationGroups.forEach((an) => an.stop());
                            JoeurMilieu3.animationGroups[36].start();
                            
                        }
                        else if((ball.meshes[0].position.z<-5)&&(compteur==3)){
                            compteur+=1;
                            JoeurGauche3.rootNodes[0].rotation.y=-1.57;
                            JoeurGauche3.animationGroups.forEach((an) => an.stop());
                            JoeurGauche3.animationGroups[36].start();
                            
                        }
                        else if ((ball.meshes[0].position.z>5)&&(compteur==4)){
                            compteur+=1;
                            JoeurDroite4.rootNodes[0].rotation.y=-1.57;
                            JoeurDroite4.animationGroups.forEach((an) => an.stop());
                            JoeurDroite4.animationGroups[36].start();
                            
                            
                        }
                        else if((ball.meshes[0].position.z>-5)&&(ball.meshes[0].position.z<5)&&(compteur==4)){
                            compteur+=1;
                            JoeurMilieu4.rootNodes[0].rotation.y=-1.57;
                            JoeurMilieu4.animationGroups.forEach((an) => an.stop());
                            JoeurMilieu4.animationGroups[36].start();
                            
                        }
                        else if((ball.meshes[0].position.z<-5)&&(compteur==4)){
                            compteur+=1;
                            JoeurGauche4.rootNodes[0].rotation.y=-1.57;
                            JoeurGauche4.animationGroups.forEach((an) => an.stop());
                            JoeurGauche4.animationGroups[36].start();
                            
                        }
                        else if ((ball.meshes[0].position.z>5)&&(compteur==5)){
                            compteur+=1;
                            JoeurDroite5.rootNodes[0].rotation.y=-1.57;
                            JoeurDroite5.animationGroups.forEach((an) => an.stop());
                            JoeurDroite5.animationGroups[36].start();
                            
                            
                        }
                        else if((ball.meshes[0].position.z>-5)&&(ball.meshes[0].position.z<5)&&(compteur==5)){
                            compteur+=1;
                            JoeurMilieu5.rootNodes[0].rotation.y=-1.57;
                            JoeurMilieu5.animationGroups.forEach((an) => an.stop());
                            JoeurMilieu5.animationGroups[36].start();
                            
                        }
                        else if((ball.meshes[0].position.z<-5)&&(compteur==5)){
                            compteur+=1;
                            JoeurGauche5.rootNodes[0].rotation.y=-1.57;
                            JoeurGauche5.animationGroups.forEach((an) => an.stop());
                            JoeurGauche5.animationGroups[36].start();
                            
                        }
                        else if ((ball.meshes[0].position.z>5)&&(compteur==6)){
                            compteur+=1;
                            JoeurDroite6.rootNodes[0].rotation.y=-1.57;
                            JoeurDroite6.animationGroups.forEach((an) => an.stop());
                            JoeurDroite6.animationGroups[36].start();
                            
                            
                        }
                        else if((ball.meshes[0].position.z>-5)&&(ball.meshes[0].position.z<5)&&(compteur==6)){
                            compteur+=1;
                            JoeurMilieu6.rootNodes[0].rotation.y=-1.57;
                            JoeurMilieu6.animationGroups.forEach((an) => an.stop());
                            JoeurMilieu6.animationGroups[36].start();
                            
                        }
                        else if((ball.meshes[0].position.z<-5)&&(compteur==6)){
                            compteur+=1;
                            JoeurGauche6.rootNodes[0].rotation.y=-1.57;
                            JoeurGauche6.animationGroups.forEach((an) => an.stop());
                            JoeurGauche6.animationGroups[36].start();

                        }
                        
                        else if((compteur==7)){
                            compteur+=1;
                            if(ball.meshes[0].position.z>5){
                                JoeurDroite7.rootNodes[0].rotation.y=-1.57;
                                JoeurDroite7.animationGroups.forEach((an) => an.stop());
                                JoeurDroite7.animationGroups[36].start();
                            }
                            if((ball.meshes[0].position.z>-5)&&(ball.meshes[0].position.z<5)){
                                JoeurMilieu7.rootNodes[0].rotation.y=-1.57;
                                JoeurMilieu7.animationGroups.forEach((an) => an.stop());
                                JoeurMilieu7.animationGroups[36].start();
                            }
                            if(ball.meshes[0].position.z<-5){
                                JoeurGauche7.rootNodes[0].rotation.y=-1.57;
                                JoeurGauche7.animationGroups.forEach((an) => an.stop());
                                JoeurGauche7.animationGroups[36].start();

                            }
                            setTimeout(function () {
                                soccereGoal.animationGroups.forEach((an) => an.stop());
                                var animm = [0,2]
                                soccereGoal.animationGroups[animm[Math.floor(Math.random()*2)]].start();
                            },1000);
                            setTimeout(function () { 
                                started=false;
                                sifflet.play();
                                if(localStorage.getItem("sound")=="true"){
                                    background.setVolume(0.3*vol);
                                }
                                clap1.play();
                                menu2.classList.remove("notplaying");
                                menu2.classList.add("playing");
                                end4.classList.remove("notplaying");
                                end4.classList.add("playing"); 
                            },3000);
                            
                        }

                        ball.meshes[0].checkCollisions = true;
                        adversairePlayer12.rootNodes[0].checkCollisions = true;
                        adversairePlayer11.rootNodes[0].checkCollisions = true;
                        let a;
                        if(compteur==1){
                            a=45;  //distance goal - ball 1
                        }
                        else if(compteur==7){
                            a=35;  //distance joueur - ball 7
                        }
                        else{
                            a=40;  //distance joueur - ball
                        }
                        let b= ball.meshes[0].position.z;  //position gauche-20 mid0 droite20
                        let c= ball.meshes[0].position.x; //position ball
                        
                        if((compteur==1)&&(((event.key=="d")&&((rand1[0]==0)||(rand1[1]==0)))||((event.key=="s")&&((rand1[0]==1)||(rand1[1]==1)))||((event.key=="q")&&((rand1[0]==2)||(rand1[1]==2))))){
                            console.log("collision ligne 1");
                            started=false;
                            sifflet.play();
                            wintext4.innerText="MAUVAISE PASSE !";
                            menu2.classList.remove("notplaying");
                            menu2.classList.add("playing");
                            end4.classList.remove("notplaying");
                            end4.classList.add("playing");
                        }
                        else if((compteur==2)&&(((event.key=="d")&&((rand2[0]==0)||(rand2[1]==0)))||((event.key=="s")&&((rand2[0]==1)||(rand2[1]==1)))||((event.key=="q")&&((rand2[0]==2)||(rand2[1]==2))))){
                            console.log("collision ligne 2");
                            started=false; 
                            sifflet.play();
                            wintext4.innerText="MAUVAISE PASSE !";
                            menu2.classList.remove("notplaying");
                            menu2.classList.add("playing");
                            end4.classList.remove("notplaying");
                            end4.classList.add("playing");
                        }
                        else if((compteur==3)&&(((event.key=="d")&&((rand3[0]==0)||(rand3[1]==0)))||((event.key=="s")&&((rand3[0]==1)||(rand3[1]==1)))||((event.key=="q")&&((rand3[0]==2)||(rand3[1]==2))))){
                            console.log("collision ligne 3");
                            started=false;
                            sifflet.play();
                            wintext4.innerText="MAUVAISE PASSE !";
                            menu2.classList.remove("notplaying");
                            menu2.classList.add("playing");
                            end4.classList.remove("notplaying");                                
                            end4.classList.add("playing"); 
                        }
                        else if((compteur==4)&&(((event.key=="d")&&((rand4[0]==0)||(rand4[1]==0)))||((event.key=="s")&&((rand4[0]==1)||(rand4[1]==1)))||((event.key=="q")&&((rand4[0]==2)||(rand4[1]==2))))){
                            console.log("collision ligne 4");
                            started=false; 
                            sifflet.play();
                            wintext4.innerText="MAUVAISE PASSE !";
                            menu2.classList.remove("notplaying");
                            menu2.classList.add("playing");
                            end4.classList.remove("notplaying");
                            end4.classList.add("playing");
                        }
                        else if((compteur==5)&&(((event.key=="d")&&((rand5[0]==0)||(rand5[1]==0)))||((event.key=="s")&&((rand5[0]==1)||(rand5[1]==1)))||((event.key=="q")&&((rand5[0]==2)||(rand5[1]==2))))){
                            console.log("collision ligne 5");
                            started=false; 
                            sifflet.play();
                            wintext4.innerText="MAUVAISE PASSE !";
                            menu2.classList.remove("notplaying");
                            menu2.classList.add("playing");
                            end4.classList.remove("notplaying");
                            end4.classList.add("playing");
                        }
                        else if((compteur==6)&&(((event.key=="d")&&((rand6[0]==0)||(rand6[1]==0)))||((event.key=="s")&&((rand6[0]==1)||(rand6[1]==1)))||((event.key=="q")&&((rand6[0]==2)||(rand6[1]==2))))){
                            console.log("collision ligne 6");
                            started=false; 
                            sifflet.play();
                            wintext4.innerText="MAUVAISE PASSE !";
                            menu2.classList.remove("notplaying");
                            menu2.classList.add("playing");
                            end4.classList.remove("notplaying");
                            end4.classList.add("playing");
                        }
                        else if((compteur==7)&&(((event.key=="d")&&((rand7[0]==0)||(rand7[1]==0)))||((event.key=="s")&&((rand7[0]==1)||(rand7[1]==1)))||((event.key=="q")&&((rand7[0]==2)||(rand7[1]==2))))){
                            console.log("collision ligne 7");
                            started=false;
                            sifflet.play();
                            wintext4.innerText="MAUVAISE PASSE !";
                            menu2.classList.remove("notplaying");
                            menu2.classList.add("playing");
                            end4.classList.remove("notplaying");
                            end4.classList.add("playing");

                        }

                        scene.onAfterRenderObservable.add(function () {  
                            if((camera.position.x>ball.meshes[0].position.x)&&(depasser==false)){
                                setTimeout(function () { 
                                    if(ball.meshes[0].position.x>c-a){
                                        ball.meshes[0].position.x-=(60/fps);
                                        if(event.key=="d"&&b<10){
                                            ball.meshes[0].position.z=b+((20-b)/a)*(c-ball.meshes[0].position.x);
                                        }
                                        if(event.key=="s"&&!(b<10&&b>-10)){
                                            ball.meshes[0].position.z=b+((-b)/a)*(c-ball.meshes[0].position.x);
                                        }
                                        if(event.key=="q"&&b>-10){
                                            ball.meshes[0].position.z=b+((-20-b)/a)*(c-ball.meshes[0].position.x);
                                        }
                                    }
                                },1000);  
                                  
                            }
                            else{
                                depasser=true;
                            }
                        });  
                    }

                    }
                    
                    else{
                        console.log("la cam ne vvoit plus le mesh");
                        started=false;
                        sifflet.play();
                        wintext4.innerText="TU AS ÉTÉ TROP LENT !!!!";
                        menu2.classList.remove("notplaying");
                        menu2.classList.add("playing");
                        end4.classList.remove("notplaying");                                
                        end4.classList.add("playing"); 

                    }
                })
            }
        });
  
    }
    return scene;
}

function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}
  

function CreatePubMaterial(scene) { 
    const Mat = new BABYLON.StandardMaterial("pub",scene);
    const diffuseTex = new BABYLON.Texture(pubList[Math.floor(Math.random()*6)], scene);
    Mat.diffuseTexture = diffuseTex;
    return Mat
}

function CreateScreenMaterial(scene) {
    const Mat = new BABYLON.StandardMaterial("s",scene);
    const diffuseTex = new BABYLON.Texture("./textures/pub1.png",scene);
    diffuseTex.uScale=3.5;
    diffuseTex.vScale=6;
    Mat.diffuseTexture = diffuseTex;
    Mat.alpha = 0.5;
    return Mat
}

function CreateWallMaterial(scene) {
    const GrdMat = new BABYLON.StandardMaterial("GrdMat", scene);
    const diffuseTex = new BABYLON.Texture("./textures/steel.jpg",scene)
    GrdMat.backFaceCulling = false;
    diffuseTex.uScale=10;
    diffuseTex.vScale=1;
    GrdMat.diffuseTexture= diffuseTex;
    return GrdMat;
}

function CreateBendMaterial(scene) {
    const GrdMat = new BABYLON.StandardMaterial("GrdMat", scene);
    GrdMat.wireframe = true;
    GrdMat.diffuseColor = new BABYLON.Color3(0, 0, 0);
    return GrdMat;
}

function CreateBendedMaterial(scene) {
    const GrdMat = new BABYLON.StandardMaterial("GrdMat", scene);
    GrdMat.backFaceCulling = false;
    const diffuseTex = new BABYLON.Texture("./textures/steel.jpg",scene)
    diffuseTex.uScale=10;
    diffuseTex.vScale=0.25;
    GrdMat.diffuseTexture= diffuseTex;
    return GrdMat;
}

function CreateStairMaterial(scene) {
    const GradMat = new BABYLON.StandardMaterial("GradMat", scene);
    const  diffuseTex = new BABYLON.Texture("./textures/stairs.png",scene)
    GradMat.diffuseTexture= diffuseTex
    return GradMat;
}

function CreateGradMaterial(scene) {
    const GradMat = new BABYLON.StandardMaterial("GradMat", scene);
    const  diffuseTex = new BABYLON.Texture("./textures/gradin.png",scene)
    GradMat.diffuseTexture= diffuseTex
    return GradMat;
}

function CreateGradGroundMaterial(scene) {
    const GradGroundMat = new BABYLON.StandardMaterial("GradGroundMat", scene);
    const diffuseTex = new BABYLON.Texture("./textures/concrete.jpg",scene)
    diffuseTex.uScale=20;
    diffuseTex.vScale=0.1;
    GradGroundMat.diffuseTexture= diffuseTex
    return GradGroundMat;
}

function CreateGroundMaterial(scene) {
    const runGrdMat = new BABYLON.StandardMaterial("runGrdMat", scene);
    const  diffuseTex = new BABYLON.Texture("./textures/red_sand.jpg",scene)
    diffuseTex.uScale=10;
    runGrdMat.diffuseTexture= diffuseTex
    return runGrdMat;
}

function CreateGrassGroundMaterial(scene) {
    const grassGrdMat = new BABYLON.StandardMaterial("grassGrdMat",  scene);
    const  diffuseTex = new BABYLON.Texture("./textures/Grass_001_COLOR.jpg",scene)
    diffuseTex.uScale=70;
    diffuseTex.vScale=70;
    grassGrdMat.diffuseTexture= diffuseTex;
    return grassGrdMat;
}

function createVectorFromRotation(yaw, pitch, roll) {
    var x = Math.sin(yaw) * Math.cos(pitch);
    var y = Math.sin(pitch);
    var z = Math.cos(yaw) * Math.cos(pitch);
    var coord=[x,y,z];
    return coord;

}

function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  }
function getRand1to3(){
    
    let un = getRandomArbitrary(0,3);
    let de = getRandomArbitrary(0,3);
    while(un==de){
        de = getRandomArbitrary(0,3);
    }
    var rand=[un,de];
    return rand;
}



