"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageCircle, 
  Send,
  Bot,
  User,
  Brain,
  Search,
  FileText,
  Map,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Activity,
  Clock,
  CheckCircle,
  AlertTriangle,
  Info,
  Zap,
  Target,
  Database,
  Layers,
  Globe,
  Mountain,
  TreePine,
  Droplets,
  Wind,
  Building,
  Factory,
  Settings,
  History,
  Bookmark,
  Share,
  Download,
  Upload,
  Filter,
  Calendar,
  Users,
  Lightbulb,
  HelpCircle,
  BookOpen
} from "lucide-react";

interface ChatMessage {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: string;
  context?: {
    dataSources: string[];
    confidence: number;
    relatedTopics: string[];
  };
  attachments?: {
    type: "map" | "chart" | "report" | "image";
    title: string;
    url: string;
  }[];
}

interface GeologicalQuery {
  id: string;
  question: string;
  category: "mineral_exploration" | "geological_mapping" | "resource_assessment" | "environmental_analysis";
  complexity: "basic" | "intermediate" | "advanced" | "expert";
  responseTime: string;
  satisfaction: number;
  timestamp: string;
}

interface KnowledgeBase {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
  lastUpdated: string;
  views: number;
  usefulness: number;
  tags: string[];
}

interface AIInsight {
  id: string;
  title: string;
  description: string;
  type: "prediction" | "anomaly" | "opportunity" | "risk";
  confidence: number;
  impact: "low" | "medium" | "high" | "critical";
  dataSources: string[];
  recommendations: string[];
  timestamp: string;
}

export default function AIAssistantInterface() {
  const [activeTab, setActiveTab] = useState("chat");
  const [message, setMessage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const chatHistory: ChatMessage[] = [
    {
      id: "msg_001",
      type: "user",
      content: "What are the key indicators of copper porphyry deposits in the Andes region?",
      timestamp: "10:23 AM"
    },
    {
      id: "msg_002",
      type: "assistant",
      content: "Based on the geological data analysis, key indicators of copper porphyry deposits in the Andes include:\n\n1. **Geophysical Signatures**: \n   - High magnetic anomalies (>200 nT)\n   - Low resistivity zones (<10 Ωm)\n   - Seismic velocity disruptions\n\n2. **Geochemical Patterns**:\n   - Cu-Mo-Au element associations\n   - Alteration halos with phyllic and potassic zones\n   - Pathfinder elements (As, Sb, Bi)\n\n3. **Structural Controls**:\n   - Intersection of regional fault systems\n   - Caldera structures and ring dykes\n   - Volcanic arc alignments\n\nThe current analysis shows a 78% probability of undiscovered porphyry systems in Sector 7, particularly near the intersection of the Central Andean Thrust and the transverse fault zones.",
      timestamp: "10:24 AM",
      context: {
        dataSources: ["Seismic surveys", "Magnetic data", "Geochemical sampling", "Structural mapping"],
        confidence: 87,
        relatedTopics: ["Porphyry systems", "Andean geology", "Exploration targeting"]
      },
      attachments: [
        {
          type: "map",
          title: "Probability Heat Map",
          url: "/maps/porphyry-probability"
        },
        {
          type: "chart",
          title: "Geochemical Anomaly Distribution",
          url: "/charts/geochemical-anomalies"
        }
      ]
    },
    {
      id: "msg_003",
      type: "user",
      content: "Can you analyze the seismic data from yesterday's survey in Patagonia Basin?",
      timestamp: "10:28 AM"
    },
    {
      id: "msg_004",
      type: "assistant",
      content: "I've analyzed the seismic data from yesterday's Patagonia Basin survey. Here are the key findings:\n\n**Subsurface Structure**:\n- Identified 3 potential trap configurations at depths of 1,200m, 2,450m, and 3,800m\n- Main reservoir sandstone body with average thickness of 45m\n- Sealing shale formations with thickness ranging from 15-30m\n\n**Anomaly Detection**:\n- Unusual amplitude anomaly in Sector B-4 suggesting possible fluid accumulation\n- Velocity pull-down effect indicating potential gas presence\n- Fault-bounded anticline structure with 4-way closure\n\n**Risk Assessment**:\n- Geological probability: 68%\n- Reservoir quality: Good (porosity 18-22%)\n- Seal integrity: Moderate to high\n\nRecommendation: Proceed with 2D seismic infill and consider exploratory drilling on the primary anomaly.",
      timestamp: "10:30 AM",
      context: {
        dataSources: ["2D seismic lines", "Velocity models", "Well log correlations"],
        confidence: 82,
        relatedTopics: ["Seismic interpretation", "Reservoir characterization", "Risk assessment"]
      }
    }
  ];

  const recentQueries: GeologicalQuery[] = [
    {
      id: "query_001",
      question: "Optimal sampling density for lithium exploration in salt flats",
      category: "resource_assessment",
      complexity: "intermediate",
      responseTime: "12 seconds",
      satisfaction: 94,
      timestamp: "2 hours ago"
    },
    {
      id: "query_002",
      question: "Comparison of machine learning models for mineral deposit prediction",
      category: "mineral_exploration",
      complexity: "advanced",
      responseTime: "8 seconds",
      satisfaction: 89,
      timestamp: "4 hours ago"
    },
    {
      id: "query_003",
      question: "Environmental impact assessment of open-pit mining",
      category: "environmental_analysis",
      complexity: "basic",
      responseTime: "5 seconds",
      satisfaction: 96,
      timestamp: "6 hours ago"
    }
  ];

  const knowledgeBase: KnowledgeBase[] = [
    {
      id: "kb_001",
      title: "Porphyry Copper Deposit Models",
      category: "mineral_exploration",
      description: "Comprehensive guide to porphyry copper systems and exploration methods",
      content: "Detailed geological models, alteration patterns, geochemical signatures, and exploration techniques for porphyry copper deposits...",
      lastUpdated: "2 days ago",
      views: 1247,
      usefulness: 91,
      tags: ["porphyry", "copper", "exploration", "alteration"]
    },
    {
      id: "kb_002",
      title: "Seismic Interpretation Best Practices",
      category: "geological_mapping",
      description: "Standard procedures and quality control for seismic data interpretation",
      content: "Guidelines for seismic data processing, interpretation workflows, structural mapping, and reservoir characterization...",
      lastUpdated: "1 week ago",
      views: 892,
      usefulness: 87,
      tags: ["seismic", "interpretation", "subsurface", "structure"]
    },
    {
      id: "kb_003",
      title: "Environmental Monitoring Protocols",
      category: "environmental_analysis",
      description: "Procedures for environmental impact assessment and monitoring",
      content: "Environmental baseline studies, impact assessment methodologies, monitoring strategies, and regulatory compliance...",
      lastUpdated: "3 days ago",
      views: 623,
      usefulness: 93,
      tags: ["environmental", "monitoring", "impact", "compliance"]
    }
  ];

  const aiInsights: AIInsight[] = [
    {
      id: "insight_001",
      title: "Undervalued Exploration Target Identified",
      description: "Analysis of integrated geophysical data suggests high potential for undiscovered mineralization in the northern sector of the concession area.",
      type: "opportunity",
      confidence: 84,
      impact: "high",
      dataSources: ["Magnetic survey", "Geochemical data", "Structural analysis"],
      recommendations: [
        "Prioritize this area for detailed ground truthing",
        "Conduct induced polarization survey",
        "Review historical drilling data for missed intersections"
      ],
      timestamp: "1 hour ago"
    },
    {
      id: "insight_002",
      title: "Anomalous Seismic Velocity Pattern Detected",
      description: "Unusual velocity variations in the southwestern basin may indicate unexpected lithological changes or fluid presence.",
      type: "anomaly",
      confidence: 76,
      impact: "medium",
      dataSources: ["3D seismic volume", "Velocity analysis", "Well data"],
      recommendations: [
        "Perform detailed velocity analysis",
        "Cross-reference with existing well control",
        "Consider additional 2D seismic lines"
      ],
      timestamp: "3 hours ago"
    },
    {
      id: "insight_003",
      title: "Weather Impact on Field Operations",
      description: "Upcoming weather patterns may affect survey operations in the next 48-72 hours. Optimal scheduling recommended.",
      type: "risk",
      confidence: 92,
      impact: "medium",
      dataSources: ["Weather forecasts", "Field schedules", "Operational constraints"],
      recommendations: [
        "Reschedule drone surveys for later in the week",
        "Prioritize ground-based geophysical work",
        "Prepare equipment for weather protection"
      ],
      timestamp: "5 hours ago"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "mineral_exploration":
        return <Mountain className="w-4 h-4" />;
      case "geological_mapping":
        return <Map className="w-4 h-4" />;
      case "resource_assessment":
        return <Database className="w-4 h-4" />;
      case "environmental_analysis":
        return <TreePine className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case "opportunity":
        return <Target className="w-5 h-5 text-green-600" />;
      case "anomaly":
        return <AlertTriangle className="w-5 h-5 text-orange-600" />;
      case "risk":
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case "prediction":
        return <TrendingUp className="w-5 h-5 text-blue-600" />;
      default:
        return <Info className="w-5 h-5 text-gray-600" />;
    }
  };

  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case "critical":
        return <Badge className="bg-red-100 text-red-800">{impact}</Badge>;
      case "high":
        return <Badge className="bg-orange-100 text-orange-800">{impact}</Badge>;
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800">{impact}</Badge>;
      case "low":
        return <Badge className="bg-green-100 text-green-800">{impact}</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{impact}</Badge>;
    }
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      alert(`Sending message: "${message}" - The AI assistant will process your geological query and provide a comprehensive response.`);
      setMessage("");
    }
  };

  const handleSearchKnowledge = (query: string) => {
    alert(`Searching knowledge base for: "${query}" - This will find relevant geological information and best practices.`);
  };

  const handleGenerateReport = (insightId: string) => {
    alert(`Generating detailed report for insight ${insightId} - This will create a comprehensive analysis document.`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">AI Geological Assistant</h2>
          <p className="text-slate-600">Natural language interface for geological analysis and insights</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <History className="w-4 h-4 mr-2" />
            History
          </Button>
          <Button size="sm">
            <Lightbulb className="w-4 h-4 mr-2" />
            New Insight
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Queries Today</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">47</p>
                <p className="text-sm text-green-600 mt-1">+12% vs yesterday</p>
              </div>
              <MessageCircle className="w-8 h-8 text-blue-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Avg Response Time</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">8.2s</p>
                <p className="text-sm text-purple-600 mt-1">fast</p>
              </div>
              <Clock className="w-8 h-8 text-purple-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Satisfaction Rate</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">91.3%</p>
                <p className="text-sm text-green-600 mt-1">excellent</p>
              </div>
              <Target className="w-8 h-8 text-green-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Active Insights</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">3</p>
                <p className="text-sm text-orange-600 mt-1">new today</p>
              </div>
              <Lightbulb className="w-8 h-8 text-orange-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="chat">Chat Interface</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
          <TabsTrigger value="knowledge">Knowledge Base</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Chat Interface Tab */}
        <TabsContent value="chat" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Geological Analysis Chat
                  </CardTitle>
                  <CardDescription>Ask questions about geological data, analysis, and insights</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="h-96 overflow-y-auto space-y-4 p-4 bg-slate-50 rounded-lg">
                    {chatHistory.map((msg) => (
                      <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-lg ${msg.type === "user" ? "bg-blue-600 text-white" : "bg-white border"} rounded-lg p-4`}>
                          <div className="flex items-center gap-2 mb-2">
                            {msg.type === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                            <span className="text-xs opacity-70">{msg.timestamp}</span>
                          </div>
                          <p className="text-sm whitespace-pre-line">{msg.content}</p>
                          
                          {msg.context && (
                            <div className="mt-3 pt-3 border-t border-slate-200">
                              <div className="flex items-center gap-2 mb-2">
                                <Database className="w-3 h-3" />
                                <span className="text-xs font-medium">Sources: {msg.context.dataSources.length}</span>
                                <span className="text-xs">• Confidence: {msg.context.confidence}%</span>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {msg.context.relatedTopics.map((topic) => (
                                  <Badge key={topic} variant="secondary" className="text-xs">
                                    {topic}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {msg.attachments && msg.attachments.length > 0 && (
                            <div className="mt-3 space-y-2">
                              {msg.attachments.map((attachment, index) => (
                                <div key={index} className="flex items-center gap-2 text-xs p-2 bg-slate-100 rounded">
                                  {attachment.type === "map" && <Map className="w-3 h-3" />}
                                  {attachment.type === "chart" && <BarChart3 className="w-3 h-3" />}
                                  {attachment.type === "report" && <FileText className="w-3 h-3" />}
                                  {attachment.type === "image" && <Database className="w-3 h-3" />}
                                  <span>{attachment.title}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ask about geological data, analysis, or insights..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Queries</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {recentQueries.map((query) => (
                    <div key={query.id} className="space-y-2 p-3 border rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        {getCategoryIcon(query.category)}
                        <span className="text-xs font-medium capitalize">{query.category.replace("_", " ")}</span>
                        <Badge variant="outline" className="text-xs">{query.complexity}</Badge>
                      </div>
                      <p className="text-sm font-medium">{query.question}</p>
                      <div className="flex justify-between text-xs text-slate-600">
                        <span>{query.responseTime}</span>
                        <span>{query.satisfaction}% satisfaction</span>
                      </div>
                      <div className="text-xs text-slate-500">{query.timestamp}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* AI Insights Tab */}
        <TabsContent value="insights" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {aiInsights.map((insight) => (
              <Card key={insight.id} className={`border-l-4 ${
                insight.type === "opportunity" ? "border-l-green-500" : 
                insight.type === "anomaly" ? "border-l-orange-500" : 
                insight.type === "risk" ? "border-l-red-500" : 
                "border-l-blue-500"
              }`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      {getInsightIcon(insight.type)}
                      {insight.title}
                    </CardTitle>
                    {getImpactBadge(insight.impact)}
                  </div>
                  <CardDescription>{insight.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Confidence</span>
                      <p className="font-semibold">{insight.confidence}%</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Data Sources</span>
                      <p className="font-semibold">{insight.dataSources.length}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Recommendations:</p>
                    <ul className="space-y-1">
                      {insight.recommendations.map((rec, index) => (
                        <li key={index} className="text-sm text-slate-600 flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Activity className="w-4 h-4 mr-2" />
                      Analyze
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleGenerateReport(insight.id)}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Report
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Knowledge Base Tab */}
        <TabsContent value="knowledge" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {knowledgeBase.map((article) => (
              <Card key={article.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                    <Badge variant="secondary">{article.category.replace("_", " ")}</Badge>
                  </div>
                  <CardDescription>{article.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-600 line-clamp-3">{article.content}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Views</span>
                      <p className="font-medium">{article.views.toLocaleString()}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Usefulness</span>
                      <p className="font-medium">{article.usefulness}%</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Tags:</p>
                    <div className="flex flex-wrap gap-1">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span>Updated: {article.lastUpdated}</span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Read
                      </Button>
                      <Button variant="outline" size="sm">
                        <Bookmark className="w-4 h-4 mr-2" />
                        Save
                      </Button>
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
                  Query Analytics
                </CardTitle>
                <CardDescription>Analysis of user questions and AI performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                      <span className="font-medium text-blue-900">Query Volume Trend</span>
                    </div>
                    <p className="text-sm text-blue-700">23% increase in complex geological queries this week</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Target className="w-4 h-4 text-green-600" />
                      <span className="font-medium text-green-900">Top Categories</span>
                    </div>
                    <p className="text-sm text-green-700">Mineral exploration (42%), Geological mapping (28%), Resource assessment (18%)</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4 text-purple-600" />
                      <span className="font-medium text-purple-900">Response Performance</span>
                    </div>
                    <p className="text-sm text-purple-700">Average 8.2 seconds response time with 91.3% satisfaction rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  AI Model Performance
                </CardTitle>
                <CardDescription>Natural language processing and geological understanding metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-900">94.7%</p>
                    <p className="text-sm text-green-700">Query Understanding</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-900">89.2%</p>
                    <p className="text-sm text-blue-700">Context Accuracy</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-2xl font-bold text-purple-900">87.8%</p>
                    <p className="text-sm text-purple-700">Insight Relevance</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <p className="text-2xl font-bold text-orange-900">91.3%</p>
                    <p className="text-sm text-orange-700">User Satisfaction</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="font-medium">Knowledge Base Coverage</span>
                    <span className="text-green-600 font-bold">87%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="font-medium">Multi-language Support</span>
                    <span className="text-blue-600 font-bold">12 languages</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="font-medium">Data Source Integration</span>
                    <span className="text-purple-600 font-bold">47 sources</span>
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