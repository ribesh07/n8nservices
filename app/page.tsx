"use client";
import React, { useState } from 'react';
import { Search, FileJson, FileSpreadsheet, Upload, Download, Zap, ArrowRight, Clock, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ServicesHubDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      name: 'XLSX to JSON',
      description: 'Transform Excel spreadsheets into clean, structured JSON output',
      icon: FileSpreadsheet,
      category: 'conversion',
      status: 'active',
      executions: '856',
      gradient: 'from-green-500 to-emerald-500',
      href: "/dashboard/xlsx-to-json",
    },
    {
      id: 2,
      name: 'File to JSON',
      description: 'Convert any file format to structured JSON data with intelligent parsing',
      icon: FileJson,
      category: 'conversion',
      status: 'inactive',
      executions: '1.2k',
      gradient: 'from-blue-500 to-cyan-500',
      href: "/",
    },
    {
      id: 3,
      name: 'CSV to JSON',
      description: 'Parse CSV files and convert them to JSON with custom mapping',
      icon: FileJson,
      category: 'conversion',
      status: 'inactive',
      executions: '2.3k',
          href: "/",
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      name: 'JSON Validator',
      description: 'Validate and format JSON data with error detection',
      icon: CheckCircle2,
      category: 'processing',
      status: 'inactive',
      executions: '945',
          href: "/",
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      name: 'Bulk File Upload',
      description: 'Upload multiple files at once for batch processing',
      icon: Upload,
      category: 'utility',
      status: 'inactive',
      executions: '567',
          href: "/",
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      id: 6,
      name: 'Data Export',
      description: 'Export processed data in multiple formats',
      icon: Download,
      category: 'utility',
      status: 'inactive',
      executions: '734',
          href: "/",
      gradient: 'from-teal-500 to-green-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'conversion', name: 'Conversion', count: services.filter(s => s.category === 'conversion').length },
    { id: 'processing', name: 'Processing', count: services.filter(s => s.category === 'processing').length },
    { id: 'utility', name: 'Utility', count: services.filter(s => s.category === 'utility').length }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      {/* Header */}
   

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {category.name}
                <span className={`ml-2 text-sm ${
                  selectedCategory === category.id ? 'text-blue-100' : 'text-slate-500'
                }`}>
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(service => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group p-4 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-slate-300 cursor-pointer"
              >
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                
                <Link href={service.href} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                 <span
                    className={`px-2 py-1 text-xs font-medium rounded-full flex items-center gap-1
                      ${
                        service.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }
                    `}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full
                        ${
                          service.status === "active"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }
                      `}
                    ></div>

                    {service.status}
                  </span>

                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Clock className="w-4 h-4" />
                      <span>{service.executions} runs</span>
                    </div>
                    <button className="flex items-center gap-1 text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                      Launch
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">No services found</h3>
            <p className="text-slate-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}