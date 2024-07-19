let scene, camera, renderer, controls, screen;

function init() {
    // Scene setup
    scene = new THREE.Scene();
    
    // Camera setup
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 10);
    
    // Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('webgl-output').appendChild(renderer.domElement);
    
    // Controls setup
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5).normalize();
    scene.add(directionalLight);
    
    // Load Skybox
    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load([
        'images for new web/a-cinematic-movie-about-aliens.png', 'images for new web/a-cinematic-movie-about-aliens.png',
        'images for new web/a-cinematic-movie-about-aliens.png', 'images for new web/a-cinematic-movie-about-aliens.png',
        'images for new web/a-cinematic-movie-about-aliens.png', 'images for new web/a-cinematic-movie-about-aliens.png'
    ]);
    scene.background = texture;
    
    // Ground
    const groundGeometry = new THREE.PlaneGeometry(100, 100);
    const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);
    
    // Add the giant screen
    const screenGeometry = new THREE.PlaneGeometry(16, 9);
    const screenMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.set(0, 5, -20);
    scene.add(screen);
    
    // Render loop
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        updateIframePosition();
        renderer.render(scene, camera);
    }
    animate();
}

init();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

function updateIframePosition() {
    const iframe = document.getElementById('video-iframe');
    
    // Get the screen position in the 3D scene
    const vector = new THREE.Vector3();
    const widthHalf = 0.5 * renderer.getContext().canvas.width;
    const heightHalf = 0.5 * renderer.getContext().canvas.height;
    
    screen.updateMatrixWorld();
    vector.setFromMatrixPosition(screen.matrixWorld);
    vector.project(camera);

    // Convert to 2D screen coordinates
    const x = (vector.x * widthHalf) + widthHalf;
    const y = -(vector.y * heightHalf) + heightHalf;

    // Set the position and size of the iframe
    iframe.style.width = '640px';
    iframe.style.height = '360px';
    iframe.style.transform = `translate(-50%, -50%)`;
    iframe.style.left = `${x}px`;
    iframe.style.top = `${y}px`;
}
