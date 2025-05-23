import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import OnBoardingOneSlider from "./assets/onboadingOneSlider.svg";
import OnBoardingOneLogo from "./assets/OnBoardingOneLogo.svg";
import OnboardingThreeLogo from "./assets/OnBoardingThreeLogo.svg";
import OnboardingTwoLogo from "./assets/OnBoardingTwoLogo.svg";
import OnboardingTwoSlider from "./assets/OnBoardingTwoSlider.svg";
import MobileLayout from "./components/Layout/MobileLayout";
import GetStarted from "./Pages/GetStarted";
import InvestmentPlan from "./Pages/InvestmentPlan";
import InviteAndEarn from "./Pages/Invite&Earn";
import LoginForm from "./Pages/LoginForm";
import MainScreen from "./Pages/MainScreen";
import Onboarding from "./Pages/Onboarding-1";
import Passbook from "./Pages/PassBook";
import ProfileScreen from "./Pages/Profile";
import ReceiveCurrency from "./Pages/ReceiveCurrency";
import ReceiveFinal from "./Pages/ReceiveFinal";
import RegistrationOne from "./Pages/RegistrationOne";
import RegistrationTwo from "./Pages/RegistrationTwo";
import RequestSubmitted from "./Pages/RequestSubmitted";
import SendCurrency from "./Pages/SendCurrency";
import SplashScreen from "./Pages/SplashScreen";
import TransferReceipt from "./Pages/TransferReceipt";
// import ScannerPage from "./Pages/ScannerPage";

const App = () => {
  return (
    <Router>
      <Toaster position="top-center" richColors />
      <div className="bg-[#070707] min-h-screen">
        <Routes>
          <Route
            path="/onboarding-1"
            element={
              <MobileLayout>
                <Onboarding
                  mainLogo={OnBoardingOneLogo}
                  text="Trusted by millions of people, part of one part"
                  smallLogo={OnBoardingOneSlider}
                  to="/onboarding-2"
                />
              </MobileLayout>
            }
          />
          <Route
            path="/onboarding-2"
            element={
              <MobileLayout>
                <Onboarding
                  mainLogo={OnboardingTwoLogo}
                  text="Spend money to generate, passive income"
                  smallLogo={OnboardingTwoSlider}
                  to="/onboarding-3"
                />
              </MobileLayout>
            }
          />
          <Route
            path="/onboarding-3"
            element={
              <MobileLayout>
                <Onboarding
                  mainLogo={OnboardingThreeLogo}
                  text="Receive Money From Anywhere In The World"
                  smallLogo={OnBoardingOneSlider}
                  to="/getStarted"
                />
              </MobileLayout>
            }
          />
          <Route
            path="/getStarted"
            element={
              <MobileLayout>
                <GetStarted />
              </MobileLayout>
            }
          />
          <Route
            path="/login-register"
            element={
              <MobileLayout>
                <LoginForm />
              </MobileLayout>
            }
          />
          <Route
            path="/register"
            element={
              <MobileLayout>
                <RegistrationOne />
              </MobileLayout>
            }
          />
          <Route
            path="/verify-otp"
            element={
              <MobileLayout>
                <RegistrationTwo />
              </MobileLayout>
            }
          />
          <Route
            path="/main-screen"
            element={
              <MobileLayout>
                <MainScreen />
              </MobileLayout>
            }
          />
          <Route
            path="/profile"
            element={
              <MobileLayout>
                <ProfileScreen />
              </MobileLayout>
            }
          />
          <Route
            path="/transfer-receipt"
            element={
              <MobileLayout>
                <TransferReceipt />
              </MobileLayout>
            }
          />
          <Route
            path="/select-wallet-send"
            element={
              <MobileLayout>
                <SendCurrency />
              </MobileLayout>
            }
          />
          <Route
            path="/select-wallet-receive"
            element={
              <MobileLayout>
                <ReceiveCurrency />
              </MobileLayout>
            }
          />
          <Route
            path="/receive-final"
            element={
              <MobileLayout>
                <ReceiveFinal />
              </MobileLayout>
            }
          />
          <Route
            path="/request-submitted"
            element={
              <MobileLayout>
                <RequestSubmitted />
              </MobileLayout>
            }
          />
          <Route
            path="/passbook"
            element={
              <MobileLayout>
                <Passbook />
              </MobileLayout>
            }
          />
          <Route
            path="/invite-and-earn"
            element={
              <MobileLayout>
                <InviteAndEarn />
              </MobileLayout>
            }
          />
          <Route
            path="/investment-plan"
            element={
              <MobileLayout>
                <InvestmentPlan />
              </MobileLayout>
            }
          />
          {/* <Route
            path="/scanner"
            element={
              <MobileLayout>
                <ScannerPage />
              </MobileLayout>
            }
          /> */}

          {/* Default route */}
          <Route
            index
            element={
              <MobileLayout>
                <SplashScreen />
              </MobileLayout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
