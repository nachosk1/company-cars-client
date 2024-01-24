'use client'

import { ShowMoreProps } from "@/types"
import { CustomButton } from ".";

export default function ShowMore({ pageNumber, isNextPage, setLimit }: ShowMoreProps) {
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10
    setLimit(newLimit)
  }

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {
        !isNextPage && (
          <CustomButton
            title='Ver más'
            btnType="button"
            containerStyles="bg-primary-blue rounded-full text-white"
            handleClick={handleNavigation}
          />
        )
      }
    </div>
  )
}
