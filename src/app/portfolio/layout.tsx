import { Box } from '@/components/box';
import PortfolioSidebar from '@/module/portfolio/portfolio-sidebar';
import React from 'react';

const PortfolioRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="space-y-4 md:grid md:grid-cols-12 md:gap-6 md:space-y-0">
      <div className="md:col-span-4 lg:col-span-3">
        <Box>
          <PortfolioSidebar />
        </Box>
      </div>
      <div className="md:col-span-8 lg:col-span-9">{children}</div>
    </div>
  );
};

export default PortfolioRootLayout;
