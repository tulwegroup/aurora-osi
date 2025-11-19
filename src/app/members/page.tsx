"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Users, 
  Plus, 
  Search,
  Filter,
  Mail,
  Calendar,
  Shield,
  Activity,
  CheckCircle,
  AlertTriangle,
  Clock,
  MapPin,
  Database,
  Edit,
  Trash2
} from "lucide-react";

interface Member {
  id: string;
  name: string;
  email: string;
  role: string;
  tier: "founding" | "premium" | "standard";
  status: "active" | "inactive" | "pending";
  joinDate: string;
  lastActive: string;
  contributions: {
    deposits: number;
    dataVolume: string;
    quality: number;
  };
  location: string;
  avatar: string;
}

export default function MembersPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTier, setSelectedTier] = useState("all");

  const members: Member[] = [
    {
      id: "1",
      name: "Dr. Sarah Chen",
      email: "sarah.chen@globalmining.com",
      role: "Lead Geoscience AI Engineer",
      tier: "founding",
      status: "active",
      joinDate: "2023-06-15",
      lastActive: "2024-01-18 14:30",
      contributions: {
        deposits: 23,
        dataVolume: "12.4 TB",
        quality: 94
      },
      location: "North America",
      avatar: "SC"
    },
    {
      id: "2",
      name: "Michael Rodriguez",
      email: "michael.rodriguez@ausminerals.com",
      role: "Satellite Data Specialist",
      tier: "premium",
      status: "active",
      joinDate: "2023-08-22",
      lastActive: "2024-01-18 16:45",
      contributions: {
        deposits: 18,
        dataVolume: "8.7 TB",
        quality: 89
      },
      location: "Australia",
      avatar: "MR"
    },
    {
      id: "3",
      name: "Emily Watson",
      email: "emily.watson@cloudtech.com",
      role: "Cloud Infrastructure Architect",
      tier: "premium",
      status: "active",
      joinDate: "2023-10-10",
      lastActive: "2024-01-18 09:15",
      contributions: {
        deposits: 15,
        dataVolume: "5.2 TB",
        quality: 92
      },
      location: "Europe",
      avatar: "EW"
    },
    {
      id: "4",
      name: "James Liu",
      email: "james.liu@chileexp.com",
      role: "Consortium Relationship Manager",
      tier: "standard",
      status: "active",
      joinDate: "2023-11-05",
      lastActive: "2024-01-17 11:20",
      contributions: {
        deposits: 12,
        dataVolume: "3.8 TB",
        quality: 87
      },
      location: "South America",
      avatar: "JL"
    },
    {
      id: "5",
      name: "Dr. Amar Singh",
      email: "amar.singh@africanresources.com",
      role: "Geological Data Analyst",
      tier: "standard",
      status: "pending",
      joinDate: "2024-01-10",
      lastActive: "Never",
      contributions: {
        deposits: 0,
        dataVolume: "0 TB",
        quality: 0
      },
      location: "Africa",
      avatar: "AS"
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
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "inactive":
        return <Badge className="bg-red-100 text-red-800">Inactive</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>;
    }
  };

  const handleAddMember = () => {
    alert('Opening member registration form... This will open a form to add new consortium members.');
  };

  const handleEditMember = (memberId: string) => {
    alert(`Editing member ${memberId}...`);
  };

  const handleDeleteMember = (memberId: string) => {
    if (confirm('Are you sure you want to remove this member?')) {
      alert(`Removing member ${memberId}...`);
    }
  };

  const handleInviteMember = () => {
    alert('Opening invitation form... This will send an invitation to join the consortium.');
  };

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTier = selectedTier === "all" || member.tier === selectedTier;
    return matchesSearch && matchesTier;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                <Users className="w-8 h-8 text-blue-600" />
                Consortium Members
              </h1>
              <p className="text-slate-600 mt-2">Manage consortium membership and contributions</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={handleInviteMember}>
                <Mail className="w-4 h-4 mr-2" />
                Invite Member
              </Button>
              <Button onClick={handleAddMember}>
                <Plus className="w-4 h-4 mr-2" />
                Add Member
              </Button>
            </div>
          </div>
        </div>

        {/* Members Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Members</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* All Members Tab */}
          <TabsContent value="all" className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    placeholder="Search members..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={selectedTier} onValueChange={setSelectedTier}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by tier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Tiers</SelectItem>
                  <SelectItem value="founding">Founding</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                  <SelectItem value="standard">Standard</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredMembers.map((member) => (
                <Card key={member.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {member.avatar}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{member.name}</CardTitle>
                          <CardDescription>{member.role}</CardDescription>
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
                        <span className="text-slate-600">Email</span>
                        <p className="font-medium">{member.email}</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Location</span>
                        <p className="font-medium">{member.location}</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Joined</span>
                        <p className="font-medium">{member.joinDate}</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Last Active</span>
                        <p className="font-medium">{member.lastActive}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Deposits Contributed</span>
                        <span className="font-semibold">{member.contributions.deposits}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Data Volume</span>
                        <span className="font-semibold">{member.contributions.dataVolume}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Quality Score</span>
                        <span className="font-semibold">{member.contributions.quality}%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="text-sm text-slate-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        Member ID: {member.id}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => handleEditMember(member.id)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDeleteMember(member.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Other tabs with simplified content */}
          <TabsContent value="active" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-green-600" />
                  Active Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-8">
                  <p className="text-lg font-semibold">Active Members Management</p>
                  <p className="text-slate-600 mt-2">View and manage currently active consortium members</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pending" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-yellow-600" />
                  Pending Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-8">
                  <p className="text-lg font-semibold">Pending Member Applications</p>
                  <p className="text-slate-600 mt-2">Review and approve new member applications</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    Member Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-900">24</p>
                      <p className="text-sm text-blue-700">Total Members</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-2xl font-bold text-green-900">68</p>
                      <p className="text-sm text-green-700">Total Deposits</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-green-600" />
                    Contribution Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-900">30.1 TB</p>
                      <p className="text-sm text-blue-700">Data Volume</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <p className="text-2xl font-bold text-purple-900">89.2%</p>
                      <p className="text-sm text-purple-700">Avg Quality</p>
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