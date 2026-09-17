import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
// Add page imports here
import HealthyLiving from './pages/HealthyLiving';
import Schools from './pages/Schools';
import GlobalResearch from './pages/GlobalResearch';
import WorkWithUs from './pages/WorkWithUs';
import WellnessLab from './pages/WellnessLab';
import OurApproach from './pages/OurApproach';
import LatestUpdates from './pages/LatestUpdates';
import Partners from './pages/Partners';
import Press from './pages/Press';
import FAQ from './pages/FAQ';
import AskAi from './pages/AskAi';
import About from './pages/About';
import AiChatBubble from './components/healthy-living/AiChatBubble';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      {/* Add your page Route elements here */}
      <Route path="/" element={<HealthyLiving />} />
      <Route path="/approach" element={<OurApproach />} />
      <Route path="/schools" element={<Schools />} />
      <Route path="/research" element={<GlobalResearch />} />
      <Route path="/collaborate" element={<WorkWithUs />} />
      <Route path="/lab" element={<WellnessLab />} />
      <Route path="/updates" element={<LatestUpdates />} />
      <Route path="/about" element={<About />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/press" element={<Press />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/ai" element={<AskAi />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <AuthenticatedApp />
          <AiChatBubble />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App