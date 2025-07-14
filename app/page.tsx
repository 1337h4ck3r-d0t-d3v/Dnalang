"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Activity,
  Zap,
  TrendingUp,
  Users,
  Code,
  Brain,
  Lock,
  Coins,
  BarChart3,
  GitBranch,
  Play,
  Pause,
  RotateCcw,
  MessageSquare,
  Video,
  Share2,
  Eye,
  Edit3,
  Save,
  UserPlus,
  Merge,
  GitMerge,
  AlertTriangle,
  X,
  Send,
} from "lucide-react"

// Mock collaboration data
const mockCollaborators = [
  {
    id: 1,
    name: "Alex Chen",
    avatar: "/placeholder-user.jpg",
    status: "online",
    role: "Lead Developer",
    currentTask: "Optimizing UserAuth gene",
  },
  {
    id: 2,
    name: "Sarah Kim",
    avatar: "/placeholder-user.jpg",
    status: "online",
    role: "Security Expert",
    currentTask: "Adding immune responses",
  },
  {
    id: 3,
    name: "Mike Johnson",
    avatar: "/placeholder-user.jpg",
    status: "away",
    role: "Performance Engineer",
    currentTask: "Database optimization",
  },
  {
    id: 4,
    name: "Lisa Wang",
    avatar: "/placeholder-user.jpg",
    status: "online",
    role: "AI Specialist",
    currentTask: "Evolution parameters",
  },
]

const mockMessages = [
  {
    id: 1,
    user: "Alex Chen",
    message: "Just pushed a new mutation to the UserAuth gene",
    timestamp: "2 min ago",
    type: "update",
  },
  {
    id: 2,
    user: "Sarah Kim",
    message: "I see a potential security vulnerability in line 47",
    timestamp: "5 min ago",
    type: "warning",
  },
  {
    id: 3,
    user: "Mike Johnson",
    message: "Performance improved by 23% after the latest optimization",
    timestamp: "8 min ago",
    type: "success",
  },
  {
    id: 4,
    user: "Lisa Wang",
    message: "Evolution fitness reached 94.2% - should we increase complexity?",
    timestamp: "12 min ago",
    type: "question",
  },
]

const mockConflicts = [
  {
    id: 1,
    file: "user-auth.gene",
    users: ["Alex Chen", "Sarah Kim"],
    type: "merge",
    description: "Both modified authentication logic",
  },
  { id: 2, file: "performance.gene", users: ["Mike Johnson"], type: "lock", description: "Currently being optimized" },
]

export default function DNALangCollaborativePlatform() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [tokenPrice, setTokenPrice] = useState(0.847)
  const [isEvolutionActive, setIsEvolutionActive] = useState(true)
  const [fitnessScore, setFitnessScore] = useState(87.3)
  const [activeOrganisms, setActiveOrganisms] = useState(1247)
  const [activeCollaborators, setActiveCollaborators] = useState(4)
  const [newMessage, setNewMessage] = useState("")
  const [selectedOrganism, setSelectedOrganism] = useState("ECommerceApp")
  const [isCollaborating, setIsCollaborating] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
      // Simulate real-time updates
      setTokenPrice((prev) => prev + (Math.random() - 0.5) * 0.01)
      setFitnessScore((prev) => Math.min(100, prev + (Math.random() - 0.4) * 0.5))
      setActiveOrganisms((prev) => prev + Math.floor(Math.random() * 3))
    }, 2000)

    return () => clearInterval(timer)
  }, [])

  const sendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send to the collaboration server
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  const valuationMilestones = [
    { value: 10, label: "Genesis", status: "completed" },
    { value: 50, label: "Early Adoption", status: "completed" },
    { value: 100, label: "Product-Market Fit", status: "current" },
    { value: 250, label: "Scaling Phase", status: "upcoming" },
    { value: 500, label: "Market Leader", status: "upcoming" },
    { value: 750, label: "Unicorn Status", status: "upcoming" },
    { value: 1000, label: "Acquisition Target", status: "upcoming" },
  ]

  const currentValuation = 84.7
  const progressToNext = ((currentValuation - 50) / (100 - 50)) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* DNA Helix Animation */}
        <div className="absolute top-20 left-10 w-32 h-32 opacity-20">
          <div className="animate-spin-slow">
            <div className="w-full h-full border-4 border-cyan-400 rounded-full border-dashed"></div>
            <div className="absolute top-2 left-2 w-28 h-28 border-4 border-green-400 rounded-full border-dotted animate-pulse"></div>
          </div>
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Collaboration Indicators */}
        <div className="absolute top-1/3 right-20 opacity-30">
          <div className="w-20 h-20 border-2 border-green-400 rounded-full animate-pulse">
            <div className="w-full h-full flex items-center justify-center">
              <Users className="w-8 h-8 text-green-400" />
            </div>
          </div>
        </div>

        {/* Organic Shapes */}
        <div className="absolute bottom-20 right-20 w-40 h-40 opacity-10">
          <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-green-400 rounded-full animate-pulse transform rotate-45"></div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-slate-700/50 backdrop-blur-sm bg-slate-900/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-green-400 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-slate-900" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                  DNA-Lang Collaborative Platform
                </h1>
                <p className="text-sm text-slate-400">Real-time Multi-Developer Evolution Engine v1.7</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="border-green-400 text-green-400">
                <Users className="w-3 h-3 mr-1" />
                {activeCollaborators} Active
              </Badge>
              <Badge variant="outline" className="border-orange-400 text-orange-400">
                ${tokenPrice.toFixed(3)} DNA
              </Badge>
              <Button size="sm" variant="outline" className="border-cyan-400 text-cyan-400 bg-transparent">
                <Video className="w-4 h-4 mr-2" />
                Join Call
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-8">
        {/* Collaboration Status Bar */}
        <div className="mb-6">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    {mockCollaborators.slice(0, 4).map((collaborator) => (
                      <Avatar key={collaborator.id} className="border-2 border-slate-700 w-8 h-8">
                        <AvatarImage src={collaborator.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-gradient-to-r from-cyan-400 to-green-400 text-slate-900 text-xs">
                          {collaborator.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-medium">Collaborative Session Active</div>
                    <div className="text-xs text-slate-400">Working on: {selectedOrganism}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    <Activity className="w-3 h-3 mr-1" />
                    Live Sync
                  </Badge>
                  {mockConflicts.length > 0 && (
                    <Badge variant="outline" className="border-orange-400 text-orange-400">
                      <AlertTriangle className="w-3 h-3 mr-1" />
                      {mockConflicts.length} Conflicts
                    </Badge>
                  )}
                  <Button size="sm" variant="outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    Invite
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hero Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">Market Cap</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-cyan-400">${currentValuation.toFixed(1)}M</div>
              <p className="text-xs text-green-400 flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +8.5% to next milestone
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">Active Organisms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">{activeOrganisms.toLocaleString()}</div>
              <p className="text-xs text-green-400 flex items-center mt-1">
                <Users className="w-3 h-3 mr-1" />
                127K+ developers
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">Collaboration Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-400">94.2%</div>
              <p className="text-xs text-green-400 flex items-center mt-1">
                <Brain className="w-3 h-3 mr-1" />
                Real-time sync active
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">DNA Rewards</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-400">1,247</div>
              <p className="text-xs text-green-400 flex items-center mt-1">
                <Coins className="w-3 h-3 mr-1" />
                Team mining active
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="collaboration" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border-slate-700">
                <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
                <TabsTrigger value="evolution">Evolution</TabsTrigger>
                <TabsTrigger value="organisms">Organisms</TabsTrigger>
                <TabsTrigger value="conflicts">Conflicts</TabsTrigger>
              </TabsList>

              <TabsContent value="collaboration" className="space-y-6">
                {/* Live Code Editor */}
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center">
                        <Code className="w-5 h-5 mr-2 text-cyan-400" />
                        Collaborative Code Editor
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-green-400 text-green-400">
                          <Eye className="w-3 h-3 mr-1" />3 viewing
                        </Badge>
                        <Badge variant="outline" className="border-orange-400 text-orange-400">
                          <Edit3 className="w-3 h-3 mr-1" />1 editing
                        </Badge>
                      </div>
                    </div>
                    <CardDescription>Real-time collaborative editing with conflict resolution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* File Tabs */}
                      <div className="flex space-x-2 border-b border-slate-600 pb-2">
                        <Button size="sm" variant="ghost" className="text-cyan-400 border-b-2 border-cyan-400">
                          user-auth.gene
                        </Button>
                        <Button size="sm" variant="ghost" className="text-slate-400">
                          performance.gene
                        </Button>
                        <Button size="sm" variant="ghost" className="text-slate-400">
                          security.gene
                        </Button>
                      </div>

                      {/* Code Editor Area */}
                      <div className="relative">
                        <Textarea
                          className="min-h-[300px] bg-slate-900/50 border-slate-600 text-green-400 font-mono text-sm"
                          value={`gene UserAuth {
  purpose: "Identity verification with real-time collaboration"
  
  implementation: {
    strategy: jwt_with_refresh,
    code: \`
      async function auth(ctx) {
        // Alex Chen is editing this section
        const validation = await validateUser(ctx.token);
        if (!validation.valid) {
          throw new AuthError(validation.error);
        }
        
        // Sarah Kim added security enhancement
        const securityCheck = await checkSecurityThreats(ctx);
        if (securityCheck.risk > 0.8) {
          await logSecurityEvent(securityCheck);
          throw new SecurityError("High risk detected");
        }
        
        return { user: validation.user, session: ctx.session };
      }
    \`
  }
  
  mutations: {
    add_biometrics: \`
      // Lisa Wang's AI-suggested mutation
      const biometricResult = await verifyBiometric(ctx.biometric);
      if (!biometricResult.match) throw new BiometricError();
    \`,
    
    optimize_performance: \`
      // Mike Johnson's performance optimization
      const cached = await getFromCache(ctx.userId);
      if (cached && !cached.expired) return cached.data;
    \`
  }
  
  immune_responses: {
    brute_force: "rate_limit(); alert_security_team();",
    suspicious_activity: "require_2fa(); log_incident();"
  }
}`}
                          readOnly
                        />

                        {/* Live Cursors */}
                        <div className="absolute top-4 right-4 flex space-x-2">
                          <div className="flex items-center space-x-1 bg-green-400/20 px-2 py-1 rounded text-xs">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-green-400">Alex Chen</span>
                          </div>
                          <div className="flex items-center space-x-1 bg-orange-400/20 px-2 py-1 rounded text-xs">
                            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                            <span className="text-orange-400">Sarah Kim</span>
                          </div>
                        </div>
                      </div>

                      {/* Collaboration Tools */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-600">
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Save className="w-4 h-4 mr-2" />
                            Save
                          </Button>
                          <Button size="sm" variant="outline">
                            <GitMerge className="w-4 h-4 mr-2" />
                            Merge
                          </Button>
                          <Button size="sm" variant="outline">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </Button>
                        </div>
                        <div className="text-xs text-slate-400">Last saved: 2 minutes ago by Alex Chen</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Team Activity */}
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="w-5 h-5 mr-2 text-green-400" />
                      Team Activity Feed
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-64">
                      <div className="space-y-3">
                        {mockMessages.map((message) => (
                          <div key={message.id} className="flex items-start space-x-3 p-3 rounded-lg bg-slate-700/30">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="bg-gradient-to-r from-cyan-400 to-green-400 text-slate-900 text-xs">
                                {message.user
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-medium">{message.user}</span>
                                <span className="text-xs text-slate-400">{message.timestamp}</span>
                                <Badge
                                  variant="outline"
                                  className={`text-xs ${
                                    message.type === "success"
                                      ? "border-green-400 text-green-400"
                                      : message.type === "warning"
                                        ? "border-orange-400 text-orange-400"
                                        : message.type === "question"
                                          ? "border-blue-400 text-blue-400"
                                          : "border-slate-400 text-slate-400"
                                  }`}
                                >
                                  {message.type}
                                </Badge>
                              </div>
                              <p className="text-sm text-slate-300 mt-1">{message.message}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="evolution" className="space-y-6">
                {/* Evolution Control */}
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <GitBranch className="w-5 h-5 mr-2 text-cyan-400" />
                        Collaborative Evolution Engine
                      </span>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant={isEvolutionActive ? "default" : "outline"}
                          onClick={() => setIsEvolutionActive(!isEvolutionActive)}
                        >
                          {isEvolutionActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </Button>
                        <Button size="sm" variant="outline">
                          <RotateCcw className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-400">Team Fitness Score</span>
                        <span className="text-sm font-medium text-green-400">{fitnessScore.toFixed(1)}%</span>
                      </div>
                      <Progress value={fitnessScore} className="h-2" />

                      <div className="grid grid-cols-4 gap-4 mt-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-cyan-400">Gen 247</div>
                          <div className="text-xs text-slate-400">Current</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-400">+23%</div>
                          <div className="text-xs text-slate-400">Team Boost</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-orange-400">4</div>
                          <div className="text-xs text-slate-400">Contributors</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-yellow-400">0.3s</div>
                          <div className="text-xs text-slate-400">Sync Time</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Team Evolution Mining */}
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                      Team Evolution Mining
                    </CardTitle>
                    <CardDescription>Collaborative rewards distribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Alert className="border-yellow-400/20 bg-yellow-400/10">
                        <Coins className="h-4 w-4 text-yellow-400" />
                        <AlertDescription className="text-yellow-400">
                          Team bonus: +50% DNA rewards for collaborative improvements
                        </AlertDescription>
                      </Alert>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-slate-400">Team Pool</div>
                          <div className="text-2xl font-bold text-yellow-400">1,847 DNA</div>
                        </div>
                        <div>
                          <div className="text-sm text-slate-400">Your Share</div>
                          <div className="text-2xl font-bold text-green-400">462 DNA</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="organisms" className="space-y-6">
                {/* Collaborative Organisms */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { name: "ECommerceApp", fitness: 94.2, status: "collaborative", contributors: 4, mutations: 23 },
                    { name: "SecurityAgent", fitness: 98.7, status: "review", contributors: 2, mutations: 45 },
                    { name: "DataProcessor", fitness: 87.1, status: "collaborative", contributors: 3, mutations: 12 },
                    { name: "APIGateway", fitness: 91.5, status: "locked", contributors: 1, mutations: 34 },
                  ].map((organism, index) => (
                    <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{organism.name}</CardTitle>
                          <div className="flex items-center space-x-2">
                            <Badge
                              variant="outline"
                              className={
                                organism.status === "collaborative"
                                  ? "border-green-400 text-green-400"
                                  : organism.status === "review"
                                    ? "border-orange-400 text-orange-400"
                                    : organism.status === "locked"
                                      ? "border-red-400 text-red-400"
                                      : "border-blue-400 text-blue-400"
                              }
                            >
                              {organism.status}
                            </Badge>
                            <div className="flex -space-x-1">
                              {Array.from({ length: organism.contributors }).map((_, i) => (
                                <div
                                  key={i}
                                  className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full border-2 border-slate-700 flex items-center justify-center text-xs text-slate-900 font-bold"
                                >
                                  {i + 1}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-slate-400">Team Fitness</span>
                              <span className="font-medium">{organism.fitness}%</span>
                            </div>
                            <Progress value={organism.fitness} className="h-1" />
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-400">Contributors</span>
                            <span className="font-medium">{organism.contributors}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-400">Mutations</span>
                            <span className="font-medium">{organism.mutations}</span>
                          </div>
                          <Button size="sm" variant="outline" className="w-full bg-transparent">
                            Join Collaboration
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="conflicts" className="space-y-6">
                {/* Merge Conflicts */}
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Merge className="w-5 h-5 mr-2 text-orange-400" />
                      Merge Conflicts & Locks
                    </CardTitle>
                    <CardDescription>Resolve conflicts and manage file locks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockConflicts.map((conflict) => (
                        <div key={conflict.id} className="p-4 rounded-lg bg-slate-700/30 border border-orange-400/30">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <AlertTriangle className="w-4 h-4 text-orange-400" />
                              <span className="font-medium">{conflict.file}</span>
                              <Badge variant="outline" className="border-orange-400 text-orange-400">
                                {conflict.type}
                              </Badge>
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                Resolve
                              </Button>
                              <Button size="sm" variant="outline">
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                          <p className="text-sm text-slate-400 mb-2">{conflict.description}</p>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-slate-500">Involved:</span>
                            {conflict.users.map((user, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {user}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Collaboration Sidebar */}
          <div className="space-y-6">
            {/* Active Collaborators */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-green-400" />
                    Team Members
                  </CardTitle>
                  <Button size="sm" variant="outline">
                    <UserPlus className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockCollaborators.map((collaborator) => (
                    <div key={collaborator.id} className="flex items-center space-x-3 p-2 rounded-lg bg-slate-700/30">
                      <div className="relative">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={collaborator.avatar || "/placeholder.svg"} />
                          <AvatarFallback className="bg-gradient-to-r from-cyan-400 to-green-400 text-slate-900">
                            {collaborator.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div
                          className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-slate-700 ${
                            collaborator.status === "online"
                              ? "bg-green-400"
                              : collaborator.status === "away"
                                ? "bg-orange-400"
                                : "bg-gray-400"
                          }`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">{collaborator.name}</div>
                        <div className="text-xs text-slate-400 truncate">{collaborator.role}</div>
                        <div className="text-xs text-green-400 truncate">{collaborator.currentTask}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Team Chat */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-cyan-400" />
                  Team Chat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-64 mb-4">
                  <div className="space-y-3">
                    {mockMessages.slice(0, 6).map((message) => (
                      <div key={message.id} className="text-sm">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-cyan-400">{message.user.split(" ")[0]}</span>
                          <span className="text-xs text-slate-500">{message.timestamp}</span>
                        </div>
                        <p className="text-slate-300 text-xs">{message.message}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                    className="bg-slate-700/50 border-slate-600"
                  />
                  <Button size="sm" onClick={sendMessage}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Collaboration Stats */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-orange-400" />
                  Session Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-400">Session Duration</span>
                    <span className="text-sm font-medium">2h 34m</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-400">Code Changes</span>
                    <span className="text-sm font-medium text-green-400">247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-400">Conflicts Resolved</span>
                    <span className="text-sm font-medium text-orange-400">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-400">Team Efficiency</span>
                    <span className="text-sm font-medium text-cyan-400">94.2%</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">DNA Rewards Earned</span>
                    <span className="text-sm font-bold text-yellow-400">+127 DNA</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-700/50 backdrop-blur-sm bg-slate-900/50 mt-12">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-400">© 2025 DNA-Lang Platform. Real-time Collaboration Engine v1.7</div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="border-green-400 text-green-400">
                <Activity className="w-3 h-3 mr-1" />
                Live Sync Active
              </Badge>
              <Badge variant="outline" className="border-cyan-400 text-cyan-400">
                <Lock className="w-3 h-3 mr-1" />
                End-to-End Encrypted
              </Badge>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
