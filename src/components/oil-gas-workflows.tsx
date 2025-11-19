import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Map, 
  BarChart3, 
  TrendingUp, 
  Target, 
  Layers, 
  Globe,
  Oil,
  AlertTriangle,
  CheckCircle,
  Activity,
  DollarSign,
  Calculator,
  Search,
  Filter,
  Download,
  Play,
  Pause,
  Settings
} from 'lucide-react';

interface PlayBasedExplorationProps {
  onAnalysisComplete?: (results: any) => void;
}

export function PlayBasedExploration({ onAnalysisComplete }: PlayBasedExplorationProps) {
  const [selectedBasin, setSelectedBasin] = useState('');
  const [playType, setPlayType] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<any>(null);

  const basins = [
    'Gulf of Mexico',
    'Permian Basin',
    'Williston Basin',
    'Appalachian Basin',
    'Anadarko Basin',
    'Denver-Julesburg Basin'
  ];

  const playTypes = [
    'Structural Traps',
    'Stratigraphic Traps',
    'Unconventional Shale',
    'Deepwater Turbidites',
    'Carbonate Reefs',
    'Clinoform Slope'
  ];

  const handlePlayAnalysis = async () => {
    setIsAnalyzing(true);
    
    // Simulate AI-powered play fairway mapping
    setTimeout(() => {
      const mockResults = {
        basin: selectedBasin,
        playType: playType,
        fairwayMapping: {
          highPotential: 35, // percentage
          moderatePotential: 45,
          lowPotential: 20
        },
        leadsIdentified: 12,
        prospectsIdentified: 5,
        resourceEstimate: {
          oil: '450-800 MMBO',
          gas: '1.2-2.5 TCF',
          confidence: '75%'
        },
        riskFactors: [
          { factor: 'Source Rock Maturity', risk: 'Low', score: 25 },
          { factor: 'Reservoir Quality', risk: 'Moderate', score: 45 },
          { factor: 'Seal Integrity', risk: 'Low', score: 30 },
          { factor: 'Trap Configuration', risk: 'Moderate', score: 40 }
        ]
      };
      
      setAnalysisResults(mockResults);
      setIsAnalyzing(false);
      onAnalysisComplete?.(mockResults);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Map className="w-5 h-5" />
            Play-Based Exploration Mode
          </CardTitle>
          <CardDescription>
            Define basin parameters and play types for automated play fairway mapping
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="basin">Select Basin</Label>
              <Select value={selectedBasin} onValueChange={setSelectedBasin}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a basin" />
                </SelectTrigger>
                <SelectContent>
                  {basins.map((basin) => (
                    <SelectItem key={basin} value={basin}>
                      {basin}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="play-type">Play Type</Label>
              <Select value={playType} onValueChange={setPlayType}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose play type" />
                </SelectTrigger>
                <SelectContent>
                  {playTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button 
            onClick={handlePlayAnalysis} 
            disabled={!selectedBasin || !playType || isAnalyzing}
            className="w-full"
          >
            {isAnalyzing ? (
              <>
                <Activity className="w-4 h-4 mr-2 animate-spin" />
                Analyzing Play Fairway...
              </>
            ) : (
              <>
                <Search className="w-4 h-4 mr-2" />
                Analyze Play Fairway
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {analysisResults && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Lead & Prospect Identification
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-900">{analysisResults.leadsIdentified}</div>
                  <div className="text-sm text-blue-700">Leads Identified</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-900">{analysisResults.prospectsIdentified}</div>
                  <div className="text-sm text-green-700">Prospects Identified</div>
                </div>
              </div>
              
              <div>
                <Label className="text-sm font-medium">Fairway Mapping</Label>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">High Potential</span>
                    <span className="text-sm font-medium">{analysisResults.fairwayMapping.highPotential}%</span>
                  </div>
                  <Progress value={analysisResults.fairwayMapping.highPotential} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Moderate Potential</span>
                    <span className="text-sm font-medium">{analysisResults.fairwayMapping.moderatePotential}%</span>
                  </div>
                  <Progress value={analysisResults.fairwayMapping.moderatePotential} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Low Potential</span>
                    <span className="text-sm font-medium">{analysisResults.fairwayMapping.lowPotential}%</span>
                  </div>
                  <Progress value={analysisResults.fairwayMapping.lowPotential} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Resource Volume Estimation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Oil className="w-4 h-4 text-orange-600" />
                    <span className="font-medium">Oil Resources</span>
                  </div>
                  <span className="font-bold text-orange-900">{analysisResults.resourceEstimate.oil}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-blue-600" />
                    <span className="font-medium">Gas Resources</span>
                  </div>
                  <span className="font-bold text-blue-900">{analysisResults.resourceEstimate.gas}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-medium">Confidence Level</span>
                  </div>
                  <span className="font-bold text-green-900">{analysisResults.resourceEstimate.confidence}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Risk Factor Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {analysisResults.riskFactors.map((risk: any, index: number) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{risk.factor}</span>
                      <Badge variant={risk.risk === 'Low' ? 'default' : risk.risk === 'Moderate' ? 'secondary' : 'destructive'}>
                        {risk.risk}
                      </Badge>
                    </div>
                    <Progress value={risk.score} className="h-2" />
                    <div className="text-xs text-gray-500">Risk Score: {risk.score}%</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

interface ProspectEvaluationProps {
  onAnalysisComplete?: (results: any) => void;
}

export function ProspectEvaluation({ onAnalysisComplete }: ProspectEvaluationProps) {
  const [prospectName, setProspectName] = useState('');
  const [prospectType, setProspectType] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [evaluationResults, setEvaluationResults] = useState<any>(null);

  const prospectTypes = [
    'Structural Closure',
    'Stratigraphic Pinchout',
    'Unconformity Trap',
    'Fault Block',
    'Reef Buildup',
    'Channel Sand'
  ];

  const handleProspectEvaluation = async () => {
    setIsAnalyzing(true);
    
    setTimeout(() => {
      const mockResults = {
        prospectName: prospectName,
        prospectType: prospectType,
        trapAnalysis: {
          closureArea: '320 acres',
          relief: '85 feet',
          spillPoint: '8,500 feet',
          integrity: 'Good'
        },
        reserveCalculations: {
          oil: {
            best: '45 MMBO',
            low: '25 MMBO',
            high: '70 MMBO',
            uncertainty: '+/- 35%'
          },
          gas: {
            best: '120 BCF',
            low: '80 BCF',
            high: '180 BCF',
            uncertainty: '+/- 40%'
          }
        },
        drillingLocation: {
          recommendedTarget: '8,420 feet',
          surfaceLocation: 'Lat 32.5°N, Long 98.2°W',
          confidence: '85%'
        },
        economicModeling: {
          npv10: '$250M',
          irr: '22%',
          payout: '3.2 years',
          breakeven: '$45/bbl'
        }
      };
      
      setEvaluationResults(mockResults);
      setIsAnalyzing(false);
      onAnalysisComplete?.(mockResults);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            Prospect Evaluation Mode
          </CardTitle>
          <CardDescription>
            Detailed trap analysis, reserve calculation, and economic modeling
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="prospect-name">Prospect Name</Label>
              <Input
                id="prospect-name"
                value={prospectName}
                onChange={(e) => setProspectName(e.target.value)}
                placeholder="Enter prospect name"
              />
            </div>
            <div>
              <Label htmlFor="prospect-type">Prospect Type</Label>
              <Select value={prospectType} onValueChange={setProspectType}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose prospect type" />
                </SelectTrigger>
                <SelectContent>
                  {prospectTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button 
            onClick={handleProspectEvaluation} 
            disabled={!prospectName || !prospectType || isAnalyzing}
            className="w-full"
          >
            {isAnalyzing ? (
              <>
                <Activity className="w-4 h-4 mr-2 animate-spin" />
                Evaluating Prospect...
              </>
            ) : (
              <>
                <Calculator className="w-4 h-4 mr-2" />
                Evaluate Prospect
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {evaluationResults && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Detailed Trap Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">Closure Area</Label>
                  <div className="text-lg font-bold">{evaluationResults.trapAnalysis.closureArea}</div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Relief</Label>
                  <div className="text-lg font-bold">{evaluationResults.trapAnalysis.relief}</div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Spill Point</Label>
                  <div className="text-lg font-bold">{evaluationResults.trapAnalysis.spillPoint}</div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Integrity</Label>
                  <div className="text-lg font-bold text-green-600">{evaluationResults.trapAnalysis.integrity}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Reserve Calculations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-orange-50 rounded-lg">
                  <div className="font-medium text-orange-900 mb-2">Oil Reserves</div>
                  <div className="text-sm space-y-1">
                    <div>Best: {evaluationResults.reserveCalculations.oil.best}</div>
                    <div>Low: {evaluationResults.reserveCalculations.oil.low}</div>
                    <div>High: {evaluationResults.reserveCalculations.oil.high}</div>
                    <div className="text-orange-700">Uncertainty: {evaluationResults.reserveCalculations.oil.uncertainty}</div>
                  </div>
                </div>
                
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="font-medium text-blue-900 mb-2">Gas Reserves</div>
                  <div className="text-sm space-y-1">
                    <div>Best: {evaluationResults.reserveCalculations.gas.best}</div>
                    <div>Low: {evaluationResults.reserveCalculations.gas.low}</div>
                    <div>High: {evaluationResults.reserveCalculations.gas.high}</div>
                    <div className="text-blue-700">Uncertainty: {evaluationResults.reserveCalculations.gas.uncertainty}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Map className="w-5 h-5" />
                Drilling Location Optimization
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <Label className="text-sm font-medium">Recommended Target Depth</Label>
                  <div className="text-lg font-bold">{evaluationResults.drillingLocation.recommendedTarget}</div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Surface Location</Label>
                  <div className="text-sm">{evaluationResults.drillingLocation.surfaceLocation}</div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Confidence Level</Label>
                  <div className="text-lg font-bold text-green-600">{evaluationResults.drillingLocation.confidence}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Economic Modeling
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">NPV10</Label>
                  <div className="text-lg font-bold text-green-600">{evaluationResults.economicModeling.npv10}</div>
                </div>
                <div>
                  <Label className="text-sm font-medium">IRR</Label>
                  <div className="text-lg font-bold">{evaluationResults.economicModeling.irr}</div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Payout</Label>
                  <div className="text-lg font-bold">{evaluationResults.economicModeling.payout}</div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Breakeven</Label>
                  <div className="text-lg font-bold">{evaluationResults.economicModeling.breakeven}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

interface PortfolioManagementProps {
  onAnalysisComplete?: (results: any) => void;
}

export function PortfolioManagement({ onAnalysisComplete }: PortfolioManagementProps) {
  const [portfolioName, setPortfolioName] = useState('');
  const [riskTolerance, setRiskTolerance] = useState('');
  const [investmentHorizon, setInvestmentHorizon] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [portfolioResults, setPortfolioResults] = useState<any>(null);

  const riskLevels = ['Conservative', 'Moderate', 'Aggressive'];
  const horizons = ['1-2 Years', '3-5 Years', '5-10 Years'];

  const handlePortfolioOptimization = async () => {
    setIsAnalyzing(true);
    
    setTimeout(() => {
      const mockResults = {
        portfolioName: portfolioName,
        riskTolerance: riskTolerance,
        investmentHorizon: investmentHorizon,
        basinComparison: [
          { basin: 'Permian Basin', score: 85, risk: 'Moderate', potential: 'High' },
          { basin: 'Gulf of Mexico', score: 78, risk: 'High', potential: 'Very High' },
          { basin: 'Williston Basin', score: 72, risk: 'Low', potential: 'Moderate' },
          { basin: 'Denver-Julesburg', score: 68, risk: 'Moderate', potential: 'Moderate' }
        ],
        prospectRanking: [
          { rank: 1, name: 'Eagle Ford Prospect', score: 92, risk: 'Moderate', npv: '$180M' },
          { rank: 2, name: 'Permian Discovery', score: 88, risk: 'Low', npv: '$220M' },
          { rank: 3, name: 'Gulf Deepwater', score: 85, risk: 'High', npv: '$350M' },
          { rank: 4, name: 'Williston Extension', score: 79, risk: 'Low', npv: '$120M' }
        ],
        investmentOptimization: {
          totalInvestment: '$850M',
          expectedReturn: '28%',
          riskAdjustedReturn: '22%',
          diversificationScore: 85,
          recommendations: [
            'Increase allocation to Permian Basin',
            'Consider deepwater opportunities for high growth',
            'Maintain conservative positions in Williston',
            'Reduce exposure to high-risk frontier plays'
          ]
        }
      };
      
      setPortfolioResults(mockResults);
      setIsAnalyzing(false);
      onAnalysisComplete?.(mockResults);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Portfolio Management Mode
          </CardTitle>
          <CardDescription>
            Multiple basin comparison, prospect ranking, and investment optimization
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="portfolio-name">Portfolio Name</Label>
              <Input
                id="portfolio-name"
                value={portfolioName}
                onChange={(e) => setPortfolioName(e.target.value)}
                placeholder="Enter portfolio name"
              />
            </div>
            <div>
              <Label htmlFor="risk-tolerance">Risk Tolerance</Label>
              <Select value={riskTolerance} onValueChange={setRiskTolerance}>
                <SelectTrigger>
                  <SelectValue placeholder="Select risk tolerance" />
                </SelectTrigger>
                <SelectContent>
                  {riskLevels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="investment-horizon">Investment Horizon</Label>
              <Select value={investmentHorizon} onValueChange={setInvestmentHorizon}>
                <SelectTrigger>
                  <SelectValue placeholder="Select horizon" />
                </SelectTrigger>
                <SelectContent>
                  {horizons.map((horizon) => (
                    <SelectItem key={horizon} value={horizon}>
                      {horizon}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button 
            onClick={handlePortfolioOptimization} 
            disabled={!portfolioName || !riskTolerance || !investmentHorizon || isAnalyzing}
            className="w-full"
          >
            {isAnalyzing ? (
              <>
                <Activity className="w-4 h-4 mr-2 animate-spin" />
                Optimizing Portfolio...
              </>
            ) : (
              <>
                <BarChart3 className="w-4 h-4 mr-2" />
                Optimize Portfolio
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {portfolioResults && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Multiple Basin Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {portfolioResults.basinComparison.map((basin: any, index: number) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium">{basin.basin}</div>
                      <div className="text-sm text-gray-600">Score: {basin.score}/100</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant={basin.risk === 'Low' ? 'default' : basin.risk === 'Moderate' ? 'secondary' : 'destructive'}>
                        {basin.risk} Risk
                      </Badge>
                      <Badge variant="outline">
                        {basin.potential} Potential
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Prospect Ranking Across Regions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {portfolioResults.prospectRanking.map((prospect: any, index: number) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        {prospect.rank}
                      </div>
                      <div>
                        <div className="font-medium">{prospect.name}</div>
                        <div className="text-sm text-gray-600">Score: {prospect.score}/100</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant={prospect.risk === 'Low' ? 'default' : prospect.risk === 'Moderate' ? 'secondary' : 'destructive'}>
                        {prospect.risk}
                      </Badge>
                      <span className="font-bold text-green-600">{prospect.npv}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Investment Optimization
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-900">{portfolioResults.investmentOptimization.totalInvestment}</div>
                  <div className="text-sm text-blue-700">Total Investment</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-900">{portfolioResults.investmentOptimization.expectedReturn}</div>
                  <div className="text-sm text-green-700">Expected Return</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-900">{portfolioResults.investmentOptimization.riskAdjustedReturn}</div>
                  <div className="text-sm text-orange-700">Risk-Adjusted Return</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-900">{portfolioResults.investmentOptimization.diversificationScore}</div>
                  <div className="text-sm text-purple-700">Diversification Score</div>
                </div>
              </div>
              
              <div>
                <Label className="text-sm font-medium">Recommendations</Label>
                <div className="mt-2 space-y-2">
                  {portfolioResults.investmentOptimization.recommendations.map((rec: string, index: number) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <span className="text-sm">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}