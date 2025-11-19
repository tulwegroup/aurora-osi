"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  FileText, 
  Download, 
  Calendar,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Activity,
  Globe,
  Users,
  Brain,
  Database,
  Filter,
  Eye,
  Share
} from "lucide-react";

interface Report {
  id: string;
  name: string;
  type: "performance" | "progress" | "consortium" | "financial";
  generatedDate: string;
  size: string;
  format: string;
  status: "ready" | "generating" | "failed";
  description: string;
}

export default function ReportsPage() {
  const [activeTab, setActiveTab] = useState("available");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");

  const reports: Report[] = [
    {
      id: "1",
      name: "Monthly Performance Report",
      type: "performance",
      generatedDate: "2025-11-19 16:30",
      size: "2.3 MB",
      format: "PDF",
      status: "ready",
      description: "Comprehensive AI model performance metrics and validation results"
    },
    {
      id: "2",
      name: "Project Progress Summary",
      type: "progress",
      generatedDate: "2025-11-19 14:15",
      size: "1.8 MB",
      format: "Excel",
      status: "ready",
      description: "Milestone tracking, KPI dashboard, and resource utilization"
    },
    {
      id: "3",
      name: "Consortium Analytics",
      type: "consortium",
      generatedDate: "2025-11-19 09:00",
      size: "3.1 MB",
      format: "PDF",
      status: "ready",
      description: "Member contributions, data quality metrics, and regional distribution"
    },
    {
      id: "4",
      name: "Financial Overview",
      type: "financial",
      generatedDate: "2025-11-18 11:45",
      size: "1.2 MB",
      format: "PDF",
      status: "ready",
      description: "Budget utilization, cost analysis, and ROI metrics"
    },
    {
      id: "5",
      name: "Weekly Training Report",
      type: "performance",
      generatedDate: "2025-11-19 17:00",
      size: "0 KB",
      format: "PDF",
      status: "generating",
      description: "Training job status, model accuracy trends, and resource usage"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "performance":
        return <BarChart3 className="w-5 h-5 text-blue-600" />;
      case "progress":
        return <TrendingUp className="w-5 h-5 text-green-600" />;
      case "consortium":
        return <Users className="w-5 h-5 text-purple-600" />;
      case "financial":
        return <Activity className="w-5 h-5 text-orange-600" />;
      default:
        return <FileText className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ready":
        return <Badge className="bg-green-100 text-green-800">Ready</Badge>;
      case "generating":
        return <Badge className="bg-blue-100 text-blue-800">Generating</Badge>;
      case "failed":
        return <Badge className="bg-red-100 text-red-800">Failed</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>;
    }
  };

  const handleGenerateReport = (type: string) => {
    alert(`Generating new ${type} report...`);
  };

  const handleShareReport = (reportId: string) => {
    alert(`Sharing report ${reportId}... This will generate a shareable link.`);
  };

  const handleViewReport = (reportId: string) => {
    alert(`Opening report ${reportId} for viewing...`);
  };

  const handleDownloadReport = (reportId: string, format: string) => {
    alert(`Downloading report ${reportId} as ${format}...`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                <FileText className="w-8 h-8 text-blue-600" />
                Reports & Analytics
              </h1>
              <p className="text-slate-600 mt-2">Generate and download comprehensive platform reports</p>
            </div>
            <div className="flex items-center gap-3">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
            </div>
          </div>
        </div>

        {/* Reports Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="available">Available Reports</TabsTrigger>
            <TabsTrigger value="generate">Generate New</TabsTrigger>
            <TabsTrigger value="schedule">Scheduled Reports</TabsTrigger>
          </TabsList>

          {/* Available Reports Tab */}
          <TabsContent value="available" className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="performance">Performance</SelectItem>
                  <SelectItem value="progress">Progress</SelectItem>
                  <SelectItem value="consortium">Consortium</SelectItem>
                  <SelectItem value="financial">Financial</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {reports.map((report) => (
                <Card key={report.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {getTypeIcon(report.type)}
                        <div>
                          <CardTitle className="text-lg">{report.name}</CardTitle>
                          <CardDescription>{report.description}</CardDescription>
                        </div>
                      </div>
                      {getStatusBadge(report.status)}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-600">Generated</span>
                        <p className="font-medium">{report.generatedDate}</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Size</span>
                        <p className="font-medium">{report.size}</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Format</span>
                        <p className="font-medium">{report.format}</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Type</span>
                        <p className="font-medium capitalize">{report.type}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {report.status === "ready" && (
                          <>
                            <Button size="sm" variant="outline" onClick={() => handleViewReport(report.id)}>
                              <Eye className="w-4 h-4 mr-1" />
                              View
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleShareReport(report.id)}>
                              <Share className="w-4 h-4 mr-1" />
                              Share
                            </Button>
                            <Button size="sm" onClick={() => handleDownloadReport(report.id, report.format)}>
                              <Download className="w-4 h-4 mr-1" />
                              Download
                            </Button>
                          </>
                        )}
                        {report.status === "generating" && (
                          <Button size="sm" disabled>
                            <Activity className="w-4 h-4 mr-1" />
                            Generating...
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Generate New Tab */}
          <TabsContent value="generate" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleGenerateReport("performance")}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    Performance Report
                  </CardTitle>
                  <CardDescription>AI model metrics, accuracy, and validation results</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    Generate Performance Report
                  </Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleGenerateReport("progress")}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    Progress Report
                  </CardTitle>
                  <CardDescription>Project milestones, KPIs, and resource utilization</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    Generate Progress Report
                  </Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleGenerateReport("consortium")}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    Consortium Report
                  </CardTitle>
                  <CardDescription>Member contributions, data quality, and analytics</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    Generate Consortium Report
                  </Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleGenerateReport("financial")}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-orange-600" />
                    Financial Report
                  </CardTitle>
                  <CardDescription>Budget utilization, costs, and ROI analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    Generate Financial Report
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Scheduled Reports Tab */}
          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Scheduled Reports
                </CardTitle>
                <CardDescription>Automated report generation schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-blue-900">Monthly Performance Report</h4>
                        <p className="text-sm text-blue-700">Every 1st of the month at 09:00 UTC</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-green-900">Weekly Progress Summary</h4>
                        <p className="text-sm text-green-700">Every Friday at 17:00 UTC</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-purple-900">Consortium Analytics</h4>
                        <p className="text-sm text-purple-700">Every 1st of quarter at 10:00 UTC</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}