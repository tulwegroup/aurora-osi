"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Activity,
  Zap,
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
  Box,
  BarChart3,
  LineChart,
  Target,
  TrendingUp,
  TrendingDown,
  Thermometer,
  Wind,
  Droplets,
  Mountain,
  Waves,
  TreePine,
  Building,
  Factory,
  Truck,
  Ship,
  Plane,
  Satellite,
  Radio,
  MapPin,
  Gauge,
  Timer,
  Calendar,
  Users,
  Cpu,
  Server,
  Cloud,
  Wifi
} from "lucide-react";

interface DigitalTwin {
  id: string;
  name: string;
  type: "geological" | "environmental" | "urban" | "industrial";
  region: string;
  scale: string;
  accuracy: number;
  updateFrequency: string;
  dataSources: number;
  sensors: number;
  status: "active" | "syncing" | "maintenance" | "error";
  lastSync: string;
  complexity: "low" | "medium" | "high" | "extreme";
}

interface SimulationScenario {
  id: string;
  name: string;
  description: string;
  twinId: string;
  type: "prediction" | "what_if" | "retrospective" | "real_time";
  status: "running" | "completed" | "queued" | "failed";
  progress: number;
  startTime: string;
  parameters: {
    timeHorizon: string;
    variables: string[];
    resolution: string;
  };
  results?: {
    accuracy: number;
    confidence: number;
    keyInsights: string[];
  };
}

interface DataStream {
  id: string;
  source: string;
  type: "sensor" | "satellite" | "drone" | "iot" | "manual";
  dataType: string;
  frequency: string;
  quality: number;
  latency: string;
  status: "active" | "inactive" | "error";
  volume: string;
}

interface EarthSystemModel {
  name: string;
  category: "geosphere" | "hydrosphere" | "atmosphere" | "biosphere" | "anthroposphere";
  variables: string[];
  resolution: string;
  accuracy: number;
  updateRate: string;
  integrationLevel: number;
}

export default function DigitalTwinPlatform() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedTwin, setSelectedTwin] = useState<string | null>(null);

  const digitalTwins: DigitalTwin[] = [
    {
      id: "twin_001",
      name: "Andean Geological Digital Twin",
      type: "geological",
      region: "Andes Mountains - Sector 7",
      scale: "1:10,000",
      accuracy: 94.2,
      updateFrequency: "Real-time",
      dataSources: 47,
      sensors: 1250,
      status: "active",
      lastSync: "2 mins ago",
      complexity: "high"
    },
    {
      id: "twin_002",
      name: "Patagonia Basin Environmental Twin",
      type: "environmental",
      region: "Patagonia Basin",
      scale: "1:25,000",
      accuracy: 91.8,
      updateFrequency: "Hourly",
      dataSources: 23,
      sensors: 890,
      status: "syncing",
      lastSync: "5 mins ago",
      complexity: "medium"
    },
    {
      id: "twin_003",
      name: "Urban Infrastructure Digital Twin",
      type: "urban",
      region: "Mining Complex Alpha",
      scale: "1:5,000",
      accuracy: 96.7,
      updateFrequency: "Real-time",
      dataSources: 156,
      sensors: 3420,
      status: "active",
      lastSync: "1 min ago",
      complexity: "extreme"
    },
    {
      id: "twin_004",
      name: "Industrial Operations Twin",
      type: "industrial",
      region: "Processing Plant Beta",
      scale: "1:1,000",
      accuracy: 98.1,
      updateFrequency: "Real-time",
      dataSources: 89,
      sensors: 2150,
      status: "maintenance",
      lastSync: "2 hours ago",
      complexity: "high"
    }
  ];

  const simulationScenarios: SimulationScenario[] = [
    {
      id: "sim_001",
      name: "Seismic Event Impact Analysis",
      description: "Simulating potential seismic activity on geological formations",
      twinId: "twin_001",
      type: "what_if",
      status: "running",
      progress: 67,
      startTime: "45 mins ago",
      parameters: {
        timeHorizon: "72 hours",
        variables: ["seismic_waves", "ground_stability", "fault_lines", "stress_distribution"],
        resolution: "10m"
      }
    },
    {
      id: "sim_002",
      name: "Climate Change Impact Projection",
      description: "Long-term environmental changes on basin hydrology",
      twinId: "twin_002",
      type: "prediction",
      status: "completed",
      progress: 100,
      startTime: "2 hours ago",
      parameters: {
        timeHorizon: "10 years",
        variables: ["temperature", "precipitation", "evaporation", "groundwater"],
        resolution: "100m"
      },
      results: {
        accuracy: 91.8,
        confidence: 87.3,
        keyInsights: [
          "15% reduction in groundwater levels",
          "2.3°C average temperature increase",
          "Shift in precipitation patterns"
        ]
      }
    },
    {
      id: "sim_003",
      name: "Resource Extraction Optimization",
      description: "Optimizing mining operations based on real-time conditions",
      twinId: "twin_003",
      type: "real_time",
      status: "queued",
      progress: 0,
      startTime: "Queued",
      parameters: {
        timeHorizon: "24 hours",
        variables: ["ore_grade", "equipment_status", "energy_consumption", "transport_routes"],
        resolution: "5m"
      }
    }
  ];

  const dataStreams: DataStream[] = [
    {
      id: "stream_001",
      source: "Seismic Network",
      type: "sensor",
      dataType: "Seismic Data",
      frequency: "100 Hz",
      quality: 96,
      latency: "< 1s",
      status: "active",
      volume: "2.4 GB/hr"
    },
    {
      id: "stream_002",
      source: "Satellite Constellation",
      type: "satellite",
      dataType: "Multispectral Imagery",
      frequency: "6 hours",
      quality: 94,
      latency: "< 5 min",
      status: "active",
      volume: "8.7 GB/hr"
    },
    {
      id: "stream_003",
      source: "Drone Fleet",
      type: "drone",
      dataType: "LiDAR & Photogrammetry",
      frequency: "On-demand",
      quality: 98,
      latency: "< 30 min",
      status: "active",
      volume: "1.2 GB/hr"
    },
    {
      id: "stream_004",
      source: "IoT Sensor Network",
      type: "iot",
      dataType: "Environmental Sensors",
      frequency: "1 Hz",
      quality: 92,
      latency: "< 2s",
      status: "active",
      volume: "0.8 GB/hr"
    }
  ];

  const earthSystemModels: EarthSystemModel[] = [
    {
      name: "Geosphere Model",
      category: "geosphere",
      variables: ["rock_formations", "fault_lines", "mineral_deposits", "seismic_activity"],
      resolution: "10m",
      accuracy: 94.2,
      updateRate: "Real-time",
      integrationLevel: 87
    },
    {
      name: "Hydrosphere Model",
      category: "hydrosphere",
      variables: ["groundwater", "surface_water", "water_quality", "flow_dynamics"],
      resolution: "25m",
      accuracy: 91.8,
      updateRate: "Hourly",
      integrationLevel: 82
    },
    {
      name: "Atmosphere Model",
      category: "atmosphere",
      variables: ["temperature", "pressure", "humidity", "wind_patterns"],
      resolution: "100m",
      accuracy: 89.6,
      updateRate: "Real-time",
      integrationLevel: 78
    },
    {
      name: "Biosphere Model",
      category: "biosphere",
      variables: ["vegetation", "wildlife", "ecosystems", "biodiversity"],
      resolution: "50m",
      accuracy: 86.3,
      updateRate: "Daily",
      integrationLevel: 71
    },
    {
      name: "Anthroposphere Model",
      category: "anthroposphere",
      variables: ["infrastructure", "population", "economic_activity", "resource_use"],
      resolution: "5m",
      accuracy: 96.7,
      updateRate: "Real-time",
      integrationLevel: 93
    }
  ];

  const getTwinIcon = (type: string) => {
    switch (type) {
      case "geological":
        return <Mountain className="w-5 h-5 text-blue-600" />;
      case "environmental":
        return <TreePine className="w-5 h-5 text-green-600" />;
      case "urban":
        return <Building className="w-5 h-5 text-purple-600" />;
      case "industrial":
        return <Factory className="w-5 h-5 text-orange-600" />;
      default:
        return <Globe className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
      case "completed":
        return <Badge className="bg-green-100 text-green-800">{status}</Badge>;
      case "syncing":
      case "running":
        return <Badge className="bg-blue-100 text-blue-800">{status}</Badge>;
      case "maintenance":
      case "queued":
        return <Badge className="bg-yellow-100 text-yellow-800">{status}</Badge>;
      case "error":
      case "failed":
        return <Badge className="bg-red-100 text-red-800">{status}</Badge>;
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "geosphere":
        return <Mountain className="w-4 h-4" />;
      case "hydrosphere":
        return <Droplets className="w-4 h-4" />;
      case "atmosphere":
        return <Wind className="w-4 h-4" />;
      case "biosphere":
        return <TreePine className="w-4 h-4" />;
      case "anthroposphere":
        return <Building className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  const handleStartSimulation = (scenarioId: string) => {
    alert(`Starting simulation ${scenarioId}... This will initialize the digital twin scenario with specified parameters.`);
  };

  const handleSyncTwin = (twinId: string) => {
    alert(`Syncing digital twin ${twinId}... This will synchronize all data sources and update the model.`);
  };

  const handleCreateScenario = () => {
    alert('Opening scenario creation wizard... This will guide you through setting up a new digital twin simulation scenario.');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Digital Twin Platform</h2>
          <p className="text-slate-600">Real-time Earth simulation and modeling capabilities</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Sync All
          </Button>
          <Button size="sm" onClick={handleCreateScenario}>
            <Play className="w-4 h-4 mr-2" />
            New Scenario
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Active Twins</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">2/4</p>
                <p className="text-sm text-green-600 mt-1">50% online</p>
              </div>
              <Globe className="w-8 h-8 text-blue-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Data Points</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">7.7M</p>
                <p className="text-sm text-purple-600 mt-1">per hour</p>
              </div>
              <Database className="w-8 h-8 text-purple-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Model Accuracy</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">93.2%</p>
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
                <p className="text-sm font-medium text-slate-600">Active Sims</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">1</p>
                <p className="text-sm text-orange-600 mt-1">running</p>
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
          <TabsTrigger value="twins">Digital Twins</TabsTrigger>
          <TabsTrigger value="simulations">Simulations</TabsTrigger>
          <TabsTrigger value="earth-systems">Earth Systems</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Digital Twin Status
                </CardTitle>
                <CardDescription>Real-time synchronization and model status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {digitalTwins.map((twin) => (
                  <div key={twin.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getTwinIcon(twin.type)}
                        <span className="font-medium">{twin.name}</span>
                      </div>
                      {getStatusBadge(twin.status)}
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                      <span>Accuracy: {twin.accuracy}%</span>
                      <span>Scale: {twin.scale}</span>
                      <span>Sensors: {twin.sensors}</span>
                      <span>Last sync: {twin.lastSync}</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Model Accuracy</span>
                        <span>{twin.accuracy}%</span>
                      </div>
                      <Progress value={twin.accuracy} className="h-2" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Active Simulations
                </CardTitle>
                <CardDescription>Currently running digital twin scenarios</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {simulationScenarios.filter(sim => sim.status === "running" || sim.status === "completed").map((scenario) => (
                  <div key={scenario.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{scenario.name}</p>
                        <p className="text-sm text-slate-600">{scenario.description}</p>
                      </div>
                      {getStatusBadge(scenario.status)}
                    </div>
                    
                    {scenario.status === "running" && (
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Progress</span>
                          <span>{scenario.progress}%</span>
                        </div>
                        <Progress value={scenario.progress} className="h-2" />
                      </div>
                    )}
                    
                    {scenario.results && (
                      <div className="p-2 bg-green-50 rounded text-xs">
                        <p className="font-medium text-green-900">Results Available</p>
                        <p className="text-green-700">Accuracy: {scenario.results.accuracy}% • Confidence: {scenario.results.confidence}%</p>
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Digital Twins Tab */}
        <TabsContent value="twins" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {digitalTwins.map((twin) => (
              <Card key={twin.id} className={`border-l-4 ${
                twin.status === "active" ? "border-l-green-500" : 
                twin.status === "syncing" ? "border-l-blue-500" : 
                twin.status === "maintenance" ? "border-l-yellow-500" : 
                "border-l-red-500"
              }`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      {getTwinIcon(twin.type)}
                      {twin.name}
                    </CardTitle>
                    {getStatusBadge(twin.status)}
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {twin.region}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Scale</span>
                      <p className="font-medium">{twin.scale}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Accuracy</span>
                      <p className="font-medium">{twin.accuracy}%</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Data Sources</span>
                      <p className="font-medium">{twin.dataSources}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Sensors</span>
                      <p className="font-medium">{twin.sensors.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Update Frequency</span>
                      <span>{twin.updateFrequency}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Complexity</span>
                      <Badge className={`text-xs ${getComplexityColor(twin.complexity)}`}>
                        {twin.complexity}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Model Accuracy</span>
                      <span>{twin.accuracy}%</span>
                    </div>
                    <Progress value={twin.accuracy} className="h-2" />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span>Last sync: {twin.lastSync}</span>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleSyncTwin(twin.id)}
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Sync
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Activity className="w-4 h-4 mr-2" />
                      Monitor
                    </Button>
                    <Button variant="outline" size="sm">
                      <Settings className="w-4 h-4 mr-2" />
                      Config
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
            {simulationScenarios.map((scenario) => (
              <Card key={scenario.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{scenario.name}</CardTitle>
                    {getStatusBadge(scenario.status)}
                  </div>
                  <CardDescription>{scenario.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Type</span>
                      <p className="font-medium capitalize">{scenario.type.replace("_", " ")}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Time Horizon</span>
                      <p className="font-medium">{scenario.parameters.timeHorizon}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Resolution</span>
                      <p className="font-medium">{scenario.parameters.resolution}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Variables</span>
                      <p className="font-medium">{scenario.parameters.variables.length}</p>
                    </div>
                  </div>

                  {scenario.status === "running" && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Simulation Progress</span>
                        <span>{scenario.progress}%</span>
                      </div>
                      <Progress value={scenario.progress} className="h-2" />
                    </div>
                  )}

                  {scenario.results && (
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="font-medium text-green-900">Simulation Results</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                        <div>
                          <span className="text-green-700">Accuracy: {scenario.results.accuracy}%</span>
                        </div>
                        <div>
                          <span className="text-green-700">Confidence: {scenario.results.confidence}%</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs font-medium text-green-900">Key Insights:</p>
                        {scenario.results.keyInsights.map((insight, index) => (
                          <p key={index} className="text-xs text-green-700">• {insight}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    {scenario.status === "queued" && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleStartSimulation(scenario.id)}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Start
                      </Button>
                    )}
                    {scenario.status === "running" && (
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

        {/* Earth Systems Tab */}
        <TabsContent value="earth-systems" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  Earth System Models
                </CardTitle>
                <CardDescription>Integrated multi-domain earth system simulation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {earthSystemModels.map((model) => (
                  <div key={model.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(model.category)}
                        <span className="font-medium">{model.name}</span>
                      </div>
                      <span className="text-sm text-slate-600">{model.accuracy}%</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Integration Level</span>
                        <span>{model.integrationLevel}%</span>
                      </div>
                      <Progress value={model.integrationLevel} className="h-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                      <span>Resolution: {model.resolution}</span>
                      <span>Update: {model.updateRate}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {model.variables.slice(0, 2).map((variable) => (
                        <Badge key={variable} variant="secondary" className="text-xs">
                          {variable.replace("_", " ")}
                        </Badge>
                      ))}
                      {model.variables.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{model.variables.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Data Streams Integration
                </CardTitle>
                <CardDescription>Real-time data ingestion and processing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {dataStreams.map((stream) => (
                  <div key={stream.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{stream.source}</p>
                        <p className="text-sm text-slate-600">{stream.dataType}</p>
                      </div>
                      {getStatusBadge(stream.status)}
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-slate-600">Frequency</span>
                        <p className="font-medium">{stream.frequency}</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Latency</span>
                        <p className="font-medium">{stream.latency}</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Data Quality</span>
                        <span>{stream.quality}%</span>
                      </div>
                      <Progress value={stream.quality} className="h-2" />
                    </div>
                    <div className="text-xs text-slate-600">
                      Volume: {stream.volume}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}