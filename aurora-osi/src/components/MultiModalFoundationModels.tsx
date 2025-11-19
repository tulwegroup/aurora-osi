"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Layers, 
  Activity,
  Zap,
  Radio,
  Waves,
  Globe,
  BarChart3,
  LineChart,
  TrendingUp,
  TrendingDown,
  Play,
  Settings,
  Database,
  Cpu,
  Eye,
  Filter,
  Download,
  Upload,
  CheckCircle
} from "lucide-react";

interface MultiModalData {
  id: string;
  type: "seismic" | "electromagnetic" | "gravity" | "magnetic";
  name: string;
  status: "processing" | "ready" | "error";
  coverage: string;
  resolution: string;
  lastUpdate: string;
  integrationLevel: number;
}

interface FusionModel {
  name: string;
  accuracy: number;
  dataTypes: string[];
  status: "training" | "deployed" | "testing";
  performance: {
    precision: number;
    recall: number;
    f1Score: number;
  };
  lastTrained: string;
}

interface DataStream {
  source: string;
  dataType: string;
  flowRate: number;
  quality: number;
  status: "active" | "idle" | "error";
}

export default function MultiModalFoundationModels() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedDataTypes, setSelectedDataTypes] = useState<string[]>(["seismic", "electromagnetic"]);

  const multiModalData: MultiModalData[] = [
    {
      id: "seismic_3d",
      type: "seismic",
      name: "3D Seismic Survey - Andes Region",
      status: "ready",
      coverage: "1,250 km²",
      resolution: "25m x 25m x 10m",
      lastUpdate: "2 hours ago",
      integrationLevel: 92
    },
    {
      id: "em_airborne",
      type: "electromagnetic",
      name: "Airborne EM Survey - Basin Alpha",
      status: "processing",
      coverage: "3,400 km²",
      resolution: "50m x 50m",
      lastUpdate: "30 mins ago",
      integrationLevel: 78
    },
    {
      id: "gravity_satellite",
      type: "gravity",
      name: "Satellite Gravimetry - Global Coverage",
      status: "ready",
      coverage: "Global",
      resolution: "5km x 5km",
      lastUpdate: "1 day ago",
      integrationLevel: 85
    },
    {
      id: "magnetic_drone",
      type: "magnetic",
      name: "Drone Magnetic Survey - Target Zone",
      status: "ready",
      coverage: "450 km²",
      resolution: "10m x 10m",
      lastUpdate: "6 hours ago",
      integrationLevel: 88
    }
  ];

  const fusionModels: FusionModel[] = [
    {
      name: "Seismic-EM Fusion Network",
      accuracy: 94.2,
      dataTypes: ["Seismic", "Electromagnetic", "Gravity"],
      status: "deployed",
      performance: {
        precision: 0.938,
        recall: 0.947,
        f1Score: 0.942
      },
      lastTrained: "3 days ago"
    },
    {
      name: "Multi-Physics Transformer",
      accuracy: 91.8,
      dataTypes: ["Seismic", "EM", "Magnetic", "Gravity"],
      status: "training",
      performance: {
        precision: 0.915,
        recall: 0.921,
        f1Score: 0.918
      },
      lastTrained: "1 week ago"
    },
    {
      name: "Cross-Domain GAN",
      accuracy: 89.6,
      dataTypes: ["Seismic", "Electromagnetic"],
      status: "testing",
      performance: {
        precision: 0.891,
        recall: 0.901,
        f1Score: 0.896
      },
      lastTrained: "2 weeks ago"
    }
  ];

  const dataStreams: DataStream[] = [
    {
      source: "Satellite Feed",
      dataType: "Gravimetry",
      flowRate: 2.4,
      quality: 96,
      status: "active"
    },
    {
      source: "Ground Sensors",
      dataType: "Seismic",
      flowRate: 8.7,
      quality: 94,
      status: "active"
    },
    {
      source: "Drone Fleet",
      dataType: "Magnetic",
      flowRate: 1.2,
      quality: 91,
      status: "active"
    },
    {
      source: "Aircraft Survey",
      dataType: "Electromagnetic",
      flowRate: 3.8,
      quality: 89,
      status: "idle"
    }
  ];

  const getDataIcon = (type: string) => {
    switch (type) {
      case "seismic":
        return <Waves className="w-5 h-5 text-blue-600" />;
      case "electromagnetic":
        return <Radio className="w-5 h-5 text-purple-600" />;
      case "gravity":
        return <Globe className="w-5 h-5 text-green-600" />;
      case "magnetic":
        return <Zap className="w-5 h-5 text-orange-600" />;
      default:
        return <Database className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ready":
      case "deployed":
      case "active":
        return <Badge className="bg-green-100 text-green-800">{status}</Badge>;
      case "processing":
      case "training":
        return <Badge className="bg-blue-100 text-blue-800">{status}</Badge>;
      case "testing":
        return <Badge className="bg-yellow-100 text-yellow-800">{status}</Badge>;
      case "error":
        return <Badge className="bg-red-100 text-red-800">{status}</Badge>;
      case "idle":
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>;
    }
  };

  const handleStartFusion = () => {
    alert('Starting multi-modal data fusion... This will integrate all selected data types using advanced fusion algorithms.');
  };

  const handleConfigureModel = () => {
    alert('Opening model configuration... This will allow you to adjust fusion parameters and model architecture.');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Multi-Modal Foundation Models</h2>
          <p className="text-slate-600">Integrate seismic, electromagnetic, and other geophysical data sources</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={handleConfigureModel}>
            <Settings className="w-4 h-4 mr-2" />
            Configure
          </Button>
          <Button size="sm" onClick={handleStartFusion}>
            <Layers className="w-4 h-4 mr-2" />
            Start Fusion
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Data Sources</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">4</p>
                <p className="text-sm text-green-600 mt-1">Active</p>
              </div>
              <Database className="w-8 h-8 text-blue-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Fusion Accuracy</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">94.2%</p>
                <p className="text-sm text-green-600 mt-1">+3.1%</p>
              </div>
              <Layers className="w-8 h-8 text-purple-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Coverage Area</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">5.1M</p>
                <p className="text-sm text-blue-600 mt-1">km²</p>
              </div>
              <Globe className="w-8 h-8 text-green-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Processing Rate</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">16.1</p>
                <p className="text-sm text-purple-600 mt-1">GB/hr</p>
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
          <TabsTrigger value="data-sources">Data Sources</TabsTrigger>
          <TabsTrigger value="fusion-models">Fusion Models</TabsTrigger>
          <TabsTrigger value="data-streams">Live Streams</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  Data Integration Status
                </CardTitle>
                <CardDescription>Multi-modal data fusion pipeline overview</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {multiModalData.map((data) => (
                  <div key={data.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getDataIcon(data.type)}
                        <span className="font-medium">{data.name}</span>
                      </div>
                      {getStatusBadge(data.status)}
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Integration Level</span>
                        <span>{data.integrationLevel}%</span>
                      </div>
                      <Progress value={data.integrationLevel} className="h-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                      <span>Coverage: {data.coverage}</span>
                      <span>Resolution: {data.resolution}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Fusion Performance
                </CardTitle>
                <CardDescription>Model accuracy across different data combinations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fusionModels.map((model) => (
                    <div key={model.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{model.name}</span>
                        <span className="text-sm text-slate-600">{model.accuracy}%</span>
                      </div>
                      <Progress value={model.accuracy} className="h-2" />
                      <div className="flex flex-wrap gap-1">
                        {model.dataTypes.map((type) => (
                          <Badge key={type} variant="outline" className="text-xs">
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Data Sources Tab */}
        <TabsContent value="data-sources" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {multiModalData.map((data) => (
              <Card key={data.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      {getDataIcon(data.type)}
                      {data.name}
                    </CardTitle>
                    {getStatusBadge(data.status)}
                  </div>
                  <CardDescription>Last updated: {data.lastUpdate}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Coverage</span>
                      <p className="font-medium">{data.coverage}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Resolution</span>
                      <p className="font-medium">{data.resolution}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Integration Level</span>
                      <span>{data.integrationLevel}%</span>
                    </div>
                    <Progress value={data.integrationLevel} className="h-2" />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Process
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Fusion Models Tab */}
        <TabsContent value="fusion-models" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {fusionModels.map((model) => (
              <Card key={model.name} className={`border-l-4 ${
                model.status === "deployed" ? "border-l-green-500" : 
                model.status === "training" ? "border-l-blue-500" : 
                "border-l-yellow-500"
              }`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{model.name}</CardTitle>
                    {getStatusBadge(model.status)}
                  </div>
                  <CardDescription>Last trained: {model.lastTrained}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-slate-900">{model.accuracy}%</p>
                    <p className="text-sm text-slate-600">Accuracy</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm text-center">
                    <div>
                      <p className="font-medium">{(model.performance.precision * 100).toFixed(1)}%</p>
                      <p className="text-xs text-slate-600">Precision</p>
                    </div>
                    <div>
                      <p className="font-medium">{(model.performance.recall * 100).toFixed(1)}%</p>
                      <p className="text-xs text-slate-600">Recall</p>
                    </div>
                    <div>
                      <p className="font-medium">{(model.performance.f1Score * 100).toFixed(1)}%</p>
                      <p className="text-xs text-slate-600">F1 Score</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Data Types:</p>
                    <div className="flex flex-wrap gap-1">
                      {model.dataTypes.map((type) => (
                        <Badge key={type} variant="secondary" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Play className="w-4 h-4 mr-2" />
                      Train
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      Evaluate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Data Streams Tab */}
        <TabsContent value="data-streams" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Live Data Streams
                </CardTitle>
                <CardDescription>Real-time data ingestion and processing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {dataStreams.map((stream, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{stream.source}</p>
                        <p className="text-sm text-slate-600">{stream.dataType}</p>
                      </div>
                      {getStatusBadge(stream.status)}
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-600">Flow Rate</span>
                        <p className="font-medium">{stream.flowRate} GB/hr</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Quality</span>
                        <p className="font-medium">{stream.quality}%</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Data Quality</span>
                        <span>{stream.quality}%</span>
                      </div>
                      <Progress value={stream.quality} className="h-2" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="w-5 h-5" />
                  Processing Pipeline
                </CardTitle>
                <CardDescription>Real-time fusion and analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="font-medium text-green-900">Data Preprocessing</span>
                    </div>
                    <p className="text-sm text-green-700">Running at 98% efficiency</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Activity className="w-4 h-4 text-blue-600" />
                      <span className="font-medium text-blue-900">Feature Extraction</span>
                    </div>
                    <p className="text-sm text-blue-700">Processing 4 data types</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Layers className="w-4 h-4 text-purple-600" />
                      <span className="font-medium text-purple-900">Multi-Modal Fusion</span>
                    </div>
                    <p className="text-sm text-purple-700">Active with 3 models</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-orange-600" />
                      <span className="font-medium text-orange-900">Real-time Inference</span>
                    </div>
                    <p className="text-sm text-orange-700">16.1 GB/hr throughput</p>
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