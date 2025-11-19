"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Play, 
  Pause, 
  Square, 
  RotateCcw,
  Brain,
  Activity,
  Clock,
  CheckCircle,
  AlertTriangle,
  Zap,
  BarChart3,
  Settings
} from "lucide-react";

interface TrainingJob {
  id: string;
  name: string;
  model: string;
  status: "idle" | "running" | "completed" | "failed" | "paused";
  progress: number;
  epoch: number;
  totalEpochs: number;
  startTime: string;
  estimatedCompletion: string;
  metrics: {
    loss: number;
    accuracy: number;
    validationLoss: number;
    validationAccuracy: number;
  };
  resources: {
    gpu: number;
    memory: number;
    storage: number;
  };
}

export default function TrainingPage() {
  const [activeTab, setActiveTab] = useState("jobs");
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const trainingJobs: TrainingJob[] = [
    {
      id: "1",
      name: "PI-GAN 3D Structure Generation",
      model: "pigan",
      status: "running",
      progress: 67,
      epoch: 67,
      totalEpochs: 100,
      startTime: "2024-01-18 14:30",
      estimatedCompletion: "2024-01-18 16:45",
      metrics: {
        loss: 0.234,
        accuracy: 0.873,
        validationLoss: 0.289,
        validationAccuracy: 0.873
      },
      resources: {
        gpu: 87,
        memory: 65,
        storage: 42
      }
    },
    {
      id: "2",
      name: "GNN Geomechanical Properties",
      model: "gnn",
      status: "completed",
      progress: 100,
      epoch: 80,
      totalEpochs: 80,
      startTime: "2024-01-17 09:00",
      estimatedCompletion: "2024-01-17 15:30",
      metrics: {
        loss: 0.312,
        accuracy: 0.821,
        validationLoss: 0.367,
        validationAccuracy: 0.821
      },
      resources: {
        gpu: 0,
        memory: 0,
        storage: 0
      }
    },
    {
      id: "3",
      name: "Transformer Mineral System Integration",
      model: "transformer",
      status: "idle",
      progress: 0,
      epoch: 0,
      totalEpochs: 120,
      startTime: "-",
      estimatedCompletion: "-",
      metrics: {
        loss: 0,
        accuracy: 0,
        validationLoss: 0,
        validationAccuracy: 0
      },
      resources: {
        gpu: 0,
        memory: 0,
        storage: 0
      }
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "running":
        return <Badge className="bg-blue-100 text-blue-800">Running</Badge>;
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case "failed":
        return <Badge className="bg-red-100 text-red-800">Failed</Badge>;
      case "paused":
        return <Badge className="bg-yellow-100 text-yellow-800">Paused</Badge>;
      case "idle":
        return <Badge className="bg-gray-100 text-gray-800">Idle</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "running":
        return <Activity className="w-5 h-5 text-blue-600" />;
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "failed":
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case "paused":
        return <Pause className="w-5 h-5 text-yellow-600" />;
      case "idle":
        return <Square className="w-5 h-5 text-gray-600" />;
      default:
        return null;
    }
  };

  const handleStartTraining = (jobId: string) => {
    alert(`Starting training job ${jobId}...`);
  };

  const handlePauseTraining = (jobId: string) => {
    alert(`Pausing training job ${jobId}...`);
  };

  const handleStopTraining = (jobId: string) => {
    if (confirm('Are you sure you want to stop this training job?')) {
      alert(`Stopping training job ${jobId}...`);
    }
  };

  const handleRestartTraining = (jobId: string) => {
    if (confirm('Are you sure you want to restart this training job?')) {
      alert(`Restarting training job ${jobId}...`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                <Brain className="w-8 h-8 text-blue-600" />
                AI Model Training
              </h1>
              <p className="text-slate-600 mt-2">Manage and monitor AI model training jobs</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline">
                <Settings className="w-4 h-4 mr-2" />
                Configure
              </Button>
              <Button>
                <Play className="w-4 h-4 mr-2" />
                Start New Training
              </Button>
            </div>
          </div>
        </div>

        {/* Training Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="jobs">Training Jobs</TabsTrigger>
            <TabsTrigger value="queue">Queue</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          {/* Training Jobs Tab */}
          <TabsContent value="jobs" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {trainingJobs.map((job) => (
                <Card key={job.id} className={`border-l-4 ${
                  job.status === "running" ? "border-l-blue-500" :
                  job.status === "completed" ? "border-l-green-500" :
                  job.status === "failed" ? "border-l-red-500" :
                  job.status === "paused" ? "border-l-yellow-500" :
                  "border-l-gray-500"
                }`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(job.status)}
                        <div>
                          <CardTitle className="text-lg">{job.name}</CardTitle>
                          <CardDescription>Model: {job.model.toUpperCase()}</CardDescription>
                        </div>
                      </div>
                      {getStatusBadge(job.status)}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Training Progress</span>
                        <span>{job.progress}%</span>
                      </div>
                      <Progress value={job.progress} className="h-2" />
                      <div className="flex justify-between text-xs text-slate-600">
                        <span>Epoch {job.epoch}/{job.totalEpochs}</span>
                        <span>Started: {job.startTime}</span>
                      </div>
                    </div>

                    {job.status === "running" && (
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-slate-600">Loss</span>
                          <p className="font-semibold">{job.metrics.loss}</p>
                        </div>
                        <div>
                          <span className="text-slate-600">Accuracy</span>
                          <p className="font-semibold">{(job.metrics.accuracy * 100).toFixed(1)}%</p>
                        </div>
                        <div>
                          <span className="text-slate-600">Val Loss</span>
                          <p className="font-semibold">{job.metrics.validationLoss}</p>
                        </div>
                        <div>
                          <span className="text-slate-600">Val Accuracy</span>
                          <p className="font-semibold">{(job.metrics.validationAccuracy * 100).toFixed(1)}%</p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-600">
                        <Clock className="w-4 h-4 mr-1" />
                        Est. completion: {job.estimatedCompletion}
                      </div>
                      <div className="flex gap-2">
                        {job.status === "idle" && (
                          <Button size="sm" onClick={() => handleStartTraining(job.id)}>
                            <Play className="w-4 h-4" />
                          </Button>
                        )}
                        {job.status === "running" && (
                          <>
                            <Button size="sm" variant="outline" onClick={() => handlePauseTraining(job.id)}>
                              <Pause className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="destructive" onClick={() => handleStopTraining(job.id)}>
                              <Square className="w-4 h-4" />
                            </Button>
                          </>
                        )}
                        {job.status === "paused" && (
                          <Button size="sm" onClick={() => handleStartTraining(job.id)}>
                            <Play className="w-4 h-4" />
                          </Button>
                        )}
                        {(job.status === "completed" || job.status === "failed") && (
                          <Button size="sm" variant="outline" onClick={() => handleRestartTraining(job.id)}>
                            <RotateCcw className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Queue Tab */}
          <TabsContent value="queue" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Training Queue
                </CardTitle>
                <CardDescription>Jobs waiting to start</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-blue-900">Advanced GNN Training</h4>
                        <p className="text-sm text-blue-700">Queued 5 mins ago</p>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">Queued</Badge>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">Transformer Fine-tuning</h4>
                        <p className="text-sm text-gray-700">Queued 15 mins ago</p>
                      </div>
                      <Badge className="bg-gray-100 text-gray-800">Waiting</Badge>
                    </div>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-yellow-900">Synthetic Data Generation</h4>
                        <p className="text-sm text-yellow-700">Queued 30 mins ago</p>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800">Resources Needed</Badge>
                    </div>
                  </div>
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
                    <Zap className="w-5 h-5 text-blue-600" />
                    GPU Usage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>GPU 1</span>
                        <span className="font-medium">87%</span>
                      </div>
                      <Progress value={87} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>GPU 2</span>
                        <span className="font-medium">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>GPU 3</span>
                        <span className="font-medium">45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-green-600" />
                    Memory Usage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>System RAM</span>
                        <span className="font-medium">68%</span>
                      </div>
                      <Progress value={68} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>GPU Memory</span>
                        <span className="font-medium">73%</span>
                      </div>
                      <Progress value={73} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Cache</span>
                        <span className="font-medium">41%</span>
                      </div>
                      <Progress value={41} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-purple-600" />
                    Storage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Training Data</span>
                        <span className="font-medium">2.3 TB</span>
                      </div>
                      <Progress value={76} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Models</span>
                        <span className="font-medium">845 GB</span>
                      </div>
                      <Progress value={34} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Logs</span>
                        <span className="font-medium">127 GB</span>
                      </div>
                      <Progress value={12} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}