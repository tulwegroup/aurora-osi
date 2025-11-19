"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import GeologicalVisualization from "@/components/GeologicalVisualization";
import DataFusionInterface from "@/components/DataFusionInterface";
import AIModelDashboard from "@/components/AIModelDashboard";
import ConsortiumManagement from "@/components/ConsortiumManagement";
import ProjectProgressDashboard from "@/components/ProjectProgressDashboard";
import MultiModalFoundationModels from "@/components/MultiModalFoundationModels";
import TransferLearningHub from "@/components/TransferLearningHub";
import EdgeComputingHub from "@/components/EdgeComputingHub";
import AdvancedExplainabilitySystem from "@/components/AdvancedExplainabilitySystem";
import QuantumComputingHub from "@/components/QuantumComputingHub";
import DigitalTwinPlatform from "@/components/DigitalTwinPlatform";
import AIAssistantInterface from "@/components/AIAssistantInterface";
import AutonomousExplorationSystem from "@/components/AutonomousExplorationSystem";
import { 
  Satellite, 
  Brain, 
  Database, 
  Globe, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  Activity,
  Layers,
  Cpu,
  BarChart3,
  Users,
  Settings,
  Zap,
  Target,
  Shield,
  Eye,
  Map,
  Projector,
  FileText,
  Atom,
  Bot,
  MessageCircle,
  Truck
} from "lucide-react";

export default function OSIDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");

  const handleStartTraining = () => {
    alert('Starting AI model training... This will initiate the training pipeline for all active models.');
  };

  const handleScheduleReview = () => {
    alert('Opening review scheduler... This will open a calendar to schedule project reviews.');
  };

  const handleExportData = () => {
    alert('Exporting data... This will download a comprehensive report of all platform data.');
  };

  const handleConfigure = () => {
    alert('Opening configuration panel... This will open system settings and model parameters.');
  };

  const projectPhases = [
    {
      phase: "Phase 1: Data Ecosystem",
      progress: 75,
      status: "active",
      timeline: "Months 1-4",
      tasks: ["Synthetic Data Engine", "GACD Architecture", "Data Pipeline"],
      color: "bg-blue-500"
    },
    {
      phase: "Phase 2: AI Engine",
      progress: 45,
      status: "active", 
      timeline: "Months 3-8",
      tasks: ["Data Fusion Engine", "Cascaded AI Architecture", "Model Training"],
      color: "bg-purple-500"
    },
    {
      phase: "Phase 3: Validation Framework",
      progress: 20,
      status: "pending",
      timeline: "Months 7-10", 
      tasks: ["Tiered Verification", "Active Learning Loop"],
      color: "bg-orange-500"
    },
    {
      phase: "Phase 4: Platform Integration",
      progress: 10,
      status: "pending",
      timeline: "Months 9-12",
      tasks: ["Cloud Infrastructure", "UI Development", "Deployment"],
      color: "bg-green-500"
    }
  ];

  const keyMetrics = [
    { 
      label: "Quantum Speedup", 
      value: "10.8x", 
      change: "+15.3%", 
      icon: Atom,
      color: "text-purple-600"
    },
    { 
      label: "Edge Processing", 
      value: "18.2 GB/hr", 
      change: "+127%", 
      icon: Bot,
      color: "text-blue-600"
    },
    { 
      label: "AI Accuracy", 
      value: "94.2%", 
      change: "+6.9%", 
      icon: Brain,
      color: "text-green-600"
    },
    { 
      label: "Digital Twin Coverage", 
      value: "5.1M km²", 
      change: "+84%", 
      icon: Globe,
      color: "text-orange-600"
    }
  ];

  const activeProjects = [
    {
      name: "Multi-Modal Foundation Models",
      type: "AI Enhancement",
      status: "In Progress",
      progress: 78,
      deadline: "2024-03-15"
    },
    {
      name: "Quantum Geological Modeling",
      type: "Next-Generation",
      status: "Active",
      progress: 67,
      deadline: "2024-02-28"
    },
    {
      name: "Digital Twin Earth Simulation",
      type: "Real-time Platform",
      status: "Testing",
      progress: 45,
      deadline: "2024-03-30"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-transparent bg-clip-text text-gradient-to-r from-blue-600 to-purple-600 bg-gradient-to-r">
                <Satellite className="w-10 h-10 inline-block mr-3 text-blue-600" />
                Project Aurora 3.0
              </h1>
              <p className="text-slate-300 mt-2 text-lg">Next-Generation OSI Platform with AI & Quantum Capabilities</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="text-sm px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white border-0">
                <Activity className="w-4 h-4 mr-2" />
                Live Monitoring
              </Badge>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" onClick={() => router.push('/training')} className="bg-white/90 hover:bg-white/100 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300">
            <Brain className="w-5 h-5 mr-2 text-blue-600" />
            Training
          </Button>
          <Button variant="outline" onClick={() => router.push('/reports')} className="bg-white/90 hover:bg-white/100 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300">
            <FileText className="w-5 h-5 mr-2 text-purple-600" />
            Reports
          </Button>
          <Button variant="outline" onClick={() => router.push('/settings')} className="bg-white/90 hover:bg-white/100 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300">
            <Settings className="w-5 h-5 mr-2 text-orange-600" />
            Settings
          </Button>
          <Button variant="outline" onClick={() => router.push('/members')} className="bg-white/90 hover:bg-white/100 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300">
            <Users className="w-5 h-5 mr-2 text-green-600" />
            Members
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">{metric.label}</p>
                    <p className="text-2xl font-bold text-slate-900 mt-1">{metric.value}</p>
                    <p className={`text-sm mt-1 ${metric.color}`}>{metric.change}</p>
                  </div>
                  <metric.icon className={`w-8 h-8 ${metric.color} opacity-20`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-8 bg-slate-100">
            <TabsTrigger value="overview" className="data-[state=active]:bg-white">
              <Eye className="w-4 h-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="multimodal" className="data-[state=active]:bg-white">
              <Layers className="w-4 h-4 mr-2" />
              Multi-Modal
            </TabsTrigger>
            <TabsTrigger value="transfer" className="data-[state=active]:bg-white">
              <Brain className="w-4 h-4 mr-2" />
              Transfer
            </TabsTrigger>
            <TabsTrigger value="edge" className="data-[state=active]:bg-white">
              <Bot className="w-4 h-4 mr-2" />
              Edge
            </TabsTrigger>
            <TabsTrigger value="quantum" className="data-[state=active]:bg-white">
              <Atom className="w-4 h-4 mr-2" />
              Quantum
            </TabsTrigger>
            <TabsTrigger value="digital-twin" className="data-[state=active]:bg-white">
              <Globe className="w-4 h-4 mr-2" />
              Digital Twin
            </TabsTrigger>
            <TabsTrigger value="ai-assistant" className="data-[state=active]:bg-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              AI Assistant
            </TabsTrigger>
            <TabsTrigger value="autonomous" className="data-[state=active]:bg-white">
              <Truck className="w-4 h-4 mr-2" />
              Autonomous
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Project Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    Active Projects
                  </CardTitle>
                  <CardDescription>Currently running OSI platform components</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {activeProjects.map((project, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-slate-900">{project.name}</p>
                          <p className="text-sm text-slate-600">{project.type}</p>
                        </div>
                        <Badge variant={project.status === "In Progress" ? "default" : "secondary"}>
                          {project.status}
                        </Badge>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                      <p className="text-xs text-slate-500">Due: {project.deadline}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* System Health */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    System Health
                  </CardTitle>
                  <CardDescription>Platform performance and status</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <p className="font-medium text-green-900">Data Pipeline</p>
                      <p className="text-sm text-green-700">Operational</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Cpu className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="font-medium text-blue-900">AI Models</p>
                      <p className="text-sm text-blue-700">Training</p>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                      <Database className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                      <p className="font-medium text-yellow-900">Storage</p>
                      <p className="text-sm text-yellow-700">78% Used</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <BarChart3 className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <p className="font-medium text-purple-900">Analytics</p>
                      <p className="text-sm text-purple-700">Active</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Multi-Modal Foundation Models Tab */}
          <TabsContent value="multimodal" className="space-y-6">
            <MultiModalFoundationModels />
          </TabsContent>

          {/* Transfer Learning Tab */}
          <TabsContent value="transfer" className="space-y-6">
            <TransferLearningHub />
          </TabsContent>

          {/* Edge Computing Tab */}
          <TabsContent value="edge" className="space-y-6">
            <EdgeComputingHub />
          </TabsContent>

          {/* Quantum Computing Tab */}
          <TabsContent value="quantum" className="space-y-6">
            <QuantumComputingHub />
          </TabsContent>

          {/* Digital Twin Platform Tab */}
          <TabsContent value="digital-twin" className="space-y-6">
            <DigitalTwinPlatform />
          </TabsContent>

          {/* AI Assistant Tab */}
          <TabsContent value="ai-assistant" className="space-y-6">
            <AIAssistantInterface />
          </TabsContent>

          {/* Autonomous Exploration Tab */}
          <TabsContent value="autonomous" className="space-y-6">
            <AutonomousExplorationSystem />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}