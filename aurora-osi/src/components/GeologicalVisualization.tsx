"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Sphere, Line, Text } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import * as THREE from 'three';

interface GeologicalLayer {
  id: string;
  name: string;
  depth: number;
  thickness: number;
  color: string;
  opacity: number;
  mineralization: number;
}

interface Deposit {
  id: string;
  name: string;
  position: [number, number, number];
  confidence: number;
  type: string;
}

interface GeologicalVisualizationProps {
  layers?: GeologicalLayer[];
  deposits?: Deposit[];
  showGrid?: boolean;
  showConfidence?: boolean;
}

function GeologicalModel({ layers, deposits, showGrid, showConfidence }: GeologicalVisualizationProps) {
  const meshRef = useRef<THREE.Group>(null);

  const defaultLayers: GeologicalLayer[] = [
    { id: '1', name: 'Overburden', depth: 0, thickness: 100, color: '#8B7355', opacity: 0.6, mineralization: 0.1 },
    { id: '2', name: 'Sedimentary', depth: 100, thickness: 200, color: '#CD853F', opacity: 0.7, mineralization: 0.2 },
    { id: '3', name: 'Metamorphic', depth: 300, thickness: 300, color: '#696969', opacity: 0.8, mineralization: 0.4 },
    { id: '4', name: 'Basement', depth: 600, thickness: 400, color: '#2F4F4F', opacity: 0.9, mineralization: 0.6 },
  ];

  const defaultDeposits: Deposit[] = [
    { id: '1', name: 'Gold Deposit A', position: [200, 350, 200], confidence: 0.87, type: 'Orogenic' },
    { id: '2', name: 'Gold Deposit B', position: [-150, 450, -100], confidence: 0.72, type: 'Carlin-type' },
    { id: '3', name: 'Gold Deposit C', position: [100, 250, 300], confidence: 0.91, type: 'Porphyry' },
  ];

  const displayLayers = layers || defaultLayers;
  const displayDeposits = deposits || defaultDeposits;

  const gridLines = useMemo(() => {
    const lines = [];
    const gridSize = 500;
    const gridStep = 50;
    
    for (let i = -gridSize; i <= gridSize; i += gridStep) {
      lines.push(
        [[-gridSize, 0, i], [gridSize, 0, i]],
        [[i, 0, -gridSize], [i, 0, gridSize]]
      );
    }
    return lines;
  }, []);

  return (
    <group ref={meshRef}>
      {/* Grid */}
      {showGrid && gridLines.map((line, index) => (
        <Line
          key={index}
          points={line}
          color="#4a5568"
          lineWidth={0.5}
          opacity={0.3}
        />
      ))}

      {/* Geological Layers */}
      {displayLayers.map((layer) => (
        <Box
          key={layer.id}
          position={[0, -layer.depth - layer.thickness / 2, 0]}
          args={[1000, layer.thickness, 1000]}
        >
          <meshStandardMaterial
            color={layer.color}
            opacity={layer.opacity}
            transparent
            roughness={0.8}
            metalness={0.2}
          />
        </Box>
      ))}

      {/* Mineral Deposits */}
      {displayDeposits.map((deposit) => (
        <group key={deposit.id} position={deposit.position}>
          <Sphere args={[20, 32, 32]}>
            <meshStandardMaterial
              color={deposit.confidence > 0.8 ? '#10b981' : deposit.confidence > 0.6 ? '#f59e0b' : '#ef4444'}
              emissive={deposit.confidence > 0.8 ? '#10b981' : deposit.confidence > 0.6 ? '#f59e0b' : '#ef4444'}
              emissiveIntensity={0.3}
            />
          </Sphere>
          {showConfidence && (
            <Text
              position={[0, 30, 0]}
              fontSize={12}
              color="white"
              anchorX="center"
              anchorY="middle"
            >
              {`${(deposit.confidence * 100).toFixed(0)}%`}
            </Text>
          )}
        </group>
      ))}

      {/* Fault Lines */}
      <Line
        points={[[-300, 200, 0], [300, 400, 0]]}
        color="#dc2626"
        lineWidth={3}
      />
      <Line
        points={[[-200, 100, -300], [200, 500, 300]]}
        color="#dc2626"
        lineWidth={3}
      />
    </group>
  );
}

export default function GeologicalVisualization({
  layers,
  deposits,
  showGrid = true,
  showConfidence = true
}: GeologicalVisualizationProps) {
  const [isRotating, setIsRotating] = useState(true);

  return (
    <div className="w-full h-full bg-gradient-to-b from-slate-900 to-slate-800 rounded-lg overflow-hidden">
      <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white">
        <h3 className="font-semibold text-sm mb-2">3D Geological Model</h3>
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>High Confidence (&gt;80%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span>Medium Confidence (60-80%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span>Low Confidence (&lt;60%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-red-500"></div>
            <span>Fault Lines</span>
          </div>
        </div>
      </div>

      <div className="absolute top-4 right-4 z-10 space-y-2">
        <button
          onClick={() => setIsRotating(!isRotating)}
          className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded text-xs hover:bg-black/70 transition-colors"
        >
          {isRotating ? 'Stop' : 'Start'} Rotation
        </button>
      </div>

      <Canvas
        camera={{ position: [800, 600, 800], fov: 45 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[1000, 1000, 500]} intensity={0.8} castShadow />
        <pointLight position={[-1000, 500, -500]} intensity={0.3} />

        <GeologicalModel
          layers={layers}
          deposits={deposits}
          showGrid={showGrid}
          showConfidence={showConfidence}
        />

        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={isRotating}
          autoRotate={isRotating}
          autoRotateSpeed={0.5}
          minDistance={200}
          maxDistance={2000}
          maxPolarAngle={Math.PI / 2}
        />

        <fog attach="fog" args={['#1e293b', 1000, 3000]} />
      </Canvas>

      <div className="absolute bottom-4 left-4 right-4 z-10 bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white">
        <div className="grid grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-slate-400">Model Area:</span>
            <span className="ml-2 font-medium">1,000 km²</span>
          </div>
          <div>
            <span className="text-slate-400">Max Depth:</span>
            <span className="ml-2 font-medium">1,000 m</span>
          </div>
          <div>
            <span className="text-slate-400">Deposits:</span>
            <span className="ml-2 font-medium">{deposits?.length || 3}</span>
          </div>
          <div>
            <span className="text-slate-400">Confidence:</span>
            <span className="ml-2 font-medium">High</span>
          </div>
        </div>
      </div>
    </div>
  );
}