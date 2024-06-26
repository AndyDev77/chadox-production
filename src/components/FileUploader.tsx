"use client";

import { Button } from "@/components/ui/button";
import { convertFileToUrl } from "@/lib/utils";
import { useDropzone } from "@uploadthing/react/hooks";
import Image from "next/image";
import { Dispatch, SetStateAction, useCallback } from "react";
import { FileWithPath } from "react-dropzone";
import { generateClientDropzoneAccept } from "uploadthing/client";

type FileUploaderProps = {
  onFieldChange: (url: string) => void;
  imageUrl: string;
  setFiles: Dispatch<SetStateAction<File[]>>;
};

export function FileUploader({ imageUrl, onFieldChange, setFiles }: FileUploaderProps) {
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFiles(acceptedFiles);
    onFieldChange(convertFileToUrl(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: generateClientDropzoneAccept(["image/*"]), // Accepter seulement les images
  });

  return (
    <div
      {...getRootProps()}
      className="flex-center bg-dark-3 flex h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50"
    >
      <input {...getInputProps()} className="cursor-pointer" />

      {imageUrl ? (
        <div className="flex h-full w-full flex-1 justify-center ">
          <Image
            src={imageUrl}
            alt="image"
            width={250}
            height={250}
            className="w-full object-cover object-center"
          />
        </div>
      ) : (
        <div className="flex-center flex-col py-5 text-grey-500">
          <Image src="/img/icons/image-up.svg" width={77} height={77} alt="file upload" />
          <h3 className="mb-2 mt-2">Glisser la photo ici</h3>
          <p className="p-medium-12 mb-4">SVG, PNG, JPG</p>
          <Button type="button" className="rounded-full">
            Sélection à partir de l&apos;ordinateur
          </Button>
        </div>
      )}
    </div>
  );
}
