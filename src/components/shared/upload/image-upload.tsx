'use client'
import { Button } from '@/components/ui/button'
import { CldImage, CldUploadWidget } from 'next-cloudinary'

interface CloudinaryResult {
  public_id: string
}

interface ImageUploadProps {
  publicId: string
  setPublicId: React.Dispatch<React.SetStateAction<string>>
}

const ImageUpload: React.FC<ImageUploadProps> = ({ publicId, setPublicId }) => {
  return (
    <div className="flex flex-col gap-6">
      {publicId && <CldImage src={publicId} width={240} height={240} alt="data Image" />}
      <CldUploadWidget
        uploadPreset="tail1wzs"
        options={{
          sources: ['local'],
          multiple: false,
          maxFiles: 5,
        }}
        onSuccess={(result, { widget }) => {
          if (result.event !== 'success') return
          const info = result.info as CloudinaryResult
          setPublicId(info.public_id)
          widget.close()
        }}
      >
        {({ open }) => {
          return <Button onClick={() => open()}>Upload</Button>
        }}
      </CldUploadWidget>
    </div>
  )
}

export default ImageUpload
