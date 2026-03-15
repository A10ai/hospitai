import VisionStatement from '@/components/technology/VisionStatement';
import IntegrationDiagram from '@/components/technology/IntegrationDiagram';
import CapabilityAreas from '@/components/technology/CapabilityAreas';
import RDRoadmap from '@/components/technology/RDRoadmap';

export default function Technology() {
  return (
    <>
      <VisionStatement />
      <IntegrationDiagram />
      <CapabilityAreas />
      <RDRoadmap />
    </>
  );
}
