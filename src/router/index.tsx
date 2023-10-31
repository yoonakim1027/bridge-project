import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '@/components/Login';
import ProviderInfoPage from '@/pages/Uploaders/ProviderInfo';
import Sidebar from '@/components/Sidebar';
import { SidebarProvider } from '@/contexts/SidebarContext';
import AdminPage from '@/pages/Admin';
import SignUpPage from '@/pages/SignUp';
import ProviderSignUpForm from '@/components/Signup/ProviderSignUpForm';
import ProviderSignUpPage from '@/pages/SignUp/ProviderSignUp/jndex';
import SignUpMain from '@/pages/SignUp';
import { RequestForm } from '@/components/Request';
import Checkout from '@/components/Admin/Checkout';

interface RouterProps {
  isLoggedIn: boolean;
}

export default function Router({ isLoggedIn }: RouterProps) {
  return (
    <BrowserRouter>
      {!isLoggedIn && ( // 로그인 상태에서만 사이드바 렌더링
        <SidebarProvider>
          <Sidebar />
        </SidebarProvider>
      )}
      <Routes>
        <Route
          path="login"
          element={
            <Login
              onLogin={function (username: string, password: string): void {}}
            />
          }
        />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/upload" element={<ProviderInfoPage />} />
        <Route
          path="*"
          element={isLoggedIn ? <Navigate to="/upload" /> : <Navigate to="/login" />}
        />
        {/* <Route path="/signUp" element={<SignUpPage />} /> */}
        {/* <Route path="/providersignUp" element={<ProviderSignUpPage />} /> */}
        <Route path="/signUp" element={<SignUpMain />} />
        <Route path="/request" element={<RequestForm />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
