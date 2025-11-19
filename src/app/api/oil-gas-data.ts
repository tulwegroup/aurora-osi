import { NextRequest, NextResponse } from 'next/server';
import { oilGasConnector } from '@/lib/oil-gas-connector';

export async function POST(request: NextRequest) {
  try {
    const { dataType, region, parameters } = await request.json();

    let data;
    
    switch (dataType) {
      case 'seismic':
        data = await oilGasConnector.fetchSeismicData(region, parameters?.bbox);
        break;
      
      case 'wells':
        data = await oilGasConnector.fetchWellData(region, parameters?.limit);
        break;
      
      case 'satellite':
        data = await oilGasConnector.fetchSatelliteData(region, parameters?.sensors);
        break;
      
      case 'basin':
        data = await oilGasConnector.fetchBasinModelingData(region);
        break;
      
      default:
        throw new Error(`Unsupported data type: ${dataType}`);
    }

    return NextResponse.json({
      success: true,
      data,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error in oil-gas data API:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const dataType = searchParams.get('type');
  const region = searchParams.get('region');

  if (!dataType || !region) {
    return NextResponse.json({
      success: false,
      error: 'Missing required parameters: type and region'
    }, { status: 400 });
  }

  try {
    let data;
    
    switch (dataType) {
      case 'seismic':
        data = await oilGasConnector.fetchSeismicData(region);
        break;
      
      case 'wells':
        data = await oilGasConnector.fetchWellData(region);
        break;
      
      case 'satellite':
        data = await oilGasConnector.fetchSatelliteData(region);
        break;
      
      case 'basin':
        data = await oilGasConnector.fetchBasinModelingData(region);
        break;
      
      default:
        throw new Error(`Unsupported data type: ${dataType}`);
    }

    return NextResponse.json({
      success: true,
      data,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error in oil-gas data API:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}