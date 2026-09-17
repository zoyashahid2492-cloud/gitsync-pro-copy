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
import RepoImport from './pages/RepoImport';
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
import Contact from './pages/Contact';
import WellnessTools from './pages/WellnessTools';
import MealPlanGenerator from './pages/MealPlanGenerator';
import WorkoutPlanner from './pages/WorkoutPlanner';
import WellnessCheck from './pages/WellnessCheck';
import Rewards from './pages/Rewards';
import Communities from './pages/Communities';
import FoodScanner from './pages/FoodScanner';

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
      <Route path="/schools" element={<Schools />} />
      <Route path="/global" element={<GlobalResearch />} />
      <Route path="/work-with-us" element={<WorkWithUs />} />
      <Route path="/wellness-lab" element={<WellnessLab />} />
      <Route path="/approach" element={<OurApproach />} />
      <Route path="/updates" element={<LatestUpdates />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/press" element={<Press />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/ask-ai" element={<AskAi />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/repo-import" element={<RepoImport />} />
      <Route path="/tools" element={<WellnessTools />} />
      <Route path="/meal-plans" element={<MealPlanGenerator />} />
      <Route path="/workout" element={<WorkoutPlanner />} />
      <Route path="/wellness-check" element={<WellnessCheck />} />
      <Route path="/rewards" element={<Rewards />} />
      <Route path="/communities" element={<Communities />} />
      <Route path="/scanner" element={<FoodScanner />} />
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
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App