import React from 'react'

import Cart from './Cart'

export default function Shop() {
    return (
        <div className='flex justify-center w-full flex-wrap'>
            <Cart title='Wine 1' price='25$' description='Aliqua eiusmod aute ipsum laboris non ex amet cupidatat. Fugiat sunt veniam eu enim occaecat ex dolor. Reprehenderit nulla dolor commodo dolore irure nostrud pariatur tempor aliquip Lorem minim dolor laboris. Qui laborum excepteur ut cillum qui excepteur incididunt aliqua irure. Exercitation non velit commodo fugiat. Elit do sint consectetur sint non fugiat irure id dolor.' />
            <Cart title='Wine 2' price='22$' description='Aliqua eiusmod aute ipsum laboris non ex amet cupidatat. Fugiat sunt veniam eu enim occaecat ex dolor. Reprehenderit nulla dolor commodo dolore irure nostrud pariatur tempor aliquip Lorem minim dolor laboris. Qui laborum excepteur ut cillum qui excepteur incididunt aliqua irure. Exercitation non velit commodo fugiat. Elit do sint consectetur sint non fugiat irure id dolor.' />
            <Cart title='Wine 3' price='24$' description='Aliqua eiusmod aute ipsum laboris non ex amet cupidatat. Fugiat sunt veniam eu enim occaecat ex dolor. Reprehenderit nulla dolor commodo dolore irure nostrud pariatur tempor aliquip Lorem minim dolor laboris. Qui laborum excepteur ut cillum qui excepteur incididunt aliqua irure. Exercitation non velit commodo fugiat. Elit do sint consectetur sint non fugiat irure id dolor.' />
        </div>
    )
}