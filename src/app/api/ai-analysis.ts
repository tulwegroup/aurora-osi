import { NextRequest, NextResponse } from 'next/server';
import { 
  petroleumSystemIntegrator,
  reserveEstimationEngine,
  riskAssessmentModule 
} from '@/lib/enhanced-ai-architecture';

export async function POST(request: NextRequest) {
  try {
    const { analysisType, parameters } = await request.json();

    let result;
    
    switch (analysisType) {
      case 'petroleum-system':
        result = await petroleumSystemIntegrator.integratePetroleumSystem(
          parameters.geologicalData,
          parameters.geochemicalData,
          parameters.geophysicalData,
          parameters.basinHistory
        );
        break;
      
      case 'charge-history':
        result = await petroleumSystemIntegrator.modelChargeHistory(
          parameters.petroleumSystem,
          parameters.thermalHistory,
          parameters.burialHistory
        );
        break;
      
      case 'reserve-estimation':
        result = await reserveEstimationEngine.calculateReserves(
          parameters.reservoirParameters,
          parameters.fluidProperties,
          parameters.uncertaintyFactors
        );
        break;
      
      case 'recovery-factor':
        result = await reserveEstimationEngine.predictRecoveryFactor(
          parameters.rockProperties,
          parameters.fluidProperties,
          parameters.recoveryMethod
        );
        break;
      
      case 'risk-assessment':
        result = await riskAssessmentModule.assessRiskSegments(
          parameters.petroleumSystem,
          parameters.reserveEstimation,
          parameters.economicParameters
        );
        break;
      
      case 'chance-factors':
        result = await riskAssessmentModule.calculateChanceFactors(
          parameters.riskAssessment,
          parameters.analogData
        );
        break;
      
      default:
        throw new Error(`Unsupported analysis type: ${analysisType}`);
    }

    return NextResponse.json({
      success: true,
      data: result,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error in AI analysis API:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}