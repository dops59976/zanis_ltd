import { useState, useEffect } from 'react';
import { api } from './api';
import './index.css';

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
  },
  header: {
    borderBottom: '1px solid #e5e7eb',
  },
  headerContent: {
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '32px',
    paddingRight: '32px',
    paddingTop: '24px',
    paddingBottom: '24px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '8px',
  },
  logoIcon: {
    width: '32px',
    height: '32px',
    border: '2px solid #111827',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#111827',
  },
  subtitle: {
    color: '#4b5563',
    fontSize: '14px',
  },
  main: {
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '32px',
    paddingRight: '32px',
    paddingTop: '48px',
  },
  section: {
    marginBottom: '48px',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '24px',
  },
  card: {
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '24px',
  },
  statusDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#10b981',
    borderRadius: '50%',
  },
  statusText: {
    color: '#059669',
    fontWeight: '500',
  },
  form: {
    maxWidth: '448px',
  },
  formGroup: {
    marginBottom: '16px',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '12px',
    paddingBottom: '12px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '14px',
    outline: 'none',
    transition: 'all 0.2s',
  },
  button: {
    width: '100%',
    backgroundColor: '#2563eb',
    color: 'white',
    fontWeight: '600',
    paddingTop: '12px',
    paddingBottom: '12px',
    paddingLeft: '16px',
    paddingRight: '16px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
    marginTop: '8px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    backgroundColor: '#f9fafb',
    borderBottom: '1px solid #e5e7eb',
  },
  th: {
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingTop: '12px',
    paddingBottom: '12px',
    textAlign: 'left',
    fontSize: '12px',
    fontWeight: '600',
    color: '#374151',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  td: {
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingTop: '16px',
    paddingBottom: '16px',
    fontSize: '14px',
    color: '#111827',
  },
  tdSecondary: {
    color: '#6b7280',
  },
  tr: {
    borderBottom: '1px solid #e5e7eb',
  },
  trHover: {
    backgroundColor: '#f9fafb',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '4px',
    paddingBottom: '4px',
    borderRadius: '9999px',
    fontSize: '12px',
    fontWeight: '500',
    backgroundColor: '#dcfce7',
    color: '#166534',
  },
  error: {
    border: '1px solid #fecaca',
    backgroundColor: '#fef2f2',
    color: '#b91c1c',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '12px',
    paddingBottom: '12px',
    borderRadius: '8px',
    fontSize: '14px',
  },
  empty: {
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    paddingLeft: '32px',
    paddingRight: '32px',
    paddingTop: '32px',
    paddingBottom: '32px',
    textAlign: 'center',
    color: '#6b7280',
    fontSize: '14px',
  },
};

export default function Dashboard() {
  const [dbStatus, setDbStatus] = useState(null);
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    checkDbStatus();
    loadUsers();
  }, []);

  const checkDbStatus = async () => {
    try {
      const status = await api.getDbStatus();
      setDbStatus(status);
    } catch (err) {
      setError(`DB Status: ${err.message}`);
    }
  };

  const loadUsers = async () => {
    try {
      const usersList = await api.listUsers();
      setUsers(usersList);
    } catch (err) {
      setError(`Load users: ${err.message}`);
    }
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    if (!email || !name) {
      setError('Email and name required');
      return;
    }

    setLoading(true);
    try {
      await api.createUser(email, name);
      setEmail('');
      setName('');
      setError(null);
      loadUsers();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>ZP</div>
            <h1 style={styles.title}>Zanis Platform</h1>
          </div>
          <p style={styles.subtitle}>User Management</p>
        </div>
      </header>

      <main style={styles.main}>
        {/* DB Status Card */}
        <div style={styles.section}>
          <div style={styles.card}>
            <h2 style={{ ...styles.sectionTitle, marginBottom: '16px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              System Status
            </h2>
            {dbStatus ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={styles.statusDot}></div>
                <span style={styles.statusText}>Database Connected</span>
              </div>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ ...styles.statusDot, backgroundColor: '#d1d5db' }}></div>
                <span style={{ color: '#6b7280' }}>Checking database...</span>
              </div>
            )}
          </div>
        </div>

        {/* Create User Form */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Add New User</h2>
          <form onSubmit={handleCreateUser} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                placeholder="user@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                disabled={loading}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Name</label>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={styles.input}
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              style={{
                ...styles.button,
                backgroundColor: loading ? '#9ca3af' : '#2563eb',
                opacity: loading ? 0.6 : 1,
              }}
              onMouseEnter={(e) => !loading && (e.target.style.backgroundColor = '#1d4ed8')}
              onMouseLeave={(e) => !loading && (e.target.style.backgroundColor = '#2563eb')}
            >
              {loading ? 'Creating...' : 'Create User'}
            </button>
          </form>
        </div>

        {/* Error Message */}
        {error && (
          <div style={{ ...styles.section, marginBottom: '32px' }}>
            <div style={styles.error}>{error}</div>
          </div>
        )}

        {/* Users List */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Users ({users.length})</h2>
          {users.length > 0 ? (
            <div style={styles.card}>
              <div style={{ overflowX: 'auto' }}>
                <table style={styles.table}>
                  <thead style={styles.tableHeader}>
                    <tr>
                      <th style={styles.th}>ID</th>
                      <th style={styles.th}>Email</th>
                      <th style={styles.th}>Name</th>
                      <th style={styles.th}>Status</th>
                      <th style={styles.th}>Created</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} style={styles.tr}>
                        <td style={{ ...styles.td, fontWeight: '500' }}>{user.id}</td>
                        <td style={styles.td}>{user.email}</td>
                        <td style={styles.td}>{user.name}</td>
                        <td style={styles.td}>
                          <span style={styles.badge}>Active</span>
                        </td>
                        <td style={{ ...styles.td, ...styles.tdSecondary }}>
                          {new Date(user.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div style={styles.empty}>
              No users yet. Create one to get started.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
