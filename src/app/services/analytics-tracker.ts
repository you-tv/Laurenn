// Analytics & Event Tracking Service for Rainbow Webinar
// Tracks trial lifecycle events and KPIs

export type TrackingEvent = 
  | 'trial_activated'
  | 'webinar_created'
  | 'webinar_launched'
  | 'attendee_joined'
  | 'subscribe_cta_clicked'
  | 'trial_expired'
  | 'feature_used'
  | 'report_problem'
  | 'email_opened'
  | 'email_clicked';

export type FeatureType = 'recording' | 'qa' | 'chat' | 'analytics' | 'polls' | 'screen_share';

interface EventData {
  event: TrackingEvent;
  timestamp: Date;
  userId?: string;
  webinarId?: string;
  feature?: FeatureType;
  metadata?: Record<string, any>;
}

class AnalyticsTracker {
  private events: EventData[] = [];

  // Track an event
  track(event: TrackingEvent, data?: {
    userId?: string;
    webinarId?: string;
    feature?: FeatureType;
    metadata?: Record<string, any>;
  }) {
    const eventData: EventData = {
      event,
      timestamp: new Date(),
      ...data
    };

    this.events.push(eventData);
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Event tracked:', eventData);
    }

    // In production, send to analytics service (e.g., Segment, Mixpanel, etc.)
    this.sendToAnalyticsService(eventData);

    // Store in localStorage for demo purposes
    this.persistEvent(eventData);
  }

  private sendToAnalyticsService(eventData: EventData) {
    // TODO: Integrate with real analytics service
    // Example: analytics.track(eventData.event, eventData);
  }

  private persistEvent(eventData: EventData) {
    try {
      const stored = localStorage.getItem('rainbow_analytics_events');
      const events = stored ? JSON.parse(stored) : [];
      events.push(eventData);
      
      // Keep only last 1000 events
      if (events.length > 1000) {
        events.shift();
      }
      
      localStorage.setItem('rainbow_analytics_events', JSON.stringify(events));
    } catch (error) {
      console.error('Failed to persist event:', error);
    }
  }

  // Get all tracked events
  getEvents(): EventData[] {
    try {
      const stored = localStorage.getItem('rainbow_analytics_events');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  // Get events by type
  getEventsByType(event: TrackingEvent): EventData[] {
    return this.getEvents().filter(e => e.event === event);
  }

  // Get events for a specific user
  getEventsByUser(userId: string): EventData[] {
    return this.getEvents().filter(e => e.userId === userId);
  }

  // Get events for a specific webinar
  getEventsByWebinar(webinarId: string): EventData[] {
    return this.getEvents().filter(e => e.webinarId === webinarId);
  }

  // Calculate KPIs
  getKPIs(userId?: string) {
    const events = userId ? this.getEventsByUser(userId) : this.getEvents();
    
    const webinarsCreated = events.filter(e => e.event === 'webinar_created').length;
    const webinarsLaunched = events.filter(e => e.event === 'webinar_launched').length;
    const subscribeClicks = events.filter(e => e.event === 'subscribe_cta_clicked').length;
    const featuresUsed = events.filter(e => e.event === 'feature_used');
    
    // Calculate time to first webinar
    const trialActivated = events.find(e => e.event === 'trial_activated');
    const firstWebinar = events.find(e => e.event === 'webinar_created');
    let timeToFirstWebinar = null;
    
    if (trialActivated && firstWebinar) {
      const diff = new Date(firstWebinar.timestamp).getTime() - new Date(trialActivated.timestamp).getTime();
      timeToFirstWebinar = Math.floor(diff / (1000 * 60 * 60 * 24)); // days
    }

    // Feature adoption rates
    const featureAdoption: Record<FeatureType, number> = {
      recording: 0,
      qa: 0,
      chat: 0,
      analytics: 0,
      polls: 0,
      screen_share: 0
    };

    featuresUsed.forEach(event => {
      if (event.feature) {
        featureAdoption[event.feature]++;
      }
    });

    // Launch rate
    const launchRate = webinarsCreated > 0 
      ? (webinarsLaunched / webinarsCreated * 100).toFixed(1)
      : '0.0';

    return {
      webinarsCreated,
      webinarsLaunched,
      launchRate: parseFloat(launchRate),
      subscribeClicks,
      timeToFirstWebinar,
      featureAdoption,
      totalEvents: events.length
    };
  }

  // Clear all events (for testing)
  clearEvents() {
    localStorage.removeItem('rainbow_analytics_events');
    this.events = [];
  }
}

// Singleton instance
export const analyticsTracker = new AnalyticsTracker();
