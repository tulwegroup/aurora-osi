"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Atom, 
  Cpu,
  Zap,
  Brain,
  Activity,
  BarChart3,
  LineChart,
  Target,
  TrendingUp,
  TrendingDown,
  Play,
  Pause,
  Settings,
  RefreshCw,
  Database,
  Clock,
  CheckCircle,
  AlertTriangle,
  Info,
  Layers,
  GitBranch,
  Box,
  Hexagon,
  Network,
  Gauge,
  Timer,
  Thermometer,
  Radio
} from "lucide-react";

interface QuantumAlgorithm {
  id: string;
  name: string;
  type: "optimization" | "simulation" | "machine_learning" | "cryptography";
  description: string;
  qubits: number;
  accuracy: number;
  speedup: number;
  status: "active" | "experimental" | "development" | "deprecated";
  lastRun: string;
  applications: string[];
}

interface QuantumSimulation {
  id: string;
  name: string;
  geologicalModel: string;
  complexity: "low" | "medium" | "high" | "extreme";
  qubitsRequired: number;
  accuracy: number;
  runtime: string;
  status: "running" | "completed" | "queued" | "error";
  progress: number;
  results?: {
    depositProbability: number;
    confidence: number;
    processingTime: string;
  };
}

interface QuantumHardware {
  id: string;
  name: string;
  type: "superconducting" | "trapped_ion" | "photonic" | "topological";
  qubits: number;
  fidelity: number;
  temperature: number;
  status: "online" | "offline" | "maintenance" | "calibrating";
  utilization: number;
  location: string;
}

interface QuantumAdvantage {
  problem: string;
  classicalTime: string;
  quantumTime: string;
  speedup: string;
  accuracy: number;
  status: "demonstrated" | "theoretical" | "emerging";
}

export default function QuantumComputingHub() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string | null>(null);

  const quantumAlgorithms: QuantumAlgorithm[] = [
    {
      id: "qaoa_geological",
      name: "QAOA Geological Optimization",
      type: "optimization",
      description: "Quantum Approximate Optimization Algorithm for mineral deposit location",
      qubits: 64,
      accuracy: 94.7,
      speedup: 12.3,
      status: "active",
      lastRun: "2 hours ago",
      applications: ["mineral_exploration", "resource_optimization", "survey_planning"]
    },
    {
      id: "vqe_subsurface",
      name: "VQE Subsurface Modeling",
      type: "simulation",
      description: "Variational Quantum Eigensolver for subsurface geological simulation",
      qubits: 128,
      accuracy: 91.2,
      speedup: 8.7,
      status: "experimental",
      lastRun: "1 day ago",
      applications: ["subsurface_modeling", "reservoir_simulation", "geophysical_analysis"]
    },
    {
      id: "qml_classifier",
      name: "Quantum ML Classifier",
      type: "machine_learning",
      description: "Quantum machine learning for geological pattern classification",
      qubits: 32,
      accuracy: 89.4,
      speedup: 6.2,
      status: "development",
      lastRun: "3 days ago",
      applications: ["pattern_recognition", "anomaly_detection", "data_classification"]
    },
    {
      id: "quantum_annealing",
      name: "Quantum Annealing System",
      type: "optimization",
      description: "Quantum annealing for complex geological optimization problems",
      qubits: 512,
      accuracy: 87.8,
      speedup: 15.8,
      status: "active",
      lastRun: "6 hours ago",
      applications: ["optimization", "sampling", "logistics"]
    }
  ];

  const quantumSimulations: QuantumSimulation[] = [
    {
      id: "sim_001",
      name: "Andean Copper Deposit Simulation",
      geologicalModel: "Porphyry Copper System",
      complexity: "high",
      qubitsRequired: 96,
      accuracy: 0,
      runtime: "45 mins",
      status: "running",
      progress: 67
    },
    {
      id: "sim_002",
      name: "Basin Reservoir Quantum Analysis",
      geologicalModel: "Sedimentary Basin",
      complexity: "medium",
      qubitsRequired: 64,
      accuracy: 92.3,
      runtime: "Completed in 23 mins",
      status: "completed",
      progress: 100,
      results: {
        depositProbability: 0.78,
        confidence: 92.3,
        processingTime: "23 mins"
      }
    },
    {
      id: "sim_003",
      name: "Volcanic Geothermal System",
      geologicalModel: "Geothermal Reservoir",
      complexity: "extreme",
      qubitsRequired: 256,
      accuracy: 0,
      runtime: "Est. 2 hours",
      status: "queued",
      progress: 0
    }
  ];

  const quantumHardware: QuantumHardware[] = [
    {
      id: "quantum_001",
      name: "Aurora-Q1",
      type: "superconducting",
      qubits: 128,
      fidelity: 99.4,
      temperature: 0.015,
      status: "online",
      utilization: 78,
      location: "Quantum Computing Center - Zurich"
    },
    {
      id: "quantum_002",
      name: "IonTrap-Pro",
      type: "trapped_ion",
      qubits: 64,
      fidelity: 99.8,
      temperature: 0.001,
      status: "online",
      utilization: 45,
      location: "Quantum Lab - Munich"
    },
    {
      id: "quantum_003",
      name: "Photonic-X",
      type: "photonic",
      qubits: 256,
      fidelity: 98.7,
      temperature: 293,
      status: "calibrating",
      utilization: 12,
      location: "Photonics Center - London"
    }
  ];

  const quantumAdvantages: QuantumAdvantage[] = [
    {
      problem: "Mineral Deposit Optimization",
      classicalTime: "48 hours",
      quantumTime: "3.9 hours",
      speedup: "12.3x",
      accuracy: 94.7,
      status: "demonstrated"
    },
    {
      problem: "Subsurface Simulation",
      classicalTime: "72 hours",
      quantumTime: "8.3 hours",
      speedup: "8.7x",
      accuracy: 91.2,
      status: "demonstrated"
    },
    {
      problem: "Geological Pattern Classification",
      classicalTime: "12 hours",
      quantumTime: "1.9 hours",
      speedup: "6.2x",
      accuracy: 89.4,
      status: "emerging"
    },
    {
      problem: "Complex Optimization",
      classicalTime: "120 hours",
      quantumTime: "7.6 hours",
      speedup: "15.8x",
      accuracy: 87.8,
      status: "demonstrated"
    }
  ];

  const getAlgorithmIcon = (type: string) => {
    switch (type) {
      case "optimization":
        return <Target className="w-5 h-5 text-blue-600" />;
      case "simulation":
        return <Layers className="w-5 h-5 text-purple-600" />;
      case "machine_learning":
        return <Brain className="w-5 h-5 text-green-600" />;
      case "cryptography":
        return <Hexagon className="w-5 h-5 text-orange-600" />;
      default:
        return <Atom className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "online":
      case "active":
      case "completed":
      case "demonstrated":
        return <Badge className="bg-green-100 text-green-800">{status}</Badge>;
      case "offline":
      case "error":
      case "deprecated":
        return <Badge className="bg-red-100 text-red-800">{status}</Badge>;
      case "maintenance":
      case "calibrating":
      case "development":
      case "theoretical":
        return <Badge className="bg-yellow-100 text-yellow-800">{status}</Badge>;
      case "running":
      case "experimental":
      case "emerging":
        return <Badge className="bg-blue-100 text-blue-800">{status}</Badge>;
      case "queued":
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>;
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "low":
        return "text-green-600 bg-green-50";
      case "medium":
        return "text-blue-600 bg-blue-50";
      case "high":
        return "text-orange-600 bg-orange-50";
      case "extreme":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const handleRunSimulation = (simulationId: string) => {
    alert(`Starting quantum simulation ${simulationId}... This will allocate quantum resources and begin the geological modeling process.`);
  };

  const handleConfigureAlgorithm = (algorithmId: string) => {
    alert(`Configuring quantum algorithm ${algorithmId}... This will open the quantum parameter configuration interface.`);
  };

  const handleBenchmarkComparison = () => {
    alert('Running quantum vs classical benchmark... This will compare performance across different geological problems.');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Quantum Computing Hub</h2>
          <p className="text-slate-600">Quantum algorithms for complex geological modeling</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={handleBenchmarkComparison}>
            <BarChart3 className="w-4 h-4 mr-2" />
            Benchmark
          </Button>
          <Button size="sm">
            <Play className="w-4 h-4 mr-2" />
            Run Quantum Job
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Active Qubits</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">448</p>
                <p className="text-sm text-green-600 mt-1">across 3 systems</p>
              </div>
              <Atom className="w-8 h-8 text-blue-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Avg Speedup</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">10.8x</p>
                <p className="text-sm text-purple-600 mt-1">vs classical</p>
              </div>
              <Zap className="w-8 h-8 text-purple-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Quantum Accuracy</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">90.8%</p>
                <p className="text-sm text-green-600 mt-1">high fidelity</p>
              </div>
              <Target className="w-8 h-8 text-green-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Active Jobs</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">2</p>
                <p className="text-sm text-orange-600 mt-1">processing</p>
              </div>
              <Activity className="w-8 h-8 text-orange-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="algorithms">Quantum Algorithms</TabsTrigger>
          <TabsTrigger value="simulations">Simulations</TabsTrigger>
          <TabsTrigger value="hardware">Hardware</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Quantum Advantage Demonstrated
                </CardTitle>
                <CardDescription>Performance improvements over classical computing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {quantumAdvantages.map((advantage) => (
                  <div key={advantage.problem} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{advantage.problem}</span>
                      {getStatusBadge(advantage.status)}
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <span className="text-slate-600">Classical</span>
                        <p className="font-medium">{advantage.classicalTime}</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Quantum</span>
                        <p className="font-medium">{advantage.quantumTime}</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Speedup</span>
                        <p className="font-medium text-green-600">{advantage.speedup}</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Accuracy</span>
                        <span>{advantage.accuracy}%</span>
                      </div>
                      <Progress value={advantage.accuracy} className="h-2" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Active Quantum Simulations
                </CardTitle>
                <CardDescription>Currently running geological quantum simulations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {quantumSimulations.filter(sim => sim.status === "running" || sim.status === "completed").map((simulation) => (
                  <div key={simulation.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{simulation.name}</p>
                        <p className="text-sm text-slate-600">{simulation.geologicalModel}</p>
                      </div>
                      {getStatusBadge(simulation.status)}
                    </div>
                    
                    {simulation.status === "running" && (
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Progress</span>
                          <span>{simulation.progress}%</span>
                        </div>
                        <Progress value={simulation.progress} className="h-2" />
                      </div>
                    )}
                    
                    {simulation.results && (
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div>
                          <span className="text-slate-600">Probability</span>
                          <p className="font-medium">{(simulation.results.depositProbability * 100).toFixed(1)}%</p>
                        </div>
                        <div>
                          <span className="text-slate-600">Confidence</span>
                          <p className="font-medium">{simulation.results.confidence}%</p>
                        </div>
                        <div>
                          <span className="text-slate-600">Time</span>
                          <p className="font-medium">{simulation.results.processingTime}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Quantum Algorithms Tab */}
        <TabsContent value="algorithms" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {quantumAlgorithms.map((algorithm) => (
              <Card key={algorithm.id} className={`border-l-4 ${
                algorithm.status === "active" ? "border-l-green-500" : 
                algorithm.status === "experimental" ? "border-l-blue-500" : 
                algorithm.status === "development" ? "border-l-yellow-500" : 
                "border-l-gray-500"
              }`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      {getAlgorithmIcon(algorithm.type)}
                      {algorithm.name}
                    </CardTitle>
                    {getStatusBadge(algorithm.status)}
                  </div>
                  <CardDescription>{algorithm.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Qubits</span>
                      <p className="font-semibold text-lg">{algorithm.qubits}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Accuracy</span>
                      <p className="font-semibold text-lg">{algorithm.accuracy}%</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Speedup</span>
                      <p className="font-semibold text-lg">{algorithm.speedup}x</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Last Run</span>
                      <p className="font-semibold">{algorithm.lastRun}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Applications:</p>
                    <div className="flex flex-wrap gap-1">
                      {algorithm.applications.map((app) => (
                        <Badge key={app} variant="secondary" className="text-xs">
                          {app.replace("_", " ")}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleConfigureAlgorithm(algorithm.id)}
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Configure
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Play className="w-4 h-4 mr-2" />
                      Run
                    </Button>
                    <Button variant="outline" size="sm">
                      <BarChart3 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Simulations Tab */}
        <TabsContent value="simulations" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {quantumSimulations.map((simulation) => (
              <Card key={simulation.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{simulation.name}</CardTitle>
                    {getStatusBadge(simulation.status)}
                  </div>
                  <CardDescription>{simulation.geologicalModel}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Complexity</span>
                      <div className="mt-1">
                        <Badge className={`text-xs ${getComplexityColor(simulation.complexity)}`}>
                          {simulation.complexity}
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <span className="text-slate-600">Qubits Required</span>
                      <p className="font-medium">{simulation.qubitsRequired}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Runtime</span>
                      <p className="font-medium">{simulation.runtime}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Accuracy</span>
                      <p className="font-medium">{simulation.accuracy > 0 ? `${simulation.accuracy}%` : "N/A"}</p>
                    </div>
                  </div>

                  {simulation.status === "running" && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Simulation Progress</span>
                        <span>{simulation.progress}%</span>
                      </div>
                      <Progress value={simulation.progress} className="h-2" />
                    </div>
                  )}

                  {simulation.results && (
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div className="text-center">
                          <p className="font-bold text-green-900">{(simulation.results.depositProbability * 100).toFixed(1)}%</p>
                          <p className="text-xs text-green-700">Deposit Probability</p>
                        </div>
                        <div className="text-center">
                          <p className="font-bold text-green-900">{simulation.results.confidence}%</p>
                          <p className="text-xs text-green-700">Confidence</p>
                        </div>
                        <div className="text-center">
                          <p className="font-bold text-green-900">{simulation.results.processingTime}</p>
                          <p className="text-xs text-green-700">Processing Time</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    {simulation.status === "queued" && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleRunSimulation(simulation.id)}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Start
                      </Button>
                    )}
                    {simulation.status === "running" && (
                      <Button variant="outline" size="sm" className="flex-1">
                        <Pause className="w-4 h-4" />
                      </Button>
                    )}
                    <Button variant="outline" size="sm" className="flex-1">
                      <Activity className="w-4 h-4 mr-2" />
                      Monitor
                    </Button>
                    <Button variant="outline" size="sm">
                      <BarChart3 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Hardware Tab */}
        <TabsContent value="hardware" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {quantumHardware.map((hardware) => (
              <Card key={hardware.id} className={`border-l-4 ${
                hardware.status === "online" ? "border-l-green-500" : 
                hardware.status === "calibrating" ? "border-l-yellow-500" : 
                "border-l-red-500"
              }`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{hardware.name}</CardTitle>
                    {getStatusBadge(hardware.status)}
                  </div>
                  <CardDescription className="capitalize">{hardware.type.replace("_", " ")} • {hardware.location}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Qubits</span>
                      <p className="font-semibold text-lg">{hardware.qubits}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Fidelity</span>
                      <p className="font-semibold text-lg">{hardware.fidelity}%</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Temperature</span>
                      <p className="font-semibold">{hardware.temperature}K</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Utilization</span>
                      <p className="font-semibold">{hardware.utilization}%</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>System Utilization</span>
                      <span>{hardware.utilization}%</span>
                    </div>
                    <Progress value={hardware.utilization} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Gate Fidelity</span>
                      <span>{hardware.fidelity}%</span>
                    </div>
                    <Progress value={hardware.fidelity} className="h-2" />
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Activity className="w-4 h-4 mr-2" />
                      Monitor
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Settings className="w-4 h-4 mr-2" />
                      Configure
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}