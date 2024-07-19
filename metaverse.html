<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D City with Chatbot Screen</title>
    <style>
        body { margin: 0; overflow: hidden; }
        #chatbot { position: absolute; top: 10px; left: 10px; width: 300px; height: 400px; border: none; }
    </style>
</head>
<body>
    <iframe id="chatbot" src="about:blank"></iframe>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Stylized ground
        const groundGeometry = new THREE.PlaneGeometry(100, 100);
        const groundMaterial = new THREE.MeshPhongMaterial({ color: 0x3a9efd });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        scene.add(ground);

        // Stylized buildings
        function createBuilding(x, z, height, color) {
            const geometry = new THREE.BoxGeometry(2, height, 2);
            const material = new THREE.MeshPhongMaterial({ color: color });
            const building = new THREE.Mesh(geometry, material);
            building.position.set(x, height/2, z);
            scene.add(building);
        }

        for (let i = 0; i < 20; i++) {
            const x = Math.random() * 80 - 40;
            const z = Math.random() * 80 - 40;
            const height = Math.random() * 15 + 5;
            const color = Math.random() * 0xffffff;
            createBuilding(x, z, height, color);
        }

        // Central screen for chatbot
        const screenGeometry = new THREE.PlaneGeometry(20, 15);
        const screenMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const screen = new THREE.Mesh(screenGeometry, screenMaterial);
        screen.position.set(0, 10, -20);
        scene.add(screen);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        camera.position.set(0, 15, 30);
        camera.lookAt(screen.position);

        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    </script>
</body>
</html>
