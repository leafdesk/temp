'use client'

import React from 'react'
import { LogIn, Mail, Github, Facebook, Cloud } from 'lucide-react'

// Custom icons for Korean platforms
const KakaoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path
      d="M12 3C6.477 3 2 6.417 2 10.6c0 2.846 1.899 5.305 4.692 6.629l-.938 3.427a0.5 0.5 0 0 0 .789.5l4.212-2.853C11.186 18.065 11.576 18.1 12 18.1c5.523 0 10-3.417 10-7.6S17.523 3 12 3z"
      fill="#000000"
    />
  </svg>
)

const NaverIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path
      d="M16.273 12.845 7.818 0H0v24h7.727v-12.845L16.182 24H24V0h-7.727z"
      fill="#00C73C"
    />
  </svg>
)

const SocialLoginUI = () => {
  const socialButtons = [
    {
      name: '이메일',
      icon: <Mail />,
      color: 'bg-gray-700',
      hoverColor: 'hover:bg-gray-600',
    },
    {
      name: '카카오톡',
      icon: <KakaoIcon />,
      color: 'bg-yellow-400',
      hoverColor: 'hover:bg-yellow-500',
      textColor: 'text-black',
    },
    {
      name: '네이버',
      icon: <NaverIcon />,
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      textColor: 'text-white',
    },
    {
      name: '페이스북',
      icon: <Facebook />,
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
    },
    {
      name: 'GitHub',
      icon: <Github />,
      color: 'bg-black',
      hoverColor: 'hover:bg-gray-800',
    },
    {
      name: 'Google',
      icon: <Cloud />,
      color: 'bg-white',
      hoverColor: 'hover:bg-gray-100',
      textColor: 'text-black',
      border: 'border border-gray-300',
    },
  ]

  const handleLogin = (platform: any) => {
    // 실제 로그인 로직은 여기에 구현
    console.log(`Logging in with ${platform}`)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          로그인
        </h2>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="space-y-4">
              {socialButtons.map((button) => (
                <button
                  key={button.name}
                  onClick={() => handleLogin(button.name)}
                  className={`
                    w-full flex items-center justify-center 
                    py-3 px-4 border border-transparent 
                    rounded-md shadow-sm text-sm font-medium 
                    ${button.color} 
                    ${button.hoverColor}
                    ${button.textColor || 'text-white'}
                    ${button.border || ''}
                    transition-colors duration-200
                  `}
                >
                  <span className="mr-2">{button.icon}</span>
                  {button.name}로 로그인
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialLoginUI
