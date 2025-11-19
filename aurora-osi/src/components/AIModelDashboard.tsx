"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Activity,
  TrendingUp,
  TrendingDown,
  BarChart3,
  LineChart,
  Target,
  Zap,
  AlertTriangle,
  CheckCircle,
  Clock,
  Cpu,
  Database,
  Settings,
  Play,
  Pause,
  RotateCcw
} from "lucide-react";

interface ModelPerformance {
  model: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  trainingLoss: number;
  validationLoss: number;
  status: "training" | "validating" | "deployed" | "error";
  lastUpdate: string;
}

interface ValidationMetric {
  name: string;
  value: number;
  target: number;
  status: "good" | "warning" | "critical";
  trend: "up" | "down" | "stable";
}

interface TrainingHistory {
  epoch: number;
  loss: number;
  accuracy: number;
  validationLoss: number;
  validationAccuracy: number;
  timestamp: string;
}

export default function AIModelDashboard() {
  const [activeTab, setActiveTab] = useState("performance");
  const [selectedModel, setSelectedModel] = useState("pigan");

  const handleStartTraining = () => {
    alert('Starting AI model training... This will initiate training pipeline for all active models.');
  };

  const handleConfigure = () => {
    alert('Opening configuration panel... This will open system settings and model parameters.');
  };

  const modelPerformance: ModelPerformance[] = [
    {
      model: "PI-GAN",
      accuracy: 87.3,
      precision: 0.842,
      recall: 0.891,
      f1Score: 0.866,
      trainingLoss: 0.234,
      validationLoss: 0.289,
      status: "deployed",
      lastUpdate: "2 hours ago"
    },
    {
      model: "GNN",
      accuracy: 82.1,
      precision: 0.798,
      recall: 0.854,
      f1Score: 0.825,
      trainingLoss: 0.312,
      validationLoss: 0.367,
      status: "training",
      lastUpdate: "5 mins ago"
    },
    {
      model: "Transformer",
      accuracy: 78.9,
      precision: 0.761,
      recall: 0.823,
      f1Score: 0.791,
      trainingLoss: 0.445,
      validationLoss: 0.512,
      status: "training",
      lastUpdate: "10 mins ago"
    }
  ];

  const validationMetrics: ValidationMetric[] = [
    {
      name: "Deposit Recall Rate",
      value: 85.1,
      target: 85.0,
      status: "good",
      trend: "up"
    },
    {
      name: "False Positive Rate", 
      value: 12.7,
      target: 15.0,
      status: "good",
      trend: "down"
    },
    {
      name: "Spatial Accuracy",
      value: 78.3,
      target: 80.0,
      status: "warning",
      trend: "up"
    },
    {
      name: "Depth Estimation",
      value: 73.2,
      target: 75.0,
      status: "warning",
      trend: "stable"
    },
    {
      name: "Processing Speed",
      value: 92.8,
      target: 90.0,
      status: "good",
      trend: "up"
    },
    {
      name: "Confidence Calibration",
      value: 68.4,
      target: 70.0,
      status: "warning",
      trend: "down"
    }
  ];

  const trainingHistory: TrainingHistory[] = [
    { epoch: 1, loss: 0.892, accuracy: 0.623, validationLoss: 0.934, validationAccuracy: 0.598, timestamp: "2024-01-15 10:00" },
    { epoch: 5, loss: 0.678, accuracy: 0.734, validationLoss: 0.712, validationAccuracy: 0.721, timestamp: "2024-01-15 11:30" },
    { epoch: 10, loss: 0.456, accuracy: 0.812, validationLoss: 0.489, validationAccuracy: 0.798, timestamp: "2024-01-15 13:00" },
    { epoch: 15, loss: 0.334, accuracy: 0.856, validationLoss: 0.367, validationAccuracy: 0.842, timestamp: "2024-01-15 14:30" },
    { epoch: 20, loss: 0.234, accuracy: 0.873, validationLoss: 0.289, validationAccuracy: 0.873, timestamp: "2024-01-15 16:00" }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "deployed":
        return <Badge className="bg-green-100 text-green-800">Deployed</Badge>;
      case "training":
        return <Badge className="bg-blue-100 text-blue-800">Training</Badge>;
      case "validating":
        return <Badge className="bg-yellow-100 text-yellow-800">Validating</Badge>;
      case "error":
        return <Badge className="bg-red-100 text-red-800">Error</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>;
    }
  };

  const getMetricColor = (status: string) => {
    switch (status) {
      case "good":
        return "text-green-600";
      case "warning":
        return "text-yellow-600";
      case "critical":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-600" />;
      case "down":
        return <TrendingDown className="w-4 h-4 text-red-600" />;
      case "stable":
        return <Activity className="w-4 h-4 text-gray-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">AI Model Monitoring</h2>
          <p className="text-slate-600">Real-time model performance and validation metrics</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={handleConfigure}>
            <Settings className="w-4 h-4 mr-2" />
            Configure
          </Button>
          <Button size="sm" onClick={handleStartTraining}>
            <Play className="w-4 h-4 mr-2" />
            Start Training
          </Button>
        </div>
      </div>

      {/* Model Performance Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {modelPerformance.map((model) => (
          <Card key={model.model} className={`border-l-4 ${
            model.status === "deployed" ? "border-l-green-500" : 
            model.status === "training" ? "border-l-blue-500" : 
            "border-l-gray-500"
          }`}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{model.model}</CardTitle>
                {getStatusBadge(model.status)}
              </div>
              <CardDescription>Last updated: {model.lastUpdate}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-slate-600">Accuracy</span>
                  <p className="font-semibold text-lg">{model.accuracy}%</p>
                </div>
                <div>
                  <span className="text-slate-600">F1 Score</span>
                  <p className="font-semibold text-lg">{model.f1Score}</p>
                </div>
                <div>
                  <span className="text-slate-600">Precision</span>
                  <p className="font-semibold">{model.precision}</p>
                </div>
                <div>
                  <span className="text-slate-600">Recall</span>
                  <p className="font-semibold">{model.recall}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Training Loss</span>
                  <span>{model.trainingLoss}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Validation Loss</span>
                  <span>{model.validationLoss}</span>
                </div>
              </div>
              <div className="flex gap-2">
                {model.status === "training" && (
                  <Button variant="ghost" size="sm">
                    <Pause className="w-4 h-4" />
                  </Button>
                )}
                <Button variant="ghost" size="sm">
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="validation">Validation</TabsTrigger>
          <TabsTrigger value="training">Training</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        {/* Performance Tab */}
        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Model Comparison
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {modelPerformance.map((model) => (
                    <div key={model.model} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{model.model}</span>
                        <span className="text-sm text-slate-600">{model.accuracy}%</span>
                      </div>
                      <Progress value={model.accuracy} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Success Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-900">85.1%</p>
                    <p className="text-sm text-green-700">Deposit Recall</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-900">12.7%</p>
                    <p className="text-sm text-blue-700">False Positives</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-2xl font-bold text-purple-900">48 hrs</p>
                    <p className="text-sm text-purple-700">Processing Time</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <p className="text-2xl font-bold text-orange-900">87.3%</p>
                    <p className="text-sm text-orange-700">Overall Accuracy</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Validation Tab */}
        <TabsContent value="validation" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Validation Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {validationMetrics.map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{metric.name}</span>
                        {getTrendIcon(metric.trend)}
                      </div>
                      <span className={`text-sm font-medium ${getMetricColor(metric.status)}`}>
                        {metric.value}%
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress value={metric.value} className="flex-1 h-2" />
                      <span className="text-xs text-slate-500 w-12">Target: {metric.target}%</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  Validation Issues
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                    <span className="font-medium text-yellow-900">Spatial Accuracy Below Target</span>
                  </div>
                  <p className="text-sm text-yellow-700">Current: 78.3%, Target: 80.0%</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingDown className="w-4 h-4 text-orange-600" />
                    <span className="font-medium text-orange-900">Confidence Calibration Declining</span>
                  </div>
                  <p className="text-sm text-orange-700">Needs recalibration on new data</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Activity className="w-4 h-4 text-blue-600" />
                    <span className="font-medium text-blue-900">Depth Estimation Stable</span>
                  </div>
                  <p className="text-sm text-blue-700">Performance within acceptable range</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Training Tab */}
        <TabsContent value="training" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChart className="w-5 h-5" />
                Training History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trainingHistory.map((epoch) => (
                  <div key={epoch.epoch} className="grid grid-cols-5 gap-4 text-sm p-3 bg-slate-50 rounded-lg">
                    <div>
                      <span className="text-slate-600">Epoch</span>
                      <p className="font-medium">{epoch.epoch}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Train Loss</span>
                      <p className="font-medium">{epoch.loss}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Train Acc</span>
                      <p className="font-medium">{(epoch.accuracy * 100).toFixed(1)}%</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Val Loss</span>
                      <p className="font-medium">{epoch.validationLoss}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Val Acc</span>
                      <p className="font-medium">{(epoch.validationAccuracy * 100).toFixed(1)}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Resources Tab */}
        <TabsContent value="resources" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-blue-600" />
                  GPU Usage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">GPU 1</span>
                    <span className="text-sm font-medium">87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">GPU 2</span>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">GPU 3</span>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-green-600" />
                  Memory Usage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">System RAM</span>
                    <span className="text-sm font-medium">68%</span>
                  </div>
                  <Progress value={68} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">GPU Memory</span>
                    <span className="text-sm font-medium">73%</span>
                  </div>
                  <Progress value={73} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Cache</span>
                    <span className="text-sm font-medium">41%</span>
                  </div>
                  <Progress value={41} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-purple-600" />
                  Training Queue
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium text-blue-900">PI-GAN Fine-tuning</p>
                  <p className="text-sm text-blue-700">Est. 2 hours remaining</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900">GNN Training</p>
                  <p className="text-sm text-gray-700">Queued</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900">Transformer Pre-train</p>
                  <p className="text-sm text-gray-700">Waiting for resources</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}