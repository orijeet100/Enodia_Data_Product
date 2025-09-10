# 🗺️ Enodia Data Product - Maine Infrastructure Analysis Platform

A comprehensive, multi-tenant data analysis and visualization platform for stakeholders to analyze infrastructure data across Maine. This platform enables different organizations to contribute data and perform collaborative analysis of critical infrastructure points with real-time updates and email notifications.

## ✨ Key Features

### 🏢 **Multi-Organization Support**
- **Organization-based data isolation** - Each organization only sees and manages their own data
- **Secure authentication** - Simple organization-based login system
- **Data privacy** - Complete separation of data between organizations

### 🗺️ **Interactive Mapping & Visualization**
- **Real-time interactive maps** with Folium integration
- **Color-coded infrastructure points** by type (cell towers, hospitals, power plants, etc.)
- **Geographic filtering** - Focus on specific regions within Maine
- **Click-to-explore** functionality with detailed popups

### 📊 **Advanced Analytics Dashboard**
- **Real-time statistics** - Total points, infrastructure types, organization counts
- **Distribution analysis** - Points by type and organization
- **Historical tracking** - Complete audit trail of all data changes
- **Export capabilities** - Download filtered datasets

### 🔄 **Real-time Data Updates**
- **Live synchronization** - Changes appear instantly across all interfaces
- **Auto-refresh functionality** - Platform updates automatically
- **Event-driven architecture** - AWS Lambda triggers for notifications

### 📧 **Intelligent Notifications**
- **Email analytics** - Automated reports on data changes
- **Smart filtering** - Only shows current, existing data (no deleted points)
- **Comprehensive summaries** - Points by type, organization, and recent activity

## 🏗️ **Architecture & Technology Stack**

### **Frontend**
- **Streamlit** - Modern, interactive web applications
- **Folium** - Interactive mapping and geospatial visualization
- **Plotly** - Advanced charts and analytics

### **Backend & Database**
- **AWS RDS PostgreSQL** - Scalable, secure database hosting
- **Row-level security** - Organization-based data isolation
- **Optimized queries** - Indexed for performance

### **Cloud Services**
- **AWS Lambda** - Serverless analytics and notification processing
- **Amazon SES** - Reliable email delivery
- **API Gateway** - Secure API endpoints

### **Data Management**
- **Automated database setup** - One-command initialization
- **Environment-based configuration** - Easy deployment across environments
- **Comprehensive logging** - Full audit trail of all operations

## 🚀 **Infrastructure Types Supported**

- 🗼 **Cell Towers** - Communication infrastructure
- ⚡ **Electricity Plants** - Power generation and distribution
- �� **Railway Stations** - Transportation hubs
- 🏥 **Hospitals** - Healthcare facilities
- 🚒 **Fire Stations** - Emergency services
- 👮 **Police Stations** - Law enforcement
- 💧 **Water Treatment Plants** - Water infrastructure
- ⛽ **Gas Stations** - Fuel distribution

## 📈 **Business Value**

### **For Organizations**
- **Centralized data management** - Single platform for all infrastructure data
- **Collaborative analysis** - Share insights across teams
- **Real-time monitoring** - Track changes and updates instantly
- **Data integrity** - Automated validation and error checking

### **For Stakeholders**
- **Comprehensive overview** - Complete picture of Maine's infrastructure
- **Data-driven decisions** - Analytics and insights for planning
- **Multi-organization visibility** - Cross-organization analysis capabilities
- **Historical analysis** - Track changes over time

## 🔧 **Technical Capabilities**

### **Data Security**
- **Organization isolation** - Complete data separation
- **Secure connections** - SSL/TLS encrypted database connections
- **Access control** - Role-based permissions
- **Audit logging** - Complete activity tracking

### **Performance & Scalability**
- **Optimized database queries** - Fast data retrieval
- **Caching mechanisms** - Improved response times
- **Auto-scaling infrastructure** - Handles growing data volumes
- **Efficient data structures** - Optimized for large datasets

### **Integration & Extensibility**
- **RESTful APIs** - Easy integration with other systems
- **Modular architecture** - Easy to extend and customize
- **Environment flexibility** - Works in development, staging, and production
- **Cloud-native design** - Built for AWS infrastructure

## 🎯 **Use Cases**

- **Emergency Management** - Real-time infrastructure status during disasters
- **Urban Planning** - Data-driven city development decisions
- **Infrastructure Monitoring** - Track maintenance and updates
- **Cross-Organization Collaboration** - Share data between agencies
- **Analytics & Reporting** - Generate insights and reports
- **Resource Allocation** - Optimize infrastructure investments

## 📋 **Getting Started**

See [STEPS.md](STEPS.md) for detailed setup instructions.

## �� **Contributing**

This platform is designed for collaborative data analysis. Organizations can:
- Add their infrastructure data
- View real-time analytics
- Export data for further analysis
- Receive automated notifications

## 📞 **Support**

For technical support or questions about the platform, please refer to the setup documentation or contact the development team.

---

**Built with ❤️ for Maine's infrastructure analysis and management.**