'use client';

import Navbar from '@/components/Navbar/Navbar';
import Logo from '@/components/Logo/Logo';
import Sidebar from '@/components/Sidebar/Sidebar';
import MainPage from '@/components/mainPage/mainPage';

export default function Home() {
  return (
    <div className="{`${inter.className} `} grid grid-cols-[1fr,150px,repeat(10,1fr)] grid-rows-10">
      <Logo />
      <Navbar />
      <Sidebar />
      <MainPage />
    </div>
  );
}
