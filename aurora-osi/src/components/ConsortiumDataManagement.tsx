"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  Database, 
  Globe,
  Shield,
  Upload,
  Download,
  Search,
  Filter,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  BarChart3,
  TrendingUp,
  Map,
  Activity,
  CheckCircle,
  AlertTriangle,
  Clock,
  Building,
  User,
  Calendar,
  FileText,
  Settings
} from "lucide-react";

interface ConsortiumMember {
  id: string;
  name: string;
  type: "mining" | "research" | "government";
  tier: 1 | 2 | 3;
  joinedDate: string;
  contributions: number;
  dataVolume: string;
  status: "active" | "pending" | "suspended";
  lastActivity: string;
}

interface DataContribution {
  id: string;
  contributor: string;
  depositType: string;
  location: string;
  dataSize: string;
  anonymizationLevel: "full" | "partial" | "minimal";
  submissionDate: string;
  status: "processing" | "approved" | "rejected";
  quality: number;
}

interface AccessRequest {
  id: string;
  requester: string;
  dataType: string;
  purpose: string;
  tierRequired: number;
  status: "pending" | "approved" | "rejected";
  requestDate: string;
  reviewedBy?: string;
}

export default function ConsortiumDataManagement() {
  const [activeTab, setActiveTab] = useState("members");
  const [selectedTier, setSelectedTier] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const consortiumMembers: ConsortiumMember[] = [
    {
      id: "1",
      name: "Newmont Corporation",
      type: "mining",
      tier: 1,
      joinedDate: "2023-06-15",
      contributions: 45,
      dataVolume: "12.3 TB",
      status: "active",
      lastActivity: "2 hours ago"
    },
    {
      id: "2",
      name: "University of Western Australia",
      type: "research",
      tier: 2,
      joinedDate: "2023-08-22",
      contributions: 28,
      dataVolume: "5.7 TB",
      status: "active",
      lastActivity: "1 day ago"
    },
    {
      id: "3",
      name: "Chilean Geological Survey",
      type: "government",
      tier: 1,
      joinedDate: "2023-07-10",
      contributions: 67,
      dataVolume: "18.9 TB",
      status: "active",
      lastActivity: "4 hours ago"
    },
    {
      id: "4",
      name: "Barrick Gold",
      type: "mining",
      tier: 2,
      joinedDate: "2023-09-05",
      contributions: 34,
      dataVolume: "8.4 TB",
      status: "active",
      lastActivity: "3 days ago"
    }
  ];

  const dataContributions: DataContribution[] = [
    {
      id: "1",
      contributor: "Newmont Corporation",
      depositType: "Carlin-type",
      location: "Nevada, USA",
      dataSize: "845 GB",
      anonymizationLevel: "full",
      submissionDate: "2024-01-18",
      status: "approved",
      quality: 92
    },
    {
      id: "2",
      contributor: "University of Western Australia",
      depositType: "Orogenic",
      location: "Western Australia",
      dataSize: "1.2 TB",
      anonymizationLevel: "partial",
      submissionDate: "2024-01-17",
      status: "processing",
      quality: 87
    },
    {
      id: "3",
      contributor: "Chilean Geological Survey",
      depositType: "Porphyry",
      location: "Chile",
      dataSize: "2.3 TB",
      anonymizationLevel: "full",
      submissionDate: "2024-01-16",
      status: "approved",
      quality: 95
    }
  ];

  const accessRequests: AccessRequest[] = [
    {
      id: "1",
      requester: "Research Institute A",
      dataType: "Geophysical Survey Data",
      purpose: "Academic Research",
      tierRequired: 2,
      status: "pending",
      requestDate: "2024-01-19"
    },
    {
      id: "2",
      requester: "Mining Company B",
      dataType: "Complete Deposit Models",
      purpose: "Exploration Planning",
      tierRequired: 1,
      status: "approved",
      requestDate: "2024-01-18",
      reviewedBy: "Data Governance Board"
    }
  ];

  const getTierBadge = (tier: number) => {
    switch (tier) {
      case 1:
        return <Badge className="bg-purple-100 text-purple-800">Tier 1</Badge>;
      case 2:
        return <Badge className="bg-blue-100 text-blue-800">Tier 2</Badge>;
      case 3:
        return <Badge className="bg-green-100 text-green-800">Tier 3</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
      case "approved":
        return <Badge className="bg-green-100 text-green-800">{status}</Badge>;
      case "pending":
      case "processing":
        return <Badge className="bg-yellow-100 text-yellow-800">{status}</Badge>;
      case "suspended":
      case "rejected":
        return <Badge className="bg-red-100 text-red-800">{status}</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>;
    }
  };

  const getAnonymizationIcon = (level: string) => {
    switch (level) {
      case "full":
        return <Shield className="w-4 h-4 text-green-600" />;
      case "partial":
        return <Lock className="w-4 h-4 text-yellow-600" />;
      case "minimal":
        return <Unlock className="w-4 h-4 text-red-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Consortium Data Management</h2>
          <p className="text-slate-600">Global Analog Consortium Database (GACD) Administration</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
          <Button size="sm">
            <Upload className="w-4 h-4 mr-2" />
            Add Member
          </Button>
        </div>
      </div>

      {/* Consortium Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Total Members</p>
                <p className="text-2xl font-bold text-slate-900">47</p>
                <p className="text-sm text-green-600">+12 this month</p>
              </div>
              <Users className="w-8 h-8 text-blue-600 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Data Volume</p>
                <p className="text-2xl font-bold text-slate-900">45.2 TB</p>
                <p className="text-sm text-green-600">+8.3 TB this month</p>
              </div>
              <Database className="w-8 h-8 text-purple-600 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Known Deposits</p>
                <p className="text-2xl font-bold text-slate-900">127</p>
                <p className="text-sm text-green-600">+23 this month</p>
              </div>
              <Globe className="w-8 h-8 text-green-600 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Coverage Area</p>
                <p className="text-2xl font-bold text-slate-900">1.2M km²</p>
                <p className="text-sm text-green-600">+180K km²</p>
              </div>
              <Map className="w-8 h-8 text-orange-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input
            placeholder="Search members, contributions, or requests..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={selectedTier} onValueChange={setSelectedTier}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Tier" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Tiers</SelectItem>
            <SelectItem value="1">Tier 1</SelectItem>
            <SelectItem value="2">Tier 2</SelectItem>
            <SelectItem value="3">Tier 3</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="sm">
          <Filter className="w-4 h-4 mr-2" />
          More Filters
        </Button>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="contributions">Contributions</TabsTrigger>
          <TabsTrigger value="access">Access Control</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Members Tab */}
        <TabsContent value="members" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {consortiumMembers.map((member) => (
              <Card key={member.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Building className="w-5 h-5 text-slate-600" />
                      <div>
                        <CardTitle className="text-lg">{member.name}</CardTitle>
                        <CardDescription className="capitalize">{member.type} Organization</CardDescription>
                      </div>
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
                      <span className="text-slate-600">Contributions:</span>
                      <p className="font-semibold">{member.contributions}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Data Volume:</span>
                      <p className="font-semibold">{member.dataVolume}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Joined:</span>
                      <p className="font-semibold">{member.joinedDate}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Last Activity:</span>
                      <p className="font-semibold">{member.lastActivity}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View Profile
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export Data
                    </Button>
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
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-slate-600" />
                      <div>
                        <h3 className="font-semibold">{contribution.depositType} Deposit</h3>
                        <p className="text-sm text-slate-600">{contribution.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        {getAnonymizationIcon(contribution.anonymizationLevel)}
                        <span className="text-sm capitalize">{contribution.anonymizationLevel}</span>
                      </div>
                      {getStatusBadge(contribution.status)}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Contributor:</span>
                      <p className="font-medium">{contribution.contributor}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Data Size:</span>
                      <p className="font-medium">{contribution.dataSize}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Quality Score:</span>
                      <div className="flex items-center gap-2">
                        <Progress value={contribution.quality} className="w-16 h-2" />
                        <span className="font-medium">{contribution.quality}%</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-slate-600">Submitted:</span>
                      <p className="font-medium">{contribution.submissionDate}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Access Control Tab */}
        <TabsContent value="access" className="space-y-6">
          <div className="space-y-4">
            {accessRequests.map((request) => (
              <Card key={request.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-slate-600" />
                      <div>
                        <h3 className="font-semibold">{request.requester}</h3>
                        <p className="text-sm text-slate-600">{request.purpose}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {getTierBadge(request.tierRequired)}
                      {getStatusBadge(request.status)}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
                    <div>
                      <span className="text-slate-600">Data Type:</span>
                      <p className="font-medium">{request.dataType}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Request Date:</span>
                      <p className="font-medium">{request.requestDate}</p>
                    </div>
                    {request.reviewedBy && (
                      <div>
                        <span className="text-slate-600">Reviewed By:</span>
                        <p className="font-medium">{request.reviewedBy}</p>
                      </div>
                    )}
                  </div>
                  
                  {request.status === "pending" && (
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Approve
                      </Button>
                      <Button variant="outline" size="sm">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        Reject
                      </Button>
                    </div>
                  )}
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
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Monthly Growth</span>
                    <span className="text-sm font-medium text-green-600">+23.4%</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Carlin-type Deposits</span>
                      <span>45 contributions</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Orogenic Gold</span>
                      <span>38 contributions</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Porphyry Systems</span>
                      <span>29 contributions</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>VMS Deposits</span>
                      <span>15 contributions</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Member Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Active Members</span>
                    <span className="text-sm font-medium">42 / 47</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Tier 1 Members</span>
                      <span>89% activity rate</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tier 2 Members</span>
                      <span>76% activity rate</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tier 3 Members</span>
                      <span>92% activity rate</span>
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