import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Suspense, lazy } from "react";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";

const ProjectQRAdmin = lazy(() => import("./pages/projects/qr-code-dine-in-ordering-admin-panel/ProjectQRAdmin"));
const PSBilling = lazy(() => import("./pages/projects/ps-billing-saas-software/PSBilling"));

const App = () => (
  <HelmetProvider>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/projects/qr-code-dine-in-ordering-admin-panel"
            element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                <ProjectQRAdmin />
              </Suspense>
            }
          />
          <Route
            path="/projects/ps-billing-saas-software"
            element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                <PSBilling />
              </Suspense>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </HelmetProvider>
);

export default App;
