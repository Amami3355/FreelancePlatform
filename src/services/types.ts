export interface Reminder {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    priority: 'low' | 'medium' | 'high';
    status: 'pending' | 'completed' | 'cancelled';
    relatedTo?: {
        type: 'client' | 'project' | 'invoice';
        id: string;
    };
}

export interface AIAnalysis {
    type: 'insight' | 'recommendation' | 'alert';
    content: string;
    confidence: number;
    context?: Record<string, unknown>;
    timestamp: Date;
}

export interface ClientPortalSettings {
    isEnabled: boolean;
    allowedFeatures: string[];
    customization: {
        logo?: string;
        primaryColor?: string;
        companyName: string;
    };
}

export interface AccountingEntry {
    id: string;
    type: 'income' | 'expense';
    amount: number;
    date: Date;
    category: string;
    description: string;
    attachments?: string[];
    metadata?: Record<string, unknown>;
}

export interface AnalyticsMetric {
    id: string;
    name: string;
    value: number;
    unit: string;
    period: {
        start: Date;
        end: Date;
    };
    trend?: {
        value: number;
        direction: 'up' | 'down' | 'stable';
    };
}

export interface CalendarEvent {
    id: string;
    title: string;
    start: Date;
    end: Date;
    type: 'meeting' | 'deadline' | 'reminder' | 'other';
    description?: string;
    attendees?: string[];
    location?: string;
    isAllDay: boolean;
    recurrence?: {
        frequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
        interval: number;
        endDate?: Date;
    };
}


export interface DocumentTemplate {
    id: string;
    name: string;
    type: 'devis' | 'facture' | 'contrat' | 'proposition';
    content: string;
    variables: string[];
    style: {
        colors: string[];
        fonts: string[];
        logo?: string;
    };
}