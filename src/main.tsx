import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Index from './pages/Index';
import Courses from './pages/Courses';
import CoursePage from './pages/CoursePage';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/course/:id" element={<CoursePage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
