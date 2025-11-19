"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp,
  TrendingDown,
  Activity,
  Target,
  Calendar,
  Clock,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  PieChart,
  Users,
  Database,
  Brain,
  Satellite,
  Globe,
  Award,
  Zap,
  Flag,
  Timer,
  DollarSign,
  MapPin,
  FileText
} from "lucide-react";

interface ProjectMilestone {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: "completed" | "in_progress" | "pending" | "delayed";
  progress: number;
  dependencies: string[];
  deliverables: string[];
  budget: number;
  spent: number;
}

interface KPI {
  name: string;
  current: number;
  target: number;
  unit: string;
  trend: "up" | "down" | "stable";
  status: "good" | "warning" | "critical";
  category: "technical" | "financial" | "operational";
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  tasksCompleted: number;
  tasksTotal: number;
  efficiency: number;
  status: "active" | "busy" | "offline";
}

export default function ProjectProgressDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedTimeframe, setSelectedTimeframe] = useState("monthly");

  const handleScheduleReview = () => {
    alert('Opening review scheduler... This will open a calendar to schedule project reviews.');
  };

  const handleExportData = () => {
    alert('Exporting data... This will download a comprehensive report of all project data.');
  };

  const milestones: ProjectMilestone[] = [
    {
      id: "1",
      title: "Oil & Gas Data Connectors",
      description: "Integrate Schlumberger, IHS Markit, and enhanced satellite processing for hydrocarbon data",
      dueDate: "2024-02-28",
      status: "in_progress",
      progress: 85,
      dependencies: ["Cloud Infrastructure Setup"],
      deliverables: ["Schlumberger Integration", "IHS Markit Database", "Hyperion/ASTER Processing"],
      budget: 350000,
      spent: 297500
    },
    {
      id: "2",
      title: "Hydrocarbon Feature Engineering",
      description: "Build geological indices for reservoir quality, source rock, seal integrity, and trap analysis",
      dueDate: "2024-03-15",
      status: "in_progress",
      progress: 70,
      dependencies: ["Data Connectors"],
      deliverables: ["Reservoir Quality Indicators", "Source Rock Assessment", "Seal Integrity Metrics"],
      budget: 275000,
      spent: 192500
    },
    {
      id: "3",
      title: "Enhanced AI Architecture",
      description: "Petroleum System Integrator, Reserve Estimation Engine, and Risk Assessment Module",
      dueDate: "2024-04-30",
      status: "pending",
      progress: 55,
      dependencies: ["Feature Engineering"],
      deliverables: ["Petroleum System Integrator", "Reserve Estimation Engine", "Risk Assessment Module"],
      budget: 420000,
      spent: 231000
    },
    {
      id: "4",
      title: "Unified Platform Interface",
      description: "Play-Based Exploration, Prospect Evaluation, and Portfolio Management workflows",
      dueDate: "2024-05-30",
      status: "pending",
      progress: 40,
      dependencies: ["AI Architecture"],
      deliverables: ["Play-Based Exploration", "Prospect Evaluation", "Portfolio Management"],
      budget: 250000,
      spent: 100000
    }
  ];

  const kpis: KPI[] = [
    {
      name: "Oil Prospects Identified",
      current: 47,
      target: 50,
      unit: "prospects",
      trend: "up",
      status: "good",
      category: "technical"
    },
    {
      name: "Reserve Accuracy",
      current: 89.7,
      target: 90.0,
      unit: "%",
      trend: "up",
      status: "good",
      category: "technical"
    },
    {
      name: "Basin Analysis Speed",
      current: 24,
      target: 24,
      unit: "hrs",
      trend: "stable",
      status: "good",
      category: "operational"
    },
    {
      name: "Budget Utilization",
      current: 71.2,
      target: 75.0,
      unit: "%",
      trend: "up",
      status: "good",
      category: "financial"
    },
    {
      name: "AI Model Performance",
      current: 91.3,
      target: 90.0,
      unit: "%",
      trend: "up",
      status: "good",
      category: "technical"
    },
    {
      name: "Data Sources Integrated",
      current: 8,
      target: 8,
      unit: "sources",
      trend: "up",
      status: "good",
      category: "technical"
    }
  ];

  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "Dr. Sarah Chen",
      role: "Lead Geoscience AI Engineer",
      avatar: "SC",
      tasksCompleted: 23,
      tasksTotal: 28,
      efficiency: 92,
      status: "active"
    },
    {
      id: "2",
      name: "Michael Rodriguez",
      role: "Satellite Data Specialist",
      avatar: "MR",
      tasksCompleted: 18,
      tasksTotal: 22,
      efficiency: 86,
      status: "busy"
    },
    {
      id: "3",
      name: "Emily Watson",
      role: "Cloud Infrastructure Architect",
      avatar: "EW",
      tasksCompleted: 31,
      tasksTotal: 35,
      efficiency: 94,
      status: "active"
    },
    {
      id: "4",
      name: "James Liu",
      role: "Consortium Relationship Manager",
      avatar: "JL",
      tasksCompleted: 12,
      tasksTotal: 18,
      efficiency: 78,
      status: "active"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case "in_progress":
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;
      case "pending":
        return <Badge className="bg-gray-100 text-gray-800">Pending</Badge>;
      case "delayed":
        return <Badge className="bg-red-100 text-red-800">Delayed</Badge>;
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "busy":
        return <Badge className="bg-yellow-100 text-yellow-800">Busy</Badge>;
      case "offline":
        return <Badge className="bg-gray-100 text-gray-800">Offline</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>;
    }
  };

  const getKPIIcon = (category: string) => {
    switch (category) {
      case "technical":
        return <Brain className="w-4 h-4" />;
      case "financial":
        return <DollarSign className="w-4 h-4" />;
      case "operational":
        return <Activity className="w-4 h-4" />;
      default:
        return <Target className="w-4 h-4" />;
    }
  };

  const getKPIColor = (status: string) => {
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
          <h2 className="text-2xl font-bold text-slate-900">Project Progress & Metrics</h2>
          <p className="text-slate-600">Aurora 2.0 implementation tracking and performance dashboard</p>
        </div>
        <div className="flex items-center gap-3">
          <select 
            value={selectedTimeframe} 
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="px-3 py-2 border border-slate-300 rounded-lg text-sm"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
          </select>
          <Button variant="outline" size="sm" onClick={handleExportData}>
            <FileText className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button size="sm" onClick={handleScheduleReview}>
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Review
          </Button>
        </div>
      </div>

      {/* Project Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Overall Progress</p>
                <p className="text-2xl font-bold text-slate-900">68%</p>
                <p className="text-sm text-green-600">On track</p>
              </div>
              <Target className="w-8 h-8 text-blue-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Time Remaining</p>
                <p className="text-2xl font-bold text-slate-900">142 days</p>
                <p className="text-sm text-yellow-600">4.7 months</p>
              </div>
              <Clock className="w-8 h-8 text-orange-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Budget Used</p>
                <p className="text-2xl font-bold text-slate-900">$514.5K</p>
                <p className="text-sm text-blue-600">68.4% of $750K</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Milestones</p>
                <p className="text-2xl font-bold text-slate-900">1/4</p>
                <p className="text-sm text-blue-600">25% completed</p>
              </div>
              <Flag className="w-8 h-8 text-purple-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="kpis">KPIs</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Project Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {milestones.map((milestone) => (
                    <div key={milestone.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${
                            milestone.status === "completed" ? "bg-green-500" :
                            milestone.status === "in_progress" ? "bg-blue-500" :
                            milestone.status === "delayed" ? "bg-red-500" : "bg-gray-500"
                          }`} />
                          <span className="font-medium text-sm">{milestone.title}</span>
                        </div>
                        <span className="text-xs text-slate-600">{milestone.dueDate}</span>
                      </div>
                      <Progress value={milestone.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="w-5 h-5" />
                  Resource Allocation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-900">42%</p>
                      <p className="text-sm text-blue-700">Development</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-2xl font-bold text-green-900">28%</p>
                      <p className="text-sm text-green-700">Research</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <p className="text-2xl font-bold text-purple-900">20%</p>
                      <p className="text-sm text-purple-700">Infrastructure</p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <p className="text-2xl font-bold text-orange-900">10%</p>
                      <p className="text-sm text-orange-700">Operations</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Milestones Tab */}
        <TabsContent value="milestones" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {milestones.map((milestone) => (
              <Card key={milestone.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{milestone.title}</CardTitle>
                    {getStatusBadge(milestone.status)}
                  </div>
                  <CardDescription>{milestone.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{milestone.progress}%</span>
                    </div>
                    <Progress value={milestone.progress} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Due Date</span>
                      <p className="font-medium">{milestone.dueDate}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Budget</span>
                      <p className="font-medium">${milestone.budget.toLocaleString()}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Spent</span>
                      <p className="font-medium">${milestone.spent.toLocaleString()}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Utilization</span>
                      <p className="font-medium">{((milestone.spent / milestone.budget) * 100).toFixed(1)}%</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-700">Key Deliverables:</p>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {milestone.deliverables.map((deliverable, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* KPIs Tab */}
        <TabsContent value="kpis" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {kpis.map((kpi, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-100 rounded-lg">
                        {getKPIIcon(kpi.category)}
                      </div>
                      <div>
                        <h3 className="font-semibold">{kpi.name}</h3>
                        <p className="text-sm text-slate-600 capitalize">{kpi.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getTrendIcon(kpi.trend)}
                      <span className={`text-sm font-medium ${getKPIColor(kpi.status)}`}>
                        {kpi.current}{kpi.unit}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress to Target</span>
                      <span>{((kpi.current / kpi.target) * 100).toFixed(1)}%</span>
                    </div>
                    <Progress 
                      value={Math.min((kpi.current / kpi.target) * 100, 100)} 
                      className="h-2" 
                    />
                    <div className="flex justify-between text-xs text-slate-600">
                      <span>Current: {kpi.current}{kpi.unit}</span>
                      <span>Target: {kpi.target}{kpi.unit}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Team Tab */}
        <TabsContent value="team" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {member.avatar}
                      </div>
                      <div>
                        <h3 className="font-semibold">{member.name}</h3>
                        <p className="text-sm text-slate-600">{member.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusBadge(member.status)}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Task Progress</span>
                        <span>{member.tasksCompleted}/{member.tasksTotal}</span>
                      </div>
                      <Progress 
                        value={(member.tasksCompleted / member.tasksTotal) * 100} 
                        className="h-2" 
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-600">Efficiency</span>
                        <p className="font-semibold">{member.efficiency}%</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Completion Rate</span>
                        <p className="font-semibold">{((member.tasksCompleted / member.tasksTotal) * 100).toFixed(1)}%</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}