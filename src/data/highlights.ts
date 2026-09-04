import type { Highlight } from './types';

export const highlights: Highlight[] = [
  {
    code: 'VECTOR_01',
    eyebrow: 'Collaborative Intelligence',
    title: 'Agents that know what to share',
    description:
      'LACO studies adaptive latent communication so pretrained driving agents can coordinate without adding a new training pipeline.',
    tags: ['LACO', 'Multi-Agent', 'Driving'],
  },
  {
    code: 'VECTOR_02',
    eyebrow: 'Efficient Perception',
    title: 'Keep the visual evidence that matters',
    description:
      'BACON calibrates boundary attention to retain sparse, decision-critical information when multimodal KV-cache memory is tight.',
    tags: ['BACON', 'KV Cache', 'Multimodal'],
  },
  {
    code: 'VECTOR_03',
    eyebrow: 'Temporal Intelligence',
    title: 'Understand and generate across time',
    description:
      'VPTSL grounds instructions in long-form video, while Delta Forcing targets stable, responsive interactive video generation.',
    tags: ['VPTSL', 'Delta Forcing', 'Video'],
  },
];
