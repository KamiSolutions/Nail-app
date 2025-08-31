import { useEffect, useRef, useState } from 'react';
import { Camera, CameraType } from 'expo-camera';

export function useAR() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const cameraRef = useRef<Camera | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  return { hasPermission, cameraRef, CameraType };
}
