// Add Iframe to the screen
const iframe = document.createElement('iframe');
iframe.src = 'path/to/your/chatbot';
iframe.style.width = '100%';
iframe.style.height = '100%';
iframe.style.border = 'none';
document.getElementById('webgl-output').appendChild(iframe);

const loader = new THREE.GLTFLoader();
loader.load('path/to/model.glb', function (gltf) {
    scene.add(gltf.scene);
});
