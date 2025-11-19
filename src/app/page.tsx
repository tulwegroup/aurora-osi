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
  Droplet,
  Search,
  Calculator,
  DollarSign
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
      phase: "Phase 1: Oil & Gas Data Connectors",
      progress: 85,
      status: "active",
      timeline: "Months 1-4",
      tasks: ["Schlumberger Integration", "IHS Markit Database", "Satellite Processing"],
      color: "bg-orange-500"
    },
    {
      phase: "Phase 2: Hydrocarbon Feature Engineering",
      progress: 70,
      status: "active", 
      timeline: "Months 3-8",
      tasks: ["Reservoir Quality Indicators", "Source Rock Assessment", "Seal Integrity Metrics"],
      color: "bg-blue-500"
    },
    {
      phase: "Phase 3: Enhanced AI Architecture",
      progress: 55,
      status: "pending",
      timeline: "Months 7-10", 
      tasks: ["Petroleum System Integrator", "Reserve Estimation Engine", "Risk Assessment Module"],
      color: "bg-purple-500"
    },
    {
      phase: "Phase 4: Unified Platform Interface",
      progress: 40,
      status: "pending",
      timeline: "Months 9-12",
      tasks: ["Play-Based Exploration", "Prospect Evaluation", "Portfolio Management"],
      color: "bg-green-500"
    }
  ];

  const keyMetrics = [
    { 
      label: "Oil Prospects Identified", 
      value: "47", 
      change: "+23%", 
      icon: Droplet,
      color: "text-orange-600"
    },
    { 
      label: "Gas Reserves (BCF)", 
      value: "2.8", 
      change: "+45%", 
      icon: Activity,
      color: "text-blue-600"
    },
    { 
      label: "AI Model Accuracy", 
      value: "89.7%", 
      change: "+6.2%", 
      icon: Brain,
      color: "text-purple-600"
    },
    { 
      label: "Basins Analyzed", 
      value: "12", 
      change: "+150%", 
      icon: Globe,
      color: "text-green-600"
    }
  ];

  const activeProjects = [
    {
      name: "Permian Basin Analysis",
      type: "Oil & Gas",
      status: "In Progress",
      progress: 78,
      deadline: "2024-03-15"
    },
    {
      name: "Gulf of Mexico Prospects",
      type: "Deepwater", 
      status: "Active",
      progress: 65,
      deadline: "2024-02-28"
    },
    {
      name: "Eagle Ford Shale Evaluation",
      type: "Unconventional",
      status: "Testing",
      progress: 52,
      deadline: "2024-03-30"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                <Satellite className="w-8 h-8 text-blue-600" />
                Aurora OSI v2.0 - Oil & Gas Edition
              </h1>
              <p className="text-slate-600 mt-2">Unified Platform for Mineral & Hydrocarbon Discovery</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="text-sm px-3 py-1">
                <Activity className="w-4 h-4 mr-1" />
                Live Monitoring
              </Badge>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" onClick={() => router.push('/training')}>
            <Brain className="w-4 h-4 mr-2" />
            Training
          </Button>
          <Button variant="outline" onClick={() => router.push('/reports')}>
            <FileText className="w-4 h-4 mr-2" />
            Reports
          </Button>
          <Button variant="outline" onClick={() => router.push('/settings')}>
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
          <Button variant="outline" onClick={() => router.push('/members')}>
            <Users className="w-4 h-4 mr-2" />
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
          <TabsList className="grid w-full grid-cols-6 bg-slate-100">
            <TabsTrigger value="overview" className="data-[state=active]:bg-white">
              <Eye className="w-4 h-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="visualization" className="data-[state=active]:bg-white">
              <Map className="w-4 h-4 mr-2" />
              3D Visualization
            </TabsTrigger>
            <TabsTrigger value="data-fusion" className="data-[state=active]:bg-white">
              <Layers className="w-4 h-4 mr-2" />
              Data Fusion
            </TabsTrigger>
            <TabsTrigger value="ai-models" className="data-[state=active]:bg-white">
              <Brain className="w-4 h-4 mr-2" />
              AI Models
            </TabsTrigger>
            <TabsTrigger value="consortium" className="data-[state=active]:bg-white">
              <Users className="w-4 h-4 mr-2" />
              Consortium
            </TabsTrigger>
            <TabsTrigger value="progress" className="data-[state=active]:bg-white">
              <BarChart3 className="w-4 h-4 mr-2" />
              Progress
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
                    Active Oil & Gas Projects
                  </CardTitle>
                  <CardDescription>Currently running petroleum exploration projects</CardDescription>
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
                    Oil & Gas System Health
                  </CardTitle>
                  <CardDescription>Platform performance and petroleum system status</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <p className="font-medium text-green-900">Data Connectors</p>
                      <p className="text-sm text-green-700">Operational</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Cpu className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="font-medium text-blue-900">AI Models</p>
                      <p className="text-sm text-blue-700">Training</p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <Droplet className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                      <p className="font-medium text-orange-900">Reservoir Analysis</p>
                      <p className="text-sm text-orange-700">Active</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <BarChart3 className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <p className="font-medium text-purple-900">Risk Assessment</p>
                      <p className="text-sm text-purple-700">Running</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* 3D Visualization Tab */}
          <TabsContent value="visualization" className="space-y-6">
            <div className="h-[800px]">
              <GeologicalVisualization />
            </div>
          </TabsContent>

          {/* Data Fusion Tab */}
          <TabsContent value="data-fusion" className="space-y-6">
            <DataFusionInterface />
          </TabsContent>

          {/* AI Models Tab */}
          <TabsContent value="ai-models" className="space-y-6">
            <AIModelDashboard />
          </TabsContent>

          {/* Consortium Tab */}
          <TabsContent value="consortium" className="space-y-6">
            <ConsortiumManagement />
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progress" className="space-y-6">
            <ProjectProgressDashboard />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}