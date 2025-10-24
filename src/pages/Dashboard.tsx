
import React from 'react';
import { Header } from "@/components/Layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, Plane, Target, Clock, Zap } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Prediction Dashboard</h1>
          <p className="text-muted-foreground">Real-time Aviator game analysis and predictions</p>
        </div>

        {/* Live Prediction Card */}
        <Card className="mb-8 glass-effect border-primary/20 neon-glow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Plane className="h-6 w-6 text-primary" />
                  Live Prediction
                </CardTitle>
                <CardDescription>Next round prediction based on AI analysis</CardDescription>
              </div>
              <Badge variant="secondary" className="aviator-gradient text-primary-foreground">
                <Zap className="h-4 w-4 mr-1" />
                LIVE
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2.47x</div>
                <div className="text-sm text-muted-foreground">Predicted Multiplier</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-success mb-2">87%</div>
                <div className="text-sm text-muted-foreground">Confidence Level</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-warning mb-2">12s</div>
                <div className="text-sm text-muted-foreground">Time to Next Round</div>
              </div>
            </div>
            <div className="mt-6">
              <Button className="w-full aviator-gradient text-primary-foreground">
                <Target className="h-4 w-4 mr-2" />
                Place Prediction Bet
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Performance Stats */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-success" />
                Today's Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Win Rate</span>
                <span className="font-semibold text-success">73%</span>
              </div>
              <Progress value={73} className="h-2" />
              
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Profit</span>
                <span className="font-semibold text-success">+$247.50</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Predictions</span>
                <span className="font-semibold">23</span>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-success" />
                  <span className="text-sm">Win at 2.34x</span>
                </div>
                <span className="text-sm text-success">+$45.20</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingDown className="h-4 w-4 text-destructive" />
                  <span className="text-sm">Loss at 1.12x</span>
                </div>
                <span className="text-sm text-destructive">-$20.00</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-success" />
                  <span className="text-sm">Win at 3.45x</span>
                </div>
                <span className="text-sm text-success">+$67.80</span>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">156</div>
                <div className="text-sm text-muted-foreground">Total Predictions</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-success">$1,247</div>
                <div className="text-sm text-muted-foreground">Total Profit</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">12</div>
                <div className="text-sm text-muted-foreground">Days Active</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Analytics Tabs */}
        <Tabs defaultValue="predictions" className="space-y-4">
          <TabsList>
            <TabsTrigger value="predictions">Predictions</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
          </TabsList>
          
          <TabsContent value="predictions">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>Prediction Analysis</CardTitle>
                <CardDescription>AI-powered pattern recognition results</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Plane className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Advanced prediction algorithms will be implemented here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="history">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>Betting History</CardTitle>
                <CardDescription>Complete record of your predictions and outcomes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Clock className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Historical data visualization will be implemented here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="patterns">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>Pattern Analysis</CardTitle>
                <CardDescription>Identified patterns and trends in game data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Target className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Pattern recognition system will be implemented here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;