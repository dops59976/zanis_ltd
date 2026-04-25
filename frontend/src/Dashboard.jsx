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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 border-2 border-gray-900 rounded flex items-center justify-center">
              <span className="text-xs font-bold text-gray-900">ZP</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Zanis Platform</h1>
          </div>
          <p className="text-gray-600 text-sm">User Management</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-12">
        {/* DB Status Card */}
        <div className="mb-12">
          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">
              System Status
            </h2>
            {dbStatus ? (
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-green-700 font-medium">
                  Database Connected
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                <span className="text-gray-600">Checking database...</span>
              </div>
            )}
          </div>
        </div>

        {/* Create User Form */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Add New User
          </h2>
          <form onSubmit={handleCreateUser} className="max-w-md">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="user@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                  disabled={loading}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-4 rounded-lg transition mt-2"
              >
                {loading ? 'Creating...' : 'Create User'}
              </button>
            </div>
          </form>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-8 border border-red-300 bg-red-50 text-red-700 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* Users List */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Users ({users.length})
          </h2>
          {users.length > 0 ? (
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Created
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                          {user.id}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {user.name}
                        </td>
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
            </div>
          ) : (
            <div className="border border-gray-200 rounded-lg p-8 text-center">
              <p className="text-gray-600 text-sm">No users yet. Create one to get started.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
