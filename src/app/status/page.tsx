import { PageShell } from '@/components/shared/page-shell'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, AlertCircle, Clock, Activity, Server, Database, Globe, Zap } from 'lucide-react'

const tone = {
  shell: 'bg-[#F9F0F2] text-[#3A0519]',
  hero: 'relative overflow-hidden border-b border-[#E5CCD3] bg-gradient-to-b from-[#FFFBFC] via-[#FDF5F6] to-[#F5E4EA]',
  panel: 'border border-[#E8CDD6] bg-white shadow-[0_24px_64px_rgba(58,5,25,0.07)]',
  soft: 'border border-[#EDD6DE] bg-[#FFF5F7]',
  muted: 'text-[#6B3D4F]',
  title: 'text-[#3A0519]',
  badge: 'bg-[#3A0519] text-[#FEF7F8]',
  action: 'bg-[#A53860] text-white shadow-sm hover:bg-[#8E2D52]',
  actionAlt: 'border border-[#E8CDD6] bg-white text-[#3A0519] hover:bg-[#FFF0F3]',
  success: 'bg-green-500 text-white',
  warning: 'bg-yellow-500 text-white',
  error: 'bg-red-500 text-white',
}

const services = [
  { name: 'Web Application', status: 'operational', uptime: '99.98%', icon: Globe },
  { name: 'API Services', status: 'operational', uptime: '99.95%', icon: Zap },
  { name: 'Database', status: 'operational', uptime: '99.99%', icon: Database },
  { name: 'Media CDN', status: 'operational', uptime: '99.97%', icon: Server },
]

const incidents = [
  {
    date: 'Mar 12, 2026',
    title: 'Delayed notifications',
    status: 'resolved',
    description: 'Email notifications were delayed by approximately 15 minutes due to a third-party provider issue.',
  },
  {
    date: 'Feb 22, 2026',
    title: 'Search indexing lag',
    status: 'resolved',
    description: 'Search index updates experienced a delay of 2-3 hours. Issue was resolved by optimizing the indexing pipeline.',
  },
]

const metrics = [
  { label: 'Overall Uptime', value: '99.97%' },
  { label: 'Response Time', value: '142ms' },
  { label: 'Error Rate', value: '0.02%' },
  { label: 'Last Incident', value: '45 days ago' },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'operational':
      return <CheckCircle className="h-5 w-5 text-green-500" />
    case 'degraded':
      return <AlertCircle className="h-5 w-5 text-yellow-500" />
    case 'outage':
      return <AlertCircle className="h-5 w-5 text-red-500" />
    default:
      return <Clock className="h-5 w-5 text-gray-500" />
  }
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'operational':
      return <Badge className={tone.success}>Operational</Badge>
    case 'degraded':
      return <Badge className={tone.warning}>Degraded</Badge>
    case 'outage':
      return <Badge className={tone.error}>Outage</Badge>
    case 'resolved':
      return <Badge className={tone.success}>Resolved</Badge>
    default:
      return <Badge variant="secondary">Unknown</Badge>
  }
}

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-[#F9F0F2]">
      <PageShell
        title="System Status"
        description="Real-time uptime and service health."
      >
        <section className={tone.hero}>
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] ${tone.badge}`}>
                <Activity className="h-3.5 w-3.5 opacity-90" />
                System Status
              </span>
              <h1 className={`mt-6 text-4xl leading-[1.1] sm:text-5xl lg:text-6xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                All systems
                <span className="mt-2 block text-[#670D2F]">operational</span>
              </h1>
              <p className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${tone.muted}`}>
                Real-time monitoring of our platform services. Check here for the latest updates on system performance and any ongoing incidents.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric) => (
                <div key={metric.label} className={`rounded-2xl p-6 text-center ${tone.panel}`}>
                  <div className={`text-3xl font-bold ${tone.title}`}>{metric.value}</div>
                  <div className={`mt-2 text-xs font-semibold uppercase tracking-[0.2em] ${tone.muted}`}>{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FFFBFC]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A53860]">Service Status</p>
              <h2 className={`mt-4 text-3xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                Current service health
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.name} className={`rounded-2xl p-6 ${tone.panel}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#EDD6DE] bg-[#FFF5F7] text-[#A53860]">
                        <Icon className="h-6 w-6" />
                      </div>
                      {getStatusIcon(service.status)}
                    </div>
                    <h3 className={`mt-4 text-lg font-semibold ${tone.title}`}>{service.name}</h3>
                    <div className="mt-2 flex items-center justify-between">
                      {getStatusBadge(service.status)}
                      <span className={`text-xs ${tone.muted}`}>{service.uptime} uptime</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className={tone.shell}>
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A53860]">Incident History</p>
              <h2 className={`mt-4 text-3xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                Past incidents and resolutions
              </h2>
            </div>
            <div className="mt-10 space-y-4">
              {incidents.map((incident) => (
                <div key={incident.title} className={`rounded-2xl border-l-4 border-[#A53860] p-6 ${tone.panel}`}>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div className={`text-xs font-semibold uppercase tracking-[0.2em] ${tone.muted}`}>{incident.date}</div>
                      <h3 className={`mt-2 text-lg font-semibold ${tone.title}`}>{incident.title}</h3>
                      <p className={`mt-2 text-sm leading-7 ${tone.muted}`}>{incident.description}</p>
                    </div>
                    {getStatusBadge(incident.status)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FFFBFC]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className={`rounded-3xl border border-[#E8CDD6] bg-white p-8 shadow-[0_24px_64px_rgba(58,5,25,0.07)] lg:p-12`}>
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#EDD6DE] bg-[#FFF5F7] text-[#A53860]">
                    <CheckCircle className="h-7 w-7" />
                  </div>
                  <h2 className={`mt-6 text-3xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                    Need to report an issue?
                  </h2>
                  <p className={`mt-4 text-sm leading-7 ${tone.muted}`}>
                    If you're experiencing issues not reflected on this page, please contact our support team. We're here to help 24/7.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${tone.badge}`}>
                    Contact Support
                  </button>
                  <button className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${tone.actionAlt}`}>
                    View Documentation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageShell>
    </div>
  )
}
