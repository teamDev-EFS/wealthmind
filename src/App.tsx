import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import LearningPaths from './pages/LearningPaths';
import LessonDetail from './pages/LessonDetail';
import CashflowSimulator from './pages/CashflowSimulator';
import InvestmentCalculator from './pages/InvestmentCalculator';
import SavingsPlanner from './pages/SavingsPlanner';
import WealthHabits from './pages/WealthHabits';
import Leaderboard from './pages/Leaderboard';
import { UserProgressProvider } from './context/UserProgressContext';
import { CalculatorProvider } from './context/CalculatorContext';

const App = () => {
  const location = useLocation();
  return (
    <UserProgressProvider>
      <CalculatorProvider>
        <Layout>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/learning-paths" element={<LearningPaths />} />
              <Route path="/lesson/:lessonId" element={<LessonDetail />} />
              <Route path="/cashflow-simulator" element={<CashflowSimulator />} />
              <Route path="/investment-calculator" element={<InvestmentCalculator />} />
              <Route path="/savings-planner" element={<SavingsPlanner />} />
              <Route path="/wealth-habits" element={<WealthHabits />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </Layout>
      </CalculatorProvider>
    </UserProgressProvider>
  );
};

export default App;
