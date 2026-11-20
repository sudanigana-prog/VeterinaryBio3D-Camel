import { Component, useMemo, type ReactNode } from 'react';
import { useGLTF } from '@react-three/drei';
import type { Group } from 'three';

function LoadedScene({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const instance = useMemo(() => scene.clone(true) as Group, [scene]);
  return <primitive object={instance} />;
}

class ModelLoadBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error) {
    console.error('Camel GLB asset failed to load:', error.message);
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export function CamelAssetModel({ url }: { url: string }) {
  return <ModelLoadBoundary key={url}><LoadedScene url={url} /></ModelLoadBoundary>;
}
