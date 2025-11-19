"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Truck, 
  Plane,
  Ship,
  Bot,
  MapPin,
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
  BarChart3,
  Target,
  TrendingUp,
  TrendingDown,
  Thermometer,
  Battery,
  Wifi,
  Radio,
  Satellite,
  Compass,
  Navigation,
  Route,
  Map,
  Globe,
  Mountain,
  Droplets,
  TreePine,
  Factory,
  Cpu,
  Gauge,
  Timer,
  Calendar,
  Users,
  Shield,
  Camera,
  Radar,
  Waves
} from "lucide-react";

interface AutonomousVehicle {
  id: string;
  name: string;
  type: "ground" | "aerial" | "marine" | "submersible";
  status: "active" | "idle" | "maintenance" | "charging" | "error";
  location: string;
  batteryLevel?: number;
  fuelLevel?: number;
  missionProgress: number;
  currentMission: string;
  sensors: string[];
  capabilities: string[];
  lastUpdate: string;
  operator: "autonomous" | "remote" | "manual";
}

interface SurveyMission {
  id: string;
  name: string;
  type: "geological" | "geophysical" | "geochemical" | "environmental";
  status: "planning" | "active" | "completed" | "paused" | "failed";
  priority: "low" | "medium" | "high" | "critical";
  progress: number;
  startTime: string;
  estimatedCompletion: string;
  assignedVehicles: string[];
  area: string;
  objectives: string[];
  dataCollected: string;
  quality: number;
}

interface SamplingSystem {
  id: string;
  name: string;
  type: "drill" | "excavator" | "scooper" | "collector";
  status: "ready" | "sampling" | "processing" | "maintenance";
  location: string;
  depth: number;
  sampleType: string;
  accuracy: number;
  samplesCollected: number;
  processingTime: string;
  quality: number;
}

interface NavigationPath {
  id: string;
  vehicleId: string;
  waypoints: Waypoint[];
  totalDistance: number;
  estimatedTime: string;
  difficulty: "easy" | "moderate" | "difficult" | "extreme";
  obstacles: string[];
  optimization: "time" | "energy" | "coverage" | "safety";
  status: "planned" | "active" | "completed" | "rerouted";
}

interface Waypoint {
  id: string;
  latitude: number;
  longitude: number;
  altitude?: number;
  action: string;
  priority: number;
  estimatedArrival: string;
}

export default function AutonomousExplorationSystem() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);

  const autonomousVehicles: AutonomousVehicle[] = [
    {
      id: "vehicle_001",
      name: "Rover Alpha-7",
      type: "ground",
      status: "active",
      location: "Andes Sector 7 - Grid 4B",
      batteryLevel: 78,
      missionProgress: 67,
      currentMission: "Geological Survey Grid Pattern",
      sensors: ["LiDAR", "Ground Penetrating Radar", "Magnetometer", "Spectrometer"],
      capabilities: ["autonomous_navigation", "sample_collection", "real_time_analysis"],
      lastUpdate: "2 mins ago",
      operator: "autonomous"
    },
    {
      id: "vehicle_002",
      name: "Survey Drone Phoenix",
      type: "aerial",
      status: "active",
      location: "Patagonia Basin - Flight Zone C",
      batteryLevel: 45,
      missionProgress: 89,
      currentMission: "Aerial Magnetic Survey",
      sensors: ["High-Res Camera", "Magnetometer", "LiDAR", "Multispectral"],
      capabilities: ["autonomous_flight", "pattern_survey", "thermal_imaging"],
      lastUpdate: "5 mins ago",
      operator: "autonomous"
    },
    {
      id: "vehicle_003",
      name: "Marine Explorer Triton",
      type: "marine",
      status: "maintenance",
      location: "Coastal Base - Dock 2",
      fuelLevel: 92,
      missionProgress: 0,
      currentMission: "Scheduled Maintenance",
      sensors: ["Sonar", "Sub-bottom Profiler", "Water Sampler", "CTD"],
      capabilities: ["autonomous_navigation", "bathymetric_survey", "water_sampling"],
      lastUpdate: "1 hour ago",
      operator: "remote"
    },
    {
      id: "vehicle_004",
      name: "Submersible Deep-Dive",
      type: "submersible",
      status: "idle",
      location: "Research Vessel - Deployment Bay",
      batteryLevel: 100,
      missionProgress: 0,
      currentMission: "Standby",
      sensors: ["HD Camera", "Manipulator Arms", "Water Sampler", "Pressure Sensor"],
      capabilities: ["deep_diving", "sample_collection", "inspection"],
      lastUpdate: "30 mins ago",
      operator: "manual"
    }
  ];

  const surveyMissions: SurveyMission[] = [
    {
      id: "mission_001",
      name: "Andean Copper Prospect Survey",
      type: "geological",
      status: "active",
      priority: "high",
      progress: 67,
      startTime: "6 hours ago",
      estimatedCompletion: "3 hours",
      assignedVehicles: ["vehicle_001", "vehicle_002"],
      area: "Andes Sector 7 - 25 km²",
      objectives: [
        "Detailed geological mapping",
        "Structural analysis",
        "Geochemical sampling",
        "Geophysical survey"
      ],
      dataCollected: "2.4 TB",
      quality: 94.2
    },
    {
      id: "mission_002",
      name: "Patagonia Basin Resource Assessment",
      type: "geophysical",
      status: "completed",
      priority: "medium",
      progress: 100,
      startTime: "2 days ago",
      estimatedCompletion: "Completed",
      assignedVehicles: ["vehicle_002"],
      area: "Patagonia Basin - 45 km²",
      objectives: [
        "Magnetic anomaly mapping",
        "Gravity survey",
        "Electromagnetic profiling"
      ],
      dataCollected: "1.8 TB",
      quality: 91.7
    },
    {
      id: "mission_003",
      name: "Environmental Impact Monitoring",
      type: "environmental",
      status: "planning",
      priority: "low",
      progress: 0,
      startTime: "Scheduled",
      estimatedCompletion: "2 days",
      assignedVehicles: ["vehicle_003", "vehicle_004"],
      area: "Coastal Zone - 15 km²",
      objectives: [
        "Water quality monitoring",
        "Marine life assessment",
        "Sediment sampling"
      ],
      dataCollected: "0 GB",
      quality: 0
    }
  ];

  const samplingSystems: SamplingSystem[] = [
    {
      id: "sampler_001",
      name: "Auto-Drill System X1",
      type: "drill",
      status: "sampling",
      location: "Andes Sector 7 - Site Alpha",
      depth: 45.2,
      sampleType: "Core Sample",
      accuracy: 98.7,
      samplesCollected: 127,
      processingTime: "12 min/sample",
      quality: 96.3
    },
    {
      id: "sampler_002",
      name: "Robotic Excavator RX-5",
      type: "excavator",
      status: "ready",
      location: "Patagonia Basin - Site Beta",
      depth: 2.8,
      sampleType: "Bulk Sample",
      accuracy: 94.2,
      samplesCollected: 89,
      processingTime: "8 min/sample",
      quality: 92.8
    },
    {
      id: "sampler_003",
      name: "Geochemical Scooter GS-3",
      type: "scooper",
      status: "processing",
      location: "Andes Sector 7 - Site Gamma",
      depth: 0.5,
      sampleType: "Surface Sample",
      accuracy: 91.8,
      samplesCollected: 234,
      processingTime: "3 min/sample",
      quality: 89.4
    }
  ];

  const navigationPaths: NavigationPath[] = [
    {
      id: "path_001",
      vehicleId: "vehicle_001",
      waypoints: [
        { id: "wp001", latitude: -32.456, longitude: -70.234, action: "Start Survey", priority: 1, estimatedArrival: "10:00 AM" },
        { id: "wp002", latitude: -32.467, longitude: -70.245, action: "LiDAR Scan", priority: 2, estimatedArrival: "10:45 AM" },
        { id: "wp003", latitude: -32.478, longitude: -70.256, action: "Sample Collection", priority: 3, estimatedArrival: "11:30 AM" }
      ],
      totalDistance: 12.4,
      estimatedTime: "2 hours 30 mins",
      difficulty: "moderate",
      obstacles: ["Rough terrain", "Steep gradient"],
      optimization: "coverage",
      status: "active"
    },
    {
      id: "path_002",
      vehicleId: "vehicle_002",
      waypoints: [
        { id: "wp004", latitude: -45.123, longitude: -72.456, altitude: 500, action: "Takeoff", priority: 1, estimatedArrival: "2:00 PM" },
        { id: "wp005", latitude: -45.134, longitude: -72.467, altitude: 500, action: "Magnetic Survey", priority: 2, estimatedArrival: "3:30 PM" },
        { id: "wp006", latitude: -45.145, longitude: -72.478, altitude: 500, action: "Landing", priority: 3, estimatedArrival: "5:00 PM" }
      ],
      totalDistance: 28.7,
      estimatedTime: "3 hours",
      difficulty: "easy",
      obstacles: ["Weather restrictions"],
      optimization: "time",
      status: "completed"
    }
  ];

  const getVehicleIcon = (type: string) => {
    switch (type) {
      case "ground":
        return <Truck className="w-5 h-5 text-blue-600" />;
      case "aerial":
        return <Plane className="w-5 h-5 text-purple-600" />;
      case "marine":
        return <Ship className="w-5 h-5 text-green-600" />;
      case "submersible":
        return <Droplets className="w-5 h-5 text-orange-600" />;
      default:
        return <Bot className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
      case "ready":
      case "completed":
        return <Badge className="bg-green-100 text-green-800">{status}</Badge>;
      case "idle":
      case "planning":
      case "paused":
        return <Badge className="bg-yellow-100 text-yellow-800">{status}</Badge>;
      case "maintenance":
      case "failed":
      case "error":
        return <Badge className="bg-red-100 text-red-800">{status}</Badge>;
      case "sampling":
      case "processing":
        return <Badge className="bg-blue-100 text-blue-800">{status}</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "critical":
        return <Badge className="bg-red-100 text-red-800">{priority}</Badge>;
      case "high":
        return <Badge className="bg-orange-100 text-orange-800">{priority}</Badge>;
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800">{priority}</Badge>;
      case "low":
        return <Badge className="bg-green-100 text-green-800">{priority}</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{priority}</Badge>;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "text-green-600 bg-green-50";
      case "moderate":
        return "text-blue-600 bg-blue-50";
      case "difficult":
        return "text-orange-600 bg-orange-50";
      case "extreme":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const handleDeployVehicle = (vehicleId: string) => {
    alert(`Deploying vehicle ${vehicleId}... This will activate the autonomous exploration system and begin mission execution.`);
  };

  const handleStartMission = (missionId: string) => {
    alert(`Starting mission ${missionId}... This will deploy assigned vehicles and begin autonomous survey operations.`);
  };

  const handleOptimizePath = (pathId: string) => {
    alert(`Optimizing navigation path ${pathId}... This will recalculate the route based on current conditions and constraints.`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Autonomous Exploration System</h2>
          <p className="text-slate-600">Self-driving survey and sampling systems for geological exploration</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Route className="w-4 h-4 mr-2" />
            Plan Mission
          </Button>
          <Button size="sm">
            <Play className="w-4 h-4 mr-2" />
            Deploy Fleet
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Active Vehicles</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">2/4</p>
                <p className="text-sm text-green-600 mt-1">50% deployed</p>
              </div>
              <Bot className="w-8 h-8 text-blue-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Mission Progress</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">67%</p>
                <p className="text-sm text-purple-600 mt-1">on track</p>
              </div>
              <Activity className="w-8 h-8 text-purple-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Samples Collected</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">450</p>
                <p className="text-sm text-green-600 mt-1">+27 today</p>
              </div>
              <Database className="w-8 h-8 text-green-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Data Quality</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">93.1%</p>
                <p className="text-sm text-orange-600 mt-1">excellent</p>
              </div>
              <Target className="w-8 h-8 text-orange-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
          <TabsTrigger value="missions">Missions</TabsTrigger>
          <TabsTrigger value="sampling">Sampling</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-5 h-5" />
                  Fleet Status
                </CardTitle>
                <CardDescription>Real-time autonomous vehicle status and locations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {autonomousVehicles.map((vehicle) => (
                  <div key={vehicle.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getVehicleIcon(vehicle.type)}
                        <span className="font-medium">{vehicle.name}</span>
                      </div>
                      {getStatusBadge(vehicle.status)}
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                      <span>Location: {vehicle.location}</span>
                      <span>Mission: {vehicle.missionProgress}%</span>
                      <span>Operator: {vehicle.operator}</span>
                      <span>Update: {vehicle.lastUpdate}</span>
                    </div>
                    {vehicle.batteryLevel && (
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Battery Level</span>
                          <span>{vehicle.batteryLevel}%</span>
                        </div>
                        <Progress value={vehicle.batteryLevel} className="h-2" />
                      </div>
                    )}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Mission Progress</span>
                        <span>{vehicle.missionProgress}%</span>
                      </div>
                      <Progress value={vehicle.missionProgress} className="h-2" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Active Missions
                </CardTitle>
                <CardDescription>Currently running autonomous exploration missions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {surveyMissions.filter(mission => mission.status === "active").map((mission) => (
                  <div key={mission.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{mission.name}</p>
                        <p className="text-sm text-slate-600">{mission.area}</p>
                      </div>
                      {getPriorityBadge(mission.priority)}
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Mission Progress</span>
                        <span>{mission.progress}%</span>
                      </div>
                      <Progress value={mission.progress} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                      <span>Started: {mission.startTime}</span>
                      <span>ETA: {mission.estimatedCompletion}</span>
                      <span>Vehicles: {mission.assignedVehicles.length}</span>
                      <span>Data: {mission.dataCollected}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Vehicles Tab */}
        <TabsContent value="vehicles" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {autonomousVehicles.map((vehicle) => (
              <Card key={vehicle.id} className={`border-l-4 ${
                vehicle.status === "active" ? "border-l-green-500" : 
                vehicle.status === "idle" ? "border-l-yellow-500" : 
                vehicle.status === "maintenance" ? "border-l-orange-500" : 
                "border-l-red-500"
              }`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      {getVehicleIcon(vehicle.type)}
                      {vehicle.name}
                    </CardTitle>
                    {getStatusBadge(vehicle.status)}
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {vehicle.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Type</span>
                      <p className="font-medium capitalize">{vehicle.type}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Operator</span>
                      <p className="font-medium capitalize">{vehicle.operator}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Mission Progress</span>
                      <p className="font-medium">{vehicle.missionProgress}%</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Last Update</span>
                      <p className="font-medium">{vehicle.lastUpdate}</p>
                    </div>
                  </div>

                  {vehicle.batteryLevel && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Battery Level</span>
                        <span>{vehicle.batteryLevel}%</span>
                      </div>
                      <Progress value={vehicle.batteryLevel} className="h-2" />
                    </div>
                  )}

                  {vehicle.fuelLevel && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Fuel Level</span>
                        <span>{vehicle.fuelLevel}%</span>
                      </div>
                      <Progress value={vehicle.fuelLevel} className="h-2" />
                    </div>
                  )}

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Current Mission:</p>
                    <p className="text-sm text-slate-600">{vehicle.currentMission}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Sensors:</p>
                    <div className="flex flex-wrap gap-1">
                      {vehicle.sensors.map((sensor) => (
                        <Badge key={sensor} variant="secondary" className="text-xs">
                          {sensor}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Capabilities:</p>
                    <div className="flex flex-wrap gap-1">
                      {vehicle.capabilities.map((capability) => (
                        <Badge key={capability} variant="outline" className="text-xs">
                          {capability.replace("_", " ")}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleDeployVehicle(vehicle.id)}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Deploy
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Navigation className="w-4 h-4 mr-2" />
                      Navigate
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

        {/* Missions Tab */}
        <TabsContent value="missions" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {surveyMissions.map((mission) => (
              <Card key={mission.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{mission.name}</CardTitle>
                    <div className="flex items-center gap-2">
                      {getPriorityBadge(mission.priority)}
                      {getStatusBadge(mission.status)}
                    </div>
                  </div>
                  <CardDescription>{mission.area}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Type</span>
                      <p className="font-medium capitalize">{mission.type}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Priority</span>
                      <div className="mt-1">{getPriorityBadge(mission.priority)}</div>
                    </div>
                    <div>
                      <span className="text-slate-600">Started</span>
                      <p className="font-medium">{mission.startTime}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">ETA</span>
                      <p className="font-medium">{mission.estimatedCompletion}</p>
                    </div>
                  </div>

                  {mission.status === "active" && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Mission Progress</span>
                        <span>{mission.progress}%</span>
                      </div>
                      <Progress value={mission.progress} className="h-2" />
                    </div>
                  )}

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Objectives:</p>
                    <ul className="space-y-1">
                      {mission.objectives.map((objective, index) => (
                        <li key={index} className="text-sm text-slate-600 flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Assigned Vehicles</span>
                      <p className="font-medium">{mission.assignedVehicles.length}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Data Collected</span>
                      <p className="font-medium">{mission.dataCollected}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Data Quality</span>
                      <p className="font-medium">{mission.quality > 0 ? `${mission.quality}%` : "N/A"}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Status</span>
                      <div className="mt-1">{getStatusBadge(mission.status)}</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {mission.status === "planning" && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleStartMission(mission.id)}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Start
                      </Button>
                    )}
                    {mission.status === "active" && (
                      <Button variant="outline" size="sm" className="flex-1">
                        <Pause className="w-4 h-4" />
                      </Button>
                    )}
                    <Button variant="outline" size="sm" className="flex-1">
                      <Route className="w-4 h-4 mr-2" />
                      Route
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

        {/* Sampling Tab */}
        <TabsContent value="sampling" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Autonomous Sampling Systems
                </CardTitle>
                <CardDescription>Automated sample collection and processing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {samplingSystems.map((system) => (
                  <div key={system.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{system.name}</p>
                        <p className="text-sm text-slate-600">{system.location}</p>
                      </div>
                      {getStatusBadge(system.status)}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-slate-600">Type</span>
                        <p className="font-medium capitalize">{system.type}</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Sample Type</span>
                        <p className="font-medium">{system.sampleType}</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Depth</span>
                        <p className="font-medium">{system.depth}m</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Samples</span>
                        <p className="font-medium">{system.samplesCollected}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-600">Accuracy</span>
                        <p className="font-medium">{system.accuracy}%</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Quality</span>
                        <p className="font-medium">{system.quality}%</p>
                      </div>
                    </div>
                    
                    <div className="text-xs text-slate-600">
                      Processing Time: {system.processingTime}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Navigation className="w-5 h-5" />
                  Navigation Paths
                </CardTitle>
                <CardDescription>Autonomous vehicle routing and optimization</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {navigationPaths.map((path) => (
                  <div key={path.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Path for {path.vehicleId}</p>
                        <p className="text-sm text-slate-600">Distance: {path.totalDistance}km • Time: {path.estimatedTime}</p>
                      </div>
                      {getStatusBadge(path.status)}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-slate-600">Difficulty</span>
                        <div className="mt-1">
                          <Badge className={`text-xs ${getDifficultyColor(path.difficulty)}`}>
                            {path.difficulty}
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <span className="text-slate-600">Optimization</span>
                        <p className="font-medium capitalize">{path.optimization}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Waypoints ({path.waypoints.length}):</p>
                      <div className="space-y-1">
                        {path.waypoints.slice(0, 2).map((waypoint) => (
                          <div key={waypoint.id} className="text-xs text-slate-600 flex items-center gap-2">
                            <MapPin className="w-3 h-3" />
                            <span>{waypoint.action} - {waypoint.estimatedArrival}</span>
                          </div>
                        ))}
                        {path.waypoints.length > 2 && (
                          <div className="text-xs text-slate-500">
                            +{path.waypoints.length - 2} more waypoints
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleOptimizePath(path.id)}
                      >
                        <Route className="w-4 h-4 mr-2" />
                        Optimize
                      </Button>
                      <Button variant="outline" size="sm">
                        <Navigation className="w-4 h-4" />
                      </Button>
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