import { ThreedViewLoader } from '../../../../../ui-component/ThreedViewLoader';

export function Uploading3d({ className }) {
  return (
    <div className={`uploading-3d ${className}`}>
      <ThreedViewLoader />
      <p>Uploading 3d view...</p>
    </div>
  );
}
