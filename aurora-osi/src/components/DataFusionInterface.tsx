"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Satellite, 
  Brain, 
  Database, 
  Layers,
  Activity,
  Zap,
  BarChart3,
  Settings,
  Play,
  Pause,
  RotateCcw,
  Download,
  Upload,
  Filter,
  TrendingUp,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

interface DataStream {
  id: string;
  name: string;
  type: string;
  status: "active" | "processing" | "completed" | "error";
  progress: number;
  lastUpdate: string;
  dataSize: string;
}

interface ProcessingPipeline {
  id: string;
  name: string;
  stage: string;
  progress: number;
  estimatedTime: string;
  status: "running" | "completed" | "queued" | "error";
}

export default function DataFusionInterface() {
  const [activeTab, setActiveTab] = useState("streams");
  const [selectedRegion, setSelectedRegion] = useState("nevada");

  const handleStartProcessing = () => {
    alert('Starting data processing... This will initiate the multi-sensor data fusion pipeline.');
  };

  const dataStreams: DataStream[] = [
    {
      id: "1",
      name: "Sentinel-2 Multispectral",
      type: "Optical",
      status: "active",
      progress: 100,
      lastUpdate: "2 mins ago",
      dataSize: "2.3 GB"
    },
    {
      id: "2", 
      name: "Sentinel-1 SAR",
      type: "Radar",
      status: "processing",
      progress: 67,
      lastUpdate: "5 mins ago",
      dataSize: "1.8 GB"
    },
    {
      id: "3",
      name: "ASTER Thermal",
      type: "Thermal",
      status: "completed",
      progress: 100,
      lastUpdate: "1 hour ago",
      dataSize: "890 MB"
    },
    {
      id: "4",
      name: "Gravity Survey Data",
      type: "Geophysical",
      status: "active",
      progress: 45,
      lastUpdate: "10 mins ago",
      dataSize: "3.2 GB"
    }
  ];

  const processingPipelines: ProcessingPipeline[] = [
    {
      id: "1",
      name: "Multi-sensor Fusion",
      stage: "Feature Extraction",
      progress: 73,
      estimatedTime: "15 mins",
      status: "running"
    },
    {
      id: "2",
      name: "Dimensionality Reduction",
      stage: "VAE Training",
      progress: 89,
      estimatedTime: "5 mins",
      status: "running"
    },
    {
      id: "3",
      name: "Cross-sensor Registration",
      stage: "Spatial Alignment",
      progress: 100,
      estimatedTime: "Completed",
      status: "completed"
    },
    {
      id: "4",
      name: "Uncertainty Propagation",
      stage: "Queued",
      progress: 0,
      estimatedTime: "Waiting",
      status: "queued"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
      case "running":
        return "bg-green-500";
      case "processing":
        return "bg-blue-500";
      case "completed":
        return "bg-emerald-500";
      case "queued":
        return "bg-yellow-500";
      case "error":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
      case "running":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "processing":
        return <Badge className="bg-blue-100 text-blue-800">Processing</Badge>;
      case "completed":
        return <Badge className="bg-emerald-100 text-emerald-800">Completed</Badge>;
      case "queued":
        return <Badge className="bg-yellow-100 text-yellow-800">Queued</Badge>;
      case "error":
        return <Badge className="bg-red-100 text-red-800">Error</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Data Fusion & Processing</h2>
          <p className="text-slate-600">Multi-sensor data integration and AI processing pipeline</p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={selectedRegion} onValueChange={setSelectedRegion}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nevada">Nevada, USA</SelectItem>
              <SelectItem value="western_australia">Western Australia</SelectItem>
              <SelectItem value="chile">Chile</SelectItem>
              <SelectItem value="canada">Canada</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Upload className="w-4 h-4 mr-2" />
            Upload Data
          </Button>
          <Button size="sm" onClick={handleStartProcessing}>
            <Play className="w-4 h-4 mr-2" />
            Start Processing
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="streams">Data Streams</TabsTrigger>
          <TabsTrigger value="pipeline">Processing Pipeline</TabsTrigger>
          <TabsTrigger value="fusion">Fusion Engine</TabsTrigger>
          <TabsTrigger value="quality">Quality Control</TabsTrigger>
        </TabsList>

        {/* Data Streams Tab */}
        <TabsContent value="streams" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {dataStreams.map((stream) => (
              <Card key={stream.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(stream.status)}`} />
                      <div>
                        <CardTitle className="text-lg">{stream.name}</CardTitle>
                        <CardDescription>{stream.type} • {stream.dataSize}</CardDescription>
                      </div>
                    </div>
                    {getStatusBadge(stream.status)}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Processing Progress</span>
                      <span>{stream.progress}%</span>
                    </div>
                    <Progress value={stream.progress} className="h-2" />
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>Last update: {stream.lastUpdate}</span>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Pause className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <RotateCcw className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Processing Pipeline Tab */}
        <TabsContent value="pipeline" className="space-y-6">
          <div className="space-y-4">
            {processingPipelines.map((pipeline) => (
              <Card key={pipeline.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{pipeline.name}</h3>
                      <p className="text-sm text-slate-600">Current Stage: {pipeline.stage}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-slate-600">ETA: {pipeline.estimatedTime}</span>
                      {getStatusBadge(pipeline.status)}
                    </div>
                  </div>
                  <Progress value={pipeline.progress} className="h-3 mb-2" />
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>{pipeline.progress}% Complete</span>
                    <div className="flex gap-2">
                      {pipeline.status === "running" && (
                        <Button variant="ghost" size="sm">
                          <Pause className="w-4 h-4" />
                        </Button>
                      )}
                      {pipeline.status === "queued" && (
                        <Button variant="ghost" size="sm">
                          <Play className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Fusion Engine Tab */}
        <TabsContent value="fusion" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-blue-600" />
                  Dimensionality Reduction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">VAE Training</span>
                    <span className="text-sm font-medium">89%</span>
                  </div>
                  <Progress value={89} className="h-2" />
                </div>
                <p className="text-sm text-slate-600">
                  512 bands → 32 latent features
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-purple-600" />
                  Feature Selection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Graph-based Selection</span>
                    <span className="text-sm font-medium">76%</span>
                  </div>
                  <Progress value={76} className="h-2" />
                </div>
                <p className="text-sm text-slate-600">
                  SAR polarimetric parameters
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-green-600" />
                  Cross-sensor Fusion
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Spatial Alignment</span>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <p className="text-sm text-slate-600">
                  Multi-resolution registration
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                AI-Powered Feature Engineering
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Alteration Index</h4>
                  <p className="text-sm text-blue-700">Physics-guided mineralogy detection</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-900 mb-2">Structural Complexity</h4>
                  <p className="text-sm text-purple-700">Fault network analysis</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-900 mb-2">Thermal Anomaly</h4>
                  <p className="text-sm text-green-700">Surface temperature variation</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-medium text-orange-900 mb-2">Deformation Pattern</h4>
                  <p className="text-sm text-orange-700">InSAR time-series analysis</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Quality Control Tab */}
        <TabsContent value="quality" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Data Quality Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Spatial Coverage</span>
                    <div className="flex items-center gap-2">
                      <Progress value={95} className="w-20 h-2" />
                      <span className="text-sm font-medium">95%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Temporal Consistency</span>
                    <div className="flex items-center gap-2">
                      <Progress value={87} className="w-20 h-2" />
                      <span className="text-sm font-medium">87%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Sensor Calibration</span>
                    <div className="flex items-center gap-2">
                      <Progress value={92} className="w-20 h-2" />
                      <span className="text-sm font-medium">92%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Noise Level</span>
                    <div className="flex items-center gap-2">
                      <Progress value={78} className="w-20 h-2" />
                      <span className="text-sm font-medium">78%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  Validation Results
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-900">Cross-validation Score</span>
                      <span className="text-sm text-green-700">0.892</span>
                    </div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-900">Test Set Accuracy</span>
                      <span className="text-sm text-blue-700">87.3%</span>
                    </div>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-yellow-900">False Positive Rate</span>
                      <span className="text-sm text-yellow-700">12.7%</span>
                    </div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-purple-900">Recall Rate</span>
                      <span className="text-sm text-purple-700">85.1%</span>
                    </div>
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