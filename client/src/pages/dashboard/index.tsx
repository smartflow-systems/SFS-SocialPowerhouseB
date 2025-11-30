import DashboardLayout from '@/layouts/DashboardLayout';
import AnalyticsDashboard from '@/components/Dashboard/AnalyticsDashboard';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Calendar, TrendingUp, Link2 } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Dashboard() {
  const [, navigate] = useLocation();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-sfs-gold mb-2" data-testid="heading-dashboard">
              Welcome to SFS Social Powerhouse
            </h1>
            <p className="text-muted-foreground">
              AI-powered insights for your social media success
            </p>
          </div>
          <Button
            onClick={() => navigate('/posts/create')}
            className="bg-sfs-gold hover:bg-sfs-gold-hover text-sfs-black"
            data-testid="button-create-post"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Create Post
          </Button>
        </div>

        <Card className="glass-card p-4">
          <h2 className="text-xl font-semibold text-sfs-gold mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button
              variant="outline"
              className="justify-start h-auto py-4 flex-col items-start gap-2 border-sfs-gold/20 hover:border-sfs-gold/40"
              onClick={() => navigate('/ai-studio')}
              data-testid="button-ai-content"
            >
              <Sparkles className="w-5 h-5 text-sfs-gold" />
              <div className="text-left">
                <div className="font-semibold">AI Content</div>
                <div className="text-xs text-muted-foreground">Generate with AI</div>
              </div>
            </Button>
            <Button
              variant="outline"
              className="justify-start h-auto py-4 flex-col items-start gap-2 border-sfs-gold/20 hover:border-sfs-gold/40"
              onClick={() => navigate('/calendar')}
              data-testid="button-schedule"
            >
              <Calendar className="w-5 h-5 text-sfs-gold" />
              <div className="text-left">
                <div className="font-semibold">Schedule</div>
                <div className="text-xs text-muted-foreground">Plan your content</div>
              </div>
            </Button>
            <Button
              variant="outline"
              className="justify-start h-auto py-4 flex-col items-start gap-2 border-sfs-gold/20 hover:border-sfs-gold/40"
              onClick={() => navigate('/analytics')}
              data-testid="button-analytics"
            >
              <TrendingUp className="w-5 h-5 text-sfs-gold" />
              <div className="text-left">
                <div className="font-semibold">Analytics</div>
                <div className="text-xs text-muted-foreground">Deep insights</div>
              </div>
            </Button>
            <Button
              variant="outline"
              className="justify-start h-auto py-4 flex-col items-start gap-2 border-sfs-gold/20 hover:border-sfs-gold/40"
              onClick={() => navigate('/connections/social-accounts')}
              data-testid="button-connect"
            >
              <Link2 className="w-5 h-5 text-sfs-gold" />
              <div className="text-left">
                <div className="font-semibold">Connect</div>
                <div className="text-xs text-muted-foreground">Link accounts</div>
              </div>
            </Button>
          </div>
        </Card>

        <AnalyticsDashboard />
      </div>
    </DashboardLayout>
  );
}
