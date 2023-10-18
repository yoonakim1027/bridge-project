import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '@/components/Login';
import ProviderInfoPage from '@/pages/Uploaders/ProviderInfo';
import Sidebar from '@/components/Sidebar';
import { SidebarProvider } from '@/contexts/SidebarContext';

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
              onLogin={function (username: string, password: string): void {
                throw new Error('Function not implemented.');
              }}
            />
          }
        />
        <Route path="/upload" element={<ProviderInfoPage />} />
        <Route
          path="*"
          element={isLoggedIn ? <Navigate to="/upload" /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
