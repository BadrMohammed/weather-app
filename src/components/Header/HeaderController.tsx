import React, { useState } from 'react';
import HeaderView from './HeaderView';

function HeaderController({ handleToggleSidebar, handleCollapsedChange }: any) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMenuClick = () => {
    if (window.innerWidth > 760) {
      handleCollapsedChange();
    } else {
      handleToggleSidebar();
    }
  };

  return (
    <HeaderView
      handleMenuClick={handleMenuClick}
      handleMobileMenuOpen={handleMobileMenuOpen}
      handleMenuClose={handleMenuClose}
      handleProfileMenuOpen={handleProfileMenuOpen}
      anchorEl={anchorEl}
      mobileMoreAnchorEl={mobileMoreAnchorEl}
      handleMobileMenuClose={handleMobileMenuClose}
    />
  );
}

export default HeaderController;
