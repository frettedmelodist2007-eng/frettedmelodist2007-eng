'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Scene3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080808, 0.05);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: window.devicePixelRatio < 2,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for 3D objects
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Metallic Gold Material
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xC6A66B,
      metalness: 0.92,
      roughness: 0.18,
      wireframe: false,
    });

    const goldWireMaterial = new THREE.MeshBasicMaterial({
      color: 0xE0C080,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });

    // 1. Central Metallic Sculpture (Torus Knot)
    const torusGeometry = new THREE.TorusKnotGeometry(1.2, 0.35, 128, 32, 2, 3);
    const torusMesh = new THREE.Mesh(torusGeometry, goldMaterial);
    masterGroup.add(torusMesh);

    // Outer wireframe cage
    const wireMesh = new THREE.Mesh(torusGeometry, goldWireMaterial);
    wireMesh.scale.set(1.08, 1.08, 1.08);
    masterGroup.add(wireMesh);

    // 2. Concentric Orbital Rings (Armillary Sphere Concept)
    const ringMaterials = [
      new THREE.MeshStandardMaterial({ color: 0xC6A66B, metalness: 0.95, roughness: 0.1 }),
      new THREE.MeshStandardMaterial({ color: 0x806B48, metalness: 0.85, roughness: 0.25 }),
      new THREE.MeshStandardMaterial({ color: 0xE0C080, metalness: 0.9, roughness: 0.15 }),
    ];

    const rings = [];
    const ringConfigs = [
      { r: 2.3, tube: 0.02, rotX: 0.5, rotY: 0.3 },
      { r: 2.8, tube: 0.018, rotX: -0.4, rotY: 0.8 },
      { r: 3.3, tube: 0.015, rotX: 1.2, rotY: -0.5 },
    ];

    ringConfigs.forEach((cfg, idx) => {
      const ringGeom = new THREE.TorusGeometry(cfg.r, cfg.tube, 16, 100);
      const ringMesh = new THREE.Mesh(ringGeom, ringMaterials[idx % ringMaterials.length]);
      ringMesh.rotation.x = cfg.rotX;
      ringMesh.rotation.y = cfg.rotY;
      masterGroup.add(ringMesh);
      rings.push({ mesh: ringMesh, speedX: 0.002 * (idx + 1), speedY: 0.003 * (idx + 1) });
    });

    // 3. Floating 3D Gold Particles
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 120 : 350;
    const particleGeom = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePos[i * 3] = (Math.random() - 0.5) * 14;
      particlePos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      particlePos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      particleScales[i] = Math.random();
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xE0C080,
      size: 0.045,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // 4. Cinematic Lighting
    const ambientLight = new THREE.AmbientLight(0x101010, 1.5);
    scene.add(ambientLight);

    const keyLight = new THREE.PointLight(0xFFE5B4, 4.5, 20);
    keyLight.position.set(3, 4, 5);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0xC6A66B, 2.5, 20);
    fillLight.position.set(-4, -3, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xE0C080, 2);
    rimLight.position.set(0, 5, -5);
    scene.add(rimLight);

    // Cursor tracking with lerp dampening
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 2.2;
      targetY = y * 2.2;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Handle resize
    const onResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;

      if (!prefersReducedMotion) {
        // Rotate central sculpture
        torusMesh.rotation.x = elapsedTime * 0.2 + mouseY * 0.4;
        torusMesh.rotation.y = elapsedTime * 0.3 + mouseX * 0.6;

        wireMesh.rotation.x = -elapsedTime * 0.15 + mouseY * 0.3;
        wireMesh.rotation.y = -elapsedTime * 0.2 + mouseX * 0.5;

        // Rotate orbital rings
        rings.forEach((r, i) => {
          r.mesh.rotation.x += r.speedX * (i % 2 === 0 ? 1 : -1);
          r.mesh.rotation.y += r.speedY * (i % 2 === 0 ? -1 : 1);
        });

        // Drift particles
        particles.rotation.y = elapsedTime * 0.03;
        particles.rotation.x = elapsedTime * 0.015;

        // Camera gentle parallax
        camera.position.x = mouseX * 0.8;
        camera.position.y = -mouseY * 0.8;
        camera.lookAt(0, 0, 0);

        // Light orbit
        keyLight.position.x = Math.sin(elapsedTime * 0.5) * 4;
        keyLight.position.z = Math.cos(elapsedTime * 0.5) * 4 + 2;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      torusGeometry.dispose();
      goldMaterial.dispose();
      goldWireMaterial.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}

