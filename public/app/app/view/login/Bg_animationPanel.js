//this is an animation in login page
Ext.define('jmrc.view.login.Bg_animationPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'bg_animation_panel',
    controller: 'login-bganimation',

    width: 900,
    height: 600,
    border: '1px solid blue',
    layout: 'fit',

    html: "<div id='div1' > </div>",



});



function showAnimation() {

    // console.log("this is showAnimation funciton run.... ");
    var camera, scene, renderer;
    var geometry, group;
    var mouseX = 0,
        mouseY = 0;
    var windowHalfX = 500;
    var windowHalfY = 500;
    var viewWidth = 900;
    var viewHeight = 600;
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // var windowHalfX = window.innerWidth / 2;
    // var windowHalfY = window.innerHeight / 2;
    init();
    animate();

    function init() {
        camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.z = 500;
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff);
        scene.fog = new THREE.Fog(0xffffff, 1, 10000);
        var geometry = new THREE.BoxBufferGeometry(100, 100, 100);
        var material = new THREE.MeshNormalMaterial();
        group = new THREE.Group();
        for (var i = 0; i < 1000; i++) {
            var mesh = new THREE.Mesh(geometry, material);
            mesh.position.x = Math.random() * 2000 - 1000;
            mesh.position.y = Math.random() * 2000 - 1000;
            mesh.position.z = Math.random() * 2000 - 1000;
            mesh.rotation.x = Math.random() * 2 * Math.PI;
            mesh.rotation.y = Math.random() * 2 * Math.PI;
            mesh.matrixAutoUpdate = false;
            mesh.updateMatrix();
            group.add(mesh);
        }
        scene.add(group);
        //
        renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(viewWidth, viewHeight);
        // renderer.setSize(window.innerWidth, window.innerHeight);

        let div_bg = window.document.getElementById('div1');
        let westbg = Ext.getCmp('westbg');
        //console.log(typeof renderer);
        // westbg.insert(0, { xtype: 'button', text: 'add button' });
        // westbg.dom.insert(0, renderer.domElement);
        // console.log(document);
        // console.log(div_bg);
        // console.log(westbg);
        // document.body.appendChild(renderer.domElement);
        div_bg.appendChild(renderer.domElement);
        //  Ext.DomHelper.i
        document.addEventListener('mousemove', onDocumentMouseMove, false);
        //
        window.addEventListener('resize', onWindowResize, false);

    }

    function onWindowResize() {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function onDocumentMouseMove(event) {
        mouseX = (event.clientX - windowHalfX) * 10;
        mouseY = (event.clientY - windowHalfY) * 10;
    }
    //
    function animate() {
        requestAnimationFrame(animate);
        render();
        //  stats.update();
    }

    function render() {
        var time = Date.now() * 0.001;
        var rx = Math.sin(time * 0.7) * 0.5,
            ry = Math.sin(time * 0.3) * 0.5,
            rz = Math.sin(time * 0.2) * 0.5;
        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.position.y += (-mouseY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
        group.rotation.x = rx;
        group.rotation.y = ry;
        group.rotation.z = rz;
        renderer.render(scene, camera);
    }

    // console.log(bg);

}