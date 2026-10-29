/**
 * Centralized Conversion & Analytics Dispatcher
 * Implements Single GTM container pattern and GA4 event taxonomy
 */

export interface TrackedEvent {
  id: string;
  timestamp: string;
  eventName: string;
  parameters: Record<string, any>;
}

class AnalyticsService {
  private eventsLog: TrackedEvent[] = [];
  private listeners: ((events: TrackedEvent[]) => void)[] = [];

  constructor() {
    // Initialize dataLayer on window if in browser
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
    }
  }

  public track(eventName: string, parameters: Record<string, any> = {}) {
    const eventItem: TrackedEvent = {
      id: Math.random().toString(36).substring(2, 9),
      timestamp: new Date().toLocaleTimeString('id-ID'),
      eventName,
      parameters: {
        ...parameters,
        url: typeof window !== 'undefined' ? window.location.pathname : '/',
      },
    };

    this.eventsLog.unshift(eventItem);
    if (this.eventsLog.length > 50) this.eventsLog.pop();

    // Push to browser dataLayer
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: eventName,
        ...parameters,
      });
    }

    // Notify listeners for Live UI Inspector
    this.listeners.forEach((fn) => fn([...this.eventsLog]));
  }

  public getEvents(): TrackedEvent[] {
    return [...this.eventsLog];
  }

  public subscribe(callback: (events: TrackedEvent[]) => void) {
    this.listeners.push(callback);
    callback([...this.eventsLog]);
    return () => {
      this.listeners = this.listeners.filter((fn) => fn !== callback);
    };
  }
}

export const analytics = new AnalyticsService();
