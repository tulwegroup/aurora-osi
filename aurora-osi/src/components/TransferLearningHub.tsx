"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Download,
  Upload,
  Zap,
  Target,
  Clock,
  CheckCircle,
  AlertTriangle,
  Play,
  Pause,
  RotateCcw,
  Settings,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Activity,
  Database,
  Cpu,
  Layers,
  GitBranch,
  Rocket,
  Timer
} from "lucide-react";

interface PreTrainedModel {
  id: string;
  name: string;
  domain: string;
  accuracy: number;
  size: string;
  downloadCount: number;
  lastUpdated: string;
  description: string;
  tags: string[];
  deploymentTime: string;
  status: "available" | "downloading" | "deployed" | "error";
}

interface TransferLearningJob {
  id: string;
  sourceModel: string;
  targetDomain: string;
  progress: number;
  status: "running" | "completed" | "queued" | "error";
  startTime: string;
  estimatedCompletion: string;
  performanceGain: number;
  dataUsed: string;
}

interface DeploymentMetrics {
  model: string;
  deploymentTime: string;
  accuracy: number;
  inferenceTime: string;
  memoryUsage: string;
  costEfficiency: number;
}

export default function TransferLearningHub() {
  const [activeTab, setActiveTab] = useState("models");
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  const preTrainedModels: PreTrainedModel[] = [
    {
      id: "seismic_base_v2",
      name: "SeismicBase-v2",
      domain: "Seismic Interpretation",
      accuracy: 94.2,
      size: "2.3GB",
      downloadCount: 1247,
      lastUpdated: "3 days ago",
      description: "Advanced seismic pattern recognition model trained on 10M+ seismic sections",
      tags: ["seismic", "interpretation", "fault-detection"],
      deploymentTime: "< 5 min",
      status: "available"
    },
    {
      id: "geological_transformer",
      name: "GeoTransformer-XL",
      domain: "Multi-Modal Geology",
      accuracy: 91.8,
      size: "4.7GB",
      downloadCount: 892,
      lastUpdated: "1 week ago",
      description: "Transformer model for integrated geological data analysis",
      tags: ["multi-modal", "transformer", "geology"],
      deploymentTime: "< 8 min",
      status: "available"
    },
    {
      id: "mineral_detector",
      name: "MineralDetector-Pro",
      domain: "Mineral Exploration",
      accuracy: 89.6,
      size: "1.8GB",
      downloadCount: 623,
      lastUpdated: "2 weeks ago",
      description: "Specialized model for mineral deposit identification",
      tags: ["minerals", "exploration", "deposits"],
      deploymentTime: "< 3 min",
      status: "deployed"
    },
    {
      id: "reservoir_analyzer",
      name: "ReservoirAnalyzer-3D",
      domain: "Reservoir Characterization",
      accuracy: 92.3,
      size: "3.2GB",
      downloadCount: 445,
      lastUpdated: "5 days ago",
      description: "3D reservoir property prediction and characterization",
      tags: ["reservoir", "3d", "characterization"],
      deploymentTime: "< 6 min",
      status: "available"
    }
  ];

  const transferLearningJobs: TransferLearningJob[] = [
    {
      id: "job_001",
      sourceModel: "SeismicBase-v2",
      targetDomain: "Offshore Exploration",
      progress: 78,
      status: "running",
      startTime: "2 hours ago",
      estimatedCompletion: "45 mins",
      performanceGain: 12.4,
      dataUsed: "250GB"
    },
    {
      id: "job_002",
      sourceModel: "GeoTransformer-XL",
      targetDomain: "Volcanic Systems",
      progress: 100,
      status: "completed",
      startTime: "6 hours ago",
      estimatedCompletion: "Completed",
      performanceGain: 18.7,
      dataUsed: "180GB"
    },
    {
      id: "job_003",
      sourceModel: "MineralDetector-Pro",
      targetDomain: "Rare Earth Elements",
      progress: 0,
      status: "queued",
      startTime: "Queued",
      estimatedCompletion: "2-3 hours",
      performanceGain: 0,
      dataUsed: "0GB"
    }
  ];

  const deploymentMetrics: DeploymentMetrics[] = [
    {
      model: "SeismicBase-v2",
      deploymentTime: "4 min 23 sec",
      accuracy: 94.2,
      inferenceTime: "23ms",
      memoryUsage: "2.1GB",
      costEfficiency: 87
    },
    {
      model: "GeoTransformer-XL",
      deploymentTime: "7 min 45 sec",
      accuracy: 91.8,
      inferenceTime: "31ms",
      memoryUsage: "4.3GB",
      costEfficiency: 79
    },
    {
      model: "MineralDetector-Pro",
      deploymentTime: "2 min 56 sec",
      accuracy: 89.6,
      inferenceTime: "18ms",
      memoryUsage: "1.6GB",
      costEfficiency: 92
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
      case "completed":
        return <Badge className="bg-green-100 text-green-800">{status}</Badge>;
      case "downloading":
      case "running":
        return <Badge className="bg-blue-100 text-blue-800">{status}</Badge>;
      case "deployed":
        return <Badge className="bg-purple-100 text-purple-800">{status}</Badge>;
      case "queued":
        return <Badge className="bg-yellow-100 text-yellow-800">{status}</Badge>;
      case "error":
        return <Badge className="bg-red-100 text-red-800">{status}</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>;
    }
  };

  const handleDeployModel = (modelId: string) => {
    alert(`Deploying model ${modelId}... This will configure the model for rapid deployment in your environment.`);
  };

  const handleStartTransfer = (sourceModel: string, targetDomain: string) => {
    alert(`Starting transfer learning from ${sourceModel} to ${targetDomain}... This will adapt the pre-trained model to your specific domain.`);
  };

  const handleDownloadModel = (modelId: string) => {
    alert(`Downloading model ${modelId}... The model will be available for local deployment and fine-tuning.`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Transfer Learning Hub</h2>
          <p className="text-slate-600">Pre-trained models for rapid deployment and domain adaptation</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Upload className="w-4 h-4 mr-2" />
            Upload Model
          </Button>
          <Button size="sm">
            <Rocket className="w-4 h-4 mr-2" />
            Quick Deploy
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Available Models</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">12</p>
                <p className="text-sm text-green-600 mt-1">+3 this week</p>
              </div>
              <Database className="w-8 h-8 text-blue-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Avg Deployment Time</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">5.2</p>
                <p className="text-sm text-blue-600 mt-1">minutes</p>
              </div>
              <Timer className="w-8 h-8 text-green-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Performance Gain</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">15.3%</p>
                <p className="text-sm text-purple-600 mt-1">avg improvement</p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Active Jobs</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">3</p>
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
          <TabsTrigger value="models">Pre-trained Models</TabsTrigger>
          <TabsTrigger value="transfer">Transfer Learning</TabsTrigger>
          <TabsTrigger value="deployments">Deployments</TabsTrigger>
          <TabsTrigger value="metrics">Performance</TabsTrigger>
        </TabsList>

        {/* Pre-trained Models Tab */}
        <TabsContent value="models" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {preTrainedModels.map((model) => (
              <Card key={model.id} className={`border-l-4 ${
                model.status === "deployed" ? "border-l-purple-500" : 
                model.status === "available" ? "border-l-green-500" : 
                "border-l-gray-500"
              }`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Brain className="w-5 h-5" />
                      {model.name}
                    </CardTitle>
                    {getStatusBadge(model.status)}
                  </div>
                  <CardDescription>{model.domain}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-600">{model.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Accuracy</span>
                      <p className="font-semibold text-lg">{model.accuracy}%</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Model Size</span>
                      <p className="font-semibold">{model.size}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Downloads</span>
                      <p className="font-semibold">{model.downloadCount}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Deploy Time</span>
                      <p className="font-semibold">{model.deploymentTime}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Tags:</p>
                    <div className="flex flex-wrap gap-1">
                      {model.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleDownloadModel(model.id)}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleDeployModel(model.id)}
                    >
                      <Rocket className="w-4 h-4 mr-2" />
                      Deploy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Transfer Learning Tab */}
        <TabsContent value="transfer" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="w-5 h-5" />
                  Active Transfer Learning Jobs
                </CardTitle>
                <CardDescription>Model adaptation and fine-tuning processes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {transferLearningJobs.map((job) => (
                  <div key={job.id} className="space-y-3 p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{job.sourceModel}</p>
                        <p className="text-sm text-slate-600">→ {job.targetDomain}</p>
                      </div>
                      {getStatusBadge(job.status)}
                    </div>
                    
                    {job.status === "running" && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span>Progress</span>
                          <span>{job.progress}%</span>
                        </div>
                        <Progress value={job.progress} className="h-2" />
                      </div>
                    )}
                    
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                      <span>Started: {job.startTime}</span>
                      <span>ETA: {job.estimatedCompletion}</span>
                      <span>Data: {job.dataUsed}</span>
                      {job.performanceGain > 0 && (
                        <span className="text-green-600">+{job.performanceGain}% gain</span>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      {job.status === "running" && (
                        <Button variant="outline" size="sm">
                          <Pause className="w-4 h-4" />
                        </Button>
                      )}
                      {job.status === "queued" && (
                        <Button variant="outline" size="sm">
                          <Play className="w-4 h-4" />
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        <Activity className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Transfer Learning Configuration
                </CardTitle>
                <CardDescription>Configure new transfer learning jobs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="w-4 h-4 text-blue-600" />
                      <span className="font-medium text-blue-900">Source Model Selection</span>
                    </div>
                    <p className="text-sm text-blue-700">Choose from 12 pre-trained models</p>
                  </div>
                  
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-purple-600" />
                      <span className="font-medium text-purple-900">Target Domain</span>
                    </div>
                    <p className="text-sm text-purple-700">Specify your geological domain</p>
                  </div>
                  
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="w-4 h-4 text-green-600" />
                      <span className="font-medium text-green-900">Training Data</span>
                    </div>
                    <p className="text-sm text-green-700">Upload domain-specific datasets</p>
                  </div>
                  
                  <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Settings className="w-4 h-4 text-orange-600" />
                      <span className="font-medium text-orange-900">Hyperparameters</span>
                    </div>
                    <p className="text-sm text-orange-700">Configure learning rate and epochs</p>
                  </div>
                </div>
                
                <Button className="w-full">
                  <GitBranch className="w-4 h-4 mr-2" />
                  Start Transfer Learning
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Deployments Tab */}
        <TabsContent value="deployments" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {deploymentMetrics.map((deployment) => (
              <Card key={deployment.model}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{deployment.model}</CardTitle>
                  <CardDescription>Deployment performance metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-slate-900">{deployment.accuracy}%</p>
                    <p className="text-sm text-slate-600">Model Accuracy</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Deploy Time</span>
                      <p className="font-medium">{deployment.deploymentTime}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Inference</span>
                      <p className="font-medium">{deployment.inferenceTime}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Memory</span>
                      <p className="font-medium">{deployment.memoryUsage}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Efficiency</span>
                      <p className="font-medium">{deployment.costEfficiency}%</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Cost Efficiency</span>
                      <span>{deployment.costEfficiency}%</span>
                    </div>
                    <Progress value={deployment.costEfficiency} className="h-2" />
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Activity className="w-4 h-4 mr-2" />
                      Monitor
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Redeploy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Performance Metrics Tab */}
        <TabsContent value="metrics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Performance Comparison
                </CardTitle>
                <CardDescription>Transfer learning vs training from scratch</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-medium text-green-900">Training Time Reduction</p>
                      <p className="text-sm text-green-700">Average across all models</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-900">78%</p>
                      <p className="text-sm text-green-600">faster</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-medium text-blue-900">Data Requirements</p>
                      <p className="text-sm text-blue-700">Minimum training data needed</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-900">85%</p>
                      <p className="text-sm text-blue-600">less data</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <div>
                      <p className="font-medium text-purple-900">Performance Gain</p>
                      <p className="text-sm text-purple-700">Improvement over baseline</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-purple-900">15.3%</p>
                      <p className="text-sm text-purple-600">avg gain</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Success Metrics
                </CardTitle>
                <CardDescription>Transfer learning success indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-900">94.2%</p>
                    <p className="text-sm text-green-700">Success Rate</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-900">5.2 min</p>
                    <p className="text-sm text-blue-700">Avg Deploy Time</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-2xl font-bold text-purple-900">12.4%</p>
                    <p className="text-sm text-purple-700">Avg Performance Gain</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <p className="text-2xl font-bold text-orange-900">250GB</p>
                    <p className="text-sm text-orange-700">Avg Data Used</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="font-medium text-slate-900">Rapid Prototyping</span>
                    </div>
                    <p className="text-sm text-slate-700">Deploy models in minutes instead of weeks</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="w-4 h-4 text-blue-600" />
                      <span className="font-medium text-slate-900">Cost Efficiency</span>
                    </div>
                    <p className="text-sm text-slate-700">Reduce compute costs by up to 85%</p>
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