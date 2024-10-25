import React from 'react'
import Wine from './Wines'

export default function Content() {
    return (
        <section className='px-5 py-32'>
            <h1 className='text-4xl max-w-[852px] leading-normal mx-auto mb-40'>Discover the art of fine wine with Saami and savor unmatched quality from the world’s most prestigious vineyards.</h1>
            <Wine
                paragraph='Reprehenderit id labore mollit culpa ullamco aliquip pariatur anim ipsum minim veniam proident ipsum. Ut dolor deserunt ea exercitation qui occaecat aute voluptate sint deserunt eu adipisicing deserunt aliquip.'
                flexDirection='text-left'
                buttonDirection='bottom-0 left-10'
            />
            <Wine
                paragraph='Reprehenderit id labore mollit culpa ullamco aliquip pariatur anim ipsum minim veniam proident ipsum.'
                flexDirection='flex-row-reverse text-right'
                buttonDirection='bottom-0 right-10'
            />
            <div></div>
        </section>
    )
}