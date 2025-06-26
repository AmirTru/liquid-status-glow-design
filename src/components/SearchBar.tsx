
import React, { useState, useRef, useEffect } from 'react';
import { Search, Monitor, Activity, AlertTriangle, Clock } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  type: 'schedule' | 'incident' | 'test' | 'service';
  description: string;
  status?: string;
}

const mockSearchResults: SearchResult[] = [
  { id: '1', title: 'API Health Check', type: 'schedule', description: 'Monitors API endpoint health', status: 'active' },
  { id: '2', title: 'Database Connection Test', type: 'test', description: 'Tests database connectivity', status: 'passed' },
  { id: '3', title: 'SSL Certificate Expiry', type: 'incident', description: 'Certificate expiring in 7 days', status: 'warning' },
  { id: '4', title: 'Load Balancer Check', type: 'schedule', description: 'Monitors load balancer status', status: 'active' },
  { id: '5', title: 'Payment Gateway Down', type: 'incident', description: 'Payment service unavailable', status: 'critical' },
  { id: '6', title: 'Authentication Service', type: 'service', description: 'User authentication monitoring', status: 'healthy' },
  { id: '7', title: 'CDN Performance Test', type: 'test', description: 'Content delivery network speed test', status: 'passed' },
  { id: '8', title: 'Email Service Check', type: 'schedule', description: 'Email delivery monitoring', status: 'active' },
];

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim()) {
      const filtered = mockSearchResults.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(filtered);
      setIsOpen(true);
    } else {
      setFilteredResults([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'schedule':
        return <Clock className="w-4 h-4 text-blue-500" />;
      case 'incident':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'test':
        return <Activity className="w-4 h-4 text-green-500" />;
      case 'service':
        return <Monitor className="w-4 h-4 text-purple-500" />;
      default:
        return <Search className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'active':
      case 'healthy':
      case 'passed':
        return 'text-green-600 bg-green-50';
      case 'warning':
        return 'text-yellow-600 bg-yellow-50';
      case 'critical':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const handleResultClick = (result: SearchResult) => {
    setQuery(result.title);
    setIsOpen(false);
    console.log('Selected:', result);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query && setIsOpen(true)}
          placeholder="Search monitors, tests, incidents..."
          className="w-full pl-10 pr-4 py-2.5 bg-white/40 backdrop-blur-xl border border-white/30 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
        />
      </div>

      {isOpen && filteredResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl shadow-blue-500/10 z-50 max-h-80 overflow-y-auto">
          {filteredResults.map((result) => (
            <div
              key={result.id}
              onClick={() => handleResultClick(result)}
              className="flex items-center gap-3 p-3 hover:bg-white/50 cursor-pointer transition-colors duration-200 border-b border-gray-100/50 last:border-b-0"
            >
              <div className="flex-shrink-0">
                {getIcon(result.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-medium text-gray-900 truncate">
                    {result.title}
                  </h4>
                  {result.status && (
                    <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${getStatusColor(result.status)}`}>
                      {result.status}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-600 truncate mt-0.5">
                  {result.description}
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-xs text-gray-400 capitalize">
                  {result.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {isOpen && query && filteredResults.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl shadow-blue-500/10 z-50 p-4 text-center">
          <p className="text-sm text-gray-500">No results found for "{query}"</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
