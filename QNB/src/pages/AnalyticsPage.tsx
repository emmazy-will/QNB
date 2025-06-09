import React, { useEffect, useState, } from 'react';
import PageHeader from '../components/PageHeader';
import ProtectedRoute from '../components/ProtectedRoute';
import { useAuth } from '../contexts/AuthContext';
import { 
  Box, DollarSign, CheckCircle, 
  RefreshCw, ArrowUp, Download,
  FileText, FileSpreadsheet,
  TrendingUp, AlertTriangle,
  Target, Zap, Award, Filter, Search,
   Bell, LogOut, User, X, BarChart3
} from 'lucide-react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  BarElement,
  ArcElement,
  RadialLinearScale,
  Filler,
  Tooltip, 
  Legend 
} from 'chart.js';
import { Line, Bar, Doughnut,  } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Filler,
  Tooltip,
  Legend
);

const AnalyticsPage: React.FC = () => {
  const { user, logout, hasPermission } = useAuth();
  const [timePeriod, setTimePeriod] = useState('30');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isGeneratingInsights, setIsGeneratingInsights] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState('');
  const [showTrackingResult, setShowTrackingResult] = useState(false);
  const [trackingProgress, setTrackingProgress] = useState(0);
  const [selectedMetric, setSelectedMetric] = useState('revenue');
  const [comparisonMode, setComparisonMode] = useState(false);
  const [alertsCount, setAlertsCount] = useState(3);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [reportType, setReportType] = useState<'excel' | 'pdf' | 'dashboard' | null>(null);
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const [reportProgress, setReportProgress] = useState(0);
  const [stats, setStats] = useState({
    totalShipments: '142',
    onTimeRate: '94.7%',
    avgTransitTime: '3.2',
    costPerShipment: '$142.50',
    totalRevenue: '$2.4M',
    customerSatisfaction: '4.8',
    carbonFootprint: '12.3',
    marketShare: '15.2%'
  });

  // Mock data for reports
  const yourReportData = {};
  const currentFilters = {};
  
  useEffect(() => {
    document.title = 'Advanced Analytics Dashboard | Q.N.B Transport';
    updateAnalyticsData();
  }, [timePeriod]);
  
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      updateAnalyticsData();
      setIsRefreshing(false);
    }, 1000);
  };
  
  const handleGenerateInsights = () => {
    setIsGeneratingInsights(true);
    setTimeout(() => {
      setIsGeneratingInsights(false);
    }, 1500);
  };
  
  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      simulateTracking();
    }
  };
  
  const simulateTracking = () => {
    setShowTrackingResult(true);
    setTrackingProgress(0);
    
    const interval = setInterval(() => {
      setTrackingProgress(prev => {
        const newValue = prev + 20;
        if (newValue >= 100) {
          clearInterval(interval);
        }
        return newValue;
      });
    }, 500);
  };



 const downloadPDFReport = async () => {
  try {
    const apiKey = 'sk_af89d30f2e605c7d268f09a22bc5b1bc6cf694a1'; // Replace with your real PDFShift API key
    const url = 'https://api.pdfshift.io/v3/convert/pdf';

    const sourceUrl = 'https://en.wikipedia.org/wiki/PDF'; // Replace with your dynamic report HTML/URL

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa(apiKey + ':'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        source: sourceUrl,
        landscape: false,
        use_print: false
      })
    });

    if (!response.ok) throw new Error('Failed to generate PDF');

    const blob = await response.blob();
    const pdfUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `report-${new Date().toISOString().split('T')[0]}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(pdfUrl);

    closeReportModal();
  } catch (error) {
    console.error('Error downloading PDF:', error);
  }
};



  const navigateToDashboard = () => {
    closeReportModal();
    // Replace with your actual routing logic
    console.log('Navigating to dashboard...');
  };

  const downloadExcelReport = async () => {
    try {
      const response = await fetch('/api/reports/download-excel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reportData: yourReportData,
          filters: currentFilters,
        }),
      });

      if (!response.ok) throw new Error('Failed to generate Excel');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `report-${new Date().toISOString().split('T')[0]}.xlsx`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      closeReportModal();
    } catch (error) {
      console.error('Error downloading Excel:', error);
    }
  };

  const closeReportModal = () => {
    setReportType(null);
    setIsGeneratingReport(false);
    setReportProgress(0);
  };
  
  const updateAnalyticsData = () => {
    let newStats = { ...stats };
    
    if (timePeriod === '7') {
      newStats.totalShipments = String(Math.floor(Math.random() * 50) + 50);
      newStats.onTimeRate = (Math.random() * 5 + 90).toFixed(1) + '%';
      newStats.avgTransitTime = (Math.random() * 1 + 2).toFixed(1);
      newStats.costPerShipment = '$' + (Math.random() * 50 + 150).toFixed(2);
      newStats.totalRevenue = '$' + (Math.random() * 0.5 + 0.3).toFixed(1) + 'M';
    } else if (timePeriod === '30') {
      newStats.totalShipments = String(Math.floor(Math.random() * 200) + 100);
      newStats.onTimeRate = (Math.random() * 5 + 90).toFixed(1) + '%';
      newStats.avgTransitTime = (Math.random() * 1 + 3).toFixed(1);
      newStats.costPerShipment = '$' + (Math.random() * 50 + 100).toFixed(2);
      newStats.totalRevenue = '$' + (Math.random() * 1 + 2).toFixed(1) + 'M';
    } else if (timePeriod === '90') {
      newStats.totalShipments = String(Math.floor(Math.random() * 600) + 300);
      newStats.onTimeRate = (Math.random() * 5 + 88).toFixed(1) + '%';
      newStats.avgTransitTime = (Math.random() * 1 + 3.5).toFixed(1);
      newStats.costPerShipment = '$' + (Math.random() * 40 + 90).toFixed(2);
      newStats.totalRevenue = '$' + (Math.random() * 3 + 6).toFixed(1) + 'M';
    } else {
      newStats.totalShipments = String(Math.floor(Math.random() * 2400) + 1200);
      newStats.onTimeRate = (Math.random() * 5 + 85).toFixed(1) + '%';
      newStats.avgTransitTime = (Math.random() * 1 + 4).toFixed(1);
      newStats.costPerShipment = '$' + (Math.random() * 30 + 80).toFixed(2);
      newStats.totalRevenue = '$' + (Math.random() * 10 + 20).toFixed(1) + 'M';
    }
    
    setStats(newStats);
  };

  // Enhanced chart data with more sophisticated metrics
  const shipmentVolumeData = {
    labels: timePeriod === '7' 
      ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      : timePeriod === '30'
      ? ['Week 1', 'Week 2', 'Week 3', 'Week 4']
      : timePeriod === '90'
      ? ['Month 1', 'Month 2', 'Month 3']
      : ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Air Freight',
        data: timePeriod === '7'
          ? [15, 12, 18, 14, 20, 8, 5]
          : timePeriod === '30'
          ? [45, 50, 55, 60]
          : timePeriod === '90'
          ? [150, 165, 180]
          : [450, 500, 550, 600],
        borderColor: 'rgba(59, 130, 246, 1)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 6,
        pointHoverRadius: 8
      },
      {
        label: 'Ocean Freight',
        data: timePeriod === '7'
          ? [8, 10, 12, 9, 15, 5, 3]
          : timePeriod === '30'
          ? [30, 35, 40, 45]
          : timePeriod === '90'
          ? [120, 135, 150]
          : [400, 450, 500, 550],
        borderColor: 'rgba(16, 185, 129, 1)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 6,
        pointHoverRadius: 8
      },
      {
        label: 'Ground Shipping',
        data: timePeriod === '7'
          ? [20, 18, 22, 25, 30, 15, 10]
          : timePeriod === '30'
          ? [60, 65, 70, 75]
          : timePeriod === '90'
          ? [200, 220, 240]
          : [600, 650, 700, 750],
        borderColor: 'rgba(245, 158, 11, 1)',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 6,
        pointHoverRadius: 8
      }
    ]
  };

  // Predictive analytics data
  const predictiveData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Actual Revenue',
        data: [2.1, 2.3, 2.8, 2.5, 2.9, 3.1, 2.8, 3.2, 2.9, 3.4, 3.6, 3.8],
        borderColor: 'rgba(59, 130, 246, 1)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: false
      },
      {
        label: 'Predicted Revenue',
        data: [null, null, null, null, null, null, null, null, 3.0, 3.5, 3.8, 4.1],
        borderColor: 'rgba(239, 68, 68, 1)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        borderDash: [5, 5],
        tension: 0.4,
        fill: false
      }
    ]
  };

  // Customer segmentation data
  const customerSegmentData = {
    labels: ['Enterprise', 'SMB', 'E-commerce', 'Manufacturing', 'Retail', 'Healthcare'],
    datasets: [
      {
        data: [35, 25, 20, 12, 5, 3],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(236, 72, 153, 0.8)'
        ],
        borderWidth: 2,
        borderColor: '#fff'
      }
    ]
  };

  // Route efficiency data
  const routeEfficiencyData = {
    labels: ['US-Europe', 'Asia-Pacific', 'Americas', 'Middle East', 'Africa', 'Domestic'],
    datasets: [
      {
        label: 'Efficiency Score',
        data: [95, 88, 92, 85, 78, 97],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)'
        ],
        borderRadius: 8,
        borderSkipped: false
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        }
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index' as const
    }
  };

  return (
    <ProtectedRoute requiredPermission="analytics:view">
      <PageHeader title="Advanced Analytics Dashboard" />

      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-blue-800 text-white p-3 rounded-full shadow-lg"
        >
          {isMenuOpen ? <X size={24} /> : <User size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 pt-20 px-6">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-2 border-b pb-4">
              <User className="text-gray-600" size={20} />
              <span className="text-gray-700 font-medium">{user?.name}</span>
            </div>
            <div className="relative">
              <Bell className="text-gray-600 cursor-pointer hover:text-gray-800" size={20} />
              {alertsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {alertsCount}
                </span>
              )}
            </div>
            <button
              onClick={logout}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}

      {/* Top Navigation Bar */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">Analytics Dashboard</h1>
              <span className="hidden md:inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {user?.role?.toUpperCase()}
              </span>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative">
                <Link to="/notification">
                  <Bell className="text-gray-600 cursor-pointer hover:text-gray-800" size={20} />
                  {alertsCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {alertsCount}
                    </span>
                  )}
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <User className="text-gray-600" size={20} />
                <span className="text-gray-700 font-medium">{user?.name}</span>
              </div>
              <button
                onClick={logout}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Analytics Dashboard */}
      <section className="py-8 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Control Panel */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
              <div className="flex flex-wrap gap-2">
                <select 
                  className="px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(e.target.value)}
                >
                  <option value="7">Last 7 Days</option>
                  <option value="30">Last 30 Days</option>
                  <option value="90">Last Quarter</option>
                  <option value="365">Last Year</option>
                </select>
                
                <select 
                  className="px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={selectedMetric}
                  onChange={(e) => setSelectedMetric(e.target.value)}
                >
                  <option value="revenue">Revenue</option>
                  <option value="volume">Volume</option>
                  <option value="efficiency">Efficiency</option>
                  <option value="satisfaction">Satisfaction</option>
                </select>

                <button
                  onClick={() => setComparisonMode(!comparisonMode)}
                  className={`px-3 py-2 text-sm md:text-base rounded-lg transition-colors ${
                    comparisonMode 
                      ? 'bg-blue-800 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <Filter size={16} className="inline mr-2" />
                  Compare
                </button>
              </div>

              <div className="flex items-center space-x-2">
                <button 
                  className="bg-blue-800 text-white px-3 py-2 text-sm md:text-base rounded-lg hover:bg-blue-900 transition duration-300 flex items-center"
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                >
                  {isRefreshing ? (
                    <svg className="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <RefreshCw size={16} className="mr-2" />
                  )}
                  Refresh
                </button>

                {hasPermission('analytics:export') && (
                  <button 
                    className="bg-green-600 text-white px-3 py-2 text-sm md:text-base rounded-lg hover:bg-green-700 transition duration-300 flex items-center"
                    onClick={() => setReportType('pdf')}
                  >
                    <Download size={16} className="mr-2" />
                    Export
                  </button>
                )}
              </div>
            </div>
          </div>
          
          {/* Enhanced KPI Cards - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-4 md:p-6 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h6 className="text-blue-100 text-xs md:text-sm mb-1">Total Revenue</h6>
                  <h3 className="text-xl md:text-3xl font-bold">{stats.totalRevenue}</h3>
                  <div className="flex items-center mt-1 md:mt-2">
                    <ArrowUp size={14} className="mr-1" />
                    <span className="text-xs md:text-sm">+18.2% vs last period</span>
                  </div>
                </div>
                <div className="bg-white bg-opacity-20 p-2 md:p-3 rounded-full">
                  <DollarSign size={20} className="md:w-6 md:h-6" />
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg p-4 md:p-6 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h6 className="text-green-100 text-xs md:text-sm mb-1">Total Shipments</h6>
                  <h3 className="text-xl md:text-3xl font-bold">{stats.totalShipments}</h3>
                  <div className="flex items-center mt-1 md:mt-2">
                    <ArrowUp size={14} className="mr-1" />
                    <span className="text-xs md:text-sm">+12.5% vs last period</span>
                  </div>
                </div>
                <div className="bg-white bg-opacity-20 p-2 md:p-3 rounded-full">
                  <Box size={20} className="md:w-6 md:h-6" />
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg p-4 md:p-6 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h6 className="text-purple-100 text-xs md:text-sm mb-1">Customer Satisfaction</h6>
                  <h3 className="text-xl md:text-3xl font-bold">{stats.customerSatisfaction}/5</h3>
                  <div className="flex items-center mt-1 md:mt-2">
                    <ArrowUp size={14} className="mr-1" />
                    <span className="text-xs md:text-sm">+0.3 vs last period</span>
                  </div>
                </div>
                <div className="bg-white bg-opacity-20 p-2 md:p-3 rounded-full">
                  <Award size={20} className="md:w-6 md:h-6" />
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-lg p-4 md:p-6 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h6 className="text-orange-100 text-xs md:text-sm mb-1">Market Share</h6>
                  <h3 className="text-xl md:text-3xl font-bold">{stats.marketShare}</h3>
                  <div className="flex items-center mt-1 md:mt-2">
                    <ArrowUp size={14} className="mr-1" />
                    <span className="text-xs md:text-sm">+2.1% vs last period</span>
                  </div>
                </div>
                <div className="bg-white bg-opacity-20 p-2 md:p-3 rounded-full">
                  <Target size={20} className="md:w-6 md:h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Analytics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Shipment Volume Trend */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-4 md:p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 md:mb-6">
                <h5 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-0">Shipment Volume Trends</h5>
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 text-xs md:text-sm font-medium">View Details</button>
                </div>
              </div>
              <div className="h-64 md:h-80">
                <Line data={shipmentVolumeData} options={chartOptions} />
              </div>
            </div>

            {/* Customer Segmentation */}
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
              <h5 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6">Customer Segments</h5>
              <div className="h-64 md:h-80">
                <Doughnut 
                  data={customerSegmentData} 
                  options={{
                    ...chartOptions,
                    plugins: {
                      ...chartOptions.plugins,
                      legend: {
                        position: 'bottom' as const,
                        labels: {
                          usePointStyle: true,
                          padding: 15,
                          font: {
                            size: 12
                          }
                        }
                      }
                    }
                  }} 
                />
              </div>
            </div>
          </div>

          {/* Secondary Analytics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Predictive Analytics */}
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 md:mb-6">
                <h5 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-0">Revenue Prediction</h5>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs md:text-sm font-medium">
                  AI Powered
                </span>
              </div>
              <div className="h-64 md:h-80">
                <Line data={predictiveData} options={chartOptions} />
              </div>
            </div>

            {/* Route Efficiency */}
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
              <h5 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6">Route Efficiency Scores</h5>
              <div className="h-64 md:h-80">
                <Bar 
                  data={routeEfficiencyData} 
                  options={{
                    ...chartOptions,
                    indexAxis: 'y' as const,
                    plugins: {
                      ...chartOptions.plugins,
                      legend: {
                        display: false
                      }
                    }
                  }} 
                />
              </div>
            </div>
          </div>

          {/* Advanced Insights Section */}
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 md:mb-6">
              <h5 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-0">AI-Powered Business Insights</h5>
              <button 
                className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition duration-300"
                onClick={handleGenerateInsights}
                disabled={isGeneratingInsights}
              >
                {isGeneratingInsights ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Zap size={16} className="mr-2" />
                    Generate New Insights
                  </>
                )}
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 md:p-6 border border-blue-200">
                <div className="flex items-center mb-2 md:mb-3">
                  <TrendingUp className="text-blue-600 mr-2 md:mr-3" size={20}  />
                  <h6 className="font-bold text-gray-800 text-sm md:text-base">Growth Opportunity</h6>
                </div>
                <p className="text-gray-700 text-xs md:text-sm">
                  E-commerce segment shows 45% growth potential. Consider expanding capacity in this sector for Q2.
                </p>
                <div className="mt-2 md:mt-3">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">High Priority</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 md:p-6 border border-green-200">
                <div className="flex items-center mb-2 md:mb-3">
                  <CheckCircle className="text-green-600 mr-2 md:mr-3" size={20}  />
                  <h6 className="font-bold text-gray-800 text-sm md:text-base">Efficiency Win</h6>
                </div>
                <p className="text-gray-700 text-xs md:text-sm">
                  US-Europe route efficiency improved by 12% after implementing AI routing. Apply to other routes.
                </p>
                <div className="mt-2 md:mt-3">
                  <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">Implemented</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-4 md:p-6 border border-yellow-200">
                <div className="flex items-center mb-2 md:mb-3">
                  <AlertTriangle className="text-yellow-600 mr-2 md:mr-3" size={20}/>
                  <h6 className="font-bold text-gray-800 text-sm md:text-base">Risk Alert</h6>
                </div>
                <p className="text-gray-700 text-xs md:text-sm">
                  Africa route showing 15% delay increase. Weather patterns and infrastructure issues detected.
                </p>
                <div className="mt-2 md:mt-3">
                  <span className="bg-yellow-600 text-white px-2 py-1 rounded-full text-xs font-medium">Monitor</span>
                </div>
              </div>
            </div>
          </div>

          {/* Real-time Tracking Section */}
          {hasPermission('analytics:view') && (
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-8">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6">Real-time Shipment Tracking</h3>
              <form onSubmit={handleTrack} className="mb-4 md:mb-6">
                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                  <div className="flex-grow relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                      placeholder="Enter tracking number (e.g. QNB123456789)"
                      value={trackingNumber}
                                            onChange={(e) => setTrackingNumber(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-800 text-white px-4 py-2 md:py-3 rounded-lg hover:bg-blue-900 transition duration-300 text-sm md:text-base"
                  >
                    Track Shipment
                  </button>
                </div>
              </form>

              {showTrackingResult && (
                <div className="bg-gray-50 rounded-lg p-4 md:p-6 border border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-medium text-gray-800">Tracking #: {trackingNumber}</h4>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      In Transit
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-xs md:text-sm text-gray-600 mb-1">
                      <span>Origin: Shanghai, CN</span>
                      <span>Destination: Los Angeles, US</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${trackingProgress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-3 w-3 bg-blue-600 rounded-full"></div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm md:text-base font-medium text-gray-800">Shipment picked up</p>
                        <p className="text-xs text-gray-500">June 12, 2023 - 08:30 CST</p>
                        <p className="text-xs text-gray-600 mt-1">Shanghai International Port</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className={`h-3 w-3 rounded-full ${
                          trackingProgress >= 40 ? 'bg-blue-600' : 'bg-gray-300'
                        }`}></div>
                      </div>
                      <div className="ml-3">
                        <p className={`text-sm md:text-base font-medium ${
                          trackingProgress >= 40 ? 'text-gray-800' : 'text-gray-400'
                        }`}>Processed at origin facility</p>
                        <p className={`text-xs ${
                          trackingProgress >= 40 ? 'text-gray-500' : 'text-gray-300'
                        }`}>June 12, 2023 - 14:15 CST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className={`h-3 w-3 rounded-full ${
                          trackingProgress >= 70 ? 'bg-blue-600' : 'bg-gray-300'
                        }`}></div>
                      </div>
                      <div className="ml-3">
                        <p className={`text-sm md:text-base font-medium ${
                          trackingProgress >= 70 ? 'text-gray-800' : 'text-gray-400'
                        }`}>Departed transit facility</p>
                        <p className={`text-xs ${
                          trackingProgress >= 70 ? 'text-gray-500' : 'text-gray-300'
                        }`}>June 14, 2023 - 03:45 CST</p>
                        <p className={`text-xs ${
                          trackingProgress >= 70 ? 'text-gray-600' : 'text-gray-300'
                        } mt-1`}>Incheon International Airport</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className={`h-3 w-3 rounded-full ${
                          trackingProgress >= 100 ? 'bg-green-600' : 'bg-gray-300'
                        }`}></div>
                      </div>
                      <div className="ml-3">
                        <p className={`text-sm md:text-base font-medium ${
                          trackingProgress >= 100 ? 'text-gray-800' : 'text-gray-400'
                        }`}>Delivered to destination</p>
                        <p className={`text-xs ${
                          trackingProgress >= 100 ? 'text-gray-500' : 'text-gray-300'
                        }`}>June 15, 2023 - 11:20 PST</p>
                        <p className={`text-xs ${
                          trackingProgress >= 100 ? 'text-gray-600' : 'text-gray-300'
                        } mt-1`}>Los Angeles Distribution Center</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Report Generation Modal */}
          {reportType && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-gray-800">
                    {reportType === 'pdf' && 'Generate PDF Report'}
                    {reportType === 'excel' && 'Generate Excel Report'}
                    {reportType === 'dashboard' && 'Create Dashboard'}
                  </h3>
                  <button 
                    onClick={closeReportModal}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      {isGeneratingReport ? 'Generating...' : 'Ready to generate'}
                    </span>
                    <span className="text-sm font-medium text-blue-600">
                      {reportProgress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${reportProgress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {reportType === 'pdf' && (
                   <button
                    onClick={downloadPDFReport}
                    disabled={isGeneratingReport}
                    className={`w-full flex items-center justify-center px-4 py-3 rounded-lg ${
                      isGeneratingReport
                        ? 'bg-gray-300 text-gray-700 cursor-not-allowed'
                        : 'bg-blue-800 hover:bg-blue-900 text-white'
                    } transition duration-300`}
                  >
                    <FileText size={18} className="mr-2" />
                    {isGeneratingReport ? 'Generating PDF...' : 'Download PDF Report'}
                  </button>

                  )}
                  
                  {reportType === 'excel' && (
                    <button
                      onClick={downloadExcelReport}
                      disabled={isGeneratingReport}
                      className={`w-full flex items-center justify-center px-4 py-3 rounded-lg ${
                        isGeneratingReport
                          ? 'bg-gray-300 cursor-not-allowed'
                          : 'bg-green-600 hover:bg-green-700 text-white'
                      } transition duration-300`}
                    >
                      <FileSpreadsheet size={18} className="mr-2" />
                      {isGeneratingReport ? 'Generating Excel...' : 'Download Excel Report'}
                    </button>
                  )}
                  
                  {reportType === 'dashboard' && (
                    <button
                      onClick={navigateToDashboard}
                      disabled={isGeneratingReport}
                      className={`w-full flex items-center justify-center px-4 py-3 rounded-lg ${
                        isGeneratingReport
                          ? 'bg-gray-300 cursor-not-allowed'
                          : 'bg-purple-600 hover:bg-purple-700 text-white'
                      } transition duration-300`}
                    >
                      <BarChart3 size={18} className="mr-2" />
                      {isGeneratingReport ? 'Preparing Dashboard...' : 'View Interactive Dashboard'}
                    </button>
                  )}
                  
                  <button
                    onClick={closeReportModal}
                    className="w-full px-4 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </ProtectedRoute>
  );
};

export default AnalyticsPage;