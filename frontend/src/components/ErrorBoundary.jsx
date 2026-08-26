import React from 'react';

/**
 * Global Error Boundary Component for Suraj Light House
 * Catches unhandled JavaScript runtime exceptions in child components
 * and displays a royal "Technical Blackout" fallback UI instead of a white crash screen.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to console or error reporting service (e.g. Sentry)
    console.error('Unhandled Application Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  toggleDetails = () => {
    this.setState((prev) => ({ showDetails: !prev.showDetails }));
  };

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div className="min-h-screen bg-[#070b14] text-[#FAF6F0] flex flex-col items-center justify-center px-4 py-12 select-none relative overflow-hidden">
          
          {/* Ambient Lighting Background Halos */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-amber-600/20 via-rose-600/15 to-transparent blur-[140px] pointer-events-none -top-20" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-yellow-500/15 via-amber-600/20 to-transparent blur-[120px] pointer-events-none -bottom-20" />

          <div className="relative z-10 max-w-xl mx-auto text-center flex flex-col items-center">
            
            {/* Warning / Generator Spark Icon */}
            <div className="relative mb-6 flex items-center justify-center">
              <div className="absolute w-24 h-24 rounded-full bg-amber-500/10 border border-amber-400/30 animate-pulse" />
              <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-b from-amber-500/20 to-rose-900/30 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-[0_0_30px_rgba(245,158,11,0.4)]">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
            </div>

            {/* Heading & Brand Themed Copy */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#FFF4D2] via-[#FBD38D] to-[#E2A03F] drop-shadow-[0_2px_15px_rgba(245,158,11,0.4)] mb-3">
              Looks Like The Lights Went Out Here
            </h1>

            <p className="text-xs sm:text-sm text-amber-200/75 font-light tracking-wide leading-relaxed max-w-md mb-8">
              An unexpected power fluctuation interrupted the illumination. Our chief electrical engineers are restoring the grid. Refresh below to bring the royal lights back on.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <button
                onClick={this.handleReload}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-serif font-bold text-xs sm:text-sm tracking-[0.16em] uppercase text-[#0B0F19] bg-gradient-to-r from-[#FDE68A] via-[#FBBF24] to-[#F59E0B] shadow-[0_0_25px_rgba(245,158,11,0.45)] hover:shadow-[0_0_40px_rgba(251,191,36,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer w-full sm:w-auto"
              >
                <i className="fa-solid fa-rotate-right text-xs" />
                <span>Refresh Page</span>
              </button>

              <button
                onClick={this.handleGoHome}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-serif font-medium text-xs sm:text-sm tracking-[0.14em] uppercase text-amber-200/90 hover:text-white bg-amber-950/30 hover:bg-amber-900/40 border border-amber-500/30 hover:border-amber-400/60 transition-all duration-300 w-full sm:w-auto cursor-pointer"
              >
                <i className="fa-solid fa-house text-xs" />
                <span>Return to Home</span>
              </button>
            </div>

            {/* Technical Error Details Accordion (for debugging) */}
            {this.state.error && (
              <div className="mt-10 w-full text-left">
                <button
                  onClick={this.toggleDetails}
                  className="text-[11px] text-amber-400/60 hover:text-amber-300 font-mono flex items-center justify-center gap-1.5 mx-auto transition-colors cursor-pointer"
                >
                  <span>{this.state.showDetails ? 'Hide technical logs' : 'Show technical logs'}</span>
                  <i className={`fa-solid fa-chevron-${this.state.showDetails ? 'up' : 'down'} text-[9px]`} />
                </button>

                {this.state.showDetails && (
                  <div className="mt-3 p-4 rounded-xl bg-black/60 border border-amber-500/20 text-red-300 font-mono text-xs overflow-x-auto max-h-48 backdrop-blur-md">
                    <p className="font-bold text-amber-400 mb-1">
                      {this.state.error.toString()}
                    </p>
                    {this.state.errorInfo?.componentStack && (
                      <pre className="text-[10px] text-amber-100/60 whitespace-pre-wrap leading-tight">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    )}
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
