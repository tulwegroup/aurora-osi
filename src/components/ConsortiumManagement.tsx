"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Users, 
  Database,
  Globe,
  Shield,
  Upload,
  Download,
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  AlertTriangle,
  Clock,
  BarChart3,
  TrendingUp,
  Activity,
  Lock,
  Unlock,
  FileText,
  Map,
  Calendar
} from "lucide-react";

interface ConsortiumMember {
  id: string;
  name: string;
  tier: "founding" | "premium" | "standard";
  joinDate: string;
  depositsContributed: number;
  dataVolume: string;
  status: "active" | "pending" | "suspended";
  contact: string;
  region: string;
}

interface Deposit {
  id: string;
  name: string;
  type: string;
  location: string;
  contributor: string;
  dateAdded: string;
  status: "verified" | "pending" | "rejected";
  confidence: number;
  dataCompleteness: number;
  lastValidated: string;
}

interface DataContribution {
  id: string;
  contributor: string;
  type: string;
  volume: string;
  date: string;
  status: "processing" | "completed" | "error";
  quality: number;
}

export default function ConsortiumManagement() {
  const [activeTab, setActiveTab] = useState("members");
  const [selectedTier, setSelectedTier] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");

  const handleAddMember = () => {
    alert('Opening member registration form... This will open a form to add new consortium members.');
  };

  const handleExportData = () => {
    alert('Exporting consortium data... This will download a comprehensive report of all consortium data.');
  };

  const consortiumMembers: ConsortiumMember[] = [
    {
      id: "1",
      name: "Global Mining Corp",
      tier: "founding",
      joinDate: "2023-06-15",
      depositsContributed: 23,
      dataVolume: "12.4 TB",
      status: "active",
      contact: "john@globalmining.com",
      region: "North America"
    },
    {
      id: "2",
      name: "Australian Minerals Ltd",
      tier: "premium",
      joinDate: "2023-08-22",
      depositsContributed: 18,
      dataVolume: "8.7 TB",
      status: "active",
      contact: "sarah@ausminerals.com",
      region: "Australia"
    },
    {
      id: "3",
      name: "Chile Exploration Partners",
      tier: "standard",
      joinDate: "2023-10-10",
      depositsContributed: 12,
      dataVolume: "5.2 TB",
      status: "active",
      contact: "carlos@chileexp.com",
      region: "South America"
    },
    {
      id: "4",
      name: "African Resources Group",
      tier: "premium",
      joinDate: "2023-11-05",
      depositsContributed: 15,
      dataVolume: "7.8 TB",
      status: "pending",
      contact: "ama@africanresources.com",
      region: "Africa"
    }
  ];

  const deposits: Deposit[] = [
    {
      id: "1",
      name: "Carlin-type Deposit A",
      type: "Carlin-type",
      location: "Nevada, USA",
      contributor: "Global Mining Corp",
      dateAdded: "2024-01-15",
      status: "verified",
      confidence: 0.92,
      dataCompleteness: 95,
      lastValidated: "2024-01-18"
    },
    {
      id: "2",
      name: "Orogenic Gold B",
      type: "Orogenic",
      location: "Western Australia",
      contributor: "Australian Minerals Ltd",
      dateAdded: "2024-01-12",
      status: "verified",
      confidence: 0.87,
      dataCompleteness: 88,
      lastValidated: "2024-01-16"
    },
    {
      id: "3",
      name: "Porphyry System C",
      type: "Porphyry",
      location: "Chile",
      contributor: "Chile Exploration Partners",
      dateAdded: "2024-01-10",
      status: "pending",
      confidence: 0.74,
      dataCompleteness: 72,
      lastValidated: "2024-01-10"
    },
    {
      id: "4",
      name: "VMS Deposit D",
      type: "VMS",
      location: "Canada",
      contributor: "Global Mining Corp",
      dateAdded: "2024-01-08",
      status: "verified",
      confidence: 0.89,
      dataCompleteness: 91,
      lastValidated: "2024-01-14"
    }
  ];

  const dataContributions: DataContribution[] = [
    {
      id: "1",
      contributor: "Global Mining Corp",
      type: "Geophysical Survey",
      volume: "2.3 GB",
      date: "2024-01-18 14:30",
      status: "completed",
      quality: 94
    },
    {
      id: "2",
      contributor: "Australian Minerals Ltd",
      type: "Drill Hole Data",
      volume: "1.8 GB",
      date: "2024-01-18 13:15",
      status: "processing",
      quality: 0
    },
    {
      id: "3",
      contributor: "Chile Exploration Partners",
      type: "Geochemical Analysis",
      volume: "890 MB",
      date: "2024-01-18 11:45",
      status: "completed",
      quality: 87
    }
  ];

  const getTierBadge = (tier: string) => {
    switch (tier) {
      case "founding":
        return <Badge className="bg-purple-100 text-purple-800">Founding</Badge>;
      case "premium":
        return <Badge className="bg-blue-100 text-blue-800">Premium</Badge>;
      case "standard":
        return <Badge className="bg-gray-100 text-gray-800">Standard</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
      case "verified":
      case "completed":
        return <Badge className="bg-green-100 text-green-800">{status}</Badge>;
      case "pending":
      case "processing":
        return <Badge className="bg-yellow-100 text-yellow-800">{status}</Badge>;
      case "suspended":
      case "rejected":
      case "error":
        return <Badge className="bg-red-100 text-red-800">{status}</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>;
    }
  };

  const getQualityColor = (quality: number) => {
    if (quality >= 90) return "text-green-600";
    if (quality >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Consortium Management</h2>
          <p className="text-slate-600">Global Analog Consortium Database (GACD) Administration</p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={selectedRegion} onValueChange={setSelectedRegion}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              <SelectItem value="north_america">North America</SelectItem>
              <SelectItem value="south_america">South America</SelectItem>
              <SelectItem value="australia">Australia</SelectItem>
              <SelectItem value="africa">Africa</SelectItem>
              <SelectItem value="europe">Europe</SelectItem>
              <SelectItem value="asia">Asia</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" onClick={handleExportData}>
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
          <Button size="sm" onClick={handleAddMember}>
            <Plus className="w-4 h-4 mr-2" />
            Add Member
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Total Members</p>
                <p className="text-2xl font-bold text-slate-900">24</p>
                <p className="text-sm text-green-600">+3 this month</p>
              </div>
              <Users className="w-8 h-8 text-blue-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Total Deposits</p>
                <p className="text-2xl font-bold text-slate-900">127</p>
                <p className="text-sm text-green-600">+12 this month</p>
              </div>
              <Database className="w-8 h-8 text-green-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Data Volume</p>
                <p className="text-2xl font-bold text-slate-900">45.2 TB</p>
                <p className="text-sm text-blue-600">+8.1 TB this month</p>
              </div>
              <Globe className="w-8 h-8 text-purple-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Coverage Area</p>
                <p className="text-2xl font-bold text-slate-900">1.2M km²</p>
                <p className="text-sm text-orange-600">6 continents</p>
              </div>
              <Map className="w-8 h-8 text-orange-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="deposits">Deposits</TabsTrigger>
          <TabsTrigger value="contributions">Contributions</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Members Tab */}
        <TabsContent value="members" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {consortiumMembers.map((member) => (
              <Card key={member.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription>{member.region} • Joined {member.joinDate}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      {getTierBadge(member.tier)}
                      {getStatusBadge(member.status)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Deposits Contributed</span>
                      <p className="font-semibold">{member.depositsContributed}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Data Volume</span>
                      <p className="font-semibold">{member.dataVolume}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>{member.contact}</span>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        {member.status === "active" ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Deposits Tab */}
        <TabsContent value="deposits" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {deposits.map((deposit) => (
              <Card key={deposit.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{deposit.name}</CardTitle>
                      <CardDescription>{deposit.type} • {deposit.location}</CardDescription>
                    </div>
                    {getStatusBadge(deposit.status)}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Contributor</span>
                      <p className="font-semibold">{deposit.contributor}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Date Added</span>
                      <p className="font-semibold">{deposit.dateAdded}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Confidence</span>
                      <p className={`font-semibold ${getQualityColor(deposit.confidence * 100)}`}>
                        {(deposit.confidence * 100).toFixed(1)}%
                      </p>
                    </div>
                    <div>
                      <span className="text-slate-600">Data Completeness</span>
                      <p className={`font-semibold ${getQualityColor(deposit.dataCompleteness)}`}>
                        {deposit.dataCompleteness}%
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Data Completeness</span>
                      <span>{deposit.dataCompleteness}%</span>
                    </div>
                    <Progress value={deposit.dataCompleteness} className="h-2" />
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>Last validated: {deposit.lastValidated}</span>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
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

        {/* Contributions Tab */}
        <TabsContent value="contributions" className="space-y-6">
          <div className="space-y-4">
            {dataContributions.map((contribution) => (
              <Card key={contribution.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <Upload className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{contribution.type}</h3>
                        <p className="text-sm text-slate-600">
                          {contribution.contributor} • {contribution.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-semibold">{contribution.volume}</p>
                        {contribution.quality > 0 && (
                          <p className={`text-sm ${getQualityColor(contribution.quality)}`}>
                            Quality: {contribution.quality}%
                          </p>
                        )}
                      </div>
                      {getStatusBadge(contribution.status)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Contribution Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">342</p>
                      <p className="text-sm text-slate-600">Total Contributions</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">+28%</p>
                      <p className="text-sm text-slate-600">Growth Rate</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-purple-600">89%</p>
                      <p className="text-sm text-slate-600">Avg Quality</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Regional Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">North America</span>
                    <div className="flex items-center gap-2">
                      <Progress value={35} className="w-20 h-2" />
                      <span className="text-sm font-medium">35%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Australia</span>
                    <div className="flex items-center gap-2">
                      <Progress value={28} className="w-20 h-2" />
                      <span className="text-sm font-medium">28%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">South America</span>
                    <div className="flex items-center gap-2">
                      <Progress value={18} className="w-20 h-2" />
                      <span className="text-sm font-medium">18%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Africa</span>
                    <div className="flex items-center gap-2">
                      <Progress value={12} className="w-20 h-2" />
                      <span className="text-sm font-medium">12%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Other</span>
                    <div className="flex items-center gap-2">
                      <Progress value={7} className="w-20 h-2" />
                      <span className="text-sm font-medium">7%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Monthly Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-900">23</p>
                  <p className="text-sm text-green-700">New Members</p>
                  <p className="text-xs text-green-600">↑ 15% from last month</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-900">47</p>
                  <p className="text-sm text-blue-700">New Deposits</p>
                  <p className="text-xs text-blue-600">↑ 22% from last month</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <p className="text-2xl font-bold text-purple-900">8.1 TB</p>
                  <p className="text-sm text-purple-700">Data Added</p>
                  <p className="text-xs text-purple-600">↑ 31% from last month</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <p className="text-2xl font-bold text-orange-900">91%</p>
                  <p className="text-sm text-orange-700">Data Quality</p>
                  <p className="text-xs text-orange-600">↑ 3% from last month</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}