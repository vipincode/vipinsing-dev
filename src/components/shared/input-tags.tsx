'use client'
import React, { useState } from 'react'
import { TagsInput, TagsInputProps } from 'react-tag-input-component'

interface InputTagsProps {
  placeholder?: string
  name?: string
  initialValue?: string[]
  onChange: (value: string[]) => void
}

const InputTags: React.FC<InputTagsProps> = ({ placeholder = '', name = 'tags', initialValue = [], onChange }) => {
  const [value, setValue] = useState<string[]>(initialValue)

  const handleChange: TagsInputProps['onChange'] = (newValue) => {
    setValue(newValue)
    onChange(newValue)
  }

  return <TagsInput value={value} onChange={handleChange} name={name} placeHolder={placeholder} />
}

export default InputTags
