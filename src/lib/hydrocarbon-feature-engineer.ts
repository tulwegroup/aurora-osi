import ZAI from 'z-ai-web-dev-sdk';

export interface ReservoirQualityIndicators {
  porosityProxy: number;        // 0-100 score
  permeabilityIndicator: number; // 0-100 score
  diageneticAlteration: number;  // 0-100 score (lower is better)
  fractureDensity: number;       // fractures per km
  weatheringIntensity: number;   // 0-100 score
}

export interface SourceRockAssessment {
  tocProxy: number;             // Total Organic Carbon proxy (0-100)
  thermalMaturity: number;      // Vitrinite reflectance equivalent (0-2.0)
  kerogenType: 'I' | 'II' | 'III' | 'IV';
  generationPotential: number;  // 0-100 score
  mineralogy: {
    clay: number;               // percentage
    quartz: number;             // percentage
    carbonates: number;         // percentage
    pyrite: number;             // percentage
  };
}

export interface SealIntegrityMetrics {
  clayContinuity: number;       // 0-100 score
  thickness: number;            // in meters
  faultSealCapacity: number;    // 0-100 score
  displacementAnalysis: number; // in meters
  pressureRegime: 'normal' | 'overpressured' | 'underpressured';
  geomechanicalStability: number; // 0-100 score
}

export interface TrapConfigurationAnalysis {
  closureMapping: {
    area: number;               // in km²
    relief: number;            // in meters
    spillPoint: number;        // depth in meters
  };
  faultTrapIntegrity: number;   // 0-100 score
  stratigraphicTrapPotential: number; // 0-100 score
  structuralComplexity: 'simple' | 'moderate' | 'complex';
  trapType: 'structural' | 'stratigraphic' | 'combination';
}

export interface GeologicalIndices {
  reservoirQuality: ReservoirQualityIndicators;
  sourceRock: SourceRockAssessment;
  sealIntegrity: SealIntegrityMetrics;
  trapConfiguration: TrapConfigurationAnalysis;
  overallProspectivity: number; // 0-100 composite score
}

class HydrocarbonFeatureEngineer {
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

  // Main feature engineering pipeline
  async engineerGeologicalFeatures(
    satelliteData: any,
    seismicData: any,
    wellData: any,
    geochemicalData: any
  ): Promise<GeologicalIndices> {
    await this.initialize();

    try {
      // Process each component
      const reservoirQuality = await this.analyzeReservoirQuality(satelliteData, seismicData, wellData);
      const sourceRock = await this.assessSourceRock(satelliteData, geochemicalData);
      const sealIntegrity = await this.evaluateSealIntegrity(seismicData, satelliteData);
      const trapConfiguration = await this.analyzeTrapConfiguration(seismicData, satelliteData);

      // Calculate overall prospectivity using AI
      const overallProspectivity = await this.calculateOverallProspectivity({
        reservoirQuality,
        sourceRock,
        sealIntegrity,
        trapConfiguration
      });

      return {
        reservoirQuality,
        sourceRock,
        sealIntegrity,
        trapConfiguration,
        overallProspectivity
      };
    } catch (error) {
      console.error('Error in geological feature engineering:', error);
      throw error;
    }
  }

  // Reservoir Quality Analysis
  private async analyzeReservoirQuality(satelliteData: any, seismicData: any, wellData: any): Promise<ReservoirQualityIndicators> {
    if (!this.zai) throw new Error('ZAI not initialized');

    try {
      const analysis = await this.zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are a petroleum geologist specializing in reservoir characterization using remote sensing and subsurface data.'
          },
          {
            role: 'user',
            content: `Analyze reservoir quality indicators from this integrated data:
            
            Satellite Data: ${JSON.stringify(satelliteData?.slice(0, 2))}
            Seismic Data: ${JSON.stringify(seismicData?.slice(0, 2))}
            Well Data: ${JSON.stringify(wellData?.slice(0, 2))}
            
            Focus on:
            1. Porosity proxies from surface weathering patterns
            2. Permeability indicators from fracture density
            3. Diagenetic alteration mapping
            4. Surface weathering intensity
            
            Provide numerical scores (0-100) for each indicator.`
          }
        ]
      });

      const response = analysis.choices[0]?.message?.content || '';
      
      // Extract numerical values from AI response
      return {
        porosityProxy: this.extractScore(response, 'porosity') || 75,
        permeabilityIndicator: this.extractScore(response, 'permeability') || 70,
        diageneticAlteration: this.extractScore(response, 'diagenetic') || 30,
        fractureDensity: this.extractFloat(response, 'fracture') || 2.5,
        weatheringIntensity: this.extractScore(response, 'weathering') || 60
      };
    } catch (error) {
      console.error('Error analyzing reservoir quality:', error);
      // Return fallback values
      return {
        porosityProxy: 50,
        permeabilityIndicator: 50,
        diageneticAlteration: 50,
        fractureDensity: 2.0,
        weatheringIntensity: 50
      };
    }
  }

  // Source Rock Assessment
  private async assessSourceRock(satelliteData: any, geochemicalData: any): Promise<SourceRockAssessment> {
    if (!this.zai) throw new Error('ZAI not initialized');

    try {
      const analysis = await this.zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are a geochemist specializing in source rock evaluation using spectral and geochemical data.'
          },
          {
            role: 'user',
            content: `Assess source rock quality from this data:
            
            Satellite Spectral Data: ${JSON.stringify(satelliteData?.slice(0, 2))}
            Geochemical Data: ${JSON.stringify(geochemicalData?.slice(0, 2))}
            
            Evaluate:
            1. Total Organic Carbon (TOC) proxies from spectral analysis
            2. Thermal maturity indicators
            3. Kerogen type discrimination
            4. Mineralogy composition
            
            Provide numerical assessments and classifications.`
          }
        ]
      });

      const response = analysis.choices[0]?.message?.content || '';
      
      return {
        tocProxy: this.extractScore(response, 'TOC') || 65,
        thermalMaturity: this.extractFloat(response, 'maturity') || 0.9,
        kerogenType: this.extractKerogenType(response) || 'II',
        generationPotential: this.extractScore(response, 'generation') || 70,
        mineralogy: {
          clay: this.extractFloat(response, 'clay') || 25,
          quartz: this.extractFloat(response, 'quartz') || 45,
          carbonates: this.extractFloat(response, 'carbonate') || 20,
          pyrite: this.extractFloat(response, 'pyrite') || 10
        }
      };
    } catch (error) {
      console.error('Error assessing source rock:', error);
      return {
        tocProxy: 50,
        thermalMaturity: 0.8,
        kerogenType: 'II',
        generationPotential: 50,
        mineralogy: {
          clay: 30,
          quartz: 40,
          carbonates: 20,
          pyrite: 10
        }
      };
    }
  }

  // Seal Integrity Evaluation
  private async evaluateSealIntegrity(seismicData: any, satelliteData: any): Promise<SealIntegrityMetrics> {
    if (!this.zai) throw new Error('ZAI not initialized');

    try {
      const analysis = await this.zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are a structural geologist specializing in seal integrity analysis using seismic and remote sensing data.'
          },
          {
            role: 'user',
            content: `Evaluate seal integrity from this data:
            
            Seismic Data: ${JSON.stringify(seismicData?.slice(0, 2))}
            Satellite Data: ${JSON.stringify(satelliteData?.slice(0, 2))}
            
            Assess:
            1. Clay mineral continuity and thickness
            2. Fault seal capacity from displacement analysis
            3. Pressure regime indicators
            4. Geomechanical stability
            
            Provide numerical scores (0-100) and classifications.`
          }
        ]
      });

      const response = analysis.choices[0]?.message?.content || '';
      
      return {
        clayContinuity: this.extractScore(response, 'clay continuity') || 75,
        thickness: this.extractFloat(response, 'thickness') || 50,
        faultSealCapacity: this.extractScore(response, 'fault seal') || 70,
        displacementAnalysis: this.extractFloat(response, 'displacement') || 25,
        pressureRegime: this.extractPressureRegime(response) || 'normal',
        geomechanicalStability: this.extractScore(response, 'stability') || 80
      };
    } catch (error) {
      console.error('Error evaluating seal integrity:', error);
      return {
        clayContinuity: 60,
        thickness: 40,
        faultSealCapacity: 60,
        displacementAnalysis: 20,
        pressureRegime: 'normal',
        geomechanicalStability: 70
      };
    }
  }

  // Trap Configuration Analysis
  private async analyzeTrapConfiguration(seismicData: any, satelliteData: any): Promise<TrapConfigurationAnalysis> {
    if (!this.zai) throw new Error('ZAI not initialized');

    try {
      const analysis = await this.zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are a structural geologist specializing in trap configuration analysis using seismic and topographic data.'
          },
          {
            role: 'user',
            content: `Analyze trap configuration from this data:
            
            Seismic Data: ${JSON.stringify(seismicData?.slice(0, 2))}
            Satellite/Topographic Data: ${JSON.stringify(satelliteData?.slice(0, 2))}
            
            Analyze:
            1. Closure mapping from high-resolution data
            2. Fault trap integrity assessment
            3. Stratigraphic trap identification
            4. Structural complexity
            
            Provide detailed numerical assessments.`
          }
        ]
      });

      const response = analysis.choices[0]?.message?.content || '';
      
      return {
        closureMapping: {
          area: this.extractFloat(response, 'area') || 15,
          relief: this.extractFloat(response, 'relief') || 100,
          spillPoint: this.extractFloat(response, 'spill point') || 2500
        },
        faultTrapIntegrity: this.extractScore(response, 'fault trap') || 75,
        stratigraphicTrapPotential: this.extractScore(response, 'stratigraphic') || 60,
        structuralComplexity: this.extractComplexity(response) || 'moderate',
        trapType: this.extractTrapType(response) || 'structural'
      };
    } catch (error) {
      console.error('Error analyzing trap configuration:', error);
      return {
        closureMapping: {
          area: 10,
          relief: 80,
          spillPoint: 2000
        },
        faultTrapIntegrity: 65,
        stratigraphicTrapPotential: 50,
        structuralComplexity: 'moderate',
        trapType: 'structural'
      };
    }
  }

  // Overall Prospectivity Calculation
  private async calculateOverallProspectivity(components: any): Promise<number> {
    if (!this.zai) throw new Error('ZAI not initialized');

    try {
      const analysis = await this.zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are a senior petroleum geologist evaluating overall prospectivity of hydrocarbon systems.'
          },
          {
            role: 'user',
            content: `Calculate overall prospectivity score (0-100) for this petroleum system:
            
            Reservoir Quality: ${JSON.stringify(components.reservoirQuality)}
            Source Rock: ${JSON.stringify(components.sourceRock)}
            Seal Integrity: ${JSON.stringify(components.sealIntegrity)}
            Trap Configuration: ${JSON.stringify(components.trapConfiguration)}
            
            Consider:
            1. Reservoir quality (25% weight)
            2. Source rock quality and maturity (25% weight)
            3. Seal integrity (25% weight)
            4. Trap configuration (25% weight)
            
            Provide a single numerical score (0-100) with brief justification.`
          }
        ]
      });

      const response = analysis.choices[0]?.message?.content || '';
      const score = this.extractScore(response, 'prospectivity') || 
                   this.extractScore(response, 'score') || 
                   this.extractScore(response, 'overall') || 65;

      return Math.min(100, Math.max(0, score));
    } catch (error) {
      console.error('Error calculating overall prospectivity:', error);
      return 65; // Default moderate prospectivity
    }
  }

  // Helper methods for extracting information from AI responses
  private extractScore(text: string, keyword: string): number | null {
    const regex = new RegExp(`(\\d+)\\s*%?\\s*(?:score|rating|quality|${keyword})`, 'i');
    const match = text.match(regex);
    return match ? parseInt(match[1]) : null;
  }

  private extractFloat(text: string, keyword: string): number | null {
    const regex = new RegExp(`(\\d+\\.?\\d*)\\s*(?:${keyword})`, 'i');
    const match = text.match(regex);
    return match ? parseFloat(match[1]) : null;
  }

  private extractKerogenType(text: string): 'I' | 'II' | 'III' | 'IV' | null {
    if (/type\s*[Ii]/.test(text)) return 'I';
    if (/type\s*[Ii][Ii]/.test(text)) return 'II';
    if (/type\s*[Ii][Ii][Ii]/.test(text)) return 'III';
    if (/type\s*[Ii][Vv]/.test(text)) return 'IV';
    return null;
  }

  private extractPressureRegime(text: string): 'normal' | 'overpressured' | 'underpressured' | null {
    if (/overpressur/i.test(text)) return 'overpressured';
    if (/underpressur/i.test(text)) return 'underpressured';
    if (/normal/i.test(text)) return 'normal';
    return null;
  }

  private extractComplexity(text: string): 'simple' | 'moderate' | 'complex' | null {
    if (/complex/i.test(text)) return 'complex';
    if (/simple/i.test(text)) return 'simple';
    if (/moderate/i.test(text)) return 'moderate';
    return null;
  }

  private extractTrapType(text: string): 'structural' | 'stratigraphic' | 'combination' | null {
    if (/structural/i.test(text)) return 'structural';
    if (/stratigraphic/i.test(text)) return 'stratigraphic';
    if (/combination/i.test(text)) return 'combination';
    return null;
  }
}

export const hydrocarbonFeatureEngineer = new HydrocarbonFeatureEngineer();