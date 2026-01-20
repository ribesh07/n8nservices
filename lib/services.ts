
import { Search, FileJson, FileSpreadsheet, Upload, Download, Zap, ArrowRight, Clock, CheckCircle2 } from 'lucide-react';

export const services = [
    {
      id: 1,
      name: 'XLSX to JSON',
      description: 'Transform Excel spreadsheets into clean, structured JSON output',
      icon: FileSpreadsheet,
      category: 'conversion',
      status: 'active',
      executions: '856',
      gradient: 'from-green-500 to-emerald-500',
      href: "/services/xlsx-to-json",
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
          href: "/services/csv-to-json",
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