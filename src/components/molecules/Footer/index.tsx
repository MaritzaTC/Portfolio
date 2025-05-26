import { TextRegular2, TextRegular6 } from '@/components/atoms/Titles'
import React from 'react'

/**
 * Footer component displaying copyright and university information.
 *
 * @returns {JSX.Element} The footer section containing copyright,
 * university affiliation, and a legal notice.
 *
 * @remarks
 * This component uses custom `TextRegular2` and `TextRegular6` components
 * for text rendering. It is styled with Tailwind CSS classes for layout and appearance.
 */
export default function index() {
    return (
        <footer className='bg-white flex flex-col items-center justify-center w-full h-24 mt-10'>
            <TextRegular2 text='© 2025 Maritza. All rights reserved.'></TextRegular2>
            <div className='flex flex-row items-center justify-center gap-2 '>
                <TextRegular2 text='Web Engineering '></TextRegular2>
                <TextRegular2 text='University of Antioquia (UdeA)'></TextRegular2>
            </div>

            <TextRegular6 text='The reproduction, distribution, modification, or use of this information without the express consent of the owner is strictly prohibited.'></TextRegular6>
        </footer>
    )
}
