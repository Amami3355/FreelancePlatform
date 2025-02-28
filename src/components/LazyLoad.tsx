import React, { Suspense } from 'react';
import { Loader2 } from 'lucide-react';

interface LazyLoadProps {
    children: React.ReactNode;
}

function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
        </div>
    );
}

export default function LazyLoad({ children }: LazyLoadProps) {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            {children}
        </Suspense>
    );
} 