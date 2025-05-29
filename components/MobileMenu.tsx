import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Enhanced Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Menu content with glassmorphism */}
      <div className="fixed right-4 top-4 bottom-4 w-72 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 p-6 shadow-2xl shadow-black/20 transition-all duration-300">
        <div className="flex flex-col h-full">
          {/* Header with close button */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-base font-medium text-white/90">Menu</div>
            <button
              onClick={onClose}
              className="p-2.5 text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/5 hover:border-white/20 hover:scale-105"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-2 flex-1">
            <Link
              href="/submit-report"
              className="group flex items-center px-4 py-3.5 text-white/70 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-white/10"
              onClick={onClose}
            >
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-sky-400/60 group-hover:bg-sky-400 transition-colors duration-300"></div>
                <span className="text-sm font-medium">Submit Report</span>
              </div>
            </Link>
            
            <Link
              href="/track-report"
              className="group flex items-center px-4 py-3.5 text-white/70 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-white/10"
              onClick={onClose}
            >
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-emerald-400/60 group-hover:bg-emerald-400 transition-colors duration-300"></div>
                <span className="text-sm font-medium">Track Report</span>
              </div>
            </Link>
            
            <Link
              href="/how-it-works"
              className="group flex items-center px-4 py-3.5 text-white/70 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-white/10"
              onClick={onClose}
            >
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-purple-400/60 group-hover:bg-purple-400 transition-colors duration-300"></div>
                <span className="text-sm font-medium">How It Works</span>
              </div>
            </Link>
          </nav>

          {/* Bottom Emergency Section */}
          <div className="mt-auto pt-6 border-t border-white/10">
            <button className="w-full group flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-red-500/10 to-red-600/10 backdrop-blur-sm border border-red-500/20 text-sm font-medium text-red-400 hover:text-red-300 hover:border-red-400/30 hover:bg-red-500/15 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20">
              <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span>Emergency: 119</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}