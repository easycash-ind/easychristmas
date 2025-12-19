import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="w-full h-screen bg-[#020202] flex items-center justify-center text-white">
          <div className="text-center p-8">
            <h1 className="text-2xl mb-4 font-luxury">出现错误</h1>
            <p className="text-slate-400 mb-6">
              {this.state.error?.message || '应用加载时出现问题'}
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
              className="px-6 py-2 bg-white/10 border border-white/20 rounded hover:bg-white/20 transition-colors"
            >
              重新加载
            </button>
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-4 text-left text-xs text-slate-500">
                <summary className="cursor-pointer">错误详情</summary>
                <pre className="mt-2 overflow-auto max-h-40">
                  {this.state.error?.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

