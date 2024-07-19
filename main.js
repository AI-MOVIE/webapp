let scene, camera, renderer, controls;

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
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.set(0, 5, -20);
    scene.add(screen);
    
    // Create a video element
    const video = document.createElement('video');
    video.src = 'https://youtu.be/EneLT78nTvg?feature=shared'; // Replace with your video URL
    video.crossOrigin = 'anonymous';
    video.muted = true; // Mute video to allow autoplay in some browsers
    video.playsInline = true; // Ensures the video plays inline on mobile devices
    video.autoplay = true;
    video.loop = true;
    video.load();
    video.play();

    // Create a video texture
    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.format = THREE.RGBFormat;

    // Apply the video texture to the screen
    screen.material.map = videoTexture;
    screen.material.needsUpdate = true;
    
    // Render loop
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
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
