'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface PipeCanvasProps {
    variant: 'mobile' | 'desktop'
}

export default function PipeCanvas({ variant }: PipeCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const isMobile = variant === 'mobile'
        const container = canvas.parentElement!
        const width = container.offsetWidth
        const height = isMobile ? 400 : 500

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            antialias: true,
        })

        renderer.setSize(width, height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
        camera.position.set(0, 0, 7)

        const outerRadius = 1.2
        const innerRadius = 0.95
        const length = isMobile ? 3.5 : 5
        const radialSegments = 32
        const wallThickness = outerRadius - innerRadius
        const cutStart = Math.PI * 0.18
        const cutArc = Math.PI * 1.64

        const outerGeometry = new THREE.CylinderGeometry(
            outerRadius, outerRadius, length, radialSegments, 1, true, cutStart, cutArc
        )
        const innerGeometry = new THREE.CylinderGeometry(
            innerRadius, innerRadius, length, radialSegments, 1, true
        )

        const ringShape = new THREE.Shape()
        ringShape.absarc(0, 0, outerRadius, 0, Math.PI * 2, false)
        const holePath = new THREE.Path()
        holePath.absarc(0, 0, innerRadius, 0, Math.PI * 2, true)
        ringShape.holes.push(holePath)
        const capGeometry = new THREE.ShapeGeometry(ringShape, radialSegments)
        const cutWallGeo = new THREE.PlaneGeometry(wallThickness, length)

        // Bell end
        const bellLength = 0.22
        const bellRadius = outerRadius + 0.1
        const bellInner = innerRadius + 0.04
        const grooveDepth = 0.04
        const bellOuterGeo = new THREE.CylinderGeometry(
            bellRadius, outerRadius, bellLength, radialSegments, 1, true, cutStart, cutArc
        )
        const bellInnerGeo = new THREE.CylinderGeometry(
            bellInner, innerRadius, bellLength, radialSegments, 1, true
        )
        const bellRingShape = new THREE.Shape()
        bellRingShape.absarc(0, 0, bellRadius, 0, Math.PI * 2, false)
        const bellHole = new THREE.Path()
        bellHole.absarc(0, 0, bellInner, 0, Math.PI * 2, true)
        bellRingShape.holes.push(bellHole)
        const bellCapGeo = new THREE.ShapeGeometry(bellRingShape, radialSegments)
        const grooveGeo = new THREE.TorusGeometry(
            (bellInner + innerRadius) / 2, grooveDepth, 8, radialSegments, Math.PI * 2
        )

        // Spigot
        const spigotLength = 0.1
        const spigotRadius = outerRadius - 0.03
        const spigotGeo = new THREE.CylinderGeometry(
            spigotRadius, outerRadius, spigotLength, radialSegments, 1, true, cutStart, cutArc
        )

        // Textures & materials
        const textureLoader = new THREE.TextureLoader()
        const concreteTexture = textureLoader.load(
            '/concrete.jpeg',
            undefined,
            undefined,
            () => {
                concreteMaterial.map = null
                concreteMaterial.color.setHex(0xcccccc)
                concreteMaterial.needsUpdate = true
            }
        )
        concreteTexture.wrapS = THREE.RepeatWrapping
        concreteTexture.wrapT = THREE.RepeatWrapping
        concreteTexture.repeat.set(2, 2)

        const concreteMaterial = new THREE.MeshStandardMaterial({
            map: concreteTexture,
            roughness: 0.85,
            metalness: 0.05,
            side: THREE.DoubleSide,
        })
        const innerConcreteTexture = concreteTexture.clone()
        innerConcreteTexture.needsUpdate = true
        const innerConcreteMaterial = new THREE.MeshStandardMaterial({
            map: innerConcreteTexture,
            roughness: 0.92,
            metalness: 0.02,
            color: 0xcccccc,
            side: THREE.DoubleSide,
        })
        const rubberMaterial = new THREE.MeshStandardMaterial({
            color: 0x222222,
            roughness: 1.0,
            metalness: 0.0,
        })

        // Build pipe
        const pipeGroup = new THREE.Group()
        pipeGroup.add(new THREE.Mesh(outerGeometry, concreteMaterial))
        pipeGroup.add(new THREE.Mesh(innerGeometry, innerConcreteMaterial))

        const cap1 = new THREE.Mesh(capGeometry, concreteMaterial)
        cap1.rotation.x = -Math.PI / 2
        cap1.position.y = length / 2
        pipeGroup.add(cap1)
        const cap2 = new THREE.Mesh(capGeometry.clone(), concreteMaterial)
        cap2.rotation.x = Math.PI / 2
        cap2.position.y = -length / 2
        pipeGroup.add(cap2)

        for (const angle of [cutStart, cutStart + cutArc]) {
            const midR = (outerRadius + innerRadius) / 2
            const wall = new THREE.Mesh(cutWallGeo, concreteMaterial)
            wall.position.set(Math.cos(angle) * midR, 0, Math.sin(angle) * midR)
            wall.rotation.y = -angle + Math.PI / 2
            pipeGroup.add(wall)
        }

        // Bell group
        const bellGroup = new THREE.Group()
        bellGroup.position.y = length / 2 + bellLength / 2
        bellGroup.add(new THREE.Mesh(bellOuterGeo, concreteMaterial))
        bellGroup.add(new THREE.Mesh(bellInnerGeo, innerConcreteMaterial))
        const bellCap = new THREE.Mesh(bellCapGeo, concreteMaterial)
        bellCap.rotation.x = -Math.PI / 2
        bellCap.position.y = bellLength / 2
        bellGroup.add(bellCap)
        const groove = new THREE.Mesh(grooveGeo, rubberMaterial)
        groove.rotation.x = Math.PI / 2
        groove.position.y = bellLength * 0.3
        bellGroup.add(groove)
        pipeGroup.add(bellGroup)

        // Spigot
        const spigotMesh = new THREE.Mesh(spigotGeo, concreteMaterial)
        spigotMesh.position.y = -length / 2 - spigotLength / 2
        pipeGroup.add(spigotMesh)

        // Rebar
        const rebarMaterial = new THREE.MeshStandardMaterial({
            color: 0x8b5a2b,
            roughness: 0.55,
            metalness: 0.7,
        })
        const rebarRadius = (outerRadius + innerRadius) / 2
        const rebarTube = 0.025
        const rebarCount = Math.floor(length / 0.5)

        for (let i = 0; i < rebarCount; i++) {
            const ringGeo = new THREE.TorusGeometry(
                rebarRadius, rebarTube, 4, radialSegments
            )
            const ring = new THREE.Mesh(ringGeo, rebarMaterial)
            ring.rotation.x = Math.PI / 2
            ring.position.y = -length / 2 + (i + 0.5) * (length / rebarCount)
            pipeGroup.add(ring)
        }

        const longiCount = 8
        const longiGeo = new THREE.CylinderGeometry(rebarTube, rebarTube, length, 4)
        for (let i = 0; i < longiCount; i++) {
            const a = (i / longiCount) * Math.PI * 2
            const bar = new THREE.Mesh(longiGeo, rebarMaterial)
            bar.position.set(Math.cos(a) * rebarRadius, 0, Math.sin(a) * rebarRadius)
            pipeGroup.add(bar)
        }

        pipeGroup.rotation.z = Math.PI / 2
        if (!isMobile) pipeGroup.position.x = 4
        scene.add(pipeGroup)

        // Lighting
        scene.add(new THREE.AmbientLight(0xffffff, 0.6))
        scene.add(new THREE.HemisphereLight(0xffffff, 0x8db4ff, 0.35))
        const keyLight = new THREE.DirectionalLight(0xffffff, 1.15)
        keyLight.position.set(6, 6, 5)
        scene.add(keyLight)
        const fillLight = new THREE.DirectionalLight(0xffffff, 0.4)
        fillLight.position.set(-6, 1, -4)
        scene.add(fillLight)

        // Water particles
        const BALL_COUNT = 30
        const extendedLength = length * 6
        const waterMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x2196f3,
            transparent: true,
            opacity: 0.6,
            metalness: 0.05,
            roughness: 0.05,
            clearcoat: 1.0,
            clearcoatRoughness: 0.04,
            transmission: 0.5,
            thickness: 0.6,
            ior: 1.33,
            side: THREE.DoubleSide,
        })
        const sphereGeos = [
            new THREE.SphereGeometry(0.12, 8, 6),
            new THREE.SphereGeometry(0.09, 8, 6),
            new THREE.SphereGeometry(0.15, 8, 6),
        ]

        interface ParticleData {
            angle: number
            radius: number
            y: number
            speed: number
            rotSpeed: number
            scale: number
        }

        const particles: THREE.Mesh[] = []
        for (let i = 0; i < BALL_COUNT; i++) {
            const ball = new THREE.Mesh(sphereGeos[i % 3], waterMaterial)
            const data: ParticleData = {
                angle: Math.random() * Math.PI * 2,
                radius: Math.random() * (innerRadius - 0.2) * 0.8,
                y: Math.random() * extendedLength - extendedLength / 2,
                speed: 0.03 + Math.random() * 0.025,
                rotSpeed: 0.004 + Math.random() * 0.01,
                scale: 0.8 + Math.random() * 0.5,
            }
            ball.userData = data
            ball.scale.setScalar(data.scale)
            particles.push(ball)
            pipeGroup.add(ball)
        }

        // Animation loop
        let animationId: number
        function animate() {
            animationId = requestAnimationFrame(animate)
            for (const p of particles) {
                const d = p.userData as ParticleData
                d.y += d.speed
                d.angle += d.rotSpeed
                if (d.y > extendedLength / 2) d.y = -extendedLength / 2
                p.position.set(
                    Math.cos(d.angle) * d.radius,
                    d.y,
                    Math.sin(d.angle) * d.radius
                )
            }
            renderer.render(scene, camera)
        }
        animate()

        // Resize handler
        function handleResize() {
            const w = container.offsetWidth
            const h = isMobile ? 400 : 500
            camera.aspect = w / h
            camera.updateProjectionMatrix()
            renderer.setSize(w, h)
        }
        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('resize', handleResize)
            renderer.dispose()
        }
    }, [variant])

    if (variant === 'mobile') {
        return (
            <canvas
                ref={canvasRef}
                id="pipe-canvas-mobile"
            />
        )
    }

    return (
        <canvas
            ref={canvasRef}
            id="pipe-canvas-desktop"
            className="hidden md:mt-28 md:block absolute inset-0 w-full h-full"
        />
    )
}
