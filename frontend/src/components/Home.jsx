import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import TrustedPartners from './TrustedPartners';
import Spline from './SplineBG';

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);
  return (
    <div className="relative">
      <Navbar />
      <div className="w-full h-[420px] bg-transparent">
        <Spline />
      </div>
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <TrustedPartners />
      <Footer />
    </div>
  )
}

export default Home