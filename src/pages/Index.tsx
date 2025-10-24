
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Layout/Header";
import { Plane, TrendingUp, Shield, Zap, BarChart3, Users, Target, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=1080&fit=crop')"
          }}
        />
        <div className="relative container mx-auto px-4 py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 aviator-gradient text-primary-foreground">
              <Zap className="h-4 w-4 mr-2" />
              AI-Powered Predictions
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Master the Aviator Game
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Advanced pattern recognition and real-time analytics to maximize your Aviator game success. 
              Join thousands of players using AI-powered predictions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="aviator-gradient text-primary-foreground hover:opacity-90 neon-glow">
                <Plane className="h-5 w-5 mr-2" />
                Start Predicting
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/analytics">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  View Analytics
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stats Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="glass-effect border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">98.7%</div>
                <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
              </CardContent>
            </Card>
            
            <Card className="glass-effect border-accent/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">15,247</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </CardContent>
            </Card>
            
            <Card className="glass-effect border-success/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">$2.4M</div>
                <div className="text-sm text-muted-foreground">Total Winnings</div>
              </CardContent>
            </Card>
            
            <Card className="glass-effect border-warning/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Live Monitoring</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Prediction Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge technology meets intuitive design for the ultimate Aviator experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-effect hover:neon-glow transition-all duration-300">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Real-time Analysis</CardTitle>
                <CardDescription>
                  Advanced algorithms analyze live game data to provide instant predictions
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="glass-effect hover:neon-glow transition-all duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Secure Platform</CardTitle>
                <CardDescription>
                  Bank-grade security with encrypted data and secure user authentication
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="glass-effect hover:neon-glow transition-all duration-300">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-success mb-4" />
                <CardTitle>Performance Analytics</CardTitle>
                <CardDescription>
                  Comprehensive charts and statistics to track your success rate
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="glass-effect hover:neon-glow transition-all duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-warning mb-4" />
                <CardTitle>Community Insights</CardTitle>
                <CardDescription>
                  Learn from top players and share strategies with the community
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="glass-effect hover:neon-glow transition-all duration-300">
              <CardHeader>
                <Target className="h-12 w-12 text-destructive mb-4" />
                <CardTitle>Precision Targeting</CardTitle>
                <CardDescription>
                  AI-powered pattern recognition for maximum accuracy predictions
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="glass-effect hover:neon-glow transition-all duration-300">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mb-4" />
                <CardTitle>24/7 Monitoring</CardTitle>
                <CardDescription>
                  Continuous game monitoring and instant alerts for optimal timing
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Game?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the elite community of Aviator players using AI-powered predictions
          </p>
          <Button size="lg" className="aviator-gradient text-primary-foreground hover:opacity-90 neon-glow" asChild>
            <Link to="/login">
              Get Started Now
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Plane className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">AviatorPro</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 AviatorPro. Advanced AI predictions for Aviator game.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;