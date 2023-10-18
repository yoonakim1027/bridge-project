import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '@/components/Login';
import ProviderInfoPage from '@/pages/Uploaders/ProviderInfo';
import AdminPage from '@/pages/Admin';

export default function Router() {
  return (
    <BrowserRouter>
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
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
