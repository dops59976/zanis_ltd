import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const postsAnalyticsData = [
  { month: 'Jan', posts: 4 },
  { month: 'Feb', posts: 3 },
  { month: 'Mar', posts: 2 },
  { month: 'Apr', posts: 5 },
  { month: 'May', posts: 4 },
  { month: 'Jun', posts: 6 },
  { month: 'Jul', posts: 5 },
  { month: 'Aug', posts: 7 },
  { month: 'Sep', posts: 6 },
  { month: 'Oct', posts: 8 },
  { month: 'Nov', posts: 7 },
  { month: 'Dec', posts: 2 },
];

const trafficAnalyticsData = [
  { month: 'Jan', visitors: 400, bounceRate: 240 },
  { month: 'Feb', visitors: 500, bounceRate: 280 },
  { month: 'Mar', visitors: 420, bounceRate: 320 },
  { month: 'Apr', visitors: 600, bounceRate: 290 },
  { month: 'May', visitors: 680, bounceRate: 320 },
  { month: 'Jun', visitors: 720, bounceRate: 350 },
  { month: 'Jul', visitors: 650, bounceRate: 310 },
  { month: 'Aug', visitors: 780, bounceRate: 340 },
  { month: 'Sep', visitors: 700, bounceRate: 330 },
  { month: 'Oct', visitors: 820, bounceRate: 360 },
  { month: 'Nov', visitors: 750, bounceRate: 340 },
  { month: 'Dec', visitors: 680, bounceRate: 320 },
];

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#0f172a',
  },
  sidebar: {
    width: '240px',
    backgroundColor: '#1a2847',
    padding: '24px 16px',
    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#ffffff',
    overflow: 'auto',
  },
  sidebarHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '32px',
    fontSize: '18px',
    fontWeight: '700',
  },
  sidebarLogo: {
    width: '32px',
    height: '32px',
    backgroundColor: '#64dcdc',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
    fontWeight: 'bold',
  },
  sidebarMenu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  sidebarItem: {
    padding: '12px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.7)',
    transition: 'all 0.2s',
    border: 'none',
    backgroundColor: 'transparent',
    width: '100%',
    textAlign: 'left',
  },
  sidebarItemActive: {
    backgroundColor: '#64dcdc',
    color: '#000',
    fontWeight: '600',
  },
  sidebarItemHover: {
    backgroundColor: 'rgba(100, 220, 220, 0.1)',
    color: '#ffffff',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#0f172a',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '16px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#ffffff',
    margin: 0,
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  headerButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#ffffff',
    cursor: 'pointer',
    fontSize: '16px',
    padding: '8px 16px',
    borderRadius: '6px',
    transition: 'all 0.2s',
  },
  headerButtonHover: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  userProfile: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    paddingLeft: '12px',
    borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
  },
  userAvatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#64dcdc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: '32px',
    overflow: 'auto',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '24px',
    marginBottom: '32px',
  },
  statCard: {
    backgroundColor: 'rgba(30, 41, 59, 0.8)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: '24px',
    display: 'flex',
    gap: '16px',
    transition: 'all 0.2s',
  },
  statCardHover: {
    backgroundColor: 'rgba(30, 41, 59, 1)',
    borderColor: 'rgba(100, 220, 220, 0.3)',
  },
  statIcon: {
    width: '64px',
    height: '64px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    fontWeight: 'bold',
    flexShrink: 0,
  },
  statIconBlue: {
    backgroundColor: '#3b82f6',
    color: '#ffffff',
  },
  statIconGreen: {
    backgroundColor: '#10b981',
    color: '#ffffff',
  },
  statIconPurple: {
    backgroundColor: '#a855f7',
    color: '#ffffff',
  },
  statIconOrange: {
    backgroundColor: '#f97316',
    color: '#ffffff',
  },
  statContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  statLabel: {
    fontSize: '12px',
    color: 'rgba(255, 255, 255, 0.6)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '8px',
  },
  statValue: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '8px',
  },
  statChange: {
    fontSize: '12px',
    color: '#10b981',
  },
  statProgress: {
    width: '100%',
    height: '6px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '3px',
    overflow: 'hidden',
    marginTop: '8px',
  },
  statProgressBar: {
    height: '100%',
    borderRadius: '3px',
    transition: 'width 0.3s',
  },
  chartsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '24px',
  },
  chartCard: {
    backgroundColor: 'rgba(30, 41, 59, 0.8)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: '24px',
  },
  chartTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '8px',
  },
  chartSubtitle: {
    fontSize: '12px',
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: '24px',
  },
  chartContainer: {
    width: '100%',
    height: '280px',
  },
};

export default function DashboardPage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'posts', label: 'Posts', icon: '📝' },
    { id: 'media', label: 'Media', icon: '🖼️' },
    { id: 'pages', label: 'Pages', icon: '📄' },
    { id: 'comments', label: 'Comments', icon: '💬' },
    { id: 'themes', label: 'Themes', icon: '🎨' },
    { id: 'plugins', label: 'Plugins', icon: '🔌' },
    { id: 'users', label: 'Users', icon: '👥' },
    { id: 'tools', label: 'Tools', icon: '🔧' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
  };

  const userInitial = user?.email?.charAt(0).toUpperCase() || 'U';

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <div style={styles.sidebarLogo}>Z</div>
          <span>Zanis</span>
        </div>

        <div style={styles.sidebarMenu}>
          {menuItems.map((item) => (
            <button
              key={item.id}
              style={{
                ...styles.sidebarItem,
                ...(activeMenu === item.id ? styles.sidebarItemActive : {}),
              }}
              onMouseEnter={(e) => {
                if (activeMenu !== item.id) {
                  e.target.style.backgroundColor = 'rgba(100, 220, 220, 0.1)';
                  e.target.style.color = '#ffffff';
                }
              }}
              onMouseLeave={(e) => {
                if (activeMenu !== item.id) {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'rgba(255, 255, 255, 0.7)';
                }
              }}
              onClick={() => handleMenuClick(item.id)}
            >
              <span style={{ marginRight: '8px' }}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.main}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.headerTitle}>Dashboard</h1>
          <div style={styles.headerRight}>
            <button style={styles.headerButton}>⚙️ Settings</button>
            <button style={styles.headerButton}>👁️ View Site</button>
            <div style={styles.userProfile}>
              <div style={styles.userAvatar}>{userInitial}</div>
              <button
                onClick={handleLogout}
                style={{
                  ...styles.headerButton,
                  fontSize: '14px',
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div style={styles.content}>
          {/* Stats Grid */}
          <div style={styles.statsGrid}>
            {/* Total Posts */}
            <div
              style={styles.statCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 1)';
                e.currentTarget.style.borderColor = 'rgba(100, 220, 220, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.8)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <div style={{ ...styles.statIcon, ...styles.statIconBlue }}>📄</div>
              <div style={styles.statContent}>
                <div style={styles.statLabel}>Total Posts</div>
                <div style={styles.statValue}>2</div>
                <div style={styles.statChange}>↑ 200%</div>
                <div style={styles.statProgress}>
                  <div
                    style={{
                      ...styles.statProgressBar,
                      width: '2%',
                      backgroundColor: '#3b82f6',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Comments */}
            <div
              style={styles.statCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 1)';
                e.currentTarget.style.borderColor = 'rgba(100, 220, 220, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.8)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <div style={{ ...styles.statIcon, ...styles.statIconGreen }}>💬</div>
              <div style={styles.statContent}>
                <div style={styles.statLabel}>Comments</div>
                <div style={styles.statValue}>2</div>
                <div style={styles.statChange}>↑ 200%</div>
                <div style={styles.statProgress}>
                  <div
                    style={{
                      ...styles.statProgressBar,
                      width: '50%',
                      backgroundColor: '#10b981',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Users */}
            <div
              style={styles.statCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 1)';
                e.currentTarget.style.borderColor = 'rgba(100, 220, 220, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.8)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <div style={{ ...styles.statIcon, ...styles.statIconPurple }}>👥</div>
              <div style={styles.statContent}>
                <div style={styles.statLabel}>Users</div>
                <div style={styles.statValue}>35</div>
                <div style={styles.statChange}>↑ 400%</div>
                <div style={styles.statProgress}>
                  <div
                    style={{
                      ...styles.statProgressBar,
                      width: '70%',
                      backgroundColor: '#a855f7',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Plugins */}
            <div
              style={styles.statCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 1)';
                e.currentTarget.style.borderColor = 'rgba(100, 220, 220, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.8)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <div style={{ ...styles.statIcon, ...styles.statIconOrange }}>🔌</div>
              <div style={styles.statContent}>
                <div style={styles.statLabel}>Plugins</div>
                <div style={styles.statValue}>3</div>
                <div style={styles.statChange}>↓ 0%</div>
                <div style={styles.statProgress}>
                  <div
                    style={{
                      ...styles.statProgressBar,
                      width: '100%',
                      backgroundColor: '#f97316',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Charts Grid */}
          <div style={styles.chartsGrid}>
            {/* Posts Analytics */}
            <div style={styles.chartCard}>
              <div style={styles.chartTitle}>📈 Posts Analytics</div>
              <div style={styles.chartSubtitle}>Last 12 months performance</div>
              <div style={styles.chartContainer}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={postsAnalyticsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                    <XAxis dataKey="month" stroke="rgba(255, 255, 255, 0.5)" />
                    <YAxis stroke="rgba(255, 255, 255, 0.5)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(15, 23, 42, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                      }}
                      labelStyle={{ color: '#ffffff' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="posts"
                      stroke="#3b82f6"
                      dot={{ fill: '#3b82f6', r: 4 }}
                      activeDot={{ r: 6 }}
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Traffic Analytics */}
            <div style={styles.chartCard}>
              <div style={styles.chartTitle}>🌐 Traffic Analytics</div>
              <div style={styles.chartSubtitle}>Website visitors overview</div>
              <div style={styles.chartContainer}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trafficAnalyticsData}>
                    <defs>
                      <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorBounce" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                    <XAxis dataKey="month" stroke="rgba(255, 255, 255, 0.5)" />
                    <YAxis stroke="rgba(255, 255, 255, 0.5)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(15, 23, 42, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                      }}
                      labelStyle={{ color: '#ffffff' }}
                    />
                    <Legend wrapperStyle={{ color: 'rgba(255, 255, 255, 0.7)' }} />
                    <Area
                      type="monotone"
                      dataKey="visitors"
                      stroke="#3b82f6"
                      fillOpacity={1}
                      fill="url(#colorVisitors)"
                    />
                    <Area
                      type="monotone"
                      dataKey="bounceRate"
                      stroke="#f97316"
                      fillOpacity={1}
                      fill="url(#colorBounce)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
