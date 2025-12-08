"use client";
import React, { useState } from "react";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "../utils/cn";
import Paper from '@mui/material/Paper';


export default function Newnavbar() {
  return (
    <div className="dark relative w-full flex items-center justify-center">
      <ElevationScroll>
        <Navbar className="top-2" />
      </ElevationScroll>
    </div>
  );
}


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  // Wrap il Navbar dentro un Paper che accetta elevation
  return (
    <Paper elevation={trigger ? 4 : 0}>
      {children}
    </Paper>
  );
}


function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >

      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} link='/' item="Home">

        </MenuItem>
        <MenuItem setActive={setActive} active={active} link='/timeline' item="Timeline">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} link='/education' item="Education">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} link='/jobs' item="Jobs">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} link='/projects' item="Projects">
        </MenuItem>
      </Menu>

    </div>
  );
}
