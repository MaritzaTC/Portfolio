import { SubTitle2, TextRegular2, TextRegular6 } from '@/components/atoms/Titles';
import React from 'react';


/**
 * Dialog component that displays a modal dialog with a title, description, and link.
 *
 * @param isOpen - Determines whether the dialog is open and visible.
 * @param onClose - Callback function invoked when the dialog is requested to close.
 * @param titleText - The title text displayed at the top of the dialog.
 * @param description - The description text displayed within the dialog.
 * @param link - A string representing a link or additional information to display in the dialog.
 *
 * @returns The dialog modal if `isOpen` is true; otherwise, returns null.
 */
const Dialog = ({ isOpen, onClose, titleText,description, link }: { isOpen: boolean; onClose: () => void; titleText: string; description: string; link:string}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center"onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()} 
        className="bg-white rounded-lg shadow-md w-[90%] sm:w-2/3 md:w-2/5 p-6"
      >
       <SubTitle2 text={titleText}></SubTitle2>
        <TextRegular2 text={description}></TextRegular2>
         <TextRegular6 text={link}></TextRegular6>
        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="py-2 px-4 text-sm  hover:bg-red-400 rounded bg-red-300  transition-colors duration-200"
          >
            Close
          </button>
        
        </div>
      </div>
    </div>
  );
};


export {Dialog };