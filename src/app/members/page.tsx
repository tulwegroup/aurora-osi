"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  const [showAddForm, setShowAddForm] = useState(false);

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
    setShowAddForm(true);
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
              <p className="text-slate-600 mt-2">Manage consortium members and their contributions</p>
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

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Label htmlFor="search">Search Members</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <Input
                  id="search"
                  placeholder="Search by name, email, or role..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="tier-filter">Filter by Tier</Label>
              <Select value={selectedTier} onValueChange={setSelectedTier}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Tiers</SelectItem>
                  <SelectItem value="founding">Founding</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                  <SelectItem value="standard">Standard</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Members Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Members</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="contributions">Top Contributors</TabsTrigger>
          </TabsList>

          {/* All Members Tab */}
          <TabsContent value="all" className="space-y-6">
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

                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-2">Contributions</h4>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-slate-600">Deposits</span>
                          <p className="font-semibold">{member.contributions.deposits}</p>
                        </div>
                        <div>
                          <span className="text-slate-600">Data Volume</span>
                          <p className="font-semibold">{member.contributions.dataVolume}</p>
                        </div>
                        <div>
                          <span className="text-slate-600">Quality</span>
                          <p className="font-semibold">{member.contributions.quality}%</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="text-sm text-slate-600">
                        <Clock className="w-4 h-4 mr-1" />
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

          {/* Active Members Tab */}
          <TabsContent value="active" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredMembers.filter(m => m.status === "active").map((member) => (
                <Card key={member.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {member.avatar}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{member.name}</CardTitle>
                          <CardDescription>{member.role}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {getTierBadge(member.tier)}
                        <Badge className="bg-green-100 text-green-800">
                          <Activity className="w-3 h-3 mr-1" />
                          Active
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {member.location} • Last active: {member.lastActive}
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-slate-600">Deposits</span>
                        <p className="font-semibold">{member.contributions.deposits}</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Data</span>
                        <p className="font-semibold">{member.contributions.dataVolume}</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Quality</span>
                        <p className="font-semibold">{member.contributions.quality}%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Pending Members Tab */}
          <TabsContent value="pending" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredMembers.filter(m => m.status === "pending").map((member) => (
                <Card key={member.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {member.avatar}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{member.name}</CardTitle>
                          <CardDescription>{member.role}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {getTierBadge(member.tier)}
                        <Badge className="bg-yellow-100 text-yellow-800">
                          <Clock className="w-3 h-3 mr-1" />
                          Pending
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-4">
                      <AlertTriangle className="w-4 h-4 mr-1" />
                      Awaiting approval and account setup
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => alert(`Approving member ${member.id}...`)}>
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Approve
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => alert(`Rejecting member ${member.id}...`)}>
                        Reject
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Top Contributors Tab */}
          <TabsContent value="contributions" className="space-y-6">
            <div className="space-y-4">
              {[...members]
                .sort((a, b) => b.contributions.deposits - a.contributions.deposits)
                .slice(0, 5)
                .map((member, index) => (
                  <Card key={member.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-lg font-bold text-blue-600">#{index + 1}</div>
                          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                            {member.avatar}
                          </div>
                          <div>
                            <h3 className="font-semibold">{member.name}</h3>
                            <p className="text-sm text-slate-600">{member.role}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-blue-600">{member.contributions.deposits}</p>
                          <p className="text-sm text-slate-600">deposits</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}