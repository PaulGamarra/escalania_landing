import { Box, Card, CardContent, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

type CornerVariant = "dot" | "square" | "bracket";

interface CornerCardProps {
  children: ReactNode;
  variant?: CornerVariant;
  cornerColor?: string;
  cornerSize?: number;
  cornerThickness?: number;
  sx?: SxProps<Theme>;
  contentSx?: SxProps<Theme>;
}

/**
 * CornerCard — Card con decoradores en vértices estilo Basement Studio
 *
 * variant:
 *   "dot"     → cuadrado sólido en cada esquina
 *   "square"  → cuadrado hueco (solo borde)
 *   "bracket" → L-bracket (estilo Basement Studio) ← recomendado
 */
export default function CornerCard({
  children,
  variant = "bracket",
  cornerColor = "#c8ff00",
  cornerSize = 5,
  cornerThickness = 3.5,
  sx,
  contentSx,
}: CornerCardProps) {
  const positions = [
    { top: -1, left: -1, label: "tl" },
    { top: -1, right: -1, label: "tr" },
    { bottom: -1, left: -1, label: "bl" },
    { bottom: -1, right: -1, label: "br" },
  ];

  const getCornerStyle = (label: string): SxProps<Theme> => {
    const base: SxProps<Theme> = {
      position: "absolute",
      width: cornerSize,
      height: cornerSize,
    };

    if (variant === "dot") {
      return { ...base, backgroundColor: cornerColor };
    }

    if (variant === "square") {
      return {
        ...base,
        border: `${cornerThickness}px solid ${cornerColor}`,
        backgroundColor: "transparent",
      };
    }

    // bracket — L-shape per corner
    const isTop = label.startsWith("t");
    const isLeft = label.endsWith("l");

    return {
      ...base,
      backgroundColor: "transparent",
      borderTop: isTop ? `${cornerThickness}px solid ${cornerColor}` : undefined,
      borderBottom: !isTop ? `${cornerThickness}px solid ${cornerColor}` : undefined,
      borderLeft: isLeft ? `${cornerThickness}px solid ${cornerColor}` : undefined,
      borderRight: !isLeft ? `${cornerThickness}px solid ${cornerColor}` : undefined,
    };
  };

  return (
    <Card
      sx={{
        position: "relative",
        backgroundColor: "transparent",
        borderRadius: 0,
        boxShadow: "none",
        border: "1px solid #c8ff00",
        transition: "transform 0.25s ease",
        "&:hover": {
          transform: "translateY(-8px)",
        },
        // Merge caller overrides
        ...sx,
      }}
    >
      {/* Corner decorators */}
      {positions.map(({ label, ...pos }) => (
        <Box
          key={label}
          sx={{
            ...pos,
            ...getCornerStyle(label),
          }}
        />
      ))}

      <CardContent sx={{ position: "relative", zIndex: 1, ...contentSx }}>
        {children}
      </CardContent>
    </Card>
  );
}