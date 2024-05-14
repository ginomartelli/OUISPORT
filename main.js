
// import * as BABYLON from 'babylonjs';
// import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";
// import "@babylonjs/loaders";
// import { AnimationEvent } from '@babylonjs/core';
// INTERFACE MENU
const jeux = ["Jeu1","Jeu2","Jeu3","Jeu4"];
const backinterface = document.getElementById("backinterface");
const Interface = document.getElementById("interface");
const canvas = document.getElementById("renderCanvas");
const gameinterface = document.getElementById("gameinterface");
const interface1 = document.getElementById("interface1");
const interface2 = document.getElementById("interface2");
const interface3 = document.getElementById("interface3");
const interfaceParam = document.getElementById("interfaceInfo");
const loading = document.getElementById("loading");
const end1 = document.getElementById("end1");
const end2 = document.getElementById("end2");
const wintext = document.getElementById("wintext");
const wintext2 = document.getElementById("wintext2");
canvas.classList.add("notplaying");
const menu = document.getElementById("menu");
const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");
menu.classList.add("notplaying");
interface1.classList.add("notplaying");
interface2.classList.add("notplaying");
interface3.classList.add("notplaying");
interfaceParam.classList.add("notplaying");
const info = document.getElementById("INFORMATIONS")
const crowds = document.getElementById("crowds");
const volum = document.getElementById("volume");
gameinterface.classList.add("notplaying");
loading.classList.add("notplaying")
end1.classList.add("notplaying");
end2.classList.add("notplaying");
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

//JEU 2
var qtebox = document.getElementById("qte");
qtebox.classList.add("notplaying");
//JEU 3
var crs = document.getElementById("crs");
crs.classList.add("notplaying");

//FAIL JEU 1
var fail1=false;
var fail2=false;
var fail3 = false;
var fail4 = false;

var pubList = ["./textures/pub1.png", "./textures/pub2.png", "./textures/pub3.png", "./textures/pub4.png", "./textures/pub5.png", "./textures/pub6.png"]
var finish=false;
var activated=false;
var jeut=1;

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
        //engine.enterPointerlock();
        gameinterface.classList.add("playing");
        gameinterface.classList.remove("notplaying");
        canvas.classList.remove("notplaying");
        canvas.classList.add("playing");
        menu.classList.remove("notplaying");
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
    const music1 = new BABYLON.Sound("stade", "sounds/stadium.mp3", scene, null, { loop: true, autoplay: true, length: 24, offset: 2.0, volume:0.2*vol});
    const background = new BABYLON.Sound("background", "sounds/background.mp3", scene, null, { loop: true, autoplay: true, volume:0.1*vol});
    //clapping stade
    const clap1 = new BABYLON.Sound("gunshot", "sounds/clapping.mp3", scene,null, { loop: true, autoplay: false, length: 18, offset: 3.0, volume:0.5*vol});
    //wintrumpet
    const wined = new BABYLON.Sound("win", "sounds/win.mp3", scene,null, { loop: false, autoplay: false, volume:0.4*vol});
    const jumpsound = new BABYLON.Sound("jump", "sounds/jump.mp3", scene, null, { loop: false, autoplay: false, volume:0.4*vol, length: 1.4, offset: 0.6});
    const success = new BABYLON.Sound("success", "sounds/success.mp3", scene, null, { loop: false, autoplay: false, volume:0.4*vol,length: 1.5, offset: 0.5});

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
    if(foule==null) {foule="full";}
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
                } else if(jeut==1){
                    BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "Barricade.glb", scene).then((result) => {
                        var mesh = result.meshes[0];
                        mesh.position.z=3.8-2.6*(j-1);
                        mesh.position.x=positions.at(i);
                        mesh.rotationQuaternion=false;
                        mesh.rotation.y=3.14;
                        var down=false;
                        scene.onAfterRenderObservable.add(function(){
                            if(!down){
                                if(j==4&&fail1){   //j1
                                    if(mesh.intersectsMesh(camerabox1,false)){
                                        mesh.rotation.z=1.47;
                                        down=true;
                                        metal.play();
                                    }
                                }else if(j==3&&fail2){   //j1
                                    if(mesh.intersectsMesh(camerabox2,false)){
                                        mesh.rotation.z=1.47;
                                        down=true;
                                        metal.play();
                                    }
                                }else if(j==2&&fail3){   //j1
                                    if(mesh.intersectsMesh(camerabox3,false)){
                                        mesh.rotation.z=1.47;
                                        down=true;
                                        metal.play();
                                    }
                                }else if(j==1&&fail4){   //j1
                                    if(mesh.intersectsMesh(camerabox4,false)){
                                        mesh.rotation.z=1.47;
                                        down=true;
                                        metal.play();
                                    }
                                }
                            }
                        });
                    });
                    var limitBox = BABYLON.MeshBuilder.CreateBox("startBox", { height: 2 , width:0.2,depth:2}, scene);
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
        var box = await BABYLON.SceneLoader.ImportMeshAsync('','https://raw.githubusercontent.com/Ginosprod/OUISPORT/main/textures/crowd.glb','',scene);
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
        var box = await BABYLON.SceneLoader.ImportMeshAsync('','https://raw.githubusercontent.com/Ginosprod/OUISPORT/main/textures/crowd1.glb','',scene);
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
        var box = await BABYLON.SceneLoader.ImportMeshAsync('','https://raw.githubusercontent.com/Ginosprod/OUISPORT/main/textures/crowd2.glb','',scene);
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
        var box = await BABYLON.SceneLoader.ImportMeshAsync('','https://raw.githubusercontent.com/Ginosprod/OUISPORT/main/textures/crowd3.glb','',scene);
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
        var box = await BABYLON.SceneLoader.ImportMeshAsync('','https://raw.githubusercontent.com/Ginosprod/OUISPORT/main/textures/crowd4.glb','',scene);
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
        var box = await BABYLON.SceneLoader.ImportMeshAsync('','https://raw.githubusercontent.com/Ginosprod/OUISPORT/main/textures/crowd.glb','',scene);
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
        var box = await BABYLON.SceneLoader.ImportMeshAsync('','https://raw.githubusercontent.com/Ginosprod/OUISPORT/main/textures/crowd1.glb','',scene);
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
        var box = await BABYLON.SceneLoader.ImportMeshAsync('','https://raw.githubusercontent.com/Ginosprod/OUISPORT/main/textures/crowd2.glb','',scene);
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
        var box = await BABYLON.SceneLoader.ImportMeshAsync('','https://raw.githubusercontent.com/Ginosprod/OUISPORT/main/textures/crowd3.glb','',scene);
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
        var box = await BABYLON.SceneLoader.ImportMeshAsync('','https://raw.githubusercontent.com/Ginosprod/OUISPORT/main/textures/crowd4.glb','',scene);
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
            var box = await BABYLON.SceneLoader.ImportMeshAsync('','https://raw.githubusercontent.com/Ginosprod/OUISPORT/main/textures/crowd4.glb','',scene);
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
            var box = await BABYLON.SceneLoader.ImportMeshAsync('','https://raw.githubusercontent.com/Ginosprod/OUISPORT/main/textures/crowd3.glb','',scene);
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
            var box = await BABYLON.SceneLoader.ImportMeshAsync('','https://raw.githubusercontent.com/Ginosprod/OUISPORT/main/textures/crowd2.glb','',scene);
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
            var box = await BABYLON.SceneLoader.ImportMeshAsync('','https://raw.githubusercontent.com/Ginosprod/OUISPORT/main/textures/crowd1.glb','',scene);
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
            var box = await BABYLON.SceneLoader.ImportMeshAsync('','https://raw.githubusercontent.com/Ginosprod/OUISPORT/main/textures/crowd4.glb','',scene);
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
            var box = await BABYLON.SceneLoader.ImportMeshAsync('','https://raw.githubusercontent.com/Ginosprod/OUISPORT/main/textures/crowd3.glb','',scene);
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
            var box = await BABYLON.SceneLoader.ImportMeshAsync('','https://raw.githubusercontent.com/Ginosprod/OUISPORT/main/textures/crowd2.glb','',scene);
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
            var box = await BABYLON.SceneLoader.ImportMeshAsync('','https://raw.githubusercontent.com/Ginosprod/OUISPORT/main/textures/crowd1.glb','',scene);
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
            clap1.play();background.setVolume(0.3*vol);activated=true;
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
        BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "cam.glb", scene).then((result) => {
            result.meshes.forEach((mesh)=>{
                mesh.scaling = new BABYLON.Vector3(0.5, 0.5, 0.5)
                mesh.rotation.y=-2.80;
                mesh.position.z=14;
                mesh.position.x=202;
                mesh.position.y=1.3;
            })
        });
        BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "cam.glb", scene).then((result) => {
            result.meshes.forEach((mesh)=>{
                mesh.scaling = new BABYLON.Vector3(0.5, 0.5, 0.5)
                mesh.rotation.y=-2.80+1.8;
                mesh.position.z=-14;
                mesh.position.x=202;
                mesh.position.y=1.3;
            })
        });
        BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "cam.glb", scene).then((result) => {
            result.meshes.forEach((mesh)=>{
                mesh.scaling = new BABYLON.Vector3(0.5, 0.5, 0.5)
                mesh.position.z=-14;
                mesh.position.x=-137.5;
                mesh.position.y=1.3;
            })
        });
        BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "cam.glb", scene).then((result) => {
            result.meshes.forEach((mesh)=>{
                mesh.scaling = new BABYLON.Vector3(0.5, 0.5, 0.5)
                mesh.rotation.y=3.14;
                mesh.position.z=14;
                mesh.position.x=-137.5;
                mesh.position.y=1.3;
            })
        });

        //PLAYER
        BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "player1bis.glb", scene).then((result) => {  //PLAYER 1
            var mesh = result.meshes[0];
            var anim = result.animationGroups;
            mesh.rotate(new BABYLON.Vector3(0,1,0),-Math.PI/2);
            mesh.scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
            mesh.position.z=-3.8;
            mesh.position.x=-100;
            anim[3].play(true);
            var started=false;
            var injump=false;
            var jumped=false;
            var score = 20;
            const jumpAnim = anim[1].targetedAnimations[0].animation;
            const jumpEvt = new AnimationEvent(
                44,
                () => {
                    anim.forEach((an) => an.stop());
                    jumped=false;
                    anim[2].start(true);
                },
                false
            );
            const injumpEvt = new AnimationEvent(
                15,
                () => {
                    injump=true;
                },
                false
            );
            const offjumpEvt = new AnimationEvent(
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
            const failEvt = new AnimationEvent(
                25,
                () => {
                    anim[0].stop();
                    fail1 = false;
                    anim[2].start(true);
                },
                false
            );
            failAnim.addEvent(failEvt);
            scene.onAfterRenderObservable.add(function () {
                camerabox1.position.x=mesh.position.x;
                if (started){
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
                    if(mesh.intersectsMesh(limitBox, false)){
                        anim[1].stop();
                        jumped=false;
                        anim[2].stop()
                        var listbox=[camerabox1.position.x,camerabox2.position.x,camerabox3.position.x,camerabox4.position.x];
                        var max = Math.max(...listbox);
                        anim[3].start(true);
                        if(max==camerabox1.position.x){
                            anim[3].start(true);
                            wintext.innerText = "FÉLICITATIONS JOUEUR 4";

                        }else{
                            anim[3].goToFrame(15)
                            anim[3].stop();
                        }
                        started=false;
                    }
                }
            })
            canvas.addEventListener("keydown", function (event) {  
                if (started==false && event.key === " "){
                    gameinterface.classList.add("notplaying");
                    gameinterface.classList.remove("playing");
                    started=true;
                    anim.forEach((an) => an.stop());
                    anim[2].start(true);
                    canvas.addEventListener("keydown", function (event) {  
                        if (started && !jumped && !fail1 && event.key === "a" ){
                            jumpsound.play();
                            anim.forEach((an) => an.stop());
                            console.log(anim);  //ICIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                            anim[1].start();
                            jumped=true;
                        }
                    });
                }
            });
        });
        BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "player2bis.glb", scene).then((result) => {  //PLAYER 2
            var mesh = result.meshes[0];
            var anim = result.animationGroups;
            mesh.rotate(new BABYLON.Vector3(0,1,0),-Math.PI/2);
            mesh.scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
            mesh.position.z=-1.3;
            mesh.position.x=-100;
            anim[3].play(true);
            var started=false;
            var injump=false;
            var jumped=false;
            var score = 20;
            const jumpAnim = anim[1].targetedAnimations[0].animation;
            const jumpEvt = new AnimationEvent(
                44,
                () => {
                    anim.forEach((an) => an.stop());
                    jumped=false;
                    anim[2].start(true);
                },
                false
            );
            const injumpEvt = new AnimationEvent(
                15,
                () => {
                    injump=true;
                },
                false
            );
            const offjumpEvt = new AnimationEvent(
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
            const failEvt = new AnimationEvent(
                25,
                () => {
                    anim[0].stop();
                    fail2 = false;
                    anim[2].start(true);
                },
                false
            );
            failAnim.addEvent(failEvt);
            scene.onAfterRenderObservable.add(function () {
                camerabox2.position.x=mesh.position.x;
                if (started){
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
                    if(mesh.intersectsMesh(limitBox, false)){
                        anim[1].stop();
                        jumped=false;
                        anim[2].stop()
                        var listbox=[camerabox1.position.x,camerabox2.position.x,camerabox3.position.x,camerabox4.position.x];
                        var max = Math.max(...listbox);
                        anim[3].start(true);
                        if(max==camerabox2.position.x){
                            anim[3].start(true);
                            wintext.innerText = "FÉLICITATIONS JOUEUR 3";

                        }else{
                            anim[3].goToFrame(6)
                            anim[3].stop();
                        }
                        started=false;
                    }
                }
            })
            canvas.addEventListener("keydown", function (event) {  
                if (started==false && event.key === " "){
                    started=true;
                    anim.forEach((an) => an.stop());
                    anim[2].start(true);
                    canvas.addEventListener("keydown", function (event) {  
                        if (started && !jumped && !fail2 && event.key === "p" ){
                            jumpsound.play();
                            anim.forEach((an) => an.stop());
                            anim[1].start();
                            jumped=true;
                        }
                    });
                }
            });
        });
        BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "player3bis.glb", scene).then((result) => {  //PLAYER 3 (2)
            var mesh = result.meshes[0];
            var anim = result.animationGroups;
            mesh.rotate(new BABYLON.Vector3(0,1,0),-Math.PI/2);
            mesh.scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
            mesh.position.z=1.3;
            mesh.position.x=-100;
            anim[3].play(true);
            var started=false;
            var injump=false;
            var jumped=false;
            var score = 20;
            const jumpAnim = anim[1].targetedAnimations[0].animation;
            const jumpEvt = new AnimationEvent(
                44,
                () => {
                    anim.forEach((an) => an.stop());
                    jumped=false;
                    anim[2].start(true);
                },
                false
            );
            const injumpEvt = new AnimationEvent(
                15,
                () => {
                    injump=true;
                },
                false
            );
            const offjumpEvt = new AnimationEvent(
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
            const failEvt = new AnimationEvent(
                25,
                () => {
                    anim[0].stop();
                    fail3 = false;
                    anim[2].start(true);
                },
                false
            );
            failAnim.addEvent(failEvt);
            scene.onAfterRenderObservable.add(function () {
                camerabox3.position.x=mesh.position.x;
                if (started){
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
                    if(mesh.intersectsMesh(limitBox, false)){
                        anim[1].stop();
                        jumped=false;
                        anim[2].stop()
                        var listbox=[camerabox1.position.x,camerabox2.position.x,camerabox3.position.x,camerabox4.position.x];
                        var max = Math.max(...listbox);
                        anim[3].start(true);
                        if(max==camerabox3.position.x){
                            anim[3].start(true);
                            wintext.innerText = "FÉLICITATIONS JOUEUR 2";

                        }else{
                            anim[3].goToFrame(4)
                            anim[3].stop();
                        }
                        started=false;
                    }
                }
            })
            canvas.addEventListener("keydown", function (event) {  
                if (started==false && event.key === " "){
                    started=true;
                    anim.forEach((an) => an.stop());
                    anim[2].start(true);
                    canvas.addEventListener("keydown", function (event) {  
                        if (started && !jumped && !fail3 && event.key === "w" ){
                            jumpsound.play();
                            anim.forEach((an) => an.stop());
                            anim[1].start();
                            jumped=true;
                        }
                    });
                }
            });
        });
        BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "player4bis.glb", scene).then((result) => {  //PLAYER 4
            var mesh = result.meshes[0];
            var anim = result.animationGroups;
            mesh.rotate(new BABYLON.Vector3(0,1,0),-Math.PI/2);
            mesh.scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
            mesh.position.z=3.8;
            mesh.position.x=-100;
            anim[3].play(true);
            var started=false;
            var injump=false;
            var jumped=false;
            var score = 20;
            const jumpAnim = anim[1].targetedAnimations[0].animation;
            const jumpEvt = new AnimationEvent(
                44,
                () => {
                    anim.forEach((an) => an.stop());
                    jumped=false;
                    anim[2].start(true);
                },
                false
            );
            const injumpEvt = new AnimationEvent(
                15,
                () => {
                    injump=true;
                },
                false
            );
            const offjumpEvt = new AnimationEvent(
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
            const failEvt = new AnimationEvent(
                25,
                () => {
                    anim[0].stop();
                    fail4 = false;
                    anim[2].start(true);
                },
                false
            );
            failAnim.addEvent(failEvt);
            scene.onAfterRenderObservable.add(function () {
                loading.classList.add("notplaying");
                camerabox4.position.x=mesh.position.x;
                if (started){
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
                    if(mesh.intersectsMesh(limitBox, false)){
                        anim[1].stop();
                        jumped=false;
                        anim[2].stop()
                        var listbox=[camerabox1.position.x,camerabox2.position.x,camerabox3.position.x,camerabox4.position.x];
                        var max = Math.max(...listbox);
                        anim[3].start(true);
                        if(max==camerabox4.position.x){
                            anim[3].start(true);
                            wintext.innerText = "FÉLICITATIONS JOUEUR 1";

                        }else{
                            anim[3].goToFrame(10)
                            anim[3].stop();
                        }
                        started=false;
                    }
                }
            })
            canvas.addEventListener("keydown", function (event) {  
                if (started==false && event.key === " "){
                    started=true;
                    anim.forEach((an) => an.stop());
                    anim[2].start(true);
                    canvas.addEventListener("keydown", function (event) {  
                        if (started && !jumped && !fail4 && event.key === "n" ){
                            jumpsound.play();
                            anim.forEach((an) => an.stop());
                            anim[1].start();
                            jumped=true;
                        }
                    });
                }
            });
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
                }
            }else if(center<-95){
                camera.position.y=3;
                camera.position.z=0
                camera.position.x=-115;
                camera.setTarget(new BABYLON.Vector3(center,3,0));
            } else {
                camera.position.z=-25;
                camera.position.z-=(max-min)/4;
                camera.position.x=center
            }
        });
    }

    //JEU 2
    if(jeut==2){
        var randomPos="pos1";
        var randomPosList=["pos1","pos2","pos3","pos4"];
        var start2tour = document.getElementById("start2tour");
        var score = new Array(3).fill(0);
        var qtelettre = document.getElementById("qtelettre");
        var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(-30, 10, -20), scene);
        var runGrd = BABYLON.MeshBuilder.CreateGround("runGrd", { width: 60, height: 10 }, scene);
        runGrd.material = CreateGroundMaterial();
        runGrd.position.x=-60;
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
        var traitGrd = BABYLON.MeshBuilder.CreateGround("traitGrd", { width: 60, height: 0.3}, scene);
        traitGrd.position.y=0.01;
        traitGrd.position.x=-60;
        traitGrd.position.z=-5;
        var traitGrd = BABYLON.MeshBuilder.CreateGround("traitGrd", { width: 60, height: 0.3}, scene);
        traitGrd.position.y=0.01;
        traitGrd.position.x=-60;
        traitGrd.position.z=5;
        var traitGrd = BABYLON.MeshBuilder.CreateGround("traitGrd", { width: 10, height: 0.3}, scene);
        traitGrd.position.y=0.01;
        traitGrd.position.x=-90;
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
        
        BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "cam.glb", scene).then((result) => {
            result.meshes.forEach((mesh)=>{
                mesh.rotationQuaternion = null;
                mesh.scaling = new BABYLON.Vector3(0.5, 0.5, 0.5)
                mesh.rotation.y=-0.7;
                mesh.position.z=10;
                mesh.position.x=-45;
                mesh.position.y=1.3;
            })
        });
        BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "cam.glb", scene).then((result) => {
            result.meshes.forEach((mesh)=>{
                mesh.rotationQuaternion = null;
                mesh.scaling = new BABYLON.Vector3(0.5, 0.5, 0.5)
                mesh.rotation.y=0.7;
                mesh.position.z=0;
                mesh.position.x=-32;
                mesh.position.y=1.3;
            })
        });
        BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "cam.glb", scene).then((result) => {
            result.meshes.forEach((mesh)=>{
                mesh.rotationQuaternion = null;
                mesh.scaling = new BABYLON.Vector3(0.5, 0.5, 0.5)
                mesh.rotation.y=3.14;
                mesh.position.z=20;
                mesh.position.x=0;
                mesh.position.y=1.3;
            })
        });
        BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "cam.glb", scene).then((result) => {
            result.meshes.forEach((mesh)=>{
                mesh.rotationQuaternion = null;
                mesh.scaling = new BABYLON.Vector3(0.5, 0.5, 0.5)
                mesh.rotation.y=1.47;
                mesh.position.z=-10;
                mesh.position.x=10;
                mesh.position.y=1.3;
            })
        });
        var javelot1 = await BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "javelin.glb", scene);
        var jav1 = javelot1.meshes[0];
        jav1.rotationQuaternion = null;
        jav1.scaling = new BABYLON.Vector3(2, 1, 1);
        jav1.rotation.y=-Math.PI/2;
        jav1.position.x=-53.5;
        jav1.position.y=0.53;
        jav1.position.z=5;
        var javelot2 = await BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "javelin.glb", scene);
        var jav2 = javelot2.meshes[0];
        jav2.rotationQuaternion = null;
        jav2.scaling = new BABYLON.Vector3(2, 1, 1);
        jav2.rotation.y=-Math.PI/2;
        jav2.position.x=-50.5;
        jav2.position.y=0.53;
        jav2.position.z=5;
        var javelot3 = await BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "javelin.glb", scene);
        var jav3 = javelot3.meshes[0];
        jav3.rotationQuaternion = null;
        jav3.scaling = new BABYLON.Vector3(2, 1, 1);
        jav3.rotation.y=-Math.PI/2;
        jav3.position.x=-47.5;
        jav3.position.y=0.53;
        jav3.position.z=5;
        var javelot = await BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "javelin.glb", scene);
        var jav = javelot.meshes[0];
        jav.rotationQuaternion = null;
        jav.scaling = new BABYLON.Vector3(2, 1, 1);
        jav.rotation.y=Math.PI;
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
        const start1Evt = new AnimationEvent(60,
            () => {
                anim1[1].stop();
                anim1[3].start(true);
                mesh1.position.z=0;
                mesh1.rotation.y=0;
                mesh1.position.x=-90;
                run=true;
                qtebox.classList.remove("notplaying");
                qtebox.classList.add("pos1");
                QTEkey = QTEkeys[Math.floor(Math.random()*QTEkeys.length)];
                qtelettre.innerText = QTEkey.toUpperCase();
                qtebox.classList.remove("fail");
                qtebox.classList.remove("success");
                qtelettre.classList.remove("disapear");
                jav1.position.y=-1;
            },false);
        const start2Evt = new AnimationEvent(60,
            () => {
                anim2[1].stop();
                anim2[3].start(true);
                mesh2.position.z=0;
                mesh2.rotation.y=0;
                mesh2.position.x=-90;
                run=true;
                qtebox.classList.remove("notplaying");
                QTEkey = QTEkeys[Math.floor(Math.random()*QTEkeys.length)];
                qtelettre.innerText = QTEkey.toUpperCase();
                qtebox.classList.remove("fail");
                qtebox.classList.remove("success");
                qtelettre.classList.remove("disapear");
                jav2.position.y=-1;
            },false);
        const start3Evt = new AnimationEvent(60,
            () => {
                anim3[1].stop();
                anim3[3].start(true);
                mesh3.position.z=0;
                mesh3.rotation.y=0;
                mesh3.position.x=-90;
                run=true;
                qtebox.classList.remove("notplaying");
                QTEkey = QTEkeys[Math.floor(Math.random()*QTEkeys.length)];
                qtelettre.innerText = QTEkey.toUpperCase();
                qtebox.classList.remove("fail");
                qtebox.classList.remove("success");
                qtelettre.classList.remove("disapear");
                jav3.position.y=-1;
            },false);
        start1Anim.addEvent(start1Evt);
        start2Anim.addEvent(start2Evt);
        start3Anim.addEvent(start3Evt);
        
        const throw1Anim = anim1[4].targetedAnimations[0].animation;
        const throw2Anim = anim2[4].targetedAnimations[0].animation;
        const throw3Anim = anim3[4].targetedAnimations[0].animation;
        const throwEvt = new AnimationEvent(55,
            () => {
                throwing=true;
            },false);
        const throw1Evt = new AnimationEvent(10,
            () => {
                jav.rotation.z=-0.6;
                jav.position.x-=0.2;
                jav.position.y-=0.6;
                jav.rotation.y=-0.4+Math.PI;
            },false);
        const throw2Evt = new AnimationEvent(15,
            () => {
                jav.position.x-=0.1
                jav.position.y-=0.2
                jav.rotation.y=-0.3+Math.PI;
            },false);
        const throw3Evt = new AnimationEvent(20,
            () => {
                jav.position.x+=0.5
                jav.position.y+=0.2
                jav.rotation.y=-0.1+Math.PI;
            },false);
        const throw4Evt = new AnimationEvent(25,
            () => {
                jav.position.x+=0.5
                jav.position.y+=0.2
                jav.rotation.y=Math.PI;
            },false);
        const throw5Evt = new AnimationEvent(30,
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
        const runEvt = new AnimationEvent(5,
            () => {
                jav.position.y=1.7;
                jav.position.z=0.5;
            },false);
        const run1Evt = new AnimationEvent(12,
            () => {
                jav.position.y=1.65;
                jav.position.z=0.45;
            },false);
        const run3Evt = new AnimationEvent(40,
            () => {
                jav.position.y=1.63;
                jav.position.z=0.45;
            },false);
        const run2Evt = new AnimationEvent(20,
            () => {
                jav.position.y=1.6;
                jav.position.z=0.4;
            },false);
        run1Anim.addEvent(runEvt);run1Anim.addEvent(run2Evt);run1Anim.addEvent(run1Evt);run1Anim.addEvent(run3Evt);
        run2Anim.addEvent(runEvt);run2Anim.addEvent(run2Evt);run2Anim.addEvent(run1Evt);run2Anim.addEvent(run3Evt);
        run3Anim.addEvent(runEvt);run3Anim.addEvent(run2Evt);run3Anim.addEvent(run1Evt);run3Anim.addEvent(run3Evt);


        scene.onAfterRenderObservable.add(function () {
            if(tour==0){
                background.setVolume(0.3*vol)
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
        canvas.addEventListener("keydown", function (event){
            if (tour!=-1&&!started&&event.key === " "){
                camera.position.x=-50;
                camera.position.y=2;
                camera.position.z=-10;
                camera.setTarget(new BABYLON.Vector3(-50,1,5));
                started=true;
                interface2.classList.add("notplaying"); 
                gameinterface.classList.add("notplaying");
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
                jav.position.x=-90;
                jav.position.y=1.65;
                jav.position.z=0.45;
                jav.rotation.z=0;
            }
            if(started&&run){
                if(isSuccess){return;}
                if (stop||event.key !== QTEkey) {stop=true;qtebox.classList.add("fail");qtelettre.classList.add("disapear");}
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

    //JEU 3
    if(jeut==3){
        var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(-120, 1.8, 0), scene);
        camera.attachControl(canvas, true);
        camera.inputs.removeByType("FreeCameraKeyboardMoveInput");
        camera.setTarget(new BABYLON.Vector3(0,10,0));
        camera.inertia = 0.1;
        //cadre et decor :
        var truss = await SceneLoader.ImportMeshAsync("", "/models/", "truss.glb", scene);
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
        var txtj1 = (await SceneLoader.ImportMeshAsync("", "/models/", "joueurText.glb", scene)).meshes[0];
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
        var numbers = await SceneLoader.ImportMeshAsync("", "/models/", "numbers.glb", scene); //nb[1]==0
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

        var player1 = await SceneLoader.ImportMeshAsync("", "/models/", "player13.glb", scene);
        player1.meshes[0].scaling = new BABYLON.Vector3(1.6, 1.6, 1.6);
        player1.meshes[0].rotationQuaternion = null;
        player1.meshes[0].position.x=-109.2;
        player1.meshes[0].position.z=8.35;
        player1.meshes[0].rotation.y=2.07;
        player1.meshes[0].position.y=0.5;
        player1.animationGroups[0].speedRatio=0.5;

        //player1.meshes[6].material = mat    POUR CHANGER DE COULEUR


        var tour = 0;
        window.addEventListener("keydown", function (event){
            if(event.key === " "){
                if(tour==0){
                    gameinterface.classList.add("notplaying");
                    engine.enterPointerlock();
                    tour=1;
                    scoreAff(0,1);
                    scoreAff(0,2);
                }
            }
        });
        //scene action:
        var fleche = (await SceneLoader.ImportMeshAsync("", "/models/", "arrow.glb", scene)).meshes[0];
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
        scene.onBeforeRenderObservable.add(function () {
            if(tour!=0){
                var vect = camera.absoluteRotation.toEulerAngles();
                if(!clicked){
                    var vect1 = camera.absoluteRotation.toEulerAngles();
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
                    trussH.position.y+=0.08*(60/fps);
                    for(let i=0;i<5;i++){
                        cibles[i].position.y+=0.08*(60/fps);
                    }
                }
                if(Q&&cible1.position.z<5.1){
                    trussV.position.z+=0.08*(60/fps);
                    for(let i=0;i<5;i++){
                        cibles[i].position.z+=0.08*(60/fps);
                    }
                }
                if(S&&cible1.position.y>0.8){
                    trussH.position.y-=0.08*(60/fps);
                    for(let i=0;i<5;i++){
                        cibles[i].position.y-=0.08*(60/fps);
                    }
                }
                if(D&&cible1.position.z>-4.9){
                    trussV.position.z-=0.08*(60/fps);
                    for(let i=0;i<5;i++){
                        cibles[i].position.z-=0.08*(60/fps);
                    }
                }
                canvas.addEventListener("keydown", function (event){
                    if(!Z&&event.key === "z"){
                        Z=true;
                        boardz.material = matbOn;
                    }
                    if(!Q&&event.key === "q"){
                        Q=true;
                        boardq.material = matbOn;
                    }
                    if(!S&&event.key === "s"){
                        S=true;
                        boards.material = matbOn;
                    }
                    if(!D&&event.key === "d"){
                        D=true;
                        boardd.material = matbOn;
                    }
                });
                canvas.addEventListener("keyup", function (event){
                    if(event.key === "z"){
                        Z=false;
                        boardz.material = matb;
                    }
                    if(event.key === "q"){
                        Q=false;
                        boardq.material = matb;
                    }
                    if(event.key === "s"){
                        S=false;
                        boards.material = matb;
                    }
                    if(event.key === "d"){
                        D=false;
                        boardd.material = matb;
                    }
                });
                canvas.addEventListener("click", function (event){
                    if(vect1!=undefined){
                        z = Math.sin(vect1.y-1.57);
                        fleche.rotation.y=vect1.y-1.57;
                        y = Math.sin(vect1.x);
                        fleche.rotation.z=-vect1.x-1.57;
                    }
                    launch = true;
                    clicked=true;
                });
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
                    if(charge==0){
                        if(tour==1){
                            tour=2;
                            charge=5;
                            const GrdMat = new BABYLON.StandardMaterial("GrdMat", scene);
                            GrdMat.diffuseColor = new BABYLON.Color3(0.1, 0.1, 0.1);
                            GrdMat.diffuseTexture = undefined;
                            player1.meshes[6].material = GrdMat;
                        } else {
                            console.log("fin de la partie");
                        }
                    }
                    if(!launch){
                        if(tour==1){
                            scorej1+=sc;
                            scoreAff(scorej1,1);
                        } else {
                            scorej2+=sc;
                            scoreAff(scorej2,2);
                        }
                        charge--;
                        clicked=false;
                        fleche.position.x=-120;
                        fleche.position.z=0;
                        fleche.position.y=1.5;
                    }
                }
            }
        
        });

        loading.classList.add("notplaying");
        //fin scene 

        //tireur action:
        
        //cible action:

    }

    //JEU4
    if(jeut==4){
        var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(-120, 1.8, 0), scene);
        camera.attachControl(canvas, true);
        loading.classList.add("notplaying");
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




