import React, { useState } from 'react';
import { 
  Bell, BellOff, CheckCircle, AlertTriangle, 
  Info, Truck, Clock,  X, 
  ChevronDown, ChevronUp, Search 
} from 'lucide-react';

type NotificationType = {
  id: string;
  title: string;
  message: string;
  type: 'alert' | 'info' | 'shipment' | 'reminder';
  date: string;
  read: boolean;
  priority: 'high' | 'medium' | 'low';
};

const Notification: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificationType[]>([
    {
      id: '1',
      title: 'Shipment Delayed',
      message: 'Your shipment #QNB12345 from Shanghai to Los Angeles is delayed by 2 days due to weather conditions.',
      type: 'alert',
      date: '2023-06-15 14:30',
      read: false,
      priority: 'high'
    },
    {
      id: '2',
      title: 'New Shipment Created',
      message: 'New shipment #QNB12346 from Tokyo to Sydney has been created and is awaiting pickup.',
      type: 'shipment',
      date: '2023-06-14 09:15',
      read: true,
      priority: 'medium'
    },
    {
      id: '3',
      title: 'Payment Received',
      message: 'Payment of $1,250.00 for invoice #INV-2023-056 has been received.',
      type: 'info',
      date: '2023-06-13 11:45',
      read: true,
      priority: 'low'
    },
    {
      id: '4',
      title: 'Scheduled Maintenance',
      message: 'Our tracking system will undergo maintenance on June 20th from 2:00 AM to 4:00 AM UTC.',
      type: 'info',
      date: '2023-06-12 16:20',
      read: false,
      priority: 'medium'
    },
    {
      id: '5',
      title: 'Delivery Attempt Failed',
      message: 'Delivery attempt failed for shipment #QNB12344. Recipient was not available. Next attempt scheduled for tomorrow.',
      type: 'alert',
      date: '2023-06-12 10:30',
      read: false,
      priority: 'high'
    },
    {
      id: '6',
      title: 'Weekly Report Available',
      message: 'Your weekly shipping performance report is now available in the analytics dashboard.',
      type: 'reminder',
      date: '2023-06-11 08:00',
      read: true,
      priority: 'low'
    }
  ]);

  const [filter, setFilter] = useState<'all' | 'unread' | 'alerts' | 'shipments'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      read: true
    })));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const filteredNotifications = notifications.filter(notification => {
    // Apply filter
    if (filter === 'unread' && notification.read) return false;
    if (filter === 'alerts' && notification.type !== 'alert') return false;
    if (filter === 'shipments' && notification.type !== 'shipment') return false;
    
    // Apply search
    if (searchQuery && 
        !notification.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !notification.message.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'alert':
        return <AlertTriangle className="text-red-500" size={20} />;
      case 'info':
        return <Info className="text-blue-500" size={20} />;
      case 'shipment':
        return <Truck className="text-green-500" size={20} />;
      case 'reminder':
        return <Clock className="text-yellow-500" size={20} />;
      default:
        return <Bell className="text-gray-500" size={20} />;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">High</span>;
      case 'medium':
        return <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Medium</span>;
      case 'low':
        return <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Low</span>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Notifications</h1>
              <p className="text-gray-300">Stay updated with your shipments and account activity</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-2">
              <button 
                onClick={markAllAsRead}
                className="flex items-center bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors"
              >
                <CheckCircle size={18} className="mr-2" />
                Mark all as read
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="bg-white shadow-sm py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1 rounded-lg text-sm ${filter === 'all' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'}`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('unread')}
                className={`px-3 py-1 rounded-lg text-sm flex items-center ${filter === 'unread' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'}`}
              >
                <Bell className="mr-1" size={16} />
                Unread
              </button>
              <button
                onClick={() => setFilter('alerts')}
                className={`px-3 py-1 rounded-lg text-sm flex items-center ${filter === 'alerts' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'}`}
              >
                <AlertTriangle className="mr-1" size={16} />
                Alerts
              </button>
              <button
                onClick={() => setFilter('shipments')}
                className={`px-3 py-1 rounded-lg text-sm flex items-center ${filter === 'shipments' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'}`}
              >
                <Truck className="mr-1" size={16} />
                Shipments
              </button>
            </div>

            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search notifications..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notifications List */}
      <section className="container mx-auto px-4 py-8">
        {filteredNotifications.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <BellOff className="mx-auto text-gray-400" size={48} />
            <h3 className="text-xl font-medium text-gray-700 mt-4">No notifications found</h3>
            <p className="text-gray-500 mt-2">You're all caught up!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredNotifications.map(notification => (
              <div 
                key={notification.id} 
                className={`bg-white rounded-lg shadow-sm overflow-hidden border-l-4 ${
                  notification.priority === 'high' ? 'border-red-500' : 
                  notification.priority === 'medium' ? 'border-yellow-500' : 'border-green-500'
                } ${!notification.read ? 'ring-2 ring-blue-200' : ''}`}
              >
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start space-x-3">
                      <div className="mt-1">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className={`font-medium ${
                            notification.read ? 'text-gray-700' : 'text-gray-900'
                          }`}>
                            {notification.title}
                          </h3>
                          {getPriorityBadge(notification.priority)}
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          {new Date(notification.date).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      {!notification.read && (
                        <button 
                          onClick={() => markAsRead(notification.id)}
                          className="text-gray-400 hover:text-blue-500 transition-colors"
                          title="Mark as read"
                        >
                          <CheckCircle size={18} />
                        </button>
                      )}
                      <button 
                        onClick={() => deleteNotification(notification.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        title="Delete"
                      >
                        <X size={18} />
                      </button>
                      <button 
                        onClick={() => setExpandedId(expandedId === notification.id ? null : notification.id)}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {expandedId === notification.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                    </div>
                  </div>

                  {expandedId === notification.id && (
                    <div className="mt-4 pl-9">
                      <p className="text-gray-700">{notification.message}</p>
                      {notification.type === 'shipment' && (
                        <div className="mt-3">
                          <button className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded hover:bg-blue-100 transition-colors">
                            Track Shipment
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Notification;