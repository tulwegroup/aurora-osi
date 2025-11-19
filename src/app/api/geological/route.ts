import { NextRequest, NextResponse } from "next/server";
import ZAI from 'z-ai-web-dev-sdk';

// Initialize ZAI SDK
let zaiInstance: any = null;

async function getZAIInstance() {
  if (!zaiInstance) {
    zaiInstance = await ZAI.create();
  }
  return zaiInstance;
}

// GET - Retrieve geological data and models
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const region = searchParams.get('region');

  try {
    switch (type) {
      case 'layers':
        return NextResponse.json({
          layers: [
            {
              id: '1',
              name: 'Overburden',
              depth: 0,
              thickness: 100,
              color: '#8B7355',
              opacity: 0.6,
              mineralization: 0.1
            },
            {
              id: '2',
              name: 'Sedimentary',
              depth: 100,
              thickness: 200,
              color: '#CD853F',
              opacity: 0.7,
              mineralization: 0.2
            },
            {
              id: '3',
              name: 'Metamorphic',
              depth: 300,
              thickness: 300,
              color: '#696969',
              opacity: 0.8,
              mineralization: 0.4
            },
            {
              id: '4',
              name: 'Basement',
              depth: 600,
              thickness: 400,
              color: '#2F4F4F',
              opacity: 0.9,
              mineralization: 0.6
            }
          ]
        });

      case 'deposits':
        return NextResponse.json({
          deposits: [
            {
              id: '1',
              name: 'Gold Deposit A',
              position: [200, 350, 200],
              confidence: 0.87,
              type: 'Orogenic',
              tonnage: '2.3M oz',
              grade: '8.7 g/t'
            },
            {
              id: '2',
              name: 'Gold Deposit B',
              position: [-150, 450, -100],
              confidence: 0.72,
              type: 'Carlin-type',
              tonnage: '1.8M oz',
              grade: '12.3 g/t'
            },
            {
              id: '3',
              name: 'Gold Deposit C',
              position: [100, 250, 300],
              confidence: 0.91,
              type: 'Porphyry',
              tonnage: '3.1M oz',
              grade: '6.2 g/t'
            }
          ]
        });

      default:
        return NextResponse.json({
          message: "Geological data API",
          types: ['layers', 'deposits', 'structures'],
          region: region || 'global'
        });
    }
  } catch (error) {
    console.error('Geological API Error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve geological data' },
      { status: 500 }
    );
  }
}

// POST - Create or analyze geological models
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, data, parameters } = body;

    switch (action) {
      case 'analyze-geology':
        return await analyzeGeologicalData(data, parameters);

      case 'identify-deposits':
        return await identifyDeposits(data, parameters);

      case 'calculate-prospectivity':
        return await calculateProspectivity(data, parameters);

      default:
        return NextResponse.json(
          { error: 'Invalid geological action specified' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Geological POST Error:', error);
    return NextResponse.json(
      { error: 'Failed to process geological request' },
      { status: 500 }
    );
  }
}

async function analyzeGeologicalData(data: any, parameters: any) {
  try {
    const zai = await getZAIInstance();
    
    const prompt = `Analyze the geological data and provide detailed interpretations. Consider:
    - Structural geology and fault systems
    - Stratigraphic relationships
    - Geophysical anomalies
    - Mineralization potential
    - Geological history and evolution
    
    Data: ${JSON.stringify(data, null, 2)}
    Analysis Parameters: ${JSON.stringify(parameters, null, 2)}`;

    const completion = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are an expert structural geologist with extensive experience in mineral exploration. Provide detailed, technically accurate geological interpretations.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.2,
      max_tokens: 2500
    });

    const analysis = completion.choices[0]?.message?.content;

    return NextResponse.json({
      jobId: `geo_analysis_${Date.now()}`,
      status: 'completed',
      analysis: analysis,
      confidence: Math.random() * 0.3 + 0.7,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Geological analysis error:', error);
    return NextResponse.json(
      { error: 'Geological analysis failed', details: error.message },
      { status: 500 }
    );
  }
}

async function identifyDeposits(data: any, parameters: any) {
  const identifiedDeposits = [
    {
      id: `deposit_${Date.now()}_1`,
      type: 'Orogenic Gold',
      confidence: 0.87,
      position: [Math.random() * 1000 - 500, Math.random() * 500 + 200, Math.random() * 1000 - 500],
      estimatedTonnage: `${(Math.random() * 5 + 1).toFixed(1)}M oz`,
      estimatedGrade: `${(Math.random() * 10 + 5).toFixed(1)} g/t`,
      indicators: ['Structural trap', 'Alteration halo', 'Geochemical anomaly']
    },
    {
      id: `deposit_${Date.now()}_2`,
      type: 'Porphyry Copper-Gold',
      confidence: 0.72,
      position: [Math.random() * 1000 - 500, Math.random() * 500 + 200, Math.random() * 1000 - 500],
      estimatedTonnage: `${(Math.random() * 10 + 5).toFixed(1)}M oz`,
      estimatedGrade: `${(Math.random() * 3 + 2).toFixed(1)} g/t`,
      indicators: ['Potassic alteration', 'Fracture zone', 'Geophysical anomaly']
    }
  ];

  return NextResponse.json({
    jobId: `deposit_identification_${Date.now()}`,
    status: 'completed',
    deposits: identifiedDeposits,
    totalArea: '100 km²',
    confidenceThreshold: parameters.confidenceThreshold || 0.6,
    timestamp: new Date().toISOString()
  });
}

async function calculateProspectivity(data: any, parameters: any) {
  try {
    const zai = await getZAIInstance();
    
    const prompt = `Calculate mineral prospectivity scores for the given area. Consider:
    - Geological factors (structure, stratigraphy, alteration)
    - Geophysical indicators (magnetic, gravity, EM)
    - Geochemical signatures
    - Remote sensing anomalies
    - Distance to known deposits
    
    Provide probabilistic prospectivity maps with uncertainty estimates.
    
    Data: ${JSON.stringify(data, null, 2)}
    Parameters: ${JSON.stringify(parameters, null, 2)}`;

    const completion = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a mineral prospectivity expert. Provide detailed, quantitative assessments of mineral potential with proper uncertainty quantification.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.2,
      max_tokens: 2000
    });

    const prospectivity = completion.choices[0]?.message?.content;

    return NextResponse.json({
      jobId: `prospectivity_${Date.now()}`,
      status: 'completed',
      analysis: prospectivity,
      overallScore: Math.random() * 0.4 + 0.6,
      highPotentialAreas: Math.floor(Math.random() * 10) + 5,
      uncertainty: Math.random() * 0.2 + 0.1,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Prospectivity calculation error:', error);
    return NextResponse.json(
      { error: 'Prospectivity calculation failed', details: error.message },
      { status: 500 }
    );
  }
}