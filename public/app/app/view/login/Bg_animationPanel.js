//this is an animation in login page
Ext.define('jmrc.view.login.Bg_animationPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'bg_animation_panel',


    width: 100,
    height: 400,

    // init: showAnimation()
    // bg: showAnimation(),
    bg: showAnimation()


});



function showAnimation() {


    var camera, scene, renderer;
    var geometry, group;
    var mouseX = 0,
        mouseY = 0;
    // var windowHalfX = 500;
    // var windowHalfY = 500;
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;
    var bg = init();
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
        renderer.setSize(window.innerWidth, window.innerHeight);
        // let container = Ext.getCmp('westbg');
        //console.log(Ext.getDom('westbg'));
        // this.body.update(renderer.domElement);
        //container(renderer.domElement);
        //
        //stats = new Stats();
        // document.body.appendChild(renderer.domElement);
        Ext.DomHelper.append(renderer.domElement, this);
        //document.body.appendChild(renderer.domElement);
        //  Ext.DomHelper.i
        document.addEventListener('mousemove', onDocumentMouseMove, false);
        //
        window.addEventListener('resize', onWindowResize, false);

        return renderer;
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

    console.log(bg);

    return bg.domElement;
}