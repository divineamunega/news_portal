import { useState } from "react";

const ImageSelect = () => {
  const [fileError, setFileError] = useState("");

  const handleFileChange = (event) => {
    let file = event.target.files[0]; // Get the selected file
    console.log(file);

    const validImageTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
    ];

    if (file && validImageTypes.includes(file.type)) {
      setFileError(""); // Valid file, reset any error
      // Proceed with uploading or previewing the file
    } else {
      setFileError("Please select a valid image file (jpeg, png, gif).");
    }
  };

  return (
    <div className="grid w-1/3 gap-2">
      <label htmlFor="image" className="text-sm font-medium">
        Upload Image
      </label>
      <input
        type="file"
        id="image"
        accept="image/*" // Accept only image files
        onChange={handleFileChange}
        className="w-full rounded border px-4 py-2 text-sm"
        name="newsImage"
      />
      {fileError && <p className="text-red-600">{fileError}</p>}
    </div>
  );
};

export default ImageSelect;
