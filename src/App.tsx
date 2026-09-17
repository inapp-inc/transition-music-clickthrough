import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { CatalogList } from './pages/CatalogList';
import { TitleDetailBefore } from './pages/TitleDetailBefore';
import { TitleDetailAfter } from './pages/TitleDetailAfter';
import { RetitleStep1 } from './pages/RetitleStep1';
import { RetitleStep2 } from './pages/RetitleStep2';
import { RetitleStep3 } from './pages/RetitleStep3';
import { CueSheetsUpload } from './pages/CueSheetsUpload';
import { CueSheetsParsing } from './pages/CueSheetsParsing';
import { CueSheetsReview } from './pages/CueSheetsReview';
import { Activity } from './pages/Activity';
import { RoyaltyIncomeEntry } from './pages/RoyaltyIncomeEntry';
import { RoyaltyBreakdown } from './pages/RoyaltyBreakdown';
import { RoyaltyStatement } from './pages/RoyaltyStatement';
import { WrapUp } from './pages/WrapUp';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<AppShell />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/catalog" element={<CatalogList />} />
          <Route
            path="/catalog/supreme-guidance"
            element={<TitleDetailBefore />}
          />
          <Route
            path="/catalog/supreme-guidance/after"
            element={<TitleDetailAfter />}
          />
          <Route path="/retitle/step-1" element={<RetitleStep1 />} />
          <Route path="/retitle/step-2" element={<RetitleStep2 />} />
          <Route path="/retitle/step-3" element={<RetitleStep3 />} />
          <Route path="/cue-sheets" element={<CueSheetsUpload />} />
          <Route path="/cue-sheets/parsing" element={<CueSheetsParsing />} />
          <Route path="/cue-sheets/review" element={<CueSheetsReview />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/royalty" element={<RoyaltyIncomeEntry />} />
          <Route path="/royalty/income" element={<RoyaltyIncomeEntry />} />
          <Route path="/royalty/breakdown" element={<RoyaltyBreakdown />} />
          <Route path="/royalty/statement" element={<RoyaltyStatement />} />
          <Route path="/wrap-up" element={<WrapUp />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
