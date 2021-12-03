import React, { useEffect } from 'react'

import { timeline } from 'motion'

const LogoAnimated: React.FC = () => {
  useEffect(() => {
    const logoAnimation = timeline(
      [
        ['.f1', { height: ['100px'] }],
        ['.f2', { width: ['70px'] }],
        ['.f3', { width: ['53px'] }],
        ['.logo-letter-l', { opacity: [0, 1] }, { duration: 0.0001 }],
        ['.logo-letter-l', { transform: [`translateX(-76px)`, `translateX(0)`] }],
        ['.l2', { transform: [`translateY(-26px)`, `translateY(0)`] }],
        ['.l3', { transform: [`translateY(-73px)`, `translateY(0)`], width: ['70px', '60px'] }],
        ['.logo-letter-u', { opacity: [0, 1] }, { duration: 0.0001 }],
        ['.logo-letter-u', { transform: [`translateX(-66px)`, `translateX(0)`] }],
        [
          '.u2',
          {
            height: ['0', '0'],
            transform: [`translateY(12px) translateX(-24px)`, `translateY(12px) translateX(0px)`]
          }
        ],
        [
          '.u3',
          {
            width: ['57px', '84px'],
            height: ['27px', '27px'],
            transform: [`translateY(-1px)`, `translateY(-1px)`],
            borderRadius: ['0 3px 3px 3px', '0 3px 3px 3px']
          },
          { at: '<' }
        ],
        [
          '.u3',
          {
            height: ['27px', '40px'],
            transform: [`translateY(-1px)`, `translateY(0px)`],
            borderRadius: ['3px', '0 0 40px 40px']
          }
        ],
        [
          '.u2',
          {
            height: ['0', '62px'],
            transform: [`translateY(12px)`, `translateY(0)`]
          },
          { at: '<' }
        ],
        ['.u1', { height: ['75px', '62px'], borderRadius: ['3px 3px 0 0', '3px 3px 0 0'] }, { at: '<' }],
        [
          '.u4',
          {
            transform: [`translateY(-2px)`, `translateY(0)`],
            borderRadius: ['0', '15px']
          },
          { at: '<' }
        ],
        ['.logo-letter-x', { opacity: [0, 1] }, { duration: 0.0001 }],
        ['.logo-letter-x', { transform: [`translateX(-90px)`, `translateX(0)`] }],
        [
          '.x1',
          {
            height: ['62px', '100px'],
            transform: [`translateX(-29px)`, `translateX(-29px)`],
            borderRadius: ['3px 3px 0 0', '3px']
          }
        ],
        [
          '.x2',
          {
            height: ['62px', '100px'],
            transform: [`translateX(28px)`, `translateX(28px)`],
            borderRadius: ['3px 3px 0 0', '3px']
          },
          { at: '<' }
        ],
        [
          '.x3',
          {
            height: ['40px', '40px'],
            transform: [`translateY(-50px)`, `translateY(0px)`]
          },
          { at: '<', duration: 0.5 }
        ],
        [
          '.x4',
          {
            transform: [`translateY(-52px)`, `translateY(0px)`]
          },
          { at: '<', duration: 0.5 }
        ],
        [
          '.x1',
          {
            transform: [`translateX(0px) skewX(-31deg)`]
          }
        ],
        [
          '.x2',
          {
            transform: [`translateX(0px) skewX(31deg)`]
          },
          { at: '<' }
        ]
      ],
      { duration: 2 }
    )
  }, [])

  return (
    <div className='relative bg-white w-[318px] h-[102px]'>
      {/* F */}
      <div className='absolute top-0 left-0 w-[70px] h-[100px]'>
        <div className='f1 bg-red-500 absolute bottom-0 left-0 w-[27px] rounded-logo'></div>
        <div className='f2 bg-red-500 absolute top-0 left-0 h-[27px] rounded-logo'></div>
        <div className='f3 bg-red-500 absolute top-[47px] left-0 h-[27px] rounded-logo'></div>
      </div>

      {/* L */}
      <div className='logo-letter-l absolute top-0 left-[76px] w-[60px] h-[100px]'>
        <div className='l1 bg-red-500 absolute top-0 left-0 w-[27px] h-[100px] rounded-logo'></div>
        <div className='l2 bg-red-500 absolute bottom-0 left-0 w-[53px] h-[27px] rounded-logo'></div>
        <div className='l3 bg-red-500 absolute bottom-0 left-0 h-[27px] w-[60px] rounded-logo'></div>
      </div>

      {/* U */}
      <div className='logo-letter-u absolute top-0 left-[142px] w-[84px] h-[101px]'>
        <div className='u1 bg-red-500 absolute top-0 left-0 w-[27px]'></div>
        <div className='u2 bg-red-500 absolute bottom-[39px] right-0 w-[27px] rounded-t-logo'></div>
        <div className='absolute bottom-0 left-0 bg-red-500 u3'></div>
        <div className='u4 z-10 w-[30px] h-[30px] bg-primary absolute bottom-[27px] left-[27px]'></div>
      </div>

      {/* X */}
      <div className='logo-letter-x absolute top-0 left-[232px] w-[85px] h-[101px] overflow-hidden'>
        <div className='x1 bg-red-500 absolute top-0 left-[29px] w-[27px] h-[100px] rounded-logo transform skew-x-[-31deg]'></div>
        <div className='x2 bg-red-500 absolute top-0 right-[29px] w-[27px] h-[100px] rounded-logo transform skew-x-[31deg]'></div>
        <div className='x3 bg-red-500 absolute bottom-[-50px] left-0 w-[84px] h-[40px] rounded-logo rounded-b-full'></div>
        <div className='x4 z-10 rounded-full w-[30px] h-[30px] bg-primary absolute bottom-[-25px] left-[27px]'></div>
      </div>
    </div>
  )
}

export default LogoAnimated
