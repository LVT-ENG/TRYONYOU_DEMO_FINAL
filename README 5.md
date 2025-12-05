# TRYONYOU_Avatar3D Module

## Overview

The **Avatar3D** module is the first component of the TRYONYOU Intelligence System. It provides an interactive 3D avatar viewer with real-time lighting, camera controls, and outfit selection capabilities.

### Features

- **3D Avatar Viewer**: Interactive 360° view of the avatar with realistic showroom lighting
- **Camera Controls**: Rotate, zoom, and pan using mouse/touch interactions
- **Auto-Rotation**: Smooth continuous rotation with manual override capability
- **Outfit Selection**: Choose from multiple outfit options with instant visual updates
- **Responsive Design**: Adapts to different screen sizes with elegant UI
- **DRS Visual Styling**: Luxury showroom aesthetic with clean lighting and futuristic design

## Module Structure

```
TRYONYOU_Avatar3D.zip
├── src/
│   ├── pages/
│   │   └── Avatar3D.jsx          # Main page component
│   ├── components/
│   │   ├── HoloScene.jsx         # 3D canvas container
│   │   ├── HoloControls.jsx      # Camera and interaction controls
│   │   ├── HoloLighting.jsx      # Lighting system setup
│   │   └── AvatarModel.jsx       # 3D model geometry
│   └── assets/
│       └── avatar/
│           └── outfits.json      # Outfit configuration data
└── README.md
```

## Installation Instructions

### Step 1: Extract the ZIP

```bash
unzip TRYONYOU_Avatar3D.zip
```

### Step 2: Merge with Project

The Deploy Express script will automatically merge the contents using `rsync`:

```bash
rsync -a src/ /path/to/project/src/
```

### Step 3: Install Dependencies

If running locally, ensure all dependencies are installed:

```bash
npm install --legacy-peer-deps
```

The following packages are required (should already be in main project):
- `@react-three/fiber` (v9.x)
- `@react-three/drei` (v9.x)
- `three` (v0.160+)

### Step 4: Verify Integration

Check that the route `/avatar` is accessible and displays the 3D viewer without errors.

## Component Details

### Avatar3D.jsx (Page)

The main page component that orchestrates the entire module:
- Renders the HoloScene 3D viewer
- Manages outfit selection state
- Provides outfit selector UI
- Implements CTA button to navigate to `/wardrobe`

**Props**: None (uses React Router for navigation)

**Route**: `/avatar`

### HoloScene.jsx

Canvas container for the Three.js scene:
- Sets up WebGL context with anti-aliasing
- Manages camera positioning
- Renders 3D platform and avatar
- Applies environment presets

**Props**:
- `selectedOutfit` (object): Current outfit selection with color and metadata

### HoloControls.jsx

Implements OrbitControls for user interaction:
- Enables 360° rotation around avatar
- Supports zoom (2-8 units distance)
- Supports pan for repositioning
- Auto-rotation with manual override
- Smooth damping for natural motion

**Features**:
- `autoRotate`: Continuous gentle rotation
- `enableDamping`: Smooth deceleration
- `enableZoom`: Scroll wheel zoom
- `enablePan`: Right-click/two-finger drag

### HoloLighting.jsx

Professional showroom lighting setup:
- **Key Light**: Main directional light from front-top (intensity 1.2)
- **Fill Light**: Secondary light from back-left (intensity 0.6)
- **Back Light**: Rim light for separation (intensity 0.4)
- **Ambient Light**: Soft overall illumination (intensity 0.5)
- **Point Lights**: Accent lights for showroom effect

### AvatarModel.jsx

Procedural 3D avatar geometry:
- Head (sphere geometry)
- Torso (box geometry with outfit color)
- Arms (cylinder geometry)
- Legs (cylinder geometry)
- Smooth rotation animation
- Shadow casting for depth

**Props**:
- `outfit` (object): Selected outfit with color property

## Outfit Configuration

Outfits are defined in `src/assets/avatar/outfits.json`:

```json
{
  "outfits": [
    {
      "id": 1,
      "name": "Classic Black",
      "color": "#1a1a1a",
      "description": "...",
      "category": "formal",
      "tags": ["elegant", "timeless"]
    }
  ]
}
```

Each outfit includes:
- `id`: Unique identifier
- `name`: Display name
- `color`: Hex color code for the avatar torso
- `description`: Detailed description
- `category`: Outfit category (formal, business, casual)
- `tags`: Search/filter tags

## Integration Notes

### Route Registration

The route `/avatar` must be registered in the main `App.jsx`:

```jsx
import Avatar3D from './pages/Avatar3D';

// In router configuration:
<Route path="/avatar" element={<Avatar3D />} />
```

### Navigation Flow

- **Entry**: User navigates to `/avatar` or clicks from previous page
- **Interaction**: User selects outfit and explores 3D view
- **Exit**: User clicks "Continue to Wardrobe" → navigates to `/wardrobe`

### Styling

The module uses inline styles for component-specific styling. Global styles from `styles.css` are applied automatically.

## Browser Compatibility

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Requires WebGL support for 3D rendering.

## Performance Considerations

- Canvas resolution: 1200x500px (responsive)
- Shadow map resolution: 2048x2048
- Geometry complexity: Minimal (procedural shapes)
- Target FPS: 60 (smooth animation)

## Troubleshooting

### 3D Scene Not Rendering

- Verify WebGL is enabled in browser
- Check browser console for errors
- Ensure Three.js and React Three Fiber are installed

### Outfit Colors Not Updating

- Verify `outfits.json` is in correct path
- Check that outfit object has `color` property
- Inspect React state in DevTools

### Camera Not Responding

- Ensure OrbitControls is properly initialized
- Check that canvas has focus
- Try refreshing the page

## Future Enhancements

- Load custom 3D models (GLTF/GLB format)
- Add animation transitions between outfits
- Implement outfit comparison view
- Add AR preview capability
- Support for custom avatar creation

## Dependencies

| Package | Version | Purpose |
| --- | --- | --- |
| react | ^18.2.0 | UI framework |
| react-router-dom | ^7.9.6 | Routing |
| @react-three/fiber | ^9.x | React Three.js integration |
| @react-three/drei | ^9.x | Useful Three.js utilities |
| three | ^0.160+ | 3D graphics library |

## Support

For issues or questions regarding this module, refer to the main project documentation or contact the development team.

---

**Module Version**: 1.0.0  
**Last Updated**: December 2025  
**Status**: Production Ready
