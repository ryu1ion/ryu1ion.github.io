import type { NewsEntry } from './types';

// Add new entries at the top. Keep dates and claims aligned with the CV.
export const news: NewsEntry[] = [
  {
    date: '2026',
    title: 'BACON accepted to EMNLP 2026 Main',
    detail:
      '“Last But Not Least: Boundary Attention CalibratiON for Multimodal KV Cache Compression” was accepted to the main conference (15.4% acceptance rate).',
    featured: true,
  },
  {
    date: '2025.09',
    title: 'Started M.S. studies at KAIST',
    detail:
      'Joined the School of Computing to work on multi-agent systems and efficient multimodal inference with Prof. Dongman Lee.',
  },
  {
    date: '2024.10',
    title: 'Top 50 in the iFLYTEK AI Developer Competition',
    detail: 'Received an iFLYTEK AI Developer Competition Award, ranking in the nationwide Top 50.',
  },
];
