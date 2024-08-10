import { Box } from '@/components/box';
import PortfolioSidebar from '@/module/portfolio/portfolio-sidebar';
import React from 'react';

const PortfolioRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-3">
        <Box>
          <PortfolioSidebar />
        </Box>
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default PortfolioRootLayout;
