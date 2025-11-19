"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Activity,
  Zap,
  MapPin,
  Wifi,
  WifiOff,
  Cpu,
  Battery,
  Thermometer,
  Radio,
  Satellite,
  Truck,
  Plane,
  Ship,
  Gauge,
  Clock,
  CheckCircle,
  AlertTriangle,
  Settings,
  Play,
  Pause,
  Download,
  Upload,
  BarChart3,
  TrendingUp,
  TrendingDown,
  RefreshCw,
  Power,
  Database,
  Server,
  Cloud,
  Router
} from "lucide-react";

interface EdgeDevice {
  id: string;
  name: string;
  type: "field_unit" | "drone" | "vehicle" | "satellite" | "mobile";
  status: "online" | "offline" | "maintenance" | "error";
  location: string;
  batteryLevel?: number;
  cpuUsage: number;
  memoryUsage: number;
  modelVersion: string;
  lastSync: string;
  processingRate: number;
  temperature?: number;
}

interface ProcessingTask {
  id: string;
  deviceId: string;
  taskName: string;
  status: "running" | "completed" | "queued" | "failed";
  progress: number;
  startTime: string;
  processingTime: string;
  dataProcessed: string;
  accuracy: number;
  modelUsed: string;
}

interface EdgeModel {
  name: string;
  version: string;
  size: string;
  accuracy: number;
  inferenceTime: string;
  deploymentStatus: "deployed" | "deploying" | "failed";
  deviceCount: number;
  lastUpdated: string;
  optimizedFor: string[];
}

export default function EdgeComputingHub() {
  const [activeTab, setActiveTab] = useState("devices");
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);

  const edgeDevices: EdgeDevice[] = [
    {
      id: "field_unit_001",
      name: "Field Unit Alpha",
      type: "field_unit",
      status: "online",
      location: "Andes Mountains - Sector 7",
      batteryLevel: 87,
      cpuUsage: 42,
      memoryUsage: 68,
      modelVersion: "v2.3.1",
      lastSync: "2 mins ago",
      processingRate: 1.8,
      temperature: 42
    },
    {
      id: "drone_003",
      name: "Survey Drone Phoenix",
      type: "drone",
      status: "online",
      location: "Patagonia Basin - Flight Zone B",
      batteryLevel: 64,
      cpuUsage: 78,
      memoryUsage: 82,
      modelVersion: "v2.3.1",
      lastSync: "5 mins ago",
      processingRate: 3.2,
      temperature: 38
    },
    {
      id: "vehicle_002",
      name: "Mobile Lab Rover",
      type: "vehicle",
      status: "maintenance",
      location: "Desert Outpost Alpha",
      batteryLevel: 92,
      cpuUsage: 15,
      memoryUsage: 34,
      modelVersion: "v2.2.8",
      lastSync: "1 hour ago",
      processingRate: 0.0,
      temperature: 35
    },
    {
      id: "mobile_005",
      name: "Field Tablet Unit",
      type: "mobile",
      status: "online",
      location: "Coastal Survey Site",
      batteryLevel: 45,
      cpuUsage: 56,
      memoryUsage: 71,
      modelVersion: "v2.3.1",
      lastSync: "1 min ago",
      processingRate: 0.8,
      temperature: 40
    },
    {
      id: "satellite_001",
      name: "Orbital Sensor Node",
      type: "satellite",
      status: "online",
      location: "LEO Orbit - Grid 4B",
      cpuUsage: 89,
      memoryUsage: 76,
      modelVersion: "v2.3.0",
      lastSync: "30 secs ago",
      processingRate: 12.4,
      temperature: -15
    }
  ];

  const processingTasks: ProcessingTask[] = [
    {
      id: "task_001",
      deviceId: "field_unit_001",
      taskName: "Real-time Seismic Analysis",
      status: "running",
      progress: 73,
      startTime: "15 mins ago",
      processingTime: "12 min remaining",
      dataProcessed: "2.4GB",
      accuracy: 94.2,
      modelUsed: "SeismicBase-v2-Edge"
    },
    {
      id: "task_002",
      deviceId: "drone_003",
      taskName: "Magnetic Anomaly Detection",
      status: "running",
      progress: 91,
      startTime: "8 mins ago",
      processingTime: "2 min remaining",
      dataProcessed: "847MB",
      accuracy: 89.7,
      modelUsed: "MagDetector-Edge"
    },
    {
      id: "task_003",
      deviceId: "vehicle_002",
      taskName: "Geochemical Sample Analysis",
      status: "queued",
      progress: 0,
      startTime: "Queued",
      processingTime: "Est. 25 mins",
      dataProcessed: "0MB",
      accuracy: 0,
      modelUsed: "ChemAnalyzer-Edge"
    },
    {
      id: "task_004",
      deviceId: "mobile_005",
      taskName: "Field Classification",
      status: "completed",
      progress: 100,
      startTime: "5 mins ago",
      processingTime: "Completed in 3 mins",
      dataProcessed: "124MB",
      accuracy: 91.3,
      modelUsed: "GeoClassifier-Edge"
    }
  ];

  const edgeModels: EdgeModel[] = [
    {
      name: "SeismicBase-Edge",
      version: "v2.3.1",
      size: "145MB",
      accuracy: 94.2,
      inferenceTime: "23ms",
      deploymentStatus: "deployed",
      deviceCount: 12,
      lastUpdated: "2 days ago",
      optimizedFor: ["field_units", "vehicles", "mobile"]
    },
    {
      name: "MagDetector-Edge",
      version: "v1.8.4",
      size: "89MB",
      accuracy: 89.7,
      inferenceTime: "18ms",
      deploymentStatus: "deployed",
      deviceCount: 8,
      lastUpdated: "1 week ago",
      optimizedFor: ["drones", "mobile"]
    },
    {
      name: "GeoClassifier-Edge",
      version: "v3.1.2",
      size: "67MB",
      accuracy: 91.3,
      inferenceTime: "15ms",
      deploymentStatus: "deploying",
      deviceCount: 15,
      lastUpdated: "3 days ago",
      optimizedFor: ["mobile", "tablets"]
    },
    {
      name: "ChemAnalyzer-Edge",
      version: "v2.0.1",
      size: "203MB",
      accuracy: 87.8,
      inferenceTime: "31ms",
      deploymentStatus: "failed",
      deviceCount: 3,
      lastUpdated: "5 days ago",
      optimizedFor: ["vehicles", "field_units"]
    }
  ];

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case "field_unit":
        return <Server className="w-5 h-5 text-blue-600" />;
      case "drone":
        return <Plane className="w-5 h-5 text-purple-600" />;
      case "vehicle":
        return <Truck className="w-5 h-5 text-green-600" />;
      case "satellite":
        return <Satellite className="w-5 h-5 text-orange-600" />;
      case "mobile":
        return <Smartphone className="w-5 h-5 text-red-600" />;
      default:
        return <Cpu className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "online":
      case "completed":
      case "deployed":
        return <Badge className="bg-green-100 text-green-800">{status}</Badge>;
      case "offline":
      case "failed":
        return <Badge className="bg-red-100 text-red-800">{status}</Badge>;
      case "maintenance":
      case "queued":
        return <Badge className="bg-yellow-100 text-yellow-800">{status}</Badge>;
      case "running":
      case "deploying":
        return <Badge className="bg-blue-100 text-blue-800">{status}</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>;
    }
  };

  const handleDeviceAction = (deviceId: string, action: string) => {
    alert(`Performing ${action} on device ${deviceId}...`);
  };

  const handleDeployModel = (modelName: string) => {
    alert(`Deploying ${modelName} to edge devices...`);
  };

  const handleSyncDevice = (deviceId: string) => {
    alert(`Syncing device ${deviceId} with latest models and data...`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Edge Computing Hub</h2>
          <p className="text-slate-600">On-device processing for real-time geological applications</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Cloud className="w-4 h-4 mr-2" />
            Sync All
          </Button>
          <Button size="sm">
            <Power className="w-4 h-4 mr-2" />
            Deploy Models
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Active Devices</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">4/5</p>
                <p className="text-sm text-green-600 mt-1">80% online</p>
              </div>
              <Router className="w-8 h-8 text-green-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Processing Rate</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">18.2</p>
                <p className="text-sm text-blue-600 mt-1">GB/hr total</p>
              </div>
              <Activity className="w-8 h-8 text-blue-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Avg Latency</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">23</p>
                <p className="text-sm text-purple-600 mt-1">ms inference</p>
              </div>
              <Zap className="w-8 h-8 text-purple-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Active Tasks</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">2</p>
                <p className="text-sm text-orange-600 mt-1">processing</p>
              </div>
              <Cpu className="w-8 h-8 text-orange-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="devices">Edge Devices</TabsTrigger>
          <TabsTrigger value="tasks">Processing Tasks</TabsTrigger>
          <TabsTrigger value="models">Edge Models</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        {/* Edge Devices Tab */}
        <TabsContent value="devices" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {edgeDevices.map((device) => (
              <Card key={device.id} className={`border-l-4 ${
                device.status === "online" ? "border-l-green-500" : 
                device.status === "maintenance" ? "border-l-yellow-500" : 
                "border-l-red-500"
              }`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      {getDeviceIcon(device.type)}
                      {device.name}
                    </CardTitle>
                    {getStatusBadge(device.status)}
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {device.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Model Version</span>
                      <p className="font-medium">{device.modelVersion}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Processing Rate</span>
                      <p className="font-medium">{device.processingRate} GB/hr</p>
                    </div>
                    <div>
                      <span className="text-slate-600">CPU Usage</span>
                      <p className="font-medium">{device.cpuUsage}%</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Memory Usage</span>
                      <p className="font-medium">{device.memoryUsage}%</p>
                    </div>
                  </div>

                  {device.batteryLevel !== undefined && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Battery Level</span>
                        <span>{device.batteryLevel}%</span>
                      </div>
                      <Progress value={device.batteryLevel} className="h-2" />
                    </div>
                  )}

                  {device.temperature !== undefined && (
                    <div className="flex items-center gap-2 text-sm">
                      <Thermometer className="w-4 h-4" />
                      <span>Temperature: {device.temperature}°C</span>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span>Last sync: {device.lastSync}</span>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleSyncDevice(device.id)}
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Sync
                    </Button>
                    <Button variant="outline" size="sm">
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

        {/* Processing Tasks Tab */}
        <TabsContent value="tasks" className="space-y-6">
          <div className="space-y-4">
            {processingTasks.map((task) => (
              <Card key={task.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold">{task.taskName}</h3>
                      <p className="text-sm text-slate-600">Device: {task.deviceId}</p>
                    </div>
                    {getStatusBadge(task.status)}
                  </div>

                  {task.status === "running" && (
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>{task.progress}%</span>
                      </div>
                      <Progress value={task.progress} className="h-2" />
                    </div>
                  )}

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                    <div>
                      <span className="text-slate-600">Started</span>
                      <p className="font-medium">{task.startTime}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Processing Time</span>
                      <p className="font-medium">{task.processingTime}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Data Processed</span>
                      <p className="font-medium">{task.dataProcessed}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Accuracy</span>
                      <p className="font-medium">{task.accuracy > 0 ? `${task.accuracy}%` : "N/A"}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-600">
                      Model: <span className="font-medium">{task.modelUsed}</span>
                    </div>
                    <div className="flex gap-2">
                      {task.status === "running" && (
                        <Button variant="outline" size="sm">
                          <Pause className="w-4 h-4" />
                        </Button>
                      )}
                      {task.status === "queued" && (
                        <Button variant="outline" size="sm">
                          <Play className="w-4 h-4" />
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        <Activity className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Edge Models Tab */}
        <TabsContent value="models" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {edgeModels.map((model) => (
              <Card key={model.name} className={`border-l-4 ${
                model.deploymentStatus === "deployed" ? "border-l-green-500" : 
                model.deploymentStatus === "deploying" ? "border-l-blue-500" : 
                "border-l-red-500"
              }`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{model.name}</CardTitle>
                    {getStatusBadge(model.deploymentStatus)}
                  </div>
                  <CardDescription>Version {model.version} • Updated {model.lastUpdated}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Model Size</span>
                      <p className="font-medium">{model.size}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Inference Time</span>
                      <p className="font-medium">{model.inferenceTime}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Accuracy</span>
                      <p className="font-medium">{model.accuracy}%</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Deployed Devices</span>
                      <p className="font-medium">{model.deviceCount}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Optimized for:</p>
                    <div className="flex flex-wrap gap-1">
                      {model.optimizedFor.map((device) => (
                        <Badge key={device} variant="secondary" className="text-xs">
                          {device.replace("_", " ")}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleDeployModel(model.name)}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Deploy
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      Download
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

        {/* Performance Tab */}
        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gauge className="w-5 h-5" />
                  System Performance
                </CardTitle>
                <CardDescription>Real-time edge computing metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="font-medium text-green-900">Network Connectivity</span>
                    </div>
                    <p className="text-sm text-green-700">4/5 devices online • 95% uptime</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Activity className="w-4 h-4 text-blue-600" />
                      <span className="font-medium text-blue-900">Processing Efficiency</span>
                    </div>
                    <p className="text-sm text-blue-700">87% average CPU utilization</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="w-4 h-4 text-purple-600" />
                      <span className="font-medium text-purple-900">Inference Speed</span>
                    </div>
                    <p className="text-sm text-purple-700">Average 23ms across all models</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Battery className="w-4 h-4 text-orange-600" />
                      <span className="font-medium text-orange-900">Power Management</span>
                    </div>
                    <p className="text-sm text-orange-700">72% average battery level</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Edge vs Cloud Performance
                </CardTitle>
                <CardDescription>Comparison of edge and cloud processing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-900">23ms</p>
                    <p className="text-sm text-green-700">Edge Latency</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-900">340ms</p>
                    <p className="text-sm text-blue-700">Cloud Latency</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-2xl font-bold text-purple-900">94.2%</p>
                    <p className="text-sm text-purple-700">Edge Accuracy</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <p className="text-2xl font-bold text-orange-900">96.1%</p>
                    <p className="text-sm text-orange-700">Cloud Accuracy</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="font-medium">Latency Reduction</span>
                    <span className="text-green-600 font-bold">93.2%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="font-medium">Cost Savings</span>
                    <span className="text-blue-600 font-bold">67%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="font-medium">Data Transfer Reduction</span>
                    <span className="text-purple-600 font-bold">84%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}