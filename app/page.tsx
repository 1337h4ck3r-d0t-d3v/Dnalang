"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dna,
  Coins,
  TrendingUp,
  Shield,
  Zap,
  Brain,
  Activity,
  Users,
  Lock,
  Flame,
  Target,
  Bot,
  Network,
  Database,
  GitBranch,
  Play,
  Pause,
  Plus,
  ArrowUp,
  Clock,
  CheckCircle,
  Star,
  Wallet,
  Vote,
  Repeat,
} from "lucide-react"

export default function DNALangAutonomousPlatform() {
  const [currentPrice, setCurrentPrice] = useState(0.0847)
  const [marketCap, setMarketCap] = useState(84.7)
  const [evolutionRewards, setEvolutionRewards] = useState(1247.5)
  const [stakingAPY, setStakingAPY] = useState(37.5)
  const [autonomousActive, setAutonomousActive] = useState(true)
  const [activeTab, setActiveTab] = useState("dashboard")

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrice((prev) => prev + (Math.random() - 0.5) * 0.001)
      setMarketCap((prev) => prev + (Math.random() - 0.5) * 2)
      setEvolutionRewards((prev) => prev + Math.random() * 10)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const valuationMilestones = [
    { value: 10, label: "Genesis", status: "completed", color: "bg-green-500" },
    { value: 50, label: "Early Adoption", status: "current", color: "bg-blue-500" },
    { value: 100, label: "Product-Market Fit", status: "upcoming", color: "bg-gray-400" },
    { value: 250, label: "Scaling Phase", status: "upcoming", color: "bg-gray-400" },
    { value: 500, label: "Market Leader", status: "upcoming", color: "bg-gray-400" },
    { value: 750, label: "Unicorn Status", status: "upcoming", color: "bg-gray-400" },
    { value: 1000, label: "Acquisition Target", status: "target", color: "bg-orange-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 relative overflow-hidden">
      {/* Enhanced 3D Background Animations */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Autonomous DNA Strands */}
        <div className="absolute top-10 left-10 animate-autonomous-float">
          <div className="autonomous-dna-helix">
            <div className="helix-strand autonomous-strand-1"></div>
            <div className="helix-strand autonomous-strand-2"></div>
            <div className="helix-core"></div>
          </div>
        </div>

        {/* Token Particles */}
        <div className="token-particles">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="token-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${12 + Math.random() * 8}s`,
              }}
            />
          ))}
        </div>

        {/* Evolution Waves */}
        <div className="evolution-waves">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>

        {/* Autonomous Indicators */}
        <div className="absolute top-1/3 right-20 animate-pulse-glow">
          <div className="autonomous-indicator">
            <Bot className="h-8 w-8 text-cyan-400" />
            <div className="indicator-pulse"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-cyan-800/30 bg-black/20 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Dna className="h-8 w-8 text-cyan-400 animate-pulse" />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full animate-ping"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">DNA-Lang</h1>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-600/20 text-green-400 border-green-600/30 text-xs">Autonomous v1.7</Badge>
                  <Badge className="bg-orange-600/20 text-orange-400 border-orange-600/30 text-xs">
                    $DNA ${currentPrice.toFixed(4)}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <TrendingUp className="h-4 w-4 text-green-400" />
                <span className="text-green-400">+12.4%</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4 text-cyan-400" />
                <span className="text-white">127K</span>
              </div>
              <div className="flex items-center space-x-1">
                <Bot className="h-4 w-4 text-orange-400" />
                <span className="text-orange-400">Active</span>
              </div>
            </div>
            <Button className="bg-cyan-600 hover:bg-cyan-700">
              <Wallet className="h-4 w-4 mr-2" />
              Connect Wallet
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Tab Navigation */}
          <div className="border-b border-cyan-800/30 bg-black/10 backdrop-blur-sm">
            <div className="px-6">
              <TabsList className="bg-transparent border-none">
                <TabsTrigger
                  value="dashboard"
                  className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white text-gray-300"
                >
                  <Activity className="h-4 w-4 mr-2" />
                  Dashboard
                </TabsTrigger>
                <TabsTrigger
                  value="tokenomics"
                  className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white text-gray-300"
                >
                  <Coins className="h-4 w-4 mr-2" />
                  Tokenomics
                </TabsTrigger>
                <TabsTrigger
                  value="autonomous"
                  className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white text-gray-300"
                >
                  <Bot className="h-4 w-4 mr-2" />
                  Autonomous
                </TabsTrigger>
                <TabsTrigger
                  value="evolution"
                  className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white text-gray-300"
                >
                  <GitBranch className="h-4 w-4 mr-2" />
                  Evolution
                </TabsTrigger>
                <TabsTrigger
                  value="governance"
                  className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white text-gray-300"
                >
                  <Vote className="h-4 w-4 mr-2" />
                  Governance
                </TabsTrigger>
              </TabsList>
            </div>
          </div>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="p-6 space-y-6">
            <DashboardView
              currentPrice={currentPrice}
              marketCap={marketCap}
              evolutionRewards={evolutionRewards}
              stakingAPY={stakingAPY}
              valuationMilestones={valuationMilestones}
            />
          </TabsContent>

          {/* Tokenomics Tab */}
          <TabsContent value="tokenomics" className="p-6 space-y-6">
            <TokenomicsView
              currentPrice={currentPrice}
              marketCap={marketCap}
              evolutionRewards={evolutionRewards}
              stakingAPY={stakingAPY}
            />
          </TabsContent>

          {/* Autonomous Tab */}
          <TabsContent value="autonomous" className="p-6 space-y-6">
            <AutonomousView autonomousActive={autonomousActive} setAutonomousActive={setAutonomousActive} />
          </TabsContent>

          {/* Evolution Tab */}
          <TabsContent value="evolution" className="p-6 space-y-6">
            <EvolutionView evolutionRewards={evolutionRewards} />
          </TabsContent>

          {/* Governance Tab */}
          <TabsContent value="governance" className="p-6 space-y-6">
            <GovernanceView />
          </TabsContent>
        </Tabs>
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes autonomous-float {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-30px) rotate(120deg) scale(1.1); }
          66% { transform: translateY(-15px) rotate(240deg) scale(0.9); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes token-float {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; }
        }
        
        @keyframes wave-pulse {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.3; }
          50% { transform: scale(1.5) rotate(180deg); opacity: 0.1; }
        }
        
        .animate-autonomous-float { animation: autonomous-float 12s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        
        .autonomous-dna-helix {
          width: 80px;
          height: 240px;
          position: relative;
        }
        
        .helix-strand {
          position: absolute;
          width: 6px;
          height: 100%;
          border-radius: 3px;
          transform-origin: center;
        }
        
        .autonomous-strand-1 {
          left: 25px;
          background: linear-gradient(to bottom, #06b6d4, #10b981, #f59e0b);
          animation: autonomous-float 6s linear infinite;
        }
        
        .autonomous-strand-2 {
          right: 25px;
          background: linear-gradient(to bottom, #f59e0b, #10b981, #06b6d4);
          animation: autonomous-float 6s linear infinite reverse;
        }
        
        .helix-core {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 12px;
          height: 12px;
          background: radial-gradient(circle, #06b6d4, #10b981);
          border-radius: 50%;
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .token-particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: linear-gradient(45deg, #f59e0b, #06b6d4);
          border-radius: 50%;
          animation: token-float linear infinite;
        }
        
        .evolution-waves {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        
        .wave {
          position: absolute;
          border: 2px solid;
          border-radius: 50%;
          animation: wave-pulse ease-in-out infinite;
        }
        
        .wave-1 {
          width: 200px;
          height: 200px;
          border-color: rgba(6, 182, 212, 0.3);
          animation-duration: 4s;
        }
        
        .wave-2 {
          width: 400px;
          height: 400px;
          border-color: rgba(16, 185, 129, 0.2);
          animation-duration: 6s;
          animation-delay: 1s;
        }
        
        .wave-3 {
          width: 600px;
          height: 600px;
          border-color: rgba(245, 158, 11, 0.1);
          animation-duration: 8s;
          animation-delay: 2s;
        }
        
        .autonomous-indicator {
          position: relative;
          padding: 12px;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(6, 182, 212, 0.3);
          border-radius: 50%;
          backdrop-filter: blur(10px);
        }
        
        .indicator-pulse {
          position: absolute;
          inset: -4px;
          border: 2px solid rgba(6, 182, 212, 0.5);
          border-radius: 50%;
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

function DashboardView({ currentPrice, marketCap, evolutionRewards, stakingAPY, valuationMilestones }: any) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Autonomous Evolution Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
            <Bot className="h-3 w-3 mr-1" />
            Autonomous Active
          </Badge>
          <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30">127K Developers</Badge>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-black/30 border-cyan-800/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">DNA Token Price</p>
                <p className="text-2xl font-bold text-cyan-400">${currentPrice.toFixed(4)}</p>
              </div>
              <Coins className="h-8 w-8 text-cyan-400" />
            </div>
            <div className="mt-2 flex items-center text-sm">
              <ArrowUp className="h-4 w-4 text-green-400 mr-1" />
              <span className="text-green-400">+12.4%</span>
              <span className="text-gray-400 ml-1">24h</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/30 border-green-800/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Market Cap</p>
                <p className="text-2xl font-bold text-green-400">${marketCap.toFixed(1)}M</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-400" />
            </div>
            <div className="mt-2 flex items-center text-sm">
              <Target className="h-4 w-4 text-orange-400 mr-1" />
              <span className="text-orange-400">8.5%</span>
              <span className="text-gray-400 ml-1">to $100M</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/30 border-orange-800/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Evolution Rewards</p>
                <p className="text-2xl font-bold text-orange-400">{evolutionRewards.toFixed(0)}</p>
              </div>
              <Zap className="h-8 w-8 text-orange-400" />
            </div>
            <div className="mt-2 flex items-center text-sm">
              <Activity className="h-4 w-4 text-green-400 mr-1" />
              <span className="text-green-400">+15.2%</span>
              <span className="text-gray-400 ml-1">this week</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/30 border-blue-800/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Staking APY</p>
                <p className="text-2xl font-bold text-blue-400">{stakingAPY.toFixed(1)}%</p>
              </div>
              <Lock className="h-8 w-8 text-blue-400" />
            </div>
            <div className="mt-2 flex items-center text-sm">
              <Clock className="h-4 w-4 text-blue-400 mr-1" />
              <span className="text-blue-400">180 days</span>
              <span className="text-gray-400 ml-1">lock period</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Valuation Path to $1B */}
      <Card className="bg-black/30 border-cyan-800/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Target className="h-5 w-5 mr-2 text-cyan-400" />
            Path to $1B Valuation
          </CardTitle>
          <CardDescription className="text-gray-300">
            Current progress: ${marketCap.toFixed(1)}M / $1,000M ({((marketCap / 1000) * 100).toFixed(1)}%)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Progress value={(marketCap / 1000) * 100} className="h-3" />
            <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
              {valuationMilestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border text-center ${
                    milestone.status === "completed"
                      ? "bg-green-900/20 border-green-600/30"
                      : milestone.status === "current"
                        ? "bg-blue-900/20 border-blue-600/30"
                        : milestone.status === "target"
                          ? "bg-orange-900/20 border-orange-600/30"
                          : "bg-gray-900/20 border-gray-600/30"
                  }`}
                >
                  <div
                    className={`text-lg font-bold ${
                      milestone.status === "completed"
                        ? "text-green-400"
                        : milestone.status === "current"
                          ? "text-blue-400"
                          : milestone.status === "target"
                            ? "text-orange-400"
                            : "text-gray-400"
                    }`}
                  >
                    ${milestone.value}M
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{milestone.label}</div>
                  {milestone.status === "completed" && <CheckCircle className="h-4 w-4 text-green-400 mx-auto mt-1" />}
                  {milestone.status === "current" && <Activity className="h-4 w-4 text-blue-400 mx-auto mt-1" />}
                  {milestone.status === "target" && <Star className="h-4 w-4 text-orange-400 mx-auto mt-1" />}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Autonomous Status */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-black/30 border-green-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Bot className="h-5 w-5 mr-2 text-green-400" />
              Autonomous Systems Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-black/20">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white">Evolution Engine</span>
              </div>
              <Badge className="bg-green-600/20 text-green-400 border-green-600/30">Active</Badge>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-black/20">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white">Security Analyzer</span>
              </div>
              <Badge className="bg-green-600/20 text-green-400 border-green-600/30">Monitoring</Badge>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-black/20">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white">Performance Optimizer</span>
              </div>
              <Badge className="bg-green-600/20 text-green-400 border-green-600/30">Optimizing</Badge>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-black/20">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-orange-400 animate-pulse" />
                <span className="text-white">Documentation Generator</span>
              </div>
              <Badge className="bg-orange-600/20 text-orange-400 border-orange-600/30">Updating</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/30 border-orange-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Activity className="h-5 w-5 mr-2 text-orange-400" />
              Recent Autonomous Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-black/20">
              <Shield className="h-4 w-4 text-green-400" />
              <div className="flex-1">
                <p className="text-white text-sm">Patched security vulnerability in UserAuth gene</p>
                <p className="text-xs text-gray-400">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-black/20">
              <Zap className="h-4 w-4 text-orange-400" />
              <div className="flex-1">
                <p className="text-white text-sm">Optimized database queries (+23% performance)</p>
                <p className="text-xs text-gray-400">8 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-black/20">
              <Brain className="h-4 w-4 text-cyan-400" />
              <div className="flex-1">
                <p className="text-white text-sm">Generated new caching strategy feature</p>
                <p className="text-xs text-gray-400">15 minutes ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function TokenomicsView({ currentPrice, marketCap, evolutionRewards, stakingAPY }: any) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">DNA Token Economics</h2>
        <Badge className="bg-orange-600/20 text-orange-400 border-orange-600/30">Proof-of-Evolution (PoE)</Badge>
      </div>

      {/* Token Distribution */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-black/30 border-cyan-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Coins className="h-5 w-5 mr-2 text-cyan-400" />
              Token Distribution
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Evolution Mining (30%)</span>
                <span className="text-cyan-400 font-semibold">300M DNA</span>
              </div>
              <Progress value={30} className="h-2" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Treasury/DAO (40%)</span>
                <span className="text-green-400 font-semibold">400M DNA</span>
              </div>
              <Progress value={40} className="h-2" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Team (15%)</span>
                <span className="text-orange-400 font-semibold">150M DNA</span>
              </div>
              <Progress value={15} className="h-2" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Ecosystem (10%)</span>
                <span className="text-blue-400 font-semibold">100M DNA</span>
              </div>
              <Progress value={10} className="h-2" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Investors (5%)</span>
                <span className="text-red-400 font-semibold">50M DNA</span>
              </div>
              <Progress value={5} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/30 border-green-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Lock className="h-5 w-5 mr-2 text-green-400" />
              Staking Tiers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-black/20 border border-cyan-600/30">
              <div className="flex justify-between items-center mb-2">
                <span className="text-cyan-400 font-semibold">30 Days</span>
                <span className="text-cyan-400">18% APY</span>
              </div>
              <div className="text-sm text-gray-400">1.2x Governance Power</div>
            </div>
            <div className="p-4 rounded-lg bg-black/20 border border-green-600/30">
              <div className="flex justify-between items-center mb-2">
                <span className="text-green-400 font-semibold">90 Days</span>
                <span className="text-green-400">22.5% APY</span>
              </div>
              <div className="text-sm text-gray-400">1.5x Governance Power</div>
            </div>
            <div className="p-4 rounded-lg bg-black/20 border border-orange-600/30">
              <div className="flex justify-between items-center mb-2">
                <span className="text-orange-400 font-semibold">180 Days</span>
                <span className="text-orange-400">37.5% APY</span>
              </div>
              <div className="text-sm text-gray-400">2.5x Governance Power</div>
            </div>
            <div className="p-4 rounded-lg bg-black/20 border border-red-600/30">
              <div className="flex justify-between items-center mb-2">
                <span className="text-red-400 font-semibold">365 Days</span>
                <span className="text-red-400">60% APY</span>
              </div>
              <div className="text-sm text-gray-400">4.0x Governance Power</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Evolution Mining */}
      <Card className="bg-black/30 border-orange-800/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Zap className="h-5 w-5 mr-2 text-orange-400" />
            Evolution Mining Rewards
          </CardTitle>
          <CardDescription className="text-gray-300">
            Earn DNA tokens by improving organism fitness through evolution
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-lg bg-black/20">
              <div className="text-2xl font-bold text-orange-400 mb-2">Base Reward</div>
              <div className="text-gray-300">100 DNA per fitness improvement</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-black/20">
              <div className="text-2xl font-bold text-green-400 mb-2">Multipliers</div>
              <div className="text-sm text-gray-300 space-y-1">
                <div>Revenue: 2x</div>
                <div>Scalability: 5x</div>
                <div>Innovation: 5x</div>
              </div>
            </div>
            <div className="text-center p-4 rounded-lg bg-black/20">
              <div className="text-2xl font-bold text-cyan-400 mb-2">Halving</div>
              <div className="text-gray-300">Every 100 generations</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Deflationary Mechanics */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-black/30 border-red-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Flame className="h-5 w-5 mr-2 text-red-400" />
              Token Burns
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-3 rounded-lg bg-black/20">
              <span className="text-gray-300">Transaction Burns (0.1%)</span>
              <span className="text-red-400 font-semibold">12.5K DNA</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-black/20">
              <span className="text-gray-300">Failed Mutation Burns</span>
              <span className="text-red-400 font-semibold">8.2K DNA</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-black/20">
              <span className="text-gray-300">Buyback & Burn</span>
              <span className="text-red-400 font-semibold">25.1K DNA</span>
            </div>
            <div className="border-t border-gray-600 pt-3">
              <div className="flex justify-between items-center">
                <span className="text-white font-semibold">Total Burned</span>
                <span className="text-red-400 font-bold text-lg">45.8K DNA</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/30 border-blue-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Users className="h-5 w-5 mr-2 text-blue-400" />
              Revenue Sharing
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-4 rounded-lg bg-black/20">
              <div className="text-2xl font-bold text-blue-400 mb-2">Weekly Distribution</div>
              <div className="text-gray-300">15,247 DNA to stakers</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Platform Revenue</span>
                <span className="text-green-400">$127K</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Staker Share (60%)</span>
                <span className="text-blue-400">$76.2K</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Treasury (40%)</span>
                <span className="text-orange-400">$50.8K</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function AutonomousView({ autonomousActive, setAutonomousActive }: any) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Autonomous Evolution Platform</h2>
        <div className="flex items-center space-x-3">
          <Badge
            className={
              autonomousActive
                ? "bg-green-600/20 text-green-400 border-green-600/30"
                : "bg-red-600/20 text-red-400 border-red-600/30"
            }
          >
            {autonomousActive ? "Active" : "Inactive"}
          </Badge>
          <Button
            onClick={() => setAutonomousActive(!autonomousActive)}
            className={autonomousActive ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"}
          >
            {autonomousActive ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
            {autonomousActive ? "Pause" : "Start"}
          </Button>
        </div>
      </div>

      {/* Autonomous Capabilities */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-black/30 border-green-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Brain className="h-5 w-5 mr-2 text-green-400" />
              Self-Improving
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Monthly Improvement</span>
                <span className="text-green-400 font-semibold">+10%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Last Optimization</span>
                <span className="text-gray-400">2 hours ago</span>
              </div>
              <Progress value={87} className="h-2" />
              <div className="text-sm text-gray-400">Performance Score: 87/100</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/30 border-cyan-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Shield className="h-5 w-5 mr-2 text-cyan-400" />
              Self-Healing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Recovery Time</span>
                <span className="text-cyan-400 font-semibold">{"<1s"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Issues Resolved</span>
                <span className="text-green-400">247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Success Rate</span>
                <span className="text-green-400">99.2%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/30 border-orange-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Database className="h-5 w-5 mr-2 text-orange-400" />
              Self-Documenting
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Documentation Coverage</span>
                <span className="text-orange-400 font-semibold">100%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Last Update</span>
                <span className="text-gray-400">Real-time</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Languages</span>
                <span className="text-orange-400">12</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/30 border-blue-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Network className="h-5 w-5 mr-2 text-blue-400" />
              Self-Scaling
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Capacity</span>
                <span className="text-blue-400 font-semibold">Infinite</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Current Load</span>
                <span className="text-green-400">23%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Auto-scaling Events</span>
                <span className="text-blue-400">1,247</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/30 border-red-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Lock className="h-5 w-5 mr-2 text-red-400" />
              Self-Securing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Security Level</span>
                <span className="text-red-400 font-semibold">Quantum</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Threats Blocked</span>
                <span className="text-green-400">15,247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Zero-day Response</span>
                <span className="text-red-400">Instant</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/30 border-yellow-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Repeat className="h-5 w-5 mr-2 text-yellow-400" />
              Self-Testing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Test Coverage</span>
                <span className="text-yellow-400 font-semibold">100%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Tests Generated</span>
                <span className="text-green-400">12,547</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Pass Rate</span>
                <span className="text-green-400">99.8%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Autonomous Decision Log */}
      <Card className="bg-black/30 border-cyan-800/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Activity className="h-5 w-5 mr-2 text-cyan-400" />
            Autonomous Decision Log
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-black/20">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <div className="flex-1">
                <p className="text-white text-sm">Optimized database query performance (+23%)</p>
                <p className="text-xs text-gray-400">Decision confidence: 94% • 2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-black/20">
              <div className="w-2 h-2 rounded-full bg-orange-400"></div>
              <div className="flex-1">
                <p className="text-white text-sm">Applied security patch to UserAuth gene</p>
                <p className="text-xs text-gray-400">Decision confidence: 98% • 5 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-black/20">
              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              <div className="flex-1">
                <p className="text-white text-sm">Generated new caching strategy feature</p>
                <p className="text-xs text-gray-400">Decision confidence: 87% • 12 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-black/20">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <div className="flex-1">
                <p className="text-white text-sm">Scaled infrastructure to handle increased load</p>
                <p className="text-xs text-gray-400">Decision confidence: 91% • 18 minutes ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function EvolutionView({ evolutionRewards }: any) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Evolution Mining</h2>
        <Button className="bg-orange-600 hover:bg-orange-700">
          <Zap className="h-4 w-4 mr-2" />
          Start Evolution
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-black/30 border-orange-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Zap className="h-5 w-5 mr-2 text-orange-400" />
              Your Evolution Rewards
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-6 rounded-lg bg-black/20">
              <div className="text-3xl font-bold text-orange-400 mb-2">{evolutionRewards.toFixed(0)}</div>
              <div className="text-gray-300">DNA Tokens Earned</div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">This Week</span>
                <span className="text-green-400">+247 DNA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Best Organism</span>
                <span className="text-cyan-400">ECommerceApp</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Fitness Improvement</span>
                <span className="text-orange-400">+15.2%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/30 border-green-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-green-400" />
              Evolution Leaderboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-black/20">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30">1</Badge>
                  <span className="text-white">CryptoTrader</span>
                </div>
                <span className="text-green-400 font-semibold">2,847 DNA</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-black/20">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-gray-600/20 text-gray-400 border-gray-600/30">2</Badge>
                  <span className="text-white">AIOptimizer</span>
                </div>
                <span className="text-green-400 font-semibold">2,156 DNA</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-black/20">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-orange-600/20 text-orange-400 border-orange-600/30">3</Badge>
                  <span className="text-white">SecurityGuard</span>
                </div>
                <span className="text-green-400 font-semibold">1,923 DNA</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-cyan-900/20 border border-cyan-600/30">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-cyan-600/20 text-cyan-400 border-cyan-600/30">7</Badge>
                  <span className="text-cyan-400">You</span>
                </div>
                <span className="text-cyan-400 font-semibold">{evolutionRewards.toFixed(0)} DNA</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function GovernanceView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">DAO Governance</h2>
        <Button className="bg-cyan-600 hover:bg-cyan-700">
          <Plus className="h-4 w-4 mr-2" />
          Create Proposal
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-black/30 border-cyan-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Vote className="h-5 w-5 mr-2 text-cyan-400" />
              Active Proposals
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-black/20 border border-green-600/30">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-white font-semibold">Increase Evolution Rewards</h4>
                <Badge className="bg-green-600/20 text-green-400 border-green-600/30">Active</Badge>
              </div>
              <p className="text-sm text-gray-300 mb-3">
                Proposal to increase base evolution mining rewards by 25% to incentivize more developers.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">For: 67.3%</span>
                  <span className="text-gray-400">Against: 32.7%</span>
                </div>
                <Progress value={67.3} className="h-2" />
                <div className="text-xs text-gray-400">Ends in 2 days • 15.2M DNA voted</div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-black/20 border border-orange-600/30">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-white font-semibold">New Security Features</h4>
                <Badge className="bg-orange-600/20 text-orange-400 border-orange-600/30">Voting</Badge>
              </div>
              <p className="text-sm text-gray-300 mb-3">
                Add quantum-resistant encryption to all organism communications.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">For: 84.1%</span>
                  <span className="text-gray-400">Against: 15.9%</span>
                </div>
                <Progress value={84.1} className="h-2" />
                <div className="text-xs text-gray-400">Ends in 5 days • 8.7M DNA voted</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/30 border-green-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Users className="h-5 w-5 mr-2 text-green-400" />
              Your Governance Power
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-6 rounded-lg bg-black/20">
              <div className="text-3xl font-bold text-green-400 mb-2">2.5x</div>
              <div className="text-gray-300">Voting Multiplier</div>
              <div className="text-sm text-gray-400 mt-1">From 180-day staking</div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Staked DNA</span>
                <span className="text-green-400">12,500 DNA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Voting Power</span>
                <span className="text-green-400">31,250 votes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Proposals Created</span>
                <span className="text-cyan-400">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Participation Rate</span>
                <span className="text-orange-400">87%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
