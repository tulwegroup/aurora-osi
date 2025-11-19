import ZAI from 'z-ai-web-dev-sdk';

export interface PetroleumSystem {
  source: {
    quality: number;        // 0-100
    maturity: number;       // 0-100
    volume: number;         // million tons
    timing: string;         // geological timing
  };
  migration: {
    pathways: string[];     // migration route descriptions
    efficiency: number;     // 0-100
    distance: number;        // km
    timing: string;         // migration timing
  };
  reservoir: {
    quality: number;        // 0-100
    porosity: number;       // percentage
    permeability: number;   // millidarcies
    thickness: number;      // meters
  };
  seal: {
    integrity: number;      // 0-100
    thickness: number;      // meters
    continuity: number;     // 0-100
  };
  trap: {
    type: string;          // structural, stratigraphic, combination
    closure: number;        // meters
    area: number;          // km²
    integrity: number;     // 0-100
  };
}

export interface ReserveEstimation {
  oilInPlace: {
    best: number;           // million barrels
    low: number;            // million barrels
    high: number;           // million barrels
    confidence: number;    // percentage
  };
  gasInPlace: {
    best: number;           // billion cubic feet
    low: number;            // billion cubic feet
    high: number;           // billion cubic feet
    confidence: number;    // percentage
  };
  recoverableOil: {
    best: number;           // million barrels
    recoveryFactor: number; // percentage
    uncertainty: number;    // percentage
  };
  recoverableGas: {
    best: number;           // billion cubic feet
    recoveryFactor: number; // percentage
    uncertainty: number;    // percentage
  };
}

export interface RiskAssessment {
  geologicalRisk: {
    sourceRisk: number;     // 0-100
    reservoirRisk: number;  // 0-100
    sealRisk: number;       // 0-100
    trapRisk: number;       // 0-100
    timingRisk: number;     // 0-100
  };
  economicRisk: {
    oilPriceRisk: number;   // 0-100
    costRisk: number;       // 0-100
    marketRisk: number;     // 0-100
    regulatoryRisk: number; // 0-100
  };
  technicalRisk: {
    drillingRisk: number;   // 0-100
    completionRisk: number; // 0-100
    productionRisk: number; // 0-100
    infrastructureRisk: number; // 0-100
  };
  overallChance: {
    geological: number;    // 0-100
    commercial: number;     // 0-100
    combined: number;       // 0-100
  };
}

export interface PlayFramework {
  playName: string;
  basin: string;
  playType: string;
  petroleumSystem: PetroleumSystem;
  reserveEstimation: ReserveEstimation;
  riskAssessment: RiskAssessment;
  analogs: string[];
  recommendations: string[];
}

class PetroleumSystemIntegrator {
  private zai: ZAI | null = null;
  private initialized = false;

  private async initialize() {
    if (this.initialized) return;
    
    try {
      this.zai = await ZAI.create();
      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize ZAI:', error);
      throw error;
    }
  }

  // Main petroleum system integration
  async integratePetroleumSystem(
    geologicalData: any,
    geochemicalData: any,
    geophysicalData: any,
    basinHistory: any
  ): Promise<PetroleumSystem> {
    await this.initialize();

    if (!this.zai) throw new Error('ZAI not initialized');

    try {
      const integration = await this.zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are a senior petroleum systems analyst with expertise in integrating multi-disciplinary data for comprehensive petroleum system analysis.'
          },
          {
            role: 'user',
            content: `Integrate this data into a comprehensive petroleum system analysis:
            
            Geological Data: ${JSON.stringify(geologicalData)}
            Geochemical Data: ${JSON.stringify(geochemicalData)}
            Geophysical Data: ${JSON.stringify(geophysicalData)}
            Basin History: ${JSON.stringify(basinHistory)}
            
            Analyze and provide detailed assessments for:
            1. SOURCE: Rock quality, thermal maturity, volume potential, generation timing
            2. MIGRATION: Pathways, efficiency, distance, timing
            3. RESERVOIR: Quality, porosity, permeability, thickness
            4. SEAL: Integrity, thickness, continuity
            5. TRAP: Type, closure, area, integrity
            
            Provide numerical scores (0-100) and detailed descriptions.`
          }
        ]
      });

      const response = integration.choices[0]?.message?.content || '';
      
      return {
        source: this.extractSourceAnalysis(response),
        migration: this.extractMigrationAnalysis(response),
        reservoir: this.extractReservoirAnalysis(response),
        seal: this.extractSealAnalysis(response),
        trap: this.extractTrapAnalysis(response)
      };
    } catch (error) {
      console.error('Error integrating petroleum system:', error);
      throw error;
    }
  }

  // Timing and charge history modeling
  async modelChargeHistory(
    petroleumSystem: PetroleumSystem,
    thermalHistory: any,
    burialHistory: any
  ): Promise<any> {
    await this.initialize();

    if (!this.zai) throw new Error('ZAI not initialized');

    try {
      const modeling = await this.zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are a basin modeling expert specializing in thermal and burial history analysis for hydrocarbon charge modeling.'
          },
          {
            role: 'user',
            content: `Model the charge history for this petroleum system:
            
            Petroleum System: ${JSON.stringify(petroleumSystem)}
            Thermal History: ${JSON.stringify(thermalHistory)}
            Burial History: ${JSON.stringify(burialHistory)}
            
            Analyze:
            1. Hydrocarbon generation timing and volumes
            2. Migration timing and efficiency
            3. Accumulation timing and preservation
            4. Critical moment analysis
            5. Charge risk assessment
            
            Provide detailed temporal analysis with numerical estimates.`
          }
        ]
      });

      const response = modeling.choices[0]?.message?.content || '';
      
      return {
        generationHistory: this.extractGenerationHistory(response),
        migrationHistory: this.extractMigrationHistory(response),
        accumulationHistory: this.extractAccumulationHistory(response),
        criticalMoment: this.extractCriticalMoment(response),
        chargeRisk: this.extractChargeRisk(response)
      };
    } catch (error) {
      console.error('Error modeling charge history:', error);
      throw error;
    }
  }
}

class ReserveEstimationEngine {
  private zai: ZAI | null = null;
  private initialized = false;

  private async initialize() {
    if (this.initialized) return;
    
    try {
      this.zai = await ZAI.create();
      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize ZAI:', error);
      throw error;
    }
  }

  // Volumetric calculations with uncertainty quantification
  async calculateReserves(
    reservoirParameters: any,
    fluidProperties: any,
    uncertaintyFactors: any
  ): Promise<ReserveEstimation> {
    await this.initialize();

    if (!this.zai) throw new Error('ZAI not initialized');

    try {
      const calculation = await this.zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are a reservoir engineering expert specializing in volumetric reserve calculations with uncertainty analysis.'
          },
          {
            role: 'user',
            content: `Calculate hydrocarbon reserves using volumetric method:
            
            Reservoir Parameters: ${JSON.stringify(reservoirParameters)}
            Fluid Properties: ${JSON.stringify(fluidProperties)}
            Uncertainty Factors: ${JSON.stringify(uncertaintyFactors)}
            
            Calculate:
            1. Oil in place (best, low, high estimates)
            2. Gas in place (best, low, high estimates)
            3. Recoverable oil with recovery factors
            4. Recoverable gas with recovery factors
            5. Uncertainty quantification for each estimate
            
            Use standard petroleum engineering formulas and provide numerical results in million barrels (oil) and billion cubic feet (gas).`
          }
        ]
      });

      const response = calculation.choices[0]?.message?.content || '';
      
      return {
        oilInPlace: this.extractOilInPlace(response),
        gasInPlace: this.extractGasInPlace(response),
        recoverableOil: this.extractRecoverableOil(response),
        recoverableGas: this.extractRecoverableGas(response)
      };
    } catch (error) {
      console.error('Error calculating reserves:', error);
      throw error;
    }
  }

  // Recovery factor prediction from rock properties
  async predictRecoveryFactor(
    rockProperties: any,
    fluidProperties: any,
    recoveryMethod: string
  ): Promise<any> {
    await this.initialize();

    if (!this.zai) throw new Error('ZAI not initialized');

    try {
      const prediction = await this.zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are a recovery specialist with expertise in predicting recovery factors based on rock and fluid properties.'
          },
          {
            role: 'user',
            content: `Predict recovery factor for this reservoir:
            
            Rock Properties: ${JSON.stringify(rockProperties)}
            Fluid Properties: ${JSON.stringify(fluidProperties)}
            Recovery Method: ${recoveryMethod}
            
            Consider:
            1. Primary recovery factor
            2. Secondary recovery potential
            3. Tertiary/Enhanced recovery potential
            4. Ultimate recovery factor
            5. Factors limiting recovery
            
            Provide numerical estimates with justification.`
          }
        ]
      });

      const response = prediction.choices[0]?.message?.content || '';
      
      return {
        primaryRecovery: this.extractRecoveryFactor(response, 'primary'),
        secondaryRecovery: this.extractRecoveryFactor(response, 'secondary'),
        tertiaryRecovery: this.extractRecoveryFactor(response, 'tertiary'),
        ultimateRecovery: this.extractRecoveryFactor(response, 'ultimate'),
        limitingFactors: this.extractLimitingFactors(response)
      };
    } catch (error) {
      console.error('Error predicting recovery factor:', error);
      throw error;
    }
  }
}

class RiskAssessmentModule {
  private zai: ZAI | null = null;
  private initialized = false;

  private async initialize() {
    if (this.initialized) return;
    
    try {
      this.zai = await ZAI.create();
      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize ZAI:', error);
      throw error;
    }
  }

  // Common risk segment mapping
  async assessRiskSegments(
    petroleumSystem: PetroleumSystem,
    reserveEstimation: ReserveEstimation,
    economicParameters: any
  ): Promise<RiskAssessment> {
    await this.initialize();

    if (!this.zai) throw new Error('ZAI not initialized');

    try {
      const assessment = await this.zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are a risk assessment specialist focusing on petroleum exploration and development risk analysis.'
          },
          {
            role: 'user',
            content: `Perform comprehensive risk assessment for this petroleum prospect:
            
            Petroleum System: ${JSON.stringify(petroleumSystem)}
            Reserve Estimation: ${JSON.stringify(reserveEstimation)}
            Economic Parameters: ${JSON.stringify(economicParameters)}
            
            Assess:
            1. GEOLOGICAL RISKS: Source, reservoir, seal, trap, timing
            2. ECONOMIC RISKS: Oil price, costs, market, regulatory
            3. TECHNICAL RISKS: Drilling, completion, production, infrastructure
            4. CHANCE FACTORS: Geological chance of success, commercial chance
            5. OVERALL RISK: Combined risk assessment
            
            Provide numerical risk scores (0-100, where 100 is highest risk) and detailed analysis.`
          }
        ]
      });

      const response = assessment.choices[0]?.message?.content || '';
      
      return {
        geologicalRisk: this.extractGeologicalRisk(response),
        economicRisk: this.extractEconomicRisk(response),
        technicalRisk: this.extractTechnicalRisk(response),
        overallChance: this.extractOverallChance(response)
      };
    } catch (error) {
      console.error('Error assessing risk segments:', error);
      throw error;
    }
  }

  // Chance factor calculation for each play element
  async calculateChanceFactors(
    riskAssessment: RiskAssessment,
    analogData: any
  ): Promise<any> {
    await this.initialize();

    if (!this.zai) throw new Error('ZAI not initialized');

    try {
      const calculation = await this.zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are a risk analysis expert specializing in chance factor calculations for petroleum exploration.'
          },
          {
            role: 'user',
            content: `Calculate chance factors for this petroleum play:
            
            Risk Assessment: ${JSON.stringify(riskAssessment)}
            Analog Data: ${JSON.stringify(analogData)}
            
            Calculate:
            1. Probability of presence for each play element
            2. Conditional probabilities
            3. Combined geological chance of success
            4. Commercial chance of success
            5. Expected monetary value analysis
            
            Use standard industry methodologies and provide numerical probabilities.`
          }
        ]
      });

      const response = calculation.choices[0]?.message?.content || '';
      
      return {
        elementProbabilities: this.extractElementProbabilities(response),
        conditionalProbabilities: this.extractConditionalProbabilities(response),
        geologicalChance: this.extractGeologicalChance(response),
        commercialChance: this.extractCommercialChance(response),
        expectedValue: this.extractExpectedValue(response)
      };
    } catch (error) {
      console.error('Error calculating chance factors:', error);
      throw error;
    }
  }
}

// Helper methods for extracting structured data from AI responses
class ResponseParser {
  static extractNumericalValue(text: string, keywords: string[]): number {
    for (const keyword of keywords) {
      const regex = new RegExp(`(\\d+(?:\\.\\d+)?)\\s*(?:%|percent|${keyword})`, 'i');
      const match = text.match(regex);
      if (match) {
        return parseFloat(match[1]);
      }
    }
    return 0;
  }

  static extractRange(text: string, keyword: string): { low: number; best: number; high: number } {
    const regex = new RegExp(`(?:${keyword})[^:]*:?(\\d+(?:\\.\\d+)?)[^\\d]*?(\\d+(?:\\.\\d+)?)[^\\d]*?(\\d+(?:\\.\\d+)?)`, 'i');
    const match = text.match(regex);
    if (match && match.length >= 4) {
      return {
        low: parseFloat(match[1]),
        best: parseFloat(match[2]),
        high: parseFloat(match[3])
      };
    }
    return { low: 0, best: 0, high: 0 };
  }
}

// Extend the main classes with parsing methods
PetroleumSystemIntegrator.prototype.extractSourceAnalysis = function(response: string) {
  return {
    quality: ResponseParser.extractNumericalValue(response, ['source quality', 'source rock quality']),
    maturity: ResponseParser.extractNumericalValue(response, ['maturity', 'thermal maturity']),
    volume: ResponseParser.extractNumericalValue(response, ['volume', 'generation']),
    timing: response.includes('early') ? 'early' : response.includes('late') ? 'late' : 'optimal'
  };
};

PetroleumSystemIntegrator.prototype.extractMigrationAnalysis = function(response: string) {
  return {
    pathways: response.match(/pathway[^.]*\./gi) || [],
    efficiency: ResponseParser.extractNumericalValue(response, ['migration efficiency']),
    distance: ResponseParser.extractNumericalValue(response, ['distance', 'migration distance']),
    timing: response.includes('recent') ? 'recent' : response.includes('ancient') ? 'ancient' : 'multiple phases'
  };
};

// Export all classes
export const petroleumSystemIntegrator = new PetroleumSystemIntegrator();
export const reserveEstimationEngine = new ReserveEstimationEngine();
export const riskAssessmentModule = new RiskAssessmentModule();