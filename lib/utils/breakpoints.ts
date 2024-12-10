// Breakpoint utilities
export const breakpoints = {
  mobile: 320,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export function getBreakpointValue(breakpoint: Breakpoint): number {
  return breakpoints[breakpoint];
}