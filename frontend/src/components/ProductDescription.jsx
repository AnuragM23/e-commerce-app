import React from 'react'

function ProductDescription() {
  return (
    <div className='mt-20'>
        <div className='flex gap-3 mb-4'>
            <button className='btn_dark_rounded !rounded-none !text-xs  !py-[6px] w-36'>Description</button>
            <button className='btn_dark_outline !rounded-none !text-xs  !py-[6px] w-36'>Care Guide</button>
            <button className='btn_dark_outline !rounded-none !text-xs  !py-[6px] w-36'>Size Guide</button>
        </div>
        <div className='flex flex-col pb-16'>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente non eaque consectetur? Alias, deleniti id incidunt ad unde natus expedita illum hic distinctio? Eveniet tempora eos, reprehenderit a ipsa dicta quod magni, fugit minima rerum nisi. Repellat reiciendis facilis sapiente?</p>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsam vel harum maiores et? Dolorum earum exercitationem eligendi temporibus blanditiis officia neque obcaecati. Quia quasi quam ut minima?</p>
        </div>
    </div>
  )
}

export default ProductDescription