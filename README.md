# Project Aurora 2.0: Orbital Subsurface Intelligence (OSI) Platform

A comprehensive Next.js platform for mineral exploration using AI-powered satellite data analysis and 3D geological modeling.

## 🎯 Mission

Build a functional prototype OSI platform that generates 3D mineral prospectivity models with quantified uncertainty, using only satellite data as input, validated against known deposits.

## 🚀 Success Metrics (12-Month MVP)

- **>85% recall rate** on identifying known gold deposits in blind tests
- **<15% false positive rate** in mature geological terrains
- **Probabilistic resource estimates** within 30% of actual drilled tonnage
- **Explainable AI reasoning** validated as "geologically plausible"
- **100,000 km² regional assessment** within 48 hours on cloud infrastructure

## 🏗️ Architecture Overview

### Core Components

1. **Main Dashboard** (`src/app/page.tsx`)
   - Central hub with navigation to all platform modules
   - Real-time KPI monitoring and project status
   - Interactive tabs for different functional areas

2. **3D Geological Visualization** (`src/components/GeologicalVisualization.tsx`)
   - Interactive 3D models using Three.js and React Three Fiber
   - Real-time rendering of geological layers and deposits
   - Confidence visualization and fault line mapping

3. **Data Fusion Interface** (`src/components/DataFusionInterface.tsx`)
   - Multi-sensor satellite data processing pipeline
   - Real-time monitoring of data streams
   - Quality control and validation metrics

4. **AI Model Dashboard** (`src/components/AIModelDashboard.tsx`)
   - Real-time monitoring of AI model performance
   - Training progress and validation metrics
   - Resource usage and system health monitoring

5. **Consortium Management** (`src/components/ConsortiumManagement.tsx`)
   - Global Analog Consortium Database (GACD) administration
   - Member management and data contribution tracking
   - Anonymization and data provenance

6. **Project Progress Tracking** (`src/components/ProjectProgressDashboard.tsx`)
   - Milestone tracking and KPI monitoring
   - Team productivity and resource allocation
   - Budget utilization and timeline management

### API Endpoints

1. **Main API** (`src/app/api/route.ts`)
   - Model inference and processing requests
   - Integration with ZAI SDK for AI capabilities
   - Synthetic data generation and validation

2. **Geological API** (`src/app/api/geological/route.ts`)
   - 3D geological model generation
   - Deposit identification and prospectivity analysis
   - Structural analysis and interpretation

3. **Consortium API** (`src/app/api/consortium/route.ts`)
   - Member management and data submissions
   - Data validation and anonymization
   - Analytics and reporting

## 🛠️ Technology Stack

### Frontend
- **Next.js 15** with App Router
- **TypeScript 5** for type safety
- **Tailwind CSS 4** with shadcn/ui components
- **Three.js + React Three Fiber** for 3D visualization
- **Framer Motion** for animations
- **Recharts** for data visualization

### Backend
- **Next.js API Routes** for serverless functions
- **ZAI Web Development SDK** for AI integration
- **Prisma ORM** with SQLite for data persistence

### Key Libraries
- `@react-three/fiber` & `@react-three/drei` - 3D graphics
- `plotly.js` & `react-plotly.js` - Advanced charts
- `d3` - Data visualization utilities
- `zustand` - State management
- `@tanstack/react-query` - Server state management

## 📊 Features

### 🎛️ Main Dashboard
- **Real-time KPI Monitoring**: Track deposit recall rates, false positives, processing speed
- **Project Phase Tracking**: Visual progress through 4 implementation phases
- **System Health Monitoring**: GPU usage, memory, training queue status
- **Active Project Management**: Track ongoing tasks and deadlines

### 🌍 3D Geological Visualization
- **Interactive 3D Models**: Explore geological layers and structures
- **Deposit Visualization**: Color-coded confidence levels
- **Fault Line Mapping**: Structural geology interpretation
- **Real-time Controls**: Rotation, zoom, and layer toggling

### 🔄 Data Fusion Pipeline
- **Multi-sensor Integration**: Sentinel-1/2, ASTER, gravity, magnetic data
- **Real-time Processing**: Monitor data stream status and quality
- **Quality Control**: Automated validation and metrics tracking
- **AI-powered Feature Engineering**: Physics-guided feature extraction

### 🧠 AI Model Monitoring
- **Model Performance Tracking**: Accuracy, precision, recall, F1 scores
- **Training Progress**: Real-time loss and accuracy monitoring
- **Resource Management**: GPU, memory, and storage utilization
- **Validation Metrics**: Cross-validation and test set performance

### 👥 Consortium Management
- **Member Administration**: Tier-based access and contributions
- **Data Repository**: Anonymized deposit database with provenance
- **Quality Assurance**: Data validation and completeness scoring
- **Analytics Dashboard**: Regional distribution and growth metrics

### 📈 Project Progress
- **Milestone Tracking**: Progress toward key deliverables
- **KPI Dashboard**: Technical, financial, and operational metrics
- **Team Productivity**: Task completion and efficiency monitoring
- **Budget Management**: Resource allocation and utilization

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone and setup**
   ```bash
   git clone <repository-url>
   cd project-aurora-2.0
   npm install
   ```

2. **Database setup**
   ```bash
   npm run db:push
   npm run db:generate
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   - Open [http://localhost:3000](http://localhost:3000)
   - The platform will be available with all features active

### Development Commands

```bash
# Development
npm run dev          # Start development server
npm run lint          # Run ESLint
npm run build         # Build for production

# Database
npm run db:push      # Push schema to database
npm run db:generate   # Generate Prisma client
npm run db:migrate    # Run migrations
npm run db:reset      # Reset database
```

## 📁 Project Structure

```
src/
├── app/
│   ├── api/                    # API endpoints
│   │   ├── route.ts           # Main API with ZAI integration
│   │   ├── geological/        # Geological data API
│   │   └── consortium/        # Consortium management API
│   ├── page.tsx               # Main dashboard
│   ├── layout.tsx             # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── GeologicalVisualization.tsx    # 3D visualization
│   ├── DataFusionInterface.tsx       # Data processing
│   ├── AIModelDashboard.tsx          # AI monitoring
│   ├── ConsortiumManagement.tsx      # Consortium admin
│   └── ProjectProgressDashboard.tsx  # Progress tracking
├── lib/
│   ├── db.ts                  # Database client
│   └── utils.ts               # Utility functions
└── hooks/                     # Custom React hooks
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file with:
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key"
ZAI_API_KEY="your-zai-api-key"
```

### AI Integration
The platform uses the ZAI Web Development SDK for:
- **Geological Analysis**: Expert-level interpretation of geological data
- **Model Inference**: AI-powered mineral prospectivity analysis
- **Synthetic Data Generation**: Training data for AI models
- **Natural Language Processing**: Report generation and explanations

## 🎯 Usage Examples

### 3D Geological Visualization
```typescript
<GeologicalVisualization 
  layers={customLayers}
  deposits={depositData}
  showGrid={true}
  showConfidence={true}
/>
```

### AI Model Inference
```typescript
const response = await fetch('/api', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    action: 'run-model-inference',
    model: 'pigan',
    data: geologicalData,
    parameters: { confidence: 0.8 }
  })
});
```

### Consortium Data Management
```typescript
const members = await fetch('/api/consortium?type=members');
const deposits = await fetch('/api/consortium?type=deposits');
```

## 📊 Performance Metrics

### Target Performance
- **Processing Speed**: 100,000 km² in <48 hours
- **Model Accuracy**: >85% recall, <15% false positive rate
- **System Availability**: 99.9% uptime
- **Response Time**: <2 seconds for API requests

### Monitoring
- Real-time KPI dashboard
- Automated alerting for performance degradation
- Resource usage optimization
- Quality metrics tracking

## 🔒 Security & Privacy

### Data Protection
- **Anonymization**: 5km coordinate fuzzing for sensitive data
- **Access Control**: Tier-based permission system
- **Blockchain Provenance**: Immutable data tracking
- **Secure Multi-party Computation**: Privacy-preserving analysis

### API Security
- Input validation and sanitization
- Rate limiting and DDoS protection
- Authentication and authorization
- Audit logging

## 🌐 Deployment

### Production Build
```bash
npm run build
npm start
```

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of Project Aurora 2.0 and subject to consortium agreements.

## 📞 Support

For technical support or questions:
- Create an issue in the repository
- Contact the development team
- Consult the documentation

---

**Project Aurora 2.0** - Transforming mineral exploration through AI and satellite intelligence.