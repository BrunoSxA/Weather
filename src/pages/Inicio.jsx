"use client"

import React, { useState, useEffect } from "react"
import { Home, Building2, MoreHorizontal, Droplets, Wind, Thermometer, Sun, CloudRain } from "lucide-react"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const cn = (...classes) => classes.filter(Boolean).join(" ")

const Button = React.forwardRef(({className, variant = "default", size = "default", ...props}, ref) => (
  <button
    className={cn(
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
      variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90",
      variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
      size === "default" && "h-10 py-2 px-4",
      size === "icon" && "h-10 w-10",
      className
    )}
    ref={ref}
    {...props}
  />
))

Button.displayName = "Button"

const Card = React.forwardRef(({className, ...props}, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />
))

Card.displayName = "Card"

const CardContent = React.forwardRef(({className, ...props}, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props} />
))

CardContent.displayName = "CardContent"

const getWeatherData = () => ({
  temperature: 31,
  feelsLike: 30,
  precipitation: 44,
  humidity: 52,
  windSpeed: 12,
  uvIndex: 6,
  hourlyForecast: Array.from({length: 24}, (_, i) => ({
    hour: `${i}:00`,
    temp: Math.floor(Math.random() * 10) + 25,
    precipitation: Math.floor(Math.random() * 100),
  })),
  weeklyForecast: Array.from({length: 7}, (_, i) => ({
    day: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][i],
    high: Math.floor(Math.random() * 10) + 25,
    low: Math.floor(Math.random() * 10) + 15,
  }))
})

export default function WeatherDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    setWeatherData(getWeatherData())
  }, [])

  if (!weatherData) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="text-6xl font-light text-blue-900 mb-2">
            {currentTime.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </div>
          <div className="text-xl text-blue-700">
            {currentTime.toLocaleDateString("en-US", {
              weekday: "long",
              month: "short",
              day: "numeric",
            })}
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          <Button variant="ghost" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Home
          </Button>
          <Button variant="ghost" className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            Company
          </Button>
        </div>

        <Card className="mb-8 bg-white/80 backdrop-blur">
          <CardContent>
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-semibold text-gray-700">Warsaw | Poland</h2>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-end gap-4 mt-4">
                  <span className="text-6xl font-light text-blue-900">{weatherData.temperature}°C</span>
                  <span className="text-xl text-blue-700 mb-2">Cloudy</span>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <Thermometer className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-600">Feels like: {weatherData.feelsLike}°C</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CloudRain className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-600">Precipitation: {weatherData.precipitation}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-600">Humidity: {weatherData.humidity}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wind className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-600">Wind: {weatherData.windSpeed} km/h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sun className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-600">UV Index: {weatherData.uvIndex}</span>
                  </div>
                </div>
              </div>
              <div className="text-8xl text-blue-600">⛅</div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white/80 backdrop-blur">
            <CardContent>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">24-Hour Forecast</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weatherData.hourlyForecast}>
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="temp" stroke="#3b82f6" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur">
            <CardContent>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">7-Day Forecast</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weatherData.weeklyForecast}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="high" fill="#3b82f6" />
                    <Bar dataKey="low" fill="#93c5fd" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
