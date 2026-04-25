import { useState, useEffect } from 'react';
import { api } from './api';

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
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-900">Zanis LTD</h1>
          <p className="text-gray-600 mt-1">User Management Dashboard</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* DB Status */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">System Status</h2>
            {dbStatus ? (
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-700">
                  Database Connected ({dbStatus.status})
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse"></div>
                <span className="text-gray-600">Checking database...</span>
              </div>
            )}
          </div>
        </div>

        {/* Create User Form */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Create User</h2>
            <form onSubmit={handleCreateUser} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={loading}
                />
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={loading}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                {loading ? 'Creating...' : 'Create User'}
              </button>
            </form>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-8 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {/* Users List */}
        <div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold">Users ({users.length})</h2>
            </div>
            {users.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                        ID
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                        Created
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900">{user.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{user.email}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{user.name}</td>
                        <td className="px-6 py-4 text-sm">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {new Date(user.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="px-6 py-8 text-center text-gray-500">
                No users yet. Create one to get started!
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
