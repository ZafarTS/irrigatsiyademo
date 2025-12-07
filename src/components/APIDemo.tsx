import React, { useState } from 'react';
import { Code, Play, CheckCircle, AlertCircle, Loader } from 'lucide-react';

interface APIResponse {
  status: string;
  data?: any;
  error?: string;
}

export function APIDemo() {
  const [selectedEndpoint, setSelectedEndpoint] = useState('irrigation');
  const [latitude, setLatitude] = useState('41.2995');
  const [longitude, setLongitude] = useState('69.2401');
  const [cropType, setCropType] = useState('cotton');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<APIResponse | null>(null);

  const endpoints = [
    {
      id: 'irrigation',
      name: 'Sug\'orish tavsiyasi',
      method: 'POST',
      path: '/api/v1/irrigation/recommendation',
      description: 'Dala koordinatalari asosida sug\'orish tavsiyalarini olish'
    },
    {
      id: 'classification',
      name: 'Ekin klassifikatsiyasi',
      method: 'POST',
      path: '/api/v1/crop/classify',
      description: 'Sun\'iy yo\'ldosh ma\'lumotlaridan ekin turini aniqlash'
    },
    {
      id: 'health',
      name: 'O\'simlik salomatligi',
      method: 'POST',
      path: '/api/v1/crop/health',
      description: 'Kasallik va stress holatini aniqlash'
    }
  ];

  const mockAPICall = () => {
    setIsLoading(true);
    setResponse(null);

    // Simulate API call
    setTimeout(() => {
      if (selectedEndpoint === 'irrigation') {
        setResponse({
          status: 'success',
          data: {
            field_id: 'UZ-TSH-001',
            coordinates: {
              lat: parseFloat(latitude),
              lng: parseFloat(longitude)
            },
            analysis_date: new Date().toISOString(),
            indices: {
              ndvi: 0.68,
              ndwi: 0.42,
              ndmi: 0.55,
              ndre: 0.71,
              swir: 0.38
            },
            irrigation_status: {
              overall: 'WARNING',
              confidence: 0.87,
              recommendation: '1-2 kun ichida sug\'orish kerak',
              water_needed: '45 mm (450 m³/ha)',
              priority_areas: [
                { zone: 'A', status: 'CRITICAL', area: '2.3 ha' },
                { zone: 'B', status: 'WARNING', area: '5.1 ha' },
                { zone: 'C', status: 'OPTIMAL', area: '3.8 ha' }
              ]
            },
            soil_moisture: {
              average: 0.34,
              threshold: 0.45,
              status: 'below_optimal'
            },
            weather_forecast: {
              precipitation_7d: '2 mm',
              temperature_avg: '28°C',
              evapotranspiration: 'high'
            }
          }
        });
      } else if (selectedEndpoint === 'classification') {
        setResponse({
          status: 'success',
          data: {
            field_id: 'UZ-TSH-001',
            crop_type: {
              predicted: 'Cotton',
              confidence: 0.94,
              alternatives: [
                { crop: 'Wheat', confidence: 0.04 },
                { crop: 'Alfalfa', confidence: 0.02 }
              ]
            },
            growth_stage: {
              stage: 'flowering',
              days_since_planting: 78,
              estimated_harvest: '45 days'
            },
            field_area: {
              total: '11.2 ha',
              crop_coverage: '98.5%'
            }
          }
        });
      } else if (selectedEndpoint === 'health') {
        setResponse({
          status: 'success',
          data: {
            field_id: 'UZ-TSH-001',
            health_status: {
              overall: 'HEALTHY',
              score: 0.82,
              trend: 'stable'
            },
            stress_detection: {
              water_stress: {
                detected: true,
                severity: 'moderate',
                affected_area: '2.3 ha (20.5%)'
              },
              disease_risk: {
                detected: false,
                risk_level: 'low'
              },
              pest_risk: {
                detected: false,
                risk_level: 'low'
              }
            },
            recommendations: [
              'Zona A da sug\'orish zarur',
              'NDVI qiymatini 3 kundan keyin qayta tekshiring',
              'Kasallik belgilari yo\'q, monitoring davom ettiring'
            ],
            historical_comparison: {
              current_ndvi: 0.68,
              last_week_ndvi: 0.71,
              change: '-4.2%',
              status: 'slight_decline'
            }
          }
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  const currentEndpoint = endpoints.find(e => e.id === selectedEndpoint);

  const requestBody = {
    latitude: parseFloat(latitude),
    longitude: parseFloat(longitude),
    crop_type: cropType,
    analysis_type: 'full',
    include_forecast: true
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-6">
        <div className="flex items-center gap-3">
          <Code className="w-8 h-8 text-white" />
          <h2 className="text-3xl text-white">API Demo</h2>
        </div>
      </div>

      <div className="p-8">
        <p className="text-gray-600 text-lg mb-8">
          AI-Irrigatsiya API ni real vaqtda sinab ko&apos;ring. Quyidagi endpointlardan birini tanlang va test qiling.
        </p>

        {/* Endpoint Selection */}
        <div className="mb-8">
          <label className="block text-gray-900 mb-3">API Endpoint</label>
          <div className="grid md:grid-cols-3 gap-4">
            {endpoints.map((endpoint) => (
              <button
                key={endpoint.id}
                onClick={() => setSelectedEndpoint(endpoint.id)}
                className={`p-4 rounded-xl border-2 transition-all text-left ${
                  selectedEndpoint === endpoint.id
                    ? 'border-green-600 bg-green-50'
                    : 'border-gray-200 hover:border-green-300'
                }`}
              >
                <div className={`inline-block px-2 py-1 rounded text-xs mb-2 ${
                  selectedEndpoint === endpoint.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}>
                  {endpoint.method}
                </div>
                <h4 className="text-gray-900 mb-1">{endpoint.name}</h4>
                <p className="text-sm text-gray-600">{endpoint.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Request Parameters */}
        <div className="mb-8">
          <h3 className="text-xl text-gray-900 mb-4">So&apos;rov parametrlari</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2 text-sm">Kenglik (Latitude)</label>
              <input
                type="text"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="41.2995"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 text-sm">Uzunlik (Longitude)</label>
              <input
                type="text"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="69.2401"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 text-sm">Ekin turi</label>
              <select
                value={cropType}
                onChange={(e) => setCropType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                <option value="cotton">Paxta</option>
                <option value="wheat">Bug&apos;doy</option>
                <option value="rice">Sholi</option>
                <option value="corn">Makkajo&apos;xori</option>
              </select>
            </div>
          </div>

          {/* Request Code */}
          <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-400 text-sm">Request Body</span>
              <span className="text-green-400 text-sm">JSON</span>
            </div>
            <pre className="text-green-400 text-sm">
              <code>{JSON.stringify(requestBody, null, 2)}</code>
            </pre>
          </div>
        </div>

        {/* API Endpoint Info */}
        {currentEndpoint && (
          <div className="mb-8 bg-blue-50 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <Code className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-900 mb-1">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm mr-2">
                    {currentEndpoint.method}
                  </span>
                  <code className="text-sm">https://api.ai-irrigation.uz{currentEndpoint.path}</code>
                </p>
                <p className="text-gray-600 text-sm">{currentEndpoint.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Execute Button */}
        <button
          onClick={mockAPICall}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mb-8"
        >
          {isLoading ? (
            <>
              <Loader className="w-6 h-6 animate-spin" />
              <span>API chaqirilmoqda...</span>
            </>
          ) : (
            <>
              <Play className="w-6 h-6" />
              <span>API ni chaqirish</span>
            </>
          )}
        </button>

        {/* Response */}
        {response && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="text-xl text-gray-900">Javob</h3>
              {response.status === 'success' ? (
                <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Success</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>Error</span>
                </div>
              )}
            </div>

            <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto max-h-[500px] overflow-y-auto">
              <pre className="text-green-400 text-sm">
                <code>{JSON.stringify(response, null, 2)}</code>
              </pre>
            </div>

            {/* Explanation */}
            {response.status === 'success' && selectedEndpoint === 'irrigation' && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                <h4 className="text-lg text-gray-900 mb-3">Natijalar tushuntirish:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Overall Status: WARNING</strong> - Dala 1-2 kun ichida sug&apos;orishga muhtoj
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Water needed: 45mm</strong> - Gektariga 450 m³ suv kerak
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Priority areas:</strong> Zona A (Critical) birinchi navbatda sug&apos;orilishi kerak
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Indices:</strong> NDVI 0.68 (yaxshi), NDWI 0.42 (past) - suv tanqisligi belgisi
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}

        {/* API Documentation Link */}
        <div className="mt-8 p-6 bg-gray-50 rounded-xl">
          <h4 className="text-gray-900 mb-3">To&apos;liq API hujjatlari</h4>
          <p className="text-gray-600 mb-4">
            Barcha endpointlar, parametrlar va misollarga ega to&apos;liq dokumentatsiya
          </p>
          <a
            href="https://docs.ai-irrigation.uz/api"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700"
          >
            <Code className="w-5 h-5" />
            <span>API Documentation</span>
          </a>
        </div>
      </div>
    </div>
  );
}
