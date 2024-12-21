import { useEffect, useRef } from "react";

interface TransparentImageWithOutlineProps {
  src: string; // Image source
}

const TransparentImageWithOutline: React.FC<TransparentImageWithOutlineProps> = ({ src }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const image = new Image();
    image.src = src;

    image.onload = () => {
      // Resize the canvas to match the image dimensions
      canvas.width = image.width;
      canvas.height = image.height;

      // Draw the image onto the canvas
      context.drawImage(image, 0, 0);

      // Get the image data
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const { data, width, height } = imageData;

      // Set line style for smoother outlines
      context.lineWidth = 8; // Set stroke width for outline
      context.lineJoin = "round"; // Smooth out corners
      context.lineCap = "round"; // Smooth out line ends

      // Begin the path for the outline
      context.beginPath();

      // Detect edges and draw the outline
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const index = (y * width + x) * 4;
          const alpha = data[index + 3]; // Get the alpha value (transparency)

          // Only consider non-transparent pixels for outline detection
          if (alpha > 0) {
            // Check neighboring pixels to see if the current pixel is on an edge
            const isEdge =
              (x === 0 || y === 0 || x === width - 1 || y === height - 1 ||
                data[((y - 1) * width + x) * 4 + 3] === 0 || // Top pixel is transparent
                data[((y + 1) * width + x) * 4 + 3] === 0 || // Bottom pixel is transparent
                data[(y * width + (x - 1)) * 4 + 3] === 0 || // Left pixel is transparent
                data[(y * width + (x + 1)) * 4 + 3] === 0); // Right pixel is transparent

            if (isEdge) {
              // Draw the path around the non-transparent pixels
              context.moveTo(x + 0.5, y + 0.5); // Start point for the path (small offset for smoothness)
              context.lineTo(x + 0.5, y + 0.5); // Line to the same point (helps create smooth lines)
            }
          }
        }
      }

      // Check dark mode and set the stroke color accordingly
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      context.strokeStyle = isDarkMode ? 'white' : 'black';

      // Stroke the path to apply the outline
      context.stroke();
    };
  }, [src]);

  return <canvas ref={canvasRef} className="block w-[200px] hidden sm:flex dark:invert-0" style={{ height: "auto" }} />;
};

export default TransparentImageWithOutline;