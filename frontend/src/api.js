const API_URL = process.env.REACT_APP_API_URL || 'http://backend/api';
const BASE_URL = API_URL.replace('/api', '');

export const api = {
  // Utils
  _getUrl(path) {
    return `${BASE_URL}${path}`;
  },
  // Database status
  async getDbStatus() {
    const response = await fetch(`${BASE_URL}/api/db/status`);
    if (!response.ok) throw new Error('Failed to get DB status');
    return response.json();
  },

  // Users
  async createUser(email, name) {
    const response = await fetch(`${BASE_URL}/api/users`, {
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
    const response = await fetch(`${BASE_URL}/api/users/${userId}`);
    if (!response.ok) throw new Error('User not found');
    return response.json();
  },

  async getUserByEmail(email) {
    const response = await fetch(`${BASE_URL}/api/users/email/${email}`);
    if (!response.ok) throw new Error('User not found');
    return response.json();
  },

  async listUsers(skip = 0, limit = 10) {
    const response = await fetch(`${BASE_URL}/api/users?skip=${skip}&limit=${limit}`);
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
  },

  // Sessions
  async createSession(userId) {
    const response = await fetch(`${BASE_URL}/api/sessions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: userId }),
    });
    if (!response.ok) throw new Error('Failed to create session');
    return response.json();
  },

  async getSession(sessionId) {
    const response = await fetch(`${BASE_URL}/api/sessions/${sessionId}`);
    if (!response.ok) throw new Error('Session not found');
    return response.json();
  },

  async deleteSession(sessionId) {
    const response = await fetch(`${BASE_URL}/api/sessions/${sessionId}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete session');
    return response.json();
  },
};
