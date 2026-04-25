import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9fafb',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    padding: '48px 40px',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '32px',
  },
  logo: {
    width: '40px',
    height: '40px',
    border: '2px solid #111827',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#111827',
  },
  title: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#111827',
    margin: 0,
  },
  subtitle: {
    fontSize: '14px',
    color: '#6b7280',
    textAlign: 'center',
    marginTop: '8px',
    marginBottom: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
  },
  input: {
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
  inputFocus: {
    borderColor: '#2563eb',
    boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.1)',
  },
  button: {
    paddingTop: '12px',
    paddingBottom: '12px',
    paddingLeft: '16px',
    paddingRight: '16px',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    fontWeight: '600',
    fontSize: '14px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    marginTop: '8px',
  },
  buttonHover: {
    backgroundColor: '#1d4ed8',
  },
  buttonDisabled: {
    backgroundColor: '#9ca3af',
    cursor: 'not-allowed',
    opacity: 0.6,
  },
  error: {
    backgroundColor: '#fef2f2',
    border: '1px solid #fecaca',
    color: '#b91c1c',
    padding: '12px 16px',
    borderRadius: '8px',
    fontSize: '14px',
  },
  link: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#6b7280',
    marginTop: '24px',
  },
  linkButton: {
    color: '#2563eb',
    textDecoration: 'none',
    cursor: 'pointer',
    fontWeight: '500',
    background: 'none',
    border: 'none',
    padding: 0,
  },
};

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, error: authError } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.logo}>ZP</div>
          <h1 style={styles.title}>Zanis</h1>
        </div>
        <p style={styles.subtitle}>Sign in to your account</p>

        {(error || authError) && (
          <div style={styles.error}>
            {error || authError}
          </div>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              style={{
                ...styles.input,
                ...(focusedField === 'email' ? styles.inputFocus : {}),
              }}
              disabled={loading}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocusedField('password')}
              onBlur={() => setFocusedField(null)}
              style={{
                ...styles.input,
                ...(focusedField === 'password' ? styles.inputFocus : {}),
              }}
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              ...styles.button,
              ...(loading ? styles.buttonDisabled : styles.buttonHover),
            }}
            onMouseEnter={(e) => !loading && (e.target.style.backgroundColor = '#1d4ed8')}
            onMouseLeave={(e) => !loading && (e.target.style.backgroundColor = '#2563eb')}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p style={styles.link}>
          Don't have an account?{' '}
          <button
            type="button"
            style={styles.linkButton}
            onClick={() => navigate('/signup')}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
