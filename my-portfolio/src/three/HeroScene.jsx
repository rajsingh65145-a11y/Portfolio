import { useEffect, useRef } from "react";
import * as THREE from "three";

function HeroScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 1. SCENE: Hamari 3D duniya jahan saare objects aur lights rahenge
    const scene = new THREE.Scene();

    // 2. CAMERA: User ki aankh (Field of View: 60, Position Z: 6)
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    // 3. RENDERER: Jo 3D scene ko HTML <canvas> par draw karega
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true, // Background transparent rakhne ke liye
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    } catch (error) {
      // Agar kisi device par WebGL off ho, toh website crash na ho
      console.warn("WebGL not supported, skipping 3D background:", error);
      return;
    }

    // 4. 3D OBJECT (Geometry + Material = Mesh)
    // TorusKnotGeometry ek futuristic twisted 3D shape banata hai
    const geometry = new THREE.TorusKnotGeometry(1.4, 0.38, 128, 32);
    const material = new THREE.MeshStandardMaterial({
      color: 0xf43f5e, // Crimson Rose color
      roughness: 0.25,
      metalness: 0.85,
      wireframe: false,
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    // 5. LIGHTS: Red, Pink aur Ambient roshni taaki 3D depth aur shine dikhe
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const roseLight = new THREE.PointLight(0xf43f5e, 35, 50);
    roseLight.position.set(6, 6, 6);
    scene.add(roseLight);

    const pinkLight = new THREE.PointLight(0xec4899, 25, 50);
    pinkLight.position.set(-6, -6, 4);
    scene.add(pinkLight);

    // 6. ANIMATION LOOP (60 FPS Smooth Rotation + Floating Effect)
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth rotation
      torusKnot.rotation.x = elapsedTime * 0.25;
      torusKnot.rotation.y = elapsedTime * 0.35;

      // Hawa mein upar-neeche float karne ka effect (Sine wave)
      torusKnot.position.y = Math.sin(elapsedTime * 1.5) * 0.25;

      renderer.render(scene, camera);
      animationFrameId = window.requestAnimationFrame(animate);
    };

    animate();

    // 7. RESPONSIVE RESIZE: Screen choti-badi hone par 3D canvas adjust ho
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // 8. CLEANUP: Memory leak rokne ke liye jab component hate toh sab clear karo
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-55 sm:opacity-75">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}

export default HeroScene;