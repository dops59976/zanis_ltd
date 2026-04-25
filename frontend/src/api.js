// Use relative URL - Nginx will proxy /api to backend
const API_URL = '/api';
const BASE_URL = '';

// Auth token management
const getToken = () => localStorage.getItem('auth_token');
const setToken = (token) => localStorage.setItem('auth_token', token);
const clearToken = () => localStorage.removeItem('auth_token');

// Helper: fetch with auth header
const fetchWithAuth = async (url, options = {}) => {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  // Use relative URL for fetch
  const finalUrl = url.startsWith('http') ? url : `/api${url.replace('/api', '')}`;
  return fetch(finalUrl, { ...options, headers });
};

export const api = {
  // Utils
  _getUrl(path) {
    return `${BASE_URL}${path}`;
  },

  // Auth
  getToken,
  setToken,
  clearToken,

  async signup(email, name, password) {
    const response = await fetch(`/api/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name, password }),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Signup failed');
    }
    return response.json();
  },

  async login(email, password) {
    const response = await fetch(`/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Login failed');
    }
    const data = await response.json();
    setToken(data.token);
    return data;
  },

  logout() {
    clearToken();
  },

  // Database status
  async getDbStatus() {
    const response = await fetch(`/api/db/status`);
    if (!response.ok) throw new Error('Failed to get DB status');
    return response.json();
  },

  // Users
  async createUser(email, name) {
    const response = await fetch(`/api/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name }),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Failed to create user');
    }
    return response.json();
  },

  async getUser(userId) {
    const response = await fetchWithAuth(`/api/users/${userId}`);
    if (!response.ok) throw new Error('User not found');
    return response.json();
  },

  async getUserByEmail(email) {
    const response = await fetchWithAuth(`/api/users/email/${email}`);
    if (!response.ok) throw new Error('User not found');
    return response.json();
  },

  async listUsers(skip = 0, limit = 10) {
    const response = await fetchWithAuth(`/api/users?skip=${skip}&limit=${limit}`);
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
  },

  // Sessions
  async createSession(userId) {
    const response = await fetch(`/api/sessions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: userId }),
    });
    if (!response.ok) throw new Error('Failed to create session');
    return response.json();
  },

  async getSession(sessionId) {
    const response = await fetchWithAuth(`/api/sessions/${sessionId}`);
    if (!response.ok) throw new Error('Session not found');
    return response.json();
  },

  async deleteSession(sessionId) {
    const response = await fetchWithAuth(`/api/sessions/${sessionId}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete session');
    return response.json();
  },
};
