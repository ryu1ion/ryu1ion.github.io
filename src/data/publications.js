import lacoImage from '../assets/paper_image/laco.png';
import baconImage from '../assets/paper_image/bacon.png';
import deltaImage from '../assets/paper_image/delta-forcing.png';

export const publications = [
  {
    id: 'laco',
    title: 'LACO: Adaptive Latent Communication for Collaborative Driving',
    abstract: (
      'A training-free latent communication framework that adapts pretrained driving agents ' +
      'to collaborative multi-agent environments for efficient sharing, low-latency coordination, ' +
      'and cooperative decision-making.'
    ),
    authors: [
      { name: 'Tianhao Chen', link: 'https://ryu1ion.github.io/' },
      { name: 'Yuheng Wu' },
      { name: 'Dongman Lee', link: 'https://cds.kaist.ac.kr/people/dongmanlee/', role: 'advisor' },
    ],
    venues: [{ name: 'Under Review', type: 'submission' }],
    tags: ['In Submission', 'Multi-Agent Systems', 'Collaborative Driving', 'Latent Communication'],
    image: lacoImage,
    links: {
      arxiv: 'https://arxiv.org/abs/2605.22504',
    },
  },
  {
    id: 'bacon',
    title: 'Last But Not Least: Boundary Attention CalibratiON for Multimodal KV Cache Compression',
    abstract: (
      'A plug-and-play optimization method that preserves sparse, decision-critical visual ' +
      'information under constrained memory budgets for faster and more reliable multimodal inference.'
    ),
    authors: [
      { name: 'Tianhao Chen', link: 'https://ryu1ion.github.io/' },
      { name: 'Yuheng Wu' },
      { name: 'Kelu Yao' },
      { name: 'Xiaogang Xu' },
      { name: 'Xiaobin Hu' },
      { name: 'Dongman Lee', link: 'https://cds.kaist.ac.kr/people/dongmanlee/', role: 'advisor' },
    ],
    venues: [{ name: 'EMNLP 2026 Main · 15.4% Acceptance Rate', type: 'conference' }],
    tags: ['Efficient Multimodal AI', 'KV Cache Compression', 'Visual Attention'],
    image: baconImage,
    links: {
      arxiv: 'https://arxiv.org/abs/2606.14782',
      project: 'https://ryu1ion.github.io/official_BACON/',
      code: 'https://github.com/ryu1ion/official_BACON',
    },
  },
  {
    id: 'delta-forcing',
    title: 'Delta Forcing: Trust Region Steering for Interactive Autoregressive Video Generation',
    abstract: (
      'A real-time video generation framework that balances teacher supervision with trajectory ' +
      'consistency for stable, responsive, and temporally coherent long-horizon generation.'
    ),
    authors: [
      { name: 'Yuheng Wu' },
      { name: 'Xiangbo Gao' },
      { name: 'Tianhao Chen', link: 'https://ryu1ion.github.io/' },
      { name: 'Xinghao Chen' },
      { name: 'Qing Yin' },
      { name: 'Zhengzhong Tu' },
      { name: 'Dongman Lee', link: 'https://cds.kaist.ac.kr/people/dongmanlee/', role: 'advisor' },
    ],
    venues: [{ name: 'Under Review', type: 'submission' }],
    tags: ['In Submission', 'Video Generation', 'Autoregressive Models', 'Interactive AI'],
    image: deltaImage,
    links: {
      arxiv: 'https://arxiv.org/abs/2605.14382',
      project: 'https://delta-forcing-website.vercel.app/',
      code: 'https://github.com/wyhallenwu/DeltaForcing',
    },
  },
];
