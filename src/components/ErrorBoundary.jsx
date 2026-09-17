import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error("App render error:", error, info);
  }

  handleReload = () => {
    this.setState({ error: null });
    if (typeof window !== "undefined") window.location.reload();
  };

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6" style={{ background: "#f7f6f2" }}>
          <div className="max-w-md w-full text-center rounded-2xl p-8" style={{ background: "#fff", border: "1px solid #e0e5de" }}>
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-3" style={{ color: "#1D7945" }}>Something went wrong</p>
            <h2 className="font-bold text-xl mb-2" style={{ color: "#1f3d2a" }}>The page hit a render error.</h2>
            <p className="text-sm mb-1" style={{ color: "#6b7a70" }}>A quick reload usually clears it.</p>
            <pre className="text-left text-xs mt-4 mb-6 p-3 rounded-lg overflow-auto max-h-40" style={{ background: "#f7f6f2", color: "#b3261e" }}>
              {this.state.error?.message || String(this.state.error)}
            </pre>
            <button
              onClick={this.handleReload}
              className="w-full py-3 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: "#1D7945" }}
            >
              Reload app
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}