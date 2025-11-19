"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Eye, 
  Brain,
  BarChart3,
  LineChart,
  PieChart,
  Target,
  Zap,
  AlertTriangle,
  CheckCircle,
  Info,
  TrendingUp,
  TrendingDown,
  Activity,
  Settings,
  Play,
  Download,
  Upload,
  Filter,
  Search,
  Layers,
  GitBranch,
  Database,
  Cpu,
  FileText,
  Image,
  Map,
  Scatter,
  Box
} from "lucide-react";

interface SHAPExplanation {
  id: string;
  modelName: string;
  predictionType: string;
  inputFeatures: FeatureImportance[];
  shapValues: number[];
  baseValue: number;
  prediction: number;
  confidence: number;
  timestamp: string;
}

interface FeatureImportance {
  name: string;
  value: number;
  importance: number;
  category: "seismic" | "electromagnetic" | "geological" | "chemical";
  direction: "positive" | "negative";
}

interface ModelInterpretability {
  modelName: string;
  interpretabilityScore: number;
  explanationType: string[];
  lastAnalysis: string;
  totalExplanations: number;
  avgConfidence: number;
  featuresAnalyzed: number;
}

interface ExplanationMethod {
  name: string;
  description: string;
  accuracy: number;
  speed: "fast" | "medium" | "slow";
  complexity: "low" | "medium" | "high";
  useCases: string[];
  status: "active" | "experimental" | "deprecated";
}

export default function AdvancedExplainabilitySystem() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedExplanation, setSelectedExplanation] = useState<string | null>(null);

  const shapExplanations: SHAPExplanation[] = [
    {
      id: "exp_001",
      modelName: "SeismicBase-v2",
      predictionType: "Mineral Deposit Probability",
      inputFeatures: [
        { name: "Seismic Velocity", value: 4.2, importance: 0.34, category: "seismic", direction: "positive" },
        { name: "Density Contrast", value: 2.8, importance: 0.28, category: "geological", direction: "positive" },
        { name: "EM Conductivity", value: 1.5, importance: 0.18, category: "electromagnetic", direction: "negative" },
        { name: "Rock Formation Age", value: 145, importance: 0.12, category: "geological", direction: "positive" },
        { name: "Magnetic Anomaly", value: 0.8, importance: 0.08, category: "geological", direction: "negative" }
      ],
      shapValues: [0.34, 0.28, -0.18, 0.12, -0.08],
      baseValue: 0.35,
      prediction: 0.83,
      confidence: 94.2,
      timestamp: "2 mins ago"
    },
    {
      id: "exp_002",
      modelName: "GeoTransformer-XL",
      predictionType: "Reservoir Quality Score",
      inputFeatures: [
        { name: "Porosity", value: 0.23, importance: 0.41, category: "geological", direction: "positive" },
        { name: "Permeability", value: 125, importance: 0.33, category: "geological", direction: "positive" },
        { name: "Pressure Gradient", value: 0.8, importance: 0.16, category: "geological", direction: "negative" },
        { name: "Temperature", value: 85, importance: 0.10, category: "geological", direction: "positive" }
      ],
      shapValues: [0.41, 0.33, -0.16, 0.10],
      baseValue: 0.42,
      prediction: 0.90,
      confidence: 91.8,
      timestamp: "5 mins ago"
    }
  ];

  const modelInterpretability: ModelInterpretability[] = [
    {
      modelName: "SeismicBase-v2",
      interpretabilityScore: 87.3,
      explanationType: ["SHAP", "LIME", "Grad-CAM"],
      lastAnalysis: "2 mins ago",
      totalExplanations: 1247,
      avgConfidence: 92.1,
      featuresAnalyzed: 45
    },
    {
      modelName: "GeoTransformer-XL",
      interpretabilityScore: 82.6,
      explanationType: ["SHAP", "Attention Visualization"],
      lastAnalysis: "5 mins ago",
      totalExplanations: 892,
      avgConfidence: 89.7,
      featuresAnalyzed: 38
    },
    {
      modelName: "MineralDetector-Pro",
      interpretabilityScore: 79.8,
      explanationType: ["SHAP", "Feature Importance"],
      lastAnalysis: "1 hour ago",
      totalExplanations: 623,
      avgConfidence: 87.3,
      featuresAnalyzed: 32
    }
  ];

  const explanationMethods: ExplanationMethod[] = [
    {
      name: "SHAP (SHapley Additive exPlanations)",
      description: "Game theory approach to explain model predictions",
      accuracy: 94.2,
      speed: "medium",
      complexity: "medium",
      useCases: ["Individual predictions", "Feature importance", "Model comparison"],
      status: "active"
    },
    {
      name: "LIME (Local Interpretable Model-agnostic Explanations)",
      description: "Local surrogate models for individual predictions",
      accuracy: 87.6,
      speed: "fast",
      complexity: "low",
      useCases: ["Local explanations", "Model debugging", "Trust building"],
      status: "active"
    },
    {
      name: "Grad-CAM (Gradient-weighted Class Activation Mapping)",
      description: "Visual explanations for CNN models",
      accuracy: 91.3,
      speed: "fast",
      complexity: "medium",
      useCases: ["Computer vision", "Geological imaging", "Seismic interpretation"],
      status: "active"
    },
    {
      name: "Attention Visualization",
      description: "Transformer attention mechanism visualization",
      accuracy: 89.7,
      speed: "medium",
      complexity: "high",
      useCases: ["Transformer models", "Sequence analysis", "Multi-modal fusion"],
      status: "active"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "seismic":
        return "text-blue-600 bg-blue-50";
      case "electromagnetic":
        return "text-purple-600 bg-purple-50";
      case "geological":
        return "text-green-600 bg-green-50";
      case "chemical":
        return "text-orange-600 bg-orange-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">{status}</Badge>;
      case "experimental":
        return <Badge className="bg-blue-100 text-blue-800">{status}</Badge>;
      case "deprecated":
        return <Badge className="bg-red-100 text-red-800">{status}</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>;
    }
  };

  const getSpeedBadge = (speed: string) => {
    switch (speed) {
      case "fast":
        return <Badge className="bg-green-100 text-green-800">{speed}</Badge>;
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800">{speed}</Badge>;
      case "slow":
        return <Badge className="bg-red-100 text-red-800">{speed}</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{speed}</Badge>;
    }
  };

  const handleGenerateExplanation = (modelId: string) => {
    alert(`Generating SHAP explanation for model ${modelId}... This will analyze feature contributions and provide detailed interpretability insights.`);
  };

  const handleExportExplanation = (explanationId: string) => {
    alert(`Exporting explanation ${explanationId}... This will download a comprehensive report including SHAP values, feature importance, and visualizations.`);
  };

  const handleCompareModels = () => {
    alert('Opening model comparison interface... This will allow you to compare interpretability across different models and explanation methods.');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Advanced Explainability System</h2>
          <p className="text-slate-600">SHAP-based model interpretation and explainability analysis</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={handleCompareModels}>
            <BarChart3 className="w-4 h-4 mr-2" />
            Compare Models
          </Button>
          <Button size="sm">
            <Eye className="w-4 h-4 mr-2" />
            Generate Explanation
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Explanations Generated</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">2,762</p>
                <p className="text-sm text-green-600 mt-1">+127 today</p>
              </div>
              <FileText className="w-8 h-8 text-blue-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Avg Confidence</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">89.7%</p>
                <p className="text-sm text-purple-600 mt-1">high quality</p>
              </div>
              <Target className="w-8 h-8 text-purple-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Interpretability Score</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">83.2</p>
                <p className="text-sm text-green-600 mt-1">excellent</p>
              </div>
              <Eye className="w-8 h-8 text-green-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Active Methods</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">4</p>
                <p className="text-sm text-orange-600 mt-1">available</p>
              </div>
              <Brain className="w-8 h-8 text-orange-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="shap">SHAP Analysis</TabsTrigger>
          <TabsTrigger value="methods">Methods</TabsTrigger>
          <TabsTrigger value="interpretability">Model Scores</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Recent Explanations
                </CardTitle>
                <CardDescription>Latest SHAP-based model explanations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {shapExplanations.map((explanation) => (
                  <div key={explanation.id} className="space-y-3 p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{explanation.modelName}</p>
                        <p className="text-sm text-slate-600">{explanation.predictionType}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold">{(explanation.prediction * 100).toFixed(1)}%</p>
                        <p className="text-xs text-slate-600">confidence: {explanation.confidence}%</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Top Features:</p>
                      {explanation.inputFeatures.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <Badge className={`text-xs ${getCategoryColor(feature.category)}`}>
                              {feature.category}
                            </Badge>
                            <span>{feature.name}</span>
                          </div>
                          <span className={feature.direction === "positive" ? "text-green-600" : "text-red-600"}>
                            {feature.direction === "positive" ? "+" : ""}{(feature.importance * 100).toFixed(1)}%
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-slate-600">
                      <span>{explanation.timestamp}</span>
                      <Button variant="outline" size="sm" onClick={() => handleExportExplanation(explanation.id)}>
                        <Download className="w-4 h-4 mr-2" />
                        Export
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Explainability Performance
                </CardTitle>
                <CardDescription>Model interpretability metrics and scores</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {modelInterpretability.map((model) => (
                  <div key={model.modelName} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{model.modelName}</span>
                      <span className="text-sm text-slate-600">{model.interpretabilityScore}%</span>
                    </div>
                    <Progress value={model.interpretabilityScore} className="h-2" />
                    <div className="flex justify-between text-xs text-slate-600">
                      <span>{model.totalExplanations} explanations</span>
                      <span>{model.avgConfidence}% avg confidence</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* SHAP Analysis Tab */}
        <TabsContent value="shap" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {shapExplanations.map((explanation) => (
              <Card key={explanation.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    {explanation.modelName} - SHAP Analysis
                  </CardTitle>
                  <CardDescription>{explanation.predictionType}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <p className="text-3xl font-bold text-slate-900">{(explanation.prediction * 100).toFixed(1)}%</p>
                    <p className="text-sm text-slate-600">Prediction Probability</p>
                    <p className="text-xs text-slate-500 mt-1">Base: {(explanation.baseValue * 100).toFixed(1)}%</p>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="font-medium">Feature Contributions (SHAP Values):</p>
                    {explanation.inputFeatures.map((feature, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge className={`text-xs ${getCategoryColor(feature.category)}`}>
                              {feature.category}
                            </Badge>
                            <span className="text-sm font-medium">{feature.name}</span>
                          </div>
                          <div className="text-right">
                            <span className={`text-sm font-bold ${feature.direction === "positive" ? "text-green-600" : "text-red-600"}`}>
                              {feature.direction === "positive" ? "+" : ""}{(feature.importance * 100).toFixed(1)}%
                            </span>
                            <p className="text-xs text-slate-500">Value: {feature.value}</p>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              feature.direction === "positive" ? "bg-green-500" : "bg-red-500"
                            }`}
                            style={{ width: `${Math.abs(feature.importance) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Image className="w-4 h-4 mr-2" />
                      Visualize
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Settings className="w-4 h-4 mr-2" />
                      Configure
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Methods Tab */}
        <TabsContent value="methods" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {explanationMethods.map((method) => (
              <Card key={method.name}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{method.name}</CardTitle>
                    {getStatusBadge(method.status)}
                  </div>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Accuracy</span>
                      <p className="font-semibold text-lg">{method.accuracy}%</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Speed</span>
                      <div className="mt-1">{getSpeedBadge(method.speed)}</div>
                    </div>
                    <div>
                      <span className="text-slate-600">Complexity</span>
                      <p className="font-medium capitalize">{method.complexity}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Status</span>
                      <div className="mt-1">{getStatusBadge(method.status)}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Use Cases:</p>
                    <div className="flex flex-wrap gap-1">
                      {method.useCases.map((useCase) => (
                        <Badge key={useCase} variant="secondary" className="text-xs">
                          {useCase}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Accuracy</span>
                      <span>{method.accuracy}%</span>
                    </div>
                    <Progress value={method.accuracy} className="h-2" />
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Play className="w-4 h-4 mr-2" />
                      Test
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Settings className="w-4 h-4 mr-2" />
                      Configure
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Model Interpretability Tab */}
        <TabsContent value="interpretability" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {modelInterpretability.map((model) => (
              <Card key={model.modelName}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{model.modelName}</CardTitle>
                  <CardDescription>Last analysis: {model.lastAnalysis}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-slate-900">{model.interpretabilityScore}%</p>
                    <p className="text-sm text-slate-600">Interpretability Score</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Explanations</span>
                      <p className="font-medium">{model.totalExplanations}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Avg Confidence</span>
                      <p className="font-medium">{model.avgConfidence}%</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Features</span>
                      <p className="font-medium">{model.featuresAnalyzed}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Methods</span>
                      <p className="font-medium">{model.explanationType.length}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Explanation Methods:</p>
                    <div className="flex flex-wrap gap-1">
                      {model.explanationType.map((type) => (
                        <Badge key={type} variant="secondary" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Interpretability</span>
                      <span>{model.interpretabilityScore}%</span>
                    </div>
                    <Progress value={model.interpretabilityScore} className="h-2" />
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleGenerateExplanation(model.modelName)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Analyze
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Details
                    </Button>
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