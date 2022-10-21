import { useState } from "react";
import { useDropzone } from "react-dropzone";
import Upload from "../../assets/icons/UploadMedia.svg";
import DeleteIcon from "../../assets/icons/delete.svg";

export default function DragNDrop() {
  // file gets saved in the usestate but doesn't persist yet.

  const [files, setFiles] = useState([]);
  const onDrop = (acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      )
    );
  };
  const { getRootProps, getInputProps, acceptedFiles, fileRejections } =
    useDropzone({
      // Accepts only 3 files and must be an image png or jpeg
      maxFiles: 3,
      accept: {
        "image/png": [".png", ".jpg", ".jpeg"],
      },
      onDrop,
    });
  return (
    <section className="relative">
      {!files.length > 0 && (
        <div
          {...getRootProps({
            className:
              "flex flex-col justify-center items-center gap-[8px] p-[16px] h-[202px] border border-[#A1A4B6] border-[1.2px] rounded-[8px] w-[100%] text-[14px]",
          })}
        >
          <img src={Upload} alt="upload" />
          <input {...getInputProps()} />
          <p>
            Drag and drop or{" "}
            <span className="text-primary-500 cursor-pointer">Select</span> file
            from computer
          </p>
          <p>Max. 3 Images (in jpeg or png format only)</p>
        </div>
      )}
      {files.length > 0 && (
        <div className="flex flex-grow flex-wrap gap-[5px]">
          {files.map((file) => (
            <div
              className="image-preview m-2 w-[140px] h-40 rounded-[8px] relative"
              key={file.name}
            >
              <img
                src={file.preview}
                alt="thumnail"
                className="w-auto h-full rounded-md"
                onLoad={() => {
                  URL.revokeObjectURL(file.preview);
                }}
              />
              <img
                className="absolute top-[10px] right-[10px] cursor-pointer"
                src={DeleteIcon}
                alt="delete-icon"
              />
            </div>
          ))}
          <div
            {...getRootProps({
              className:
                "image-preview m-2  w-[140px] h-40 bg-neutral-500 rounded-[8px] flex justify-center items-center cursor-pointer",
            })}
          >
            <span className="text-[76px] text-white">+</span>
            <input {...getInputProps()} />
          </div>
        </div>
      )}
    </section>
  );
}
