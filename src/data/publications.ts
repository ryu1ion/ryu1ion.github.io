import type { Publication } from './types';

export const publications: Publication[] = [
  {
    slug: 'laco',
    title: 'LACO: Adaptive Latent Communication for Collaborative Driving',
    authors: [
      { name: 'Tianhao Chen', self: true },
      { name: 'Yuheng Wu' },
      { name: 'Dongman Lee' },
    ],
    venue: 'Preprint',
    badge: 'Under Review',
    badgeTone: 'review',
    description:
      'A training-free latent communication framework that adapts pretrained driving agents to collaborative multi-agent environments for efficient sharing, low-latency coordination, and cooperative decision-making.',
    keywords: ['Multi-Agent Systems', 'Collaborative Driving', 'Latent Communication'],
    visual: {
      index: '01',
      kicker: 'Agents / Communication',
      motif: 'network',
      color: 'violet',
    },
  },
  {
    slug: 'bacon',
    title: 'Last But Not Least: Boundary Attention CalibratiON for Multimodal KV Cache Compression',
    authors: [
      { name: 'Tianhao Chen', self: true },
      { name: 'Yuheng Wu' },
      { name: 'Kelu Yao' },
      { name: 'Xiaogang Xu' },
      { name: 'Xiaobin Hu' },
      { name: 'Dongman Lee' },
    ],
    venue: 'EMNLP 2026 Main · 15.4% acceptance rate',
    badge: 'Accepted',
    badgeTone: 'accepted',
    description:
      'A plug-and-play inference optimization method that preserves sparse, decision-critical visual information under constrained memory budgets for faster and more reliable real-time perception.',
    keywords: ['Multimodal Inference', 'KV Cache Compression', 'Efficient AI'],
    visual: {
      index: '02',
      kicker: 'Memory / Perception',
      motif: 'boundary',
      color: 'cyan',
    },
  },
  {
    slug: 'delta-forcing',
    title: 'Delta Forcing: Trust Region Steering for Interactive Autoregressive Video Generation',
    authors: [
      { name: 'Yuheng Wu' },
      { name: 'Xiangbo Gao' },
      { name: 'Tianhao Chen', self: true },
      { name: 'Xinghao Chen' },
      { name: 'Qing Yin' },
      { name: 'Zhengzhong Tu' },
      { name: 'Dongman Lee' },
    ],
    venue: 'Preprint',
    badge: 'Under Review',
    badgeTone: 'review',
    description:
      'A real-time video generation framework that dynamically balances teacher supervision with trajectory consistency for stable, responsive, and temporally coherent long-horizon generation.',
    keywords: ['Video Generation', 'Autoregressive Models', 'Interactive AI'],
    visual: {
      index: '03',
      kicker: 'Video / Interaction',
      motif: 'trajectory',
      color: 'pink',
    },
  },
];
