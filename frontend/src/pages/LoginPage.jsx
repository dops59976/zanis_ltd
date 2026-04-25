import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #0f172a 0%, #1a2847 100%)',
    width: '100%',
  },
  card: {
    backgroundColor: '#1e293b',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    border: '1px solid rgba(100, 220, 220, 0.3)',
    padding: '48px 40px',
    width: '100%',
    maxWidth: '420px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
    color: '#ffffff',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '32px',
  },
  logo: {
    width: '48px',
    height: '48px',
    backgroundColor: '#64dcdc',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#ffffff',
    margin: 0,
  },
  subtitle: {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    marginTop: '8px',
    marginBottom: '32px',
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
    position: 'relative',
    marginTop: '16px',
  },
  label: {
    fontSize: '13px',
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.8)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '8px',
    fontSize: '14px',
    outline: 'none',
    transition: 'all 0.25s',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    color: '#ffffff',
    caretColor: '#64dcdc',
    fontWeight: 500,
  },
  inputFocus: {
    border: '1px solid #64dcdc',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    boxShadow: '0 0 0 3px rgba(100, 220, 220, 0.1)',
  },
  button: {
    width: '100%',
    paddingTop: '12px',
    paddingBottom: '12px',
    paddingLeft: '16px',
    paddingRight: '16px',
    backgroundColor: '#64dcdc',
    color: '#000',
    fontWeight: '600',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    marginTop: '24px',
  },
  buttonHover: {
    backgroundColor: '#4cc9c9',
    boxShadow: '0 8px 16px rgba(100, 220, 220, 0.3)',
  },
  buttonDisabled: {
    backgroundColor: 'rgba(100, 220, 220, 0.5)',
    cursor: 'not-allowed',
    opacity: 0.6,
  },
  error: {
    backgroundColor: 'rgba(239, 68, 68, 0.15)',
    border: '1px solid rgba(239, 68, 68, 0.5)',
    color: '#fca5a5',
    padding: '12px 16px',
    borderRadius: '8px',
    fontSize: '14px',
  },
  checkboxSection: {
    display: 'flex',
    width: '100%',
    marginTop: '16px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '14px',
  },
  checkbox: {
    width: '18px',
    height: '18px',
    cursor: 'pointer',
    accentColor: '#64dcdc',
  },
  forgotPassword: {
    color: 'rgba(255, 255, 255, 0.7)',
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    background: 'none',
    border: 'none',
    padding: 0,
    fontWeight: 'normal',
    transition: 'color 0.2s',
  },
  forgotPasswordHover: {
    color: '#64dcdc',
  },
  link: {
    textAlign: 'center',
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: '24px',
  },
  linkButton: {
    color: '#64dcdc',
    textDecoration: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    background: 'none',
    border: 'none',
    padding: 0,
    transition: 'color 0.2s',
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
          <div style={styles.logo}>Z</div>
          <h1 style={styles.title}>Zanis</h1>
        </div>
        <p style={styles.subtitle}>Admin Dashboard</p>

        {(error || authError) && (
          <div style={styles.error}>
            {error || authError}
          </div>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              placeholder="admin@zanis.com"
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

          <div style={styles.checkboxSection}>
            <label style={styles.checkboxLabel}>
              <input type="checkbox" style={styles.checkbox} />
              Remember me
            </label>
            <button
              type="button"
              style={styles.forgotPassword}
              onMouseEnter={(e) => (e.target.style.color = '#64dcdc')}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.7)')}
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              ...styles.button,
              ...(loading ? styles.buttonDisabled : {}),
            }}
            onMouseEnter={(e) => !loading && (e.target.style.backgroundColor = '#4cc9c9')}
            onMouseLeave={(e) => !loading && (e.target.style.backgroundColor = '#64dcdc')}
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
            onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.target.style.color = '#64dcdc')}
          >
            Sign up here
          </button>
        </p>
      </div>
    </div>
  );
}
