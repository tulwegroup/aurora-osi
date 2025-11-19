import { NextRequest, NextResponse } from 'next/server';
import { hydrocarbonFeatureEngineer } from '@/lib/hydrocarbon-feature-engineer';

export async function POST(request: NextRequest) {
  try {
    const { satelliteData, seismicData, wellData, geochemicalData } = await request.json();

    const geologicalIndices = await hydrocarbonFeatureEngineer.engineerGeologicalFeatures(
      satelliteData,
      seismicData,
      wellData,
      geochemicalData
    );

    return NextResponse.json({
      success: true,
      data: geologicalIndices,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error in feature engineering API:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}